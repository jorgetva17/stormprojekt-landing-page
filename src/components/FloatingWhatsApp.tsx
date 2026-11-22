import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (customMessage?: string) => {
    const msg = customMessage || 'Olá Matheus Storm / Produção Stormprojekt! Gostaria de saber mais sobre a disponibilidade de datas e orçamentos para shows.';
    const encoded = encodeURIComponent(msg);
    window.open(`https://api.whatsapp.com/send?phone=5585991307959&text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Pop-up Quick Prompt */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-storm-900 border border-emerald-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-fadeIn text-slate-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-white uppercase tracking-wider font-accent">
                Produção Matheus Storm
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-2">
            Olá! Quer consultar uma data ou tirar dúvidas diretamente com o produtor de Matheus Storm?
          </p>
          <div className="text-[11px] font-mono text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
            <span>📱 WhatsApp Oficial: +55 85 99130-7959</span>
          </div>

          <button
            onClick={() => openWhatsApp()}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-storm-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-500/20"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Iniciar Conversa no WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 p-4 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-storm-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Abrir WhatsApp da Banda"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-7 h-7 text-storm-950 fill-storm-950" />
      </button>

    </div>
  );
};
