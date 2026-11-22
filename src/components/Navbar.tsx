import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, Calendar, Music, Sparkles, ChevronRight, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Ritmos', href: '#ritmos' },
    { label: 'Ouvir Som', href: '#player' },
    { label: 'Repertório', href: '#repertorio' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Mídia & Reels', href: '#midia' },
    { label: 'Orçamento', href: '#orcamento' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-storm-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#inicio" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-storm-cyan via-purple-500 to-amber-400 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/Logo_Stormprojekt.jpg"
                alt="Logo Stormprojekt Matheus Storm"
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  // Fallback in case of image load delay
                  (e.target as HTMLImageElement).src = '/imagens/Logo_Stormprojekt.jpg';
                }}
              />
              <span className="absolute inset-0 rounded-xl border border-cyan-400/40 pointer-events-none animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                MATHEUS STORM
                <Zap className="w-4 h-4 text-storm-cyan fill-storm-cyan" />
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-storm-cyan/90 group-hover:text-amber-400 transition-colors">
                @stormprojekt • Banda & Shows
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-storm-cyan transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-storm-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/stormprojekt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 text-slate-200 hover:text-white transition-all duration-300 shadow-sm"
              title="Acesse o Instagram oficial @stormprojekt"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@stormprojekt</span>
            </a>

            {/* CTA Agendar */}
            <a
              href="#orcamento"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-br from-storm-cyan via-blue-500 to-purple-600 group-hover:from-storm-cyan group-hover:to-amber-400 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-200 bg-storm-950/70 rounded-[10px] group-hover:bg-transparent flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-storm-cyan group-hover:text-white" />
                <span>Contratar Show</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-storm-cyan focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-storm-900/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5 hover:text-storm-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/stormprojekt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white/5 border border-pink-500/30 text-white"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram Oficial @stormprojekt</span>
              </a>

              <a
                href="#orcamento"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-storm-cyan to-blue-600 text-storm-950 font-display shadow-lg shadow-cyan-500/25"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Orçamento & Agendamento</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
