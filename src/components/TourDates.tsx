import React from 'react';
import { Calendar, MapPin, Clock, Ticket, ShieldAlert, Sparkles, ExternalLink, ArrowRight, Instagram } from 'lucide-react';

interface GigDate {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  venue: string;
  city: string;
  type: 'Público' | 'Privado (Fechado)';
  status: 'Confirmado' | 'Ingressos Abertos' | 'Data Fechada';
}

const GIGS: GigDate[] = [
  {
    id: 'gig-1',
    day: '12',
    month: 'DEZ',
    year: '2026',
    title: 'Festival Storm Rock & Blues Experience',
    venue: 'Palco Arena Boulevard',
    city: 'São Paulo - SP',
    type: 'Público',
    status: 'Ingressos Abertos',
  },
  {
    id: 'gig-2',
    day: '19',
    month: 'DEZ',
    year: '2026',
    title: 'Noite de Gala & Confraternização Corporativa',
    venue: 'Espaço de Eventos Grand Hyatt',
    city: 'Campinas - SP',
    type: 'Privado (Fechado)',
    status: 'Data Fechada',
  },
  {
    id: 'gig-3',
    day: '31',
    month: 'DEZ',
    year: '2026',
    title: 'Réveillon das Estrelas • Show da Virada',
    venue: 'Resort & Beach Lounge',
    city: 'Litoral Norte - SP',
    type: 'Público',
    status: 'Ingressos Abertos',
  },
  {
    id: 'gig-4',
    day: '16',
    month: 'JAN',
    year: '2027',
    title: 'Casamento Exclusivo: Jazz & Rock Session',
    venue: 'Fazenda Vila Rica',
    city: 'Itatiba - SP',
    type: 'Privado (Fechado)',
    status: 'Data Fechada',
  },
  {
    id: 'gig-5',
    day: '06',
    month: 'FEV',
    year: '2027',
    title: 'Storm Pub Rock Sessions ao Vivo',
    venue: 'The Clock Rock Bar',
    city: 'São Paulo - SP',
    type: 'Público',
    status: 'Confirmado',
  },
];

export const TourDates: React.FC = () => {
  return (
    <section id="agenda" className="py-24 relative overflow-hidden bg-storm-900/60 border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-accent uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Na Estrada • Shows & Ações
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              AGENDA DE SHOWS &{' '}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                AÇÕES AO VIVO
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
              Confira onde Matheus Storm e a Stormprojekt estão se apresentando. Datas abertas ao público e calendário de disponibilidade para eventos privados.
            </p>
          </div>

          {/* Quick status pill */}
          <div className="p-4 rounded-2xl glass-panel border border-cyan-400/30 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            <div className="text-xs">
              <div className="font-bold text-white uppercase tracking-wider">Temporada 2026/2027</div>
              <div className="text-cyan-300 font-semibold">Consulte datas livres com antecedência</div>
            </div>
          </div>
        </div>

        {/* Gig List */}
        <div className="space-y-4">
          {GIGS.map((gig) => {
            const isPrivate = gig.type === 'Privado (Fechado)';
            return (
              <div
                key={gig.id}
                className="glass-panel p-5 sm:p-6 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                {/* Date block */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-storm-850 to-storm-950 border border-white/15 flex flex-col items-center justify-center text-center shrink-0 group-hover:border-cyan-400/60 transition-colors">
                    <span className="text-xs uppercase font-accent font-extrabold text-cyan-400 tracking-wider">
                      {gig.month}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black font-display text-white leading-none mt-0.5">
                      {gig.day}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {gig.year}
                    </span>
                  </div>

                  {/* Gig Info */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                          isPrivate
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}
                      >
                        {gig.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {gig.status}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {gig.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {gig.venue}
                      </span>
                      <span>•</span>
                      <span className="text-slate-400">{gig.city}</span>
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                <div className="flex items-center gap-3">
                  {isPrivate ? (
                    <a
                      href="#orcamento"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Quero uma Data Similar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="https://www.instagram.com/stormprojekt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-storm-950 text-xs font-bold uppercase tracking-wider shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Ver Informações do Show</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Booking Open Dates */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-storm-900 to-purple-950/60 border border-cyan-400/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="font-display font-black text-xl sm:text-2xl text-white">
              Sua Data Ainda Não Está na Agenda?
            </h4>
            <p className="text-slate-300 text-sm max-w-xl">
              Entre em contato com nossa equipe para checar a disponibilidade no calendário antes que a data seja bloqueada.
            </p>
          </div>

          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-storm-cyan via-blue-500 to-cyan-400 text-storm-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Consultar Minha Data</span>
          </a>
        </div>

      </div>
    </section>
  );
};
