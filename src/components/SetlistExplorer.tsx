import React, { useState, useMemo } from 'react';
import { Search, Music, Disc3, Check, Plus, Share2, Sparkles, Filter, Copy, CheckCheck } from 'lucide-react';

interface SongItem {
  id: string;
  title: string;
  artist: string;
  genre: 'Rock Internacional' | 'Rock Nacional' | 'Jazz & Bossa' | 'Blues & Soul' | 'Pop & Grooves';
  highlight?: boolean;
}

const SETLIST_DATA: SongItem[] = [
  // Rock Internacional
  { id: '1', title: 'Whole Lotta Love', artist: 'Led Zeppelin', genre: 'Rock Internacional', highlight: true },
  { id: '2', title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock Internacional', highlight: true },
  { id: '3', title: 'Sultans of Swing', artist: 'Dire Straits', genre: 'Rock Internacional', highlight: true },
  { id: '4', title: 'Comfortably Numb', artist: 'Pink Floyd', genre: 'Rock Internacional', highlight: true },
  { id: '5', title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', genre: 'Rock Internacional' },
  { id: '6', title: 'Everlong', artist: 'Foo Fighters', genre: 'Rock Internacional' },
  { id: '7', title: 'Come Together', artist: 'The Beatles', genre: 'Rock Internacional' },
  { id: '8', title: 'Are You Gonna Go My Way', artist: 'Lenny Kravitz', genre: 'Rock Internacional' },
  { id: '9', title: 'Highway to Hell', artist: 'AC/DC', genre: 'Rock Internacional' },
  { id: '10', title: 'Do I Wanna Know?', artist: 'Arctic Monkeys', genre: 'Rock Internacional' },

  // Rock Nacional
  { id: '11', title: 'Proibida Pra Mim', artist: 'Charlie Brown Jr.', genre: 'Rock Nacional', highlight: true },
  { id: '12', title: 'Tempo Perdido', artist: 'Legião Urbana', genre: 'Rock Nacional', highlight: true },
  { id: '13', title: 'Bete Balanço', artist: 'Barão Vermelho', genre: 'Rock Nacional', highlight: true },
  { id: '14', title: 'Primeiros Erros', artist: 'Capital Inicial', genre: 'Rock Nacional' },
  { id: '15', title: 'Admirável Chip Novo', artist: 'Pitty', genre: 'Rock Nacional' },
  { id: '16', title: 'Sonífera Ilha', artist: 'Titãs', genre: 'Rock Nacional' },
  { id: '17', title: 'Óculos', artist: 'Os Paralamas do Sucesso', genre: 'Rock Nacional' },
  { id: '18', title: 'Exagerado', artist: 'Cazuza', genre: 'Rock Nacional', highlight: true },

  // Jazz & Bossa
  { id: '19', title: 'Fly Me to the Moon', artist: 'Frank Sinatra', genre: 'Jazz & Bossa', highlight: true },
  { id: '20', title: 'Autumn Leaves', artist: 'Miles Davis / Cannonball', genre: 'Jazz & Bossa' },
  { id: '21', title: 'Take Five', artist: 'Dave Brubeck', genre: 'Jazz & Bossa', highlight: true },
  { id: '22', title: 'Wave', artist: 'Tom Jobim', genre: 'Jazz & Bossa' },
  { id: '23', title: 'Garota de Ipanema (Jazz Reimagined)', artist: 'Tom Jobim & Vinicius', genre: 'Jazz & Bossa' },
  { id: '24', title: 'Breezin\'', artist: 'George Benson', genre: 'Jazz & Bossa', highlight: true },
  { id: '25', title: 'What a Wonderful World', artist: 'Louis Armstrong', genre: 'Jazz & Bossa' },
  { id: '26', title: 'Don\'t Know Why', artist: 'Norah Jones', genre: 'Jazz & Bossa' },

  // Blues & Soul
  { id: '27', title: 'Pride and Joy', artist: 'Stevie Ray Vaughan', genre: 'Blues & Soul', highlight: true },
  { id: '28', title: 'The Thrill Is Gone', artist: 'B.B. King', genre: 'Blues & Soul', highlight: true },
  { id: '29', title: 'Still Got the Blues', artist: 'Gary Moore', genre: 'Blues & Soul', highlight: true },
  { id: '30', title: 'Little Wing', artist: 'Jimi Hendrix', genre: 'Blues & Soul' },
  { id: '31', title: 'Crossroads', artist: 'Eric Clapton / Cream', genre: 'Blues & Soul' },
  { id: '32', title: 'Ain\'t No Sunshine', artist: 'Bill Withers', genre: 'Blues & Soul' },
  { id: '33', title: 'You Know I\'m No Good', artist: 'Amy Winehouse', genre: 'Blues & Soul', highlight: true },

  // Pop & Grooves
  { id: '34', title: 'Descobridor dos Sete Mares', artist: 'Tim Maia', genre: 'Pop & Grooves', highlight: true },
  { id: '35', title: 'Superstition', artist: 'Stevie Wonder', genre: 'Pop & Grooves', highlight: true },
  { id: '36', title: 'Uptown Funk', artist: 'Bruno Mars / Mark Ronson', genre: 'Pop & Grooves', highlight: true },
  { id: '37', title: 'Get Lucky', artist: 'Daft Punk', genre: 'Pop & Grooves' },
  { id: '38', title: 'Não Quero Dinheiro', artist: 'Tim Maia', genre: 'Pop & Grooves', highlight: true },
  { id: '39', title: 'Billie Jean (Rock Groove Version)', artist: 'Michael Jackson', genre: 'Pop & Grooves' },
  { id: '40', title: 'País Tropical', artist: 'Jorge Ben Jor', genre: 'Pop & Grooves' },
];

export const SetlistExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('Todos');
  const [selectedSongs, setSelectedSongs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const genres = ['Todos', 'Rock Internacional', 'Rock Nacional', 'Jazz & Bossa', 'Blues & Soul', 'Pop & Grooves'];

  const filteredSongs = useMemo(() => {
    return SETLIST_DATA.filter((song) => {
      const matchesGenre = selectedGenre === 'Todos' || song.genre === selectedGenre;
      const matchesSearch =
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [searchTerm, selectedGenre]);

  const toggleSelectSong = (id: string) => {
    setSelectedSongs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const copySetlistToClipboard = () => {
    const songObjects = SETLIST_DATA.filter((s) => selectedSongs.includes(s.id));
    const textList = songObjects.map((s, idx) => `${idx + 1}. ${s.title} - ${s.artist} (${s.genre})`).join('\n');
    const fullText = `⚡ MEU SETLIST ESCOLHIDO PARA O SHOW COM MATHEUS STORM & STORMPROJEKT ⚡\n\n${textList}\n\nTotal de ${songObjects.length} músicas selecionadas.`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="repertorio" className="py-24 relative overflow-hidden bg-storm-950 border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-accent uppercase tracking-widest mb-3">
            <Music className="w-3.5 h-3.5 text-cyan-400" />
            +150 Músicas no Catálogo
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            EXPLORADOR DE <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-300 bg-clip-text text-transparent">REPERTÓRIO & SETLIST</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Navegue pelos maiores clássicos do Rock, Jazz, Blues e Grooves. Monte sua seleção de músicas favoritas para o seu evento e envie direto para a banda!
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar música ou artista (Ex: Led Zeppelin, Tim Maia, Stevie Ray Vaughan)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-storm-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Customizer Selection Pill Counter */}
            {selectedSongs.length > 0 && (
              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  onClick={copySetlistToClipboard}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-storm-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:opacity-95 transition-all"
                >
                  {copied ? <CheckCheck className="w-4 h-4 text-storm-950" /> : <Copy className="w-4 h-4 text-storm-950" />}
                  <span>{copied ? 'Setlist Copiado!' : `Copiar ${selectedSongs.length} Músicas`}</span>
                </button>
              </div>
            )}
          </div>

          {/* Genre Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {genres.map((cat) => {
              const active = selectedGenre === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedGenre(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-cyan-500 text-storm-950 shadow-md shadow-cyan-500/20'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredSongs.map((song) => {
            const isSelected = selectedSongs.includes(song.id);
            return (
              <div
                key={song.id}
                onClick={() => toggleSelectSong(song.id)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-950/70 to-storm-900 border-cyan-400/80 shadow-md shadow-cyan-950/40'
                    : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-cyan-400 text-storm-950' : 'bg-white/5 text-cyan-400 group-hover:bg-cyan-400/20'
                    }`}
                  >
                    <Disc3 className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm line-clamp-1 font-display group-hover:text-cyan-300 transition-colors">
                        {song.title}
                      </h4>
                      {song.highlight && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Hit
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span className="font-medium text-slate-300">{song.artist}</span>
                      <span>•</span>
                      <span className="text-[11px] text-cyan-400/80 font-mono">{song.genre}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 ml-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-cyan-400 border-cyan-400 text-storm-950'
                        : 'border-white/20 text-transparent group-hover:border-cyan-400/60'
                    }`}
                  >
                    <Check className={`w-4 h-4 ${isSelected ? 'text-storm-950' : 'text-cyan-400 opacity-0 group-hover:opacity-100'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSongs.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            Nenhuma música encontrada para "{searchTerm}". Mas Matheus Storm prepara músicas especiais a pedido dos clientes!
          </div>
        )}

        {/* Selected Bottom Bar notification */}
        {selectedSongs.length > 0 && (
          <div className="mt-8 p-4 rounded-2xl glass-panel border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-cyan-400/20 text-cyan-300">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </span>
              <div>
                <div className="text-sm font-bold text-white">
                  {selectedSongs.length} músicas adicionadas à sua lista pessoal!
                </div>
                <div className="text-xs text-slate-400">
                  Clique em "Copiar Lista" e cole no formulário de orçamento ou envie direto no WhatsApp da banda.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copySetlistToClipboard}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-storm-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                {copied ? <CheckCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Lista Copiada!' : 'Copiar Seleção'}</span>
              </button>

              <a
                href="#orcamento"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider text-center"
              >
                Ir para Orçamento
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
