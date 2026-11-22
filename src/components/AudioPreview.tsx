import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc3, Radio, Sparkles, Sliders, ExternalLink, Instagram } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  genre: 'Rock' | 'Jazz' | 'Blues' | 'Fusion';
  tempo: number;
  duration: string;
  description: string;
  highlights: string[];
  color: string;
  audioUrl: string;
}

const TRACKS: Track[] = [
  {
    id: 'rock-storm',
    title: 'Thunder Ignition (Rock Experience)',
    genre: 'Rock',
    tempo: 130,
    duration: '00:12',
    description: 'Riffs marcantes de guitarra, bateria explosiva e vocais enérgicos que eletrizam qualquer festival ou pista de evento.',
    highlights: ['Solo Virtuoso', 'Pegada Clássica & Moderna', 'Clímax Contagiante'],
    color: 'from-cyan-500 to-blue-600',
    audioUrl: '/audio/rock-storm.wav',
  },
  {
    id: 'jazz-lounge',
    title: 'Midnight Velvet (Jazz & Soul Mood)',
    genre: 'Jazz',
    tempo: 88,
    duration: '00:12',
    description: 'Ambiente sofisticado e intimista. Acordes ricos na semi-acústica e walking bass, criando o clima perfeito para coquetéis e jantares de gala.',
    highlights: ['Harmonias Nobres', 'Sax & Guitar Dialogue', 'Elegância Pura'],
    color: 'from-amber-400 to-yellow-600',
    audioUrl: '/audio/jazz-lounge.wav',
  },
  {
    id: 'delta-blues',
    title: 'Delta Storm (Electric Blues Shuffle)',
    genre: 'Blues',
    tempo: 96,
    duration: '00:12',
    description: 'A verdadeira alma do blues do Mississippi com a eletricidade de Matheus Storm: bends viscerais e groove compassado.',
    highlights: ['Bends Viscerais', 'Shuffle Arrastado', 'Improviso Autêntico'],
    color: 'from-purple-500 to-pink-600',
    audioUrl: '/audio/delta-blues.wav',
  },
  {
    id: 'fusion-groove',
    title: 'Funk Riot & Brasilidades (Groove Fusion)',
    genre: 'Fusion',
    tempo: 116,
    duration: '00:12',
    description: 'Mistura irresistível de funk anos 70, samba-rock e pop com slap bass e metais dançantes que contagiam o público.',
    highlights: ['Slap Bass Envolvente', 'Metais Quentes', 'Pista em Chamas'],
    color: 'from-emerald-400 to-teal-600',
    audioUrl: '/audio/fusion-groove.wav',
  },
];

export const AudioPreview: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('00:00');
  const [audioError, setAudioError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = TRACKS[currentTrackIndex];

  // Sync mute with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = isMuted ? 0 : 0.9;
    }
  }, [isMuted]);

  // Handle Play / Pause directly from user interaction
  const togglePlay = () => {
    setAudioError(null);
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Audio playback error:', err);
          // If browser blocked or media couldn't start, try reload and play
          if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                setAudioError('Clique no botão para autorizar o áudio no seu navegador.');
              });
          }
        });
    }
  };

  // Change Track
  const selectTrack = (index: number) => {
    setAudioError(null);
    setCurrentTrackIndex(index);
    setProgress(0);
    setCurrentTimeFormatted('00:00');

    if (audioRef.current) {
      audioRef.current.src = TRACKS[index].audioUrl;
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Playback on change:', err);
          setIsPlaying(false);
        });
    }
  };

  // Time update listener
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 12;
    const pct = (current / duration) * 100;
    setProgress(pct);

    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTimeFormatted(
      `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    );
  };

  const handleEnded = () => {
    // Loop current track or advance
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.warn);
    }
  };

  return (
    <section id="player" className="py-24 relative overflow-hidden bg-storm-950/80 border-y border-white/5">
      {/* Native HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={() => setAudioError('Não foi possível carregar o arquivo de áudio.')}
      />

      {/* Background radial accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-accent uppercase tracking-widest mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            Experiência Sonora
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            O SOM DA <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">TEMPESTADE</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Sinta a dinâmica de Matheus Storm e a Stormprojekt. Clique no play abaixo para ouvir amostras reais dos ritmos que vão incendiar ou sofisticar o seu evento.
          </p>
        </div>

        {/* Interactive Audio Console Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Top Status & Equalizer visualization */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${currentTrack.color} flex items-center justify-center shadow-lg transition-transform duration-500 ${isPlaying ? 'scale-105 rotate-3' : ''}`}>
                  <Disc3 className={`w-8 h-8 text-storm-950 ${isPlaying ? 'animate-spin-slow' : ''}`} />
                </div>
                {isPlaying && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                )}
              </div>
              <div>
                <span className="text-xs uppercase font-accent font-semibold tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Gênero: {currentTrack.genre}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {currentTrack.title}
                </h3>
              </div>
            </div>

            {/* Audio Equalizer visual simulation */}
            <div className="flex items-end gap-1.5 h-10 px-4 py-2 rounded-xl bg-black/40 border border-white/5">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-150 ${
                    isPlaying
                      ? 'bg-gradient-to-t from-cyan-500 to-amber-400'
                      : 'bg-slate-700 h-2'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.abs(Math.sin(i * 0.9 + progress * 0.5)) * 80 + 20}%` : '6px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Description & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-slate-300 text-base leading-relaxed">
                {currentTrack.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentTrack.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {h}
                  </span>
                ))}
              </div>
              {audioError && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
                  {audioError}
                </div>
              )}
            </div>

            {/* Control Pod */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-5 mb-4">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-storm-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
                  aria-label={isPlaying ? 'Pausar áudio' : 'Tocar áudio'}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-storm-950" />
                  ) : (
                    <Play className="w-7 h-7 fill-storm-950 ml-1" />
                  )}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 transition-colors"
                  aria-label={isMuted ? 'Desmutar' : 'Mutar'}
                  title={isMuted ? 'Desmutar som' : 'Mutar som'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5 text-cyan-400" />}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>{currentTimeFormatted}</span>
                  <span>{currentTrack.duration}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 transition-all duration-150 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Track Selector Tabs */}
          <div className="pt-6 border-t border-white/10">
            <div className="text-xs font-accent uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              Selecione o Estilo de Repertório para Ouvir:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TRACKS.map((t, idx) => {
                const isActive = idx === currentTrackIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => selectTrack(idx)}
                    className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      isActive
                        ? 'bg-gradient-to-br from-cyan-950/60 to-storm-900 border-cyan-400/80 shadow-lg shadow-cyan-900/30'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {t.genre}
                      </span>
                      {isActive && isPlaying ? (
                        <div className="flex items-end gap-1 h-3">
                          <span className="w-0.5 h-3 bg-cyan-400 animate-pulse" />
                          <span className="w-0.5 h-2 bg-cyan-400 animate-pulse delay-75" />
                          <span className="w-0.5 h-3.5 bg-cyan-400 animate-pulse delay-150" />
                        </div>
                      ) : (
                        <Play className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                    <span className="font-semibold text-sm text-white line-clamp-1">
                      {t.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Instagram Notice for more live audio */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>
              ⚡ Gravação de demonstração em estúdio • Quer ouvir Matheus Storm ao vivo nos palcos?
            </span>
            <a
              href="https://www.instagram.com/stormprojekt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-semibold"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Ver vídeos ao vivo no Instagram @stormprojekt</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
