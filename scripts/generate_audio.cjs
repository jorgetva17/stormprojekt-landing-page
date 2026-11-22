const fs = require('fs');
const path = require('path');

const audioDir = path.join(__dirname, '..', 'public', 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function writeWavFile(filename, sampleRate, numChannels, samples) {
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = samples.length * bytesPerSample;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // fmt chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Chunk size
  buffer.writeUInt16LE(1, 20); // Audio format: PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // Bits per sample

  // data chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    // Clamp sample between -1 and 1
    let s = Math.max(-1, Math.min(1, samples[i]));
    let val = Math.floor(s < 0 ? s * 0x8000 : s * 0x7fff);
    buffer.writeInt16LE(val, offset);
    offset += 2;
  }

  const filePath = path.join(audioDir, filename);
  fs.writeFileSync(filePath, buffer);
  console.log(`Generated: ${filePath} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

// Helper synthesis functions
const sampleRate = 44100;

function generateRockTrack() {
  const duration = 12.0; // 12 seconds loop
  const totalSamples = Math.floor(duration * sampleRate);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);
  const bpm = 130;
  const beatDuration = 60 / bpm;

  // Power chord progression: A5, C5, D5, F5
  const chords = [
    { root: 110.0, end: 3.0 },   // A5
    { root: 130.81, end: 6.0 },  // C5
    { root: 146.83, end: 9.0 },  // D5
    { root: 87.31, end: 12.0 }   // F5
  ];

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const beat = t / beatDuration;
    const beatFract = beat % 1.0;
    const beatIndex = Math.floor(beat);

    // 1. Kick & Snare Drums
    let drumSound = 0;
    // Kick on beat 0, 2 (or 1, 3 in 4/4)
    if (beatIndex % 2 === 0 && beatFract < 0.25) {
      const kt = beatFract * beatDuration;
      const kickFreq = 120 * Math.exp(-kt * 22);
      drumSound += Math.sin(2 * Math.PI * kickFreq * kt) * Math.exp(-kt * 14) * 0.7;
    }
    // Snare on beat 1, 3
    if (beatIndex % 2 === 1 && beatFract < 0.3) {
      const st = beatFract * beatDuration;
      const noise = (Math.random() * 2 - 1) * Math.exp(-st * 18);
      const tone = Math.sin(2 * Math.PI * 180 * st) * Math.exp(-st * 25);
      drumSound += (noise * 0.5 + tone * 0.4) * 0.6;
    }
    // Hi-hat every 8th note
    const eighthFract = (beat * 2) % 1.0;
    if (eighthFract < 0.1) {
      const ht = eighthFract * (beatDuration / 2);
      drumSound += (Math.random() * 2 - 1) * Math.exp(-ht * 80) * 0.15;
    }

    // 2. Chords (Distorted electric guitar power chords)
    let chordRoot = 110;
    for (let c of chords) {
      if (t < c.end) {
        chordRoot = c.root;
        break;
      }
    }

    // Power chord tones: Root, 5th, Octave
    const f1 = chordRoot;
    const f2 = chordRoot * 1.5;
    const f3 = chordRoot * 2.0;

    // Guitar pick rhythm (pulsing 8th notes)
    const pickEnv = Math.pow(1 - eighthFract, 1.5);
    let guitarRaw = (
      Math.sin(2 * Math.PI * f1 * t) * 0.4 +
      Math.sin(2 * Math.PI * f2 * t) * 0.3 +
      Math.sin(2 * Math.PI * f3 * t) * 0.25 +
      (Math.sin(4 * Math.PI * f1 * t) * 0.2)
    ) * pickEnv;

    // Soft overdrive distortion
    const guitarDist = Math.tanh(guitarRaw * 3.5) * 0.45;

    // 3. Bass guitar (pumping root notes)
    const bassTone = Math.sin(2 * Math.PI * (chordRoot * 0.5) * t) * 0.35 * (1 - (beatFract * 0.6));

    // 4. Lead guitar lick / solo over the top
    let leadSound = 0;
    const soloNotes = [440, 523.25, 587.33, 659.25, 587.33, 523.25, 440, 392];
    const soloIndex = Math.floor(beat * 2) % soloNotes.length;
    const soloFreq = soloNotes[soloIndex];
    const soloFract = (beat * 2) % 1.0;
    if (t > 3.0) {
      const leadRaw = Math.sin(2 * Math.PI * soloFreq * t) * Math.exp(-soloFract * 4);
      leadSound = Math.tanh(leadRaw * 2.5) * 0.25;
    }

    // Mix stereo
    left[i] = drumSound * 0.6 + guitarDist * 0.55 + bassTone * 0.5 + leadSound * 0.4;
    right[i] = drumSound * 0.6 + guitarDist * 0.45 + bassTone * 0.5 + leadSound * 0.5;
  }

  // Interleave stereo
  const interleaved = new Float32Array(totalSamples * 2);
  for (let i = 0; i < totalSamples; i++) {
    interleaved[i * 2] = left[i];
    interleaved[i * 2 + 1] = right[i];
  }
  writeWavFile('rock-storm.wav', sampleRate, 2, interleaved);
}

function generateJazzTrack() {
  const duration = 12.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);
  const bpm = 88;
  const beatDuration = 60 / bpm;

  // Jazz progression: Dm9 -> G13 -> Cmaj9 -> A7b9
  const chords = [
    { notes: [146.83, 220, 261.63, 329.63, 370], end: 3.0 },   // Dm9
    { notes: [98.0, 196, 246.94, 329.63, 440], end: 6.0 },     // G13
    { notes: [130.81, 196, 246.94, 293.66, 392], end: 9.0 },   // Cmaj9
    { notes: [110.0, 220, 277.18, 311.13, 415.3], end: 12.0 }  // A7b9
  ];

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const beat = t / beatDuration;
    const beatFract = beat % 1.0;
    const beatIndex = Math.floor(beat);

    // 1. Jazz swing ride cymbal (swing triplet pattern)
    let cymbal = 0;
    const swingFract = (beat * 3) % 1.0;
    if (swingFract < 0.15) {
      cymbal = (Math.random() * 2 - 1) * Math.exp(-swingFract * 35) * 0.18;
    }
    // Gentle kick on 1 and 3
    let softKick = 0;
    if (beatIndex % 2 === 0 && beatFract < 0.3) {
      softKick = Math.sin(2 * Math.PI * 65 * beatFract) * Math.exp(-beatFract * 12) * 0.25;
    }

    // 2. Walking acoustic bass
    let chordNotes = chords[0].notes;
    for (let c of chords) {
      if (t < c.end) {
        chordNotes = c.notes;
        break;
      }
    }
    const root = chordNotes[0];
    const walkingFreqs = [root, root * 1.25, root * 1.5, root * 1.75];
    const bassFreq = walkingFreqs[beatIndex % 4];
    const bassTone = Math.sin(2 * Math.PI * (bassFreq * 0.5) * t) * Math.exp(-beatFract * 3.5) * 0.45;

    // 3. Warm Rhodes / hollow-body jazz guitar chords
    let chordSound = 0;
    const chordPulse = Math.sin(beat * Math.PI * 0.5);
    chordNotes.forEach((f, idx) => {
      chordSound += Math.sin(2 * Math.PI * f * t) * 0.08 * (1 + 0.15 * Math.sin(t * 3 + idx));
    });

    // 4. Melodic jazz improvisation note
    const melodyNotes = [392, 440, 493.88, 523.25, 587.33, 659.25];
    const mIdx = Math.floor(beat * 1.5) % melodyNotes.length;
    const mFreq = melodyNotes[mIdx];
    const mEnv = Math.exp(-((beat * 1.5) % 1.0) * 3);
    const melodySound = Math.sin(2 * Math.PI * mFreq * t) * mEnv * 0.18;

    left[i] = (cymbal + softKick) * 0.5 + bassTone * 0.6 + chordSound * 0.55 + melodySound * 0.4;
    right[i] = (cymbal + softKick) * 0.5 + bassTone * 0.6 + chordSound * 0.55 + melodySound * 0.45;
  }

  const interleaved = new Float32Array(totalSamples * 2);
  for (let i = 0; i < totalSamples; i++) {
    interleaved[i * 2] = left[i];
    interleaved[i * 2 + 1] = right[i];
  }
  writeWavFile('jazz-lounge.wav', sampleRate, 2, interleaved);
}

function generateBluesTrack() {
  const duration = 12.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);
  const bpm = 96;
  const beatDuration = 60 / bpm;

  // 12-bar blues in E (E7, A7, B7)
  const bluesProgression = [
    { root: 82.41, end: 4.0 },   // E7
    { root: 110.0, end: 8.0 },   // A7
    { root: 123.47, end: 10.0 }, // B7
    { root: 82.41, end: 12.0 }   // E7
  ];

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const beat = t / beatDuration;
    const beatFract = beat % 1.0;
    const beatIndex = Math.floor(beat);

    // Triplet blues shuffle feel
    let shuffleDrum = 0;
    if (beatIndex % 2 === 0 && beatFract < 0.25) {
      // Thump kick
      shuffleDrum += Math.sin(2 * Math.PI * 90 * Math.exp(-beatFract * 18) * beatFract) * 0.5;
    }
    if (beatIndex % 2 === 1 && beatFract < 0.25) {
      // Blues snare brush
      shuffleDrum += (Math.random() * 2 - 1) * Math.exp(-beatFract * 16) * 0.4;
    }

    let bRoot = bluesProgression[0].root;
    for (let b of bluesProgression) {
      if (t < b.end) {
        bRoot = b.root;
        break;
      }
    }

    // Classic blues shuffle pattern (root + 5th to root + 6th)
    const shuffleStep = Math.floor(beat * 2) % 2 === 0 ? 1.5 : 1.68;
    const f1 = bRoot;
    const f2 = bRoot * shuffleStep;
    const rEnv = Math.exp(-((beat * 2) % 1.0) * 3);
    const rhythmGuitar = (Math.sin(2 * Math.PI * f1 * t) + Math.sin(2 * Math.PI * f2 * t)) * rEnv * 0.35;
    const bluesCrunch = Math.tanh(rhythmGuitar * 2.8) * 0.4;

    // Blues bass
    const bass = Math.sin(2 * Math.PI * (bRoot * 0.5) * t) * rEnv * 0.45;

    // Stevie Ray style blues solo bends
    const bluesLicks = [164.81, 196, 220, 246.94, 293.66, 329.63];
    const lickIndex = Math.floor(beat) % bluesLicks.length;
    const lickFreq = bluesLicks[lickIndex] * (1 + 0.05 * Math.sin(t * 8)); // vibrato
    const soloLick = Math.sin(2 * Math.PI * lickFreq * t) * Math.exp(-beatFract * 3) * 0.3;

    left[i] = shuffleDrum * 0.5 + bluesCrunch * 0.5 + bass * 0.55 + soloLick * 0.4;
    right[i] = shuffleDrum * 0.5 + bluesCrunch * 0.45 + bass * 0.55 + soloLick * 0.45;
  }

  const interleaved = new Float32Array(totalSamples * 2);
  for (let i = 0; i < totalSamples; i++) {
    interleaved[i * 2] = left[i];
    interleaved[i * 2 + 1] = right[i];
  }
  writeWavFile('delta-blues.wav', sampleRate, 2, interleaved);
}

function generateFusionTrack() {
  const duration = 12.0;
  const totalSamples = Math.floor(duration * sampleRate);
  const left = new Float32Array(totalSamples);
  const right = new Float32Array(totalSamples);
  const bpm = 116;
  const beatDuration = 60 / bpm;

  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const beat = t / beatDuration;
    const beatFract = beat % 1.0;
    const beatIndex = Math.floor(beat);

    // Funk groove drums
    let funkBeat = 0;
    // Four on the floor kick
    if (beatFract < 0.2) {
      funkBeat += Math.sin(2 * Math.PI * 130 * Math.exp(-beatFract * 22) * beatFract) * 0.65;
    }
    // Snappy funk snare on 2 & 4
    if (beatIndex % 2 === 1 && beatFract < 0.25) {
      funkBeat += ((Math.random() * 2 - 1) * 0.5 + Math.sin(2 * Math.PI * 220 * beatFract) * 0.4) * 0.6;
    }
    // 16th-note funky hi-hat
    const sixteenth = (beat * 4) % 1.0;
    if (sixteenth < 0.12) {
      funkBeat += (Math.random() * 2 - 1) * Math.exp(-sixteenth * 50) * 0.15;
    }

    // Slap & pop funky bassline (Em7 funk)
    const bassPatterns = [82.41, 164.81, 146.83, 196.0, 82.41, 246.94, 220.0, 164.81];
    const bIdx = Math.floor(beat * 2) % bassPatterns.length;
    const bFreq = bassPatterns[bIdx];
    const bEnv = Math.exp(-((beat * 2) % 1.0) * 5);
    const slapBass = Math.sin(2 * Math.PI * (bFreq * 0.5) * t) * bEnv * 0.55;

    // Funk rhythm guitar skank chords (on upbeat of every beat)
    let guitarSkank = 0;
    const upbeat = (beat + 0.5) % 1.0;
    if (upbeat < 0.2) {
      const gChord = (Math.sin(2 * Math.PI * 330 * t) + Math.sin(2 * Math.PI * 392 * t) + Math.sin(2 * Math.PI * 493 * t)) * Math.exp(-upbeat * 15);
      guitarSkank = gChord * 0.3;
    }

    // Funky brass stab
    let brass = 0;
    if (beatIndex % 4 === 3 && beatFract < 0.4) {
      brass = (Math.sin(2 * Math.PI * 293 * t) + Math.sin(2 * Math.PI * 440 * t) + Math.sin(2 * Math.PI * 587 * t)) * Math.exp(-beatFract * 6) * 0.35;
    }

    left[i] = funkBeat * 0.5 + slapBass * 0.55 + guitarSkank * 0.45 + brass * 0.4;
    right[i] = funkBeat * 0.5 + slapBass * 0.55 + guitarSkank * 0.45 + brass * 0.4;
  }

  const interleaved = new Float32Array(totalSamples * 2);
  for (let i = 0; i < totalSamples; i++) {
    interleaved[i * 2] = left[i];
    interleaved[i * 2 + 1] = right[i];
  }
  writeWavFile('fusion-groove.wav', sampleRate, 2, interleaved);
}

console.log('Generating high-quality demo audio files...');
generateRockTrack();
generateJazzTrack();
generateBluesTrack();
generateFusionTrack();
console.log('All audio demo files generated successfully in public/audio/!');
