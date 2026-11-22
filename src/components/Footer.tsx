import React from 'react';
import { Instagram, Zap, Heart, Calendar, ArrowUp, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-storm-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-amber-400">
                <img
                  src="/images/Logo_Stormprojekt.jpg"
                  alt="Logo Stormprojekt"
                  className="w-full h-full object-cover rounded-[10px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/imagens/Logo_Stormprojekt.jpg';
                  }}
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight flex items-center gap-1.5">
                  STORM <span className="text-cyan-400">PROJEKT</span>
                  <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                </span>
                <span className="text-xs uppercase font-accent font-semibold tracking-wider text-cyan-400">
                  @stormprojekt • Banda de Rock, Jazz & Blues
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Música ao vivo de alta voltagem liderada por Matheus Azevedo. Performances autênticas que unem o peso do rock, o balanço do groove e a elegância atemporal do jazz e blues.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/stormprojekt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-pink-500/30 hover:bg-pink-500/20 text-slate-200 hover:text-white transition-all text-xs font-semibold"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@stormprojekt Oficial</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-accent">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-cyan-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre Matheus Storm</a>
              </li>
              <li>
                <a href="#ritmos" className="hover:text-cyan-400 transition-colors">Ritmos & Formatos</a>
              </li>
              <li>
                <a href="#player" className="hover:text-cyan-400 transition-colors">Ouvir o Som</a>
              </li>
              <li>
                <a href="#midia" className="hover:text-cyan-400 transition-colors">Mídia & Fotos no Instagram</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-cyan-400 transition-colors">Simular Orçamento</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">Perguntas dos Internautas</a>
              </li>
            </ul>
          </div>

          {/* Contact & Booking Specs */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-accent">
              Contratações & Produção
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Disponibilidade para casamentos, formaturas, festivais, eventos corporativos e casas noturnas em todo o Brasil.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 text-xs">
              <a
                href="https://api.whatsapp.com/send?phone=5585991307959&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20shows%20de%20Matheus%20Storm%20e%20Stormprojekt."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+55 85 99130-7959</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Agenda 2026/2027 com datas abertas</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Contrato Formal & Suporte de Produção</span>
              </div>
            </div>
            <div>
              <a
                href="#orcamento"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-storm-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-cyan-500/20"
              >
                <span>Solicitar Proposta Agora</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Jorge Torres Consultoria. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Desenvolvido com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para Matheus Azevedo
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
