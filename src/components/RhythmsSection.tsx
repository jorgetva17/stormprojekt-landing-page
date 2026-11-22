import React, { useState } from 'react';
import { Guitar, Music4, Flame, Sparkles, Disc, Check, ArrowRight } from 'lucide-react';

interface GenreDetail {
  id: string;
  name: string;
  badge: string;
  gradient: string;
  icon: string;
  description: string;
  artistsInfluences: string[];
  idealFor: string[];
}

const GENRES: GenreDetail[] = [
  {
    id: 'rock',
    name: 'Rock Clássico & Contemporâneo',
    badge: 'Energia Pura',
    gradient: 'from-cyan-500/20 via-blue-600/20 to-transparent border-cyan-500/40',
    icon: '🎸',
    description: 'Do peso nostálgico dos anos 70 e 80 às guitarras pulsantes dos anos 90 e 2000. Uma pegada vigorosa que tira todo mundo da cadeira e transforma o palco em arena.',
    artistsInfluences: ['Led Zeppelin', 'Queen', 'Foo Fighters', 'The Rolling Stones', 'Barão Vermelho', 'Arctic Monkeys', 'Pink Floyd'],
    idealFor: ['Pista de Casamento', 'Festivais', 'Festas de Aniversário', 'Casas Noturnas & Bares'],
  },
  {
    id: 'jazz',
    name: 'Jazz Lounge & Bossa / Soul',
    badge: 'Sofisticação & Elegância',
    gradient: 'from-amber-500/20 via-yellow-600/20 to-transparent border-amber-500/40',
    icon: '🎷',
    description: 'Harmonias complexas, improvisações fluidas e melodias suaves. Perfeito para momentos onde a música é protagonista do bom gosto sem sobrepor as conversas.',
    artistsInfluences: ['Miles Davis', 'George Benson', 'Frank Sinatra', 'Tom Jobim', 'Jamie Cullum', 'John Coltrane'],
    idealFor: ['Coquetéis de Boas-Vindas', 'Jantares Corporativos de Gala', 'Recepção de Noivos', 'Vernissages'],
  },
  {
    id: 'blues',
    name: 'Electric Blues & Chicago Shuffle',
    badge: 'Alma & Expressividade',
    gradient: 'from-purple-500/20 via-pink-600/20 to-transparent border-purple-500/40',
    icon: '⚡',
    description: 'Bends emotivos, dinâmicas que vão do sussurro ao ápice explosivo e grooves contagiantes que tocam a alma de quem ama a boa música ao vivo.',
    artistsInfluences: ['Stevie Ray Vaughan', 'B.B. King', 'Gary Moore', 'Eric Clapton', 'Buddy Guy', 'Jimi Hendrix'],
    idealFor: ['Encontros de Colecionadores & Motoclubes', 'Festivais de Blues & Jazz', 'Eventos Culturais'],
  },
  {
    id: 'fusion',
    name: 'Multi-Ritmos, Funk & Pop Grooves',
    badge: 'Pista Fervendo',
    gradient: 'from-emerald-500/20 via-teal-600/20 to-transparent border-emerald-500/40',
    icon: '🥁',
    description: 'O balanço do funk anos 70, o groove do pop moderno e o swing brasileiro. Linhas de baixo marcantes e bateria que convida todos para dançar.',
    artistsInfluences: ['Tim Maia', 'Stevie Wonder', 'Michael Jackson', 'Bruno Mars', 'Jorge Ben Jor', 'Daft Punk'],
    idealFor: ['Festas de Formatura', 'Confraternizações de Fim de Ano', 'After-Parties'],
  },
];

