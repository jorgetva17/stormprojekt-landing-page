import React from 'react';
import { ShieldCheck, Flame, HeartHandshake, Mic2, Music, CheckCircle2, Award, Zap, Instagram } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-700/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase Side (Logo & Stage Aura) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-storm-cyan via-purple-600 to-amber-400 rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

              {/* Logo Card Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 p-2 shadow-2xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-storm-900 group">
                  <img
                    src="/images/Logo_Stormprojekt.jpg"
                    alt="Banda Stormprojekt Matheus Storm"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/imagens/Logo_Stormprojekt.jpg';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-storm-950 via-transparent to-transparent opacity-80" />

                  {/* Bottom Float Tag inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase font-accent font-bold tracking-wider text-cyan-400">
                          Identidade Oficial
                        </span>
                        <h4 className="text-base font-bold text-white font-display">
                          Stormprojekt & Matheus Storm
                        </h4>
                      </div>
                      <a
                        href="https://www.instagram.com/stormprojekt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-pink-500/20 hover:bg-pink-500/40 text-pink-300 border border-pink-500/30 transition-colors"
                        title="Ver no Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl glass-panel border border-amber-400/30 text-amber-300 text-xs font-bold font-accent shadow-xl flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Eletricidade no Palco</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-bold font-accent shadow-xl flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Rock • Jazz • Blues</span>
              </div>

            </div>
          </div>

          {/* Text & Story Side */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-accent uppercase tracking-widest">
              <Mic2 className="w-3.5 h-3.5 text-cyan-400" />
              Trajetória & Essência
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              A Mente Por Trás da Tempestade:{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-300 bg-clip-text text-transparent">
                Matheus Azevedo
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Com o nome artístico <strong className="text-white">Matheus Storm</strong>, o músico, guitarrista e arranjador Matheus Azevedo idealizou a <strong className="text-cyan-300">Stormprojekt</strong> com uma missão clara: criar uma experiência musical vibrante, que foge das fórmulas prontas e conecta a fúria visceral do Rock com a sutileza harmônica do Jazz e a alma emotiva do Blues.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Seja em um festival com público vibrando a cada solo, em uma cerimônia de casamento emocionante ou em um evento corporativo que exige requinte sonoro absoluto, o Stormprojekt se adapta com maestria, mantendo sempre a autenticidade e o mais alto nível técnico.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Music className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Repertório Sob Medida</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Personalizamos a trilha sonora de acordo com o público e o cronograma do evento, do coquetel à pista lotada.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Engenharia Sonora Pro</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Instrumentos de ponta, amplificação premium e mixagem balanceada para garantir volume confortável e alta fidelidade.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Pontualidade & Compromisso</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Passagem de som antecipada, equipe técnica organizada e alinhamento minucioso com os noivos e cerimonialistas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">Contrato & Segurança</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tranquilidade jurídica total com contrato detalhado, nota fiscal e suporte contínuo até o apagar das luzes.
                </p>
              </div>

            </div>

            {/* Quick Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#orcamento"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-storm-cyan to-blue-600 text-storm-950 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <span>Conversar com a Produção</span>
              </a>
              <a
                href="https://www.instagram.com/stormprojekt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-semibold transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Acompanhar no Instagram @stormprojekt</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
