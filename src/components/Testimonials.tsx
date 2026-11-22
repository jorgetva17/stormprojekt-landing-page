import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  event: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carolina & Gabriel Siqueira',
    role: 'Noivos',
    event: 'Casamento no Espaço Villa Real',
    rating: 5,
    text: 'A entrada com o arranjo de guitarra acústica do Matheus Storm fez todo mundo se emocionar. E quando a pista abriu com o rock clássico da Stormprojekt, ninguém conseguiu ficar sentado! O som estava perfeito, sem ensurdecer, pura energia!',
  },
  {
    name: 'Roberto Vasconcellos',
    role: 'Diretor de Marketing',
    event: 'Convenção Anual de Liderança',
    rating: 5,
    text: 'Contratamos a banda para a nossa convenção corporativa e a sofisticação do Jazz Lounge na recepção seguido da explosão de Blues e Pop Rock no final foi o ponto alto de todo o nosso evento. Extremamente profissionais e pontuais.',
  },
  {
    name: 'Fernanda Meirelles',
    role: 'Aniversariante (40 anos)',
    event: 'Festa Privada de Rock & Blues',
    rating: 5,
    text: 'Queria uma festa com alma de rock de verdade, sem clichês. O Matheus Azevedo entendeu exatamente a nossa vibe. A qualidade musical dos caras é impressionante, parecia um show internacional particular!',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-storm-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-accent uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Depoimentos Reais
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            QUEM JÁ VIVEU A{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              TEMPESTADE
            </span>
          </h2>
          <p className="text-slate-300 text-base">
            Veja o que dizem quem confiou o som do seu dia mais especial a Matheus Storm e Stormprojekt.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-400/40 mb-4 group-hover:text-amber-400 transition-colors" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="font-bold text-white text-sm font-display">{t.name}</div>
                <div className="text-xs text-cyan-400 font-semibold">{t.role}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t.event}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
