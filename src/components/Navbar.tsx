import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, Calendar, Music, Sparkles, ChevronRight, Zap, Phone } from 'lucide-react';

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
          ? 'bg-storm-950/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-storm-950/70 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-6">
          {/* Logo & Brand Name (Ênfase Total na Storm Projekt) */}
          <a href="#inicio" className="flex items-center gap-4 group shrink-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-storm-cyan via-purple-500 to-amber-400 group-hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-500/25">
              <img
                src="/images/Logo_Stormprojekt.jpg"
                alt="Logo Storm Projekt"
                className="w-full h-full object-cover rounded-[14px]"
                onError={(e) => {
                  // Fallback in case of image load delay
                  (e.target as HTMLImageElement).src = '/imagens/Logo_Stormprojekt.jpg';
                }}
              />
              <span className="absolute inset-0 rounded-2xl border border-cyan-400/50 pointer-events-none animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl sm:text-[1.7rem] tracking-wider text-white flex items-center gap-2 leading-none">
                STORM <span className="bg-gradient-to-r from-storm-cyan via-cyan-300 to-blue-400 bg-clip-text text-transparent">PROJEKT</span>
                <Zap className="w-5 h-5 text-storm-cyan fill-storm-cyan animate-pulse" />
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400 group-hover:text-amber-400 transition-colors mt-1">
                Rock • Jazz • Blues & Ritmos
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Mais Espaçadas e Centralizadas */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8 gap-6 xl:gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] xl:text-[14.5px] font-semibold text-slate-300 hover:text-storm-cyan tracking-wide transition-colors duration-200 relative group py-1.5 whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-storm-cyan to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* WhatsApp Direct Phone */}
            <a
              href="https://api.whatsapp.com/send?phone=5585991307959&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20shows%20da%20Storm%20Projekt."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300 transition-all shadow-sm"
              title="Contato para Shows: +55 85 99130-7959"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>(85) 99130-7959</span>
            </a>

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
                href="https://api.whatsapp.com/send?phone=5585991307959&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20shows%20de%20Matheus%20Storm%20e%20Stormprojekt."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Shows: +55 85 99130-7959</span>
              </a>

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
