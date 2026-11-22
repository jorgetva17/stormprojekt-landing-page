import React from 'react';
import { Play, Calendar, Zap, Sparkles, Volume2, ShieldCheck, Instagram, ArrowDown, Award, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/30 backdrop-blur-md mb-8 hover:border-cyan-400/60 transition-colors animate-float">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-xs uppercase font-accent font-semibold tracking-widest text-cyan-300">
            Agenda 2026/2027 Aberta • Shows & Eventos Exclusivos
          </span>
          <span className="text-white/20">|</span>
          <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
            <Instagram className="w-3.5 h-3.5 text-pink-400" /> @stormprojekt
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          A FORÇA DO <span className="bg-gradient-to-r from-storm-cyan via-blue-400 to-cyan-300 bg-clip-text text-transparent text-glow-cyan">ROCK</span>, 
          <br className="hidden sm:inline" /> A ALMA DO{' '}
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent text-glow-gold">JAZZ & BLUES</span>.
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Liderada pelo músico e guitarrista virtuoso <strong className="text-white font-semibold">Matheus Azevedo (Matheus Storm)</strong>, a <strong className="text-cyan-300 font-semibold">Stormprojekt</strong> entrega uma explosão sonora incomparável: do peso visceral do rock clássico e moderno à elegância refinada do jazz, blues e ritmos envolventes.
        </p>

        {/* Key Style Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-cyan-300 flex items-center gap-1.5">
            🎸 Rock Clássico & Grunge
          </span>
          <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-amber-300 flex items-center gap-1.5">
            🎷 Jazz Lounge & Sophisticated Soul
          </span>
          <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-purple-300 flex items-center gap-1.5">
            ⚡ Blues Elétrico & Improvisos
          </span>
          <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-emerald-300 flex items-center gap-1.5">
            🥁 Grooves Dançantes & Fusion
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a
            href="#orcamento"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-storm-cyan via-blue-500 to-cyan-400 text-storm-950 font-display font-extrabold text-base tracking-wide shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Calendar className="w-5 h-5 text-storm-950" />
            <span>Contratar Show / Orçamento</span>
          </a>

          <a
            href="#player"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <Play className="w-4 h-4 text-cyan-400 fill-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Ouvir Repertório</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-cyan-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-black text-white flex items-center gap-1">
              100%
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-accent font-semibold tracking-wider">
              Ao Vivo & Sem Playback
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-amber-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-black text-amber-400 flex items-center gap-1">
              +150
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-accent font-semibold tracking-wider">
              Clássicos no Repertório
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-purple-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-black text-purple-400 flex items-center gap-1">
              Multi
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-accent font-semibold tracking-wider">
              Formatos de Show (Trio à Big Band)
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border border-white/5 hover:border-cyan-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-display font-black text-cyan-400 flex items-center gap-1">
              Top Tier
              <Award className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-accent font-semibold tracking-wider">
              Som & Luz de Alto Padrão
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#sobre"
            className="text-slate-500 hover:text-cyan-400 transition-colors p-2 rounded-full animate-bounce"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