export const RhythmsSection: React.FC = () => {
  const [activeGenre, setActiveGenre] = useState<string>('rock');

  const selectedGenre = GENRES.find((g) => g.id === activeGenre) || GENRES[0];

  return (
    <section id="ritmos" className="py-24 relative overflow-hidden bg-storm-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-accent uppercase tracking-widest mb-3">
            <Music4 className="w-3.5 h-3.5 text-amber-400" />
            Versatilidade Sem Limites
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            RITMOS & <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">FORMATOS DE SHOW</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A Stormprojekt não toca apenas músicas: criamos a atmosfera sonora sob medida para cada etapa do seu evento.
          </p>
        </div>

        {/* Genre Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {GENRES.map((g) => {
            const isSelected = g.id === activeGenre;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGenre(g.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-b from-storm-800 to-storm-950 border-cyan-400/80 shadow-xl shadow-cyan-950/40 translate-y-[-2px]'
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-2xl sm:text-3xl mb-2">{g.icon}</div>
                <div className="text-xs uppercase font-accent font-bold tracking-wider text-slate-400 mb-1 group-hover:text-cyan-300 transition-colors">
                  {g.badge}
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-display">
                  {g.name.split('&')[0]}
                </div>
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-amber-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Genre In-depth Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Estilo Selecionado
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                {selectedGenre.name}
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {selectedGenre.description}
              </p>

              <div>
                <h4 className="text-xs font-accent uppercase text-slate-400 tracking-wider mb-3">
                  Influências & Artistas Homenageados:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedGenre.artistsInfluences.map((artist, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-white flex items-center gap-1.5"
                    >
                      <Disc className="w-3 h-3 text-cyan-400" />
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 font-accent flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                Ideal Para Este Momento:
              </h4>
              <ul className="space-y-2.5">
                {selectedGenre.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="p-1 rounded-md bg-cyan-500/20 text-cyan-400">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3">
                <a
                  href="#orcamento"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Incluir esse estilo no meu evento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Lineup Formats Cards */}
        <div className="text-center mb-8">
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
            Formatos de Apresentação Disponíveis
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Escolha a formação ideal de acordo com o tamanho do seu espaço e a energia desejada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Format 1 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit mb-4">
                <Guitar className="w-6 h-6" />
              </div>
              <span className="text-xs font-accent uppercase tracking-wider text-cyan-400 font-bold">
                Formato Intimista
              </span>
              <h4 className="text-xl font-bold text-white font-display mt-1 mb-3">
                Storm Trio Acústico / Jazz Lounge
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Guitarra acústica/semiacústica, contrabaixo acústico/elétrico e bateria suave/percussão. Perfeito para cerimônias de casamento e coquetéis requintados.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Volume acústico controlado
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Espaço reduzido necessário
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Jazz, Bossa, Blues e Rock acústico
                </li>
              </ul>
            </div>
            <a
              href="#orcamento"
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs font-bold text-center block transition-colors"
            >
              Consultar Formato Trio
            </a>
          </div>

          {/* Format 2 (Featured) */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/50 shadow-xl shadow-cyan-950/40 relative flex flex-col justify-between group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-storm-950 font-bold text-xs uppercase tracking-wider">
              Mais Contratado
            </div>
            <div>
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 w-fit mb-4 mt-2">
                <Flame className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-xs font-accent uppercase tracking-wider text-cyan-400 font-bold">
                Formato Padrão Show
              </span>
              <h4 className="text-xl font-bold text-white font-display mt-1 mb-3">
                Stormprojekt Band Standard (4 a 5 Músicos)
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Guitarra solo (Matheus Storm), guitarra base/vocais, contrabaixo, bateria completa e teclado/sintetizadores. A experiência definitiva para levantar a pista.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Riffs explosivos e solos ao vivo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Repertório dinâmico com clímax
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" /> Interação total com convidados
                </li>
              </ul>
            </div>
            <a
              href="#orcamento"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-storm-950 text-xs font-bold text-center block shadow-md hover:opacity-95 transition-opacity"
            >
              Consultar Formato Standard
            </a>
          </div>

          {/* Format 3 */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-accent uppercase tracking-wider text-amber-400 font-bold">
                Mega Produção
              </span>
              <h4 className="text-xl font-bold text-white font-display mt-1 mb-3">
                Storm Big Experience (com Metais)
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A banda completa com naipe de metais (saxofone, trompete, trombone) e iluminação cênica programada. O impacto visual e sonoro de um grande festival.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Naipe de metais ao vivo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Arranjos com punch de big band
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Ideal para grandes palcos e eventos
                </li>
              </ul>
            </div>
            <a
              href="#orcamento"
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs font-bold text-center block transition-colors"
            >
              Consultar Big Experience
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
