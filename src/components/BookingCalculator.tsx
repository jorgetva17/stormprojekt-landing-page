import React, { useState } from 'react';
import { Calendar, CheckCircle2, Send, Clock, MapPin, Users, Sparkles, MessageSquare, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingFormState {
  eventType: string;
  lineup: string;
  duration: string;
  soundNeeded: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  eventDate: string;
  eventCity: string;
  guestCount: string;
  specialRequests: string;
}

export const BookingCalculator: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormState>({
    eventType: 'Casamento',
    lineup: 'Banda Standard (4 a 5 Músicos)',
    duration: '2h30 de Show',
    soundNeeded: 'Sim, precisamos de estrutura completa (Som + Luz)',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    eventDate: '',
    eventCity: '',
    guestCount: '150 a 300 pessoas',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');

  const eventTypes = [
    { label: 'Casamento', desc: 'Cerimônia, Coquetel ou Festa' },
    { label: 'Evento Corporativo', desc: 'Premiações & Confraternizações' },
    { label: 'Aniversário / Festa Privada', desc: 'Comemorações Exclusivas' },
    { label: 'Festival / Casa de Show', desc: 'Palco aberto ou Bar' },
  ];

  const lineups = [
    { name: 'Trio Acústico / Jazz', desc: 'Guitarra, Baixo e Bateria suave' },
    { name: 'Banda Standard (4 a 5 Músicos)', desc: 'Matheus Storm, Guitarras, Baixo, Batera e Teclas' },
    { name: 'Big Experience com Metais', desc: 'Banda completa + Sax, Trompete e Iluminação cênica' },
  ];

  const durations = ['1h30 de Show', '2h30 de Show', 'Show Estendido (Até 4h)'];

  const handleInputChange = (field: keyof BookingFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppSend = () => {
    const text = `⚡ *SOLICITAÇÃO DE SHOW - MATHEUS STORM & STORMPROJEKT* ⚡\n\n` +
      `👤 *Nome:* ${formData.clientName || 'Não informado'}\n` +
      `📱 *WhatsApp:* ${formData.clientPhone || 'Não informado'}\n` +
      `📧 *E-mail:* ${formData.clientEmail || 'Não informado'}\n` +
      `🎉 *Tipo de Evento:* ${formData.eventType}\n` +
      `🎸 *Formato Escolhido:* ${formData.lineup}\n` +
      `⏱️ *Duração Desejada:* ${formData.duration}\n` +
      `🔊 *Equipamento de Som/Luz:* ${formData.soundNeeded}\n` +
      `📅 *Data Prevista:* ${formData.eventDate || 'A definir'}\n` +
      `📍 *Local/Cidade:* ${formData.eventCity || 'A definir'}\n` +
      `👥 *Estimativa de Público:* ${formData.guestCount}\n` +
      (formData.specialRequests ? `📝 *Observações/Pedidos:* ${formData.specialRequests}\n` : '') +
      `\nEnviado através da Landing Page Oficial Matheus Storm (@stormprojekt).`;

    const encoded = encodeURIComponent(text);
    // Open WhatsApp URL directly with official production phone +55 85 99130-7959
    window.open(`https://api.whatsapp.com/send?phone=5585991307959&text=${encoded}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.clientPhone) {
      alert('Por favor, preencha pelo menos seu Nome e WhatsApp de contato.');
      return;
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#8b5cf6', '#fbbf24', '#ffffff'],
      });
    } catch {
      // Confetti fallback
    }

    const randomProtocol = 'STORM-' + Math.floor(100000 + Math.random() * 900000);
    setProtocolNumber(randomProtocol);
    setIsSubmitted(true);
  };

  return (
    <section id="orcamento" className="py-24 relative overflow-hidden bg-storm-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-accent uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            Agendamento & Orçamento
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            RESERVE A DATA DO SEU EVENTO COM{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-300 bg-clip-text text-transparent">
              MATHEUS STORM
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Personalize os detalhes abaixo para receber uma proposta exclusiva da produção da Stormprojekt em instantes.
          </p>
        </div>

        {isSubmitted ? (
          /* Confirmation Success Screen */
          <div className="max-w-2xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-400/50 text-center space-y-6 shadow-2xl animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center border border-cyan-400/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
              Protocolo de Solicitação: {protocolNumber}
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Solicitação Enviada com Sucesso!
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Muito obrigado, <strong className="text-white">{formData.clientName}</strong>! Os detalhes para o seu evento ({formData.eventType}) com <strong className="text-cyan-300">{formData.lineup}</strong> foram recebidos pela equipe de produção da <strong className="text-white">Stormprojekt</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-left text-xs space-y-2 text-slate-300">
              <div>📅 <strong className="text-white">Data:</strong> {formData.eventDate || 'A definir'}</div>
              <div>📍 <strong className="text-white">Cidade:</strong> {formData.eventCity || 'A definir'}</div>
              <div>⏱️ <strong className="text-white">Duração:</strong> {formData.duration}</div>
              <div>📱 <strong className="text-white">WhatsApp de Retorno:</strong> {formData.clientPhone}</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppSend}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-storm-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Confirmar via WhatsApp Direto</span>
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-semibold transition-colors"
              >
                Nova Simulação
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Calculator Form */
          <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-10">
              
              {/* Step 1: Tipo de Evento */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-cyan-300 font-accent mb-4">
                  1. Qual é o tipo do seu evento?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {eventTypes.map((item) => {
                    const isSelected = formData.eventType === item.label;
                    return (
                      <button
                        type="button"
                        key={item.label}
                        onClick={() => handleInputChange('eventType', item.label)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                            : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-bold text-sm">{item.label}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Formato da Banda */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-cyan-300 font-accent mb-4">
                  2. Qual formação musical você deseja?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {lineups.map((item) => {
                    const isSelected = formData.lineup === item.name;
                    return (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() => handleInputChange('lineup', item.name)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-gradient-to-br from-cyan-950/60 to-storm-900 border-cyan-400 text-white shadow-md'
                            : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-bold text-sm text-white">{item.name}</div>
                        <div className="text-xs text-slate-400 mt-1">{item.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Duração e Estrutura */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-accent mb-3">
                    3. Tempo de Apresentação
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {durations.map((dur) => (
                      <button
                        type="button"
                        key={dur}
                        onClick={() => handleInputChange('duration', dur)}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                          formData.duration === dur
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                            : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {dur}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 font-accent mb-3">
                    4. Som e Iluminação
                  </label>
                  <select
                    value={formData.soundNeeded}
                    onChange={(e) => handleInputChange('soundNeeded', e.target.value)}
                    className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Sim, precisamos de estrutura completa (Som + Luz)">
                      Sim, precisamos que a banda traga Som e Iluminação completos
                    </option>
                    <option value="O local já possui sonorização e luz profissional">
                      O local do evento já possui rider técnico e som próprio
                    </option>
                    <option value="Ainda estamos definindo com a casa / buffet">
                      Ainda estamos definindo com o buffet / espaço
                    </option>
                  </select>
                </div>
              </div>

              {/* Step 4: Dados do Evento e Contato */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <label className="block text-sm font-bold uppercase tracking-wider text-cyan-300 font-accent mb-2">
                  5. Detalhes de Agendamento & Contato
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Seu Nome / Empresa *</span>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.clientName}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">WhatsApp de Contato *</span>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (85) 99130-7959"
                      value={formData.clientPhone}
                      onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                      className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">E-mail</span>
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.clientEmail}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Data Prevista do Evento</span>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Cidade / Estado</span>
                    <input
                      type="text"
                      placeholder="Ex: São Paulo - SP"
                      value={formData.eventCity}
                      onChange={(e) => handleInputChange('eventCity', e.target.value)}
                      className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Estimativa de Convidados</span>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange('guestCount', e.target.value)}
                      className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Até 80 pessoas (Intimista)">Até 80 pessoas (Intimista)</option>
                      <option value="80 a 150 pessoas">80 a 150 pessoas</option>
                      <option value="150 a 300 pessoas">150 a 300 pessoas</option>
                      <option value="Mais de 300 pessoas (Grande Porte)">Mais de 300 pessoas (Grande Porte)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">Músicas Especiais ou Mensagem Adicional</span>
                  <textarea
                    rows={2}
                    placeholder="Conte-nos se você quer uma música especial na entrada, estilo preferido, horário desejado ou referências..."
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    className="w-full p-3 rounded-xl bg-storm-900 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Bottom Submit Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Proposta sem compromisso • Resposta ágil pela produção</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-sm font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Enviar direto no WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-storm-cyan via-blue-500 to-cyan-400 text-storm-950 font-display font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Solicitar Orçamento Oficial</span>
                  </button>
                </div>
              </div>

            </div>
          </form>
        )}

      </div>
    </section>
  );
};
