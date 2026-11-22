import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Send, ChevronDown, CheckCircle2, User, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FAQItem {
  question: string;
  answer: string;
}

interface UserQuestion {
  id: string;
  author: string;
  category: string;
  question: string;
  answer?: string;
  date: string;
  likes: number;
}

const FAQS: FAQItem[] = [
  {
    question: 'A banda leva equipamento próprio de som e iluminação?',
    answer: 'Sim! Possuímos estrutura técnica completa de alta fidelidade sonora e iluminação cênica programada para atender desde eventos intimistas até palcos de grande porte. Se o espaço do seu evento já possuir som profissional, nos adaptamos ao rider técnico local.',
  },
  {
    question: 'Podemos pedir músicas especiais que não estão no repertório?',
    answer: 'Com certeza! No caso de casamentos, aniversários e eventos corporativos, Matheus Storm e a Stormprojekt preparam com antecedência músicas marcantes para momentos chave (como a valsa, a entrada dos noivos ou a abertura da pista) com arranjos exclusivos.',
  },
  {
    question: 'Quais regiões e cidades a Stormprojekt atende?',
    answer: 'A banda atende toda a região metropolitana, interior, litoral e também realiza viagens para outros estados para festivais, eventos corporativos e casamentos de destino. A logística de transporte e hospedagem é detalhada com total transparência na proposta.',
  },
  {
    question: 'Qual a duração do show e os intervalos?',
    answer: 'Trabalhamos com formatos flexíveis de 1h30, 2h30 ou até 4h de show contínuo ou fracionado com playlist ambiente personalizada durante pequenos intervalos, garantindo que a energia do evento jamais caia.',
  },
  {
    question: 'Como funciona o contrato e as formas de pagamento?',
    answer: 'Trabalhamos com contrato formal de prestação de serviços musicais, com emissão de nota fiscal se necessário. O pagamento pode ser parcelado até a data do evento via Pix, transferência ou cartão.',
  },
];

const INITIAL_MURAL: UserQuestion[] = [
  {
    id: 'q-1',
    author: 'Juliana & Rodrigo (Noivos 2026)',
    category: 'Casamentos',
    question: 'Matheus, vocês fazem versões acústicas de rock clássico para a entrada dos padrinhos?',
    answer: 'Sim, Juliana! É um dos momentos mais emocionantes que fazemos. Criamos arranjos delicados de violão e guitarra semi-acústica para clássicos do Led Zeppelin, Queen, Aerosmith e Beatles. Fica inesquecível!',
    date: 'Ontem',
    likes: 19,
  },
  {
    id: 'q-2',
    author: 'Marcos Vinicius (Produtor de Eventos)',
    category: 'Festivais & Corporativo',
    question: 'Qual o tempo mínimo necessário para a passagem de som da banda no dia do evento?',
    answer: 'Recomendamos 1h a 1h30 antes da abertura dos portões ou da chegada dos primeiros convidados. Isso garante um som cristalino e zero surpresas!',
    date: 'Há 3 dias',
    likes: 12,
  },
  {
    id: 'q-3',
    author: 'Lucas Mendes (Guitarrista & Fã)',
    category: 'Música & Timbre',
    question: 'Qual guitarra e amplificador você mais usa nos solos de blues da Stormprojekt?',
    answer: 'Fala Lucas! Minha principal companheira é uma Stratocaster com captadores quentes conectada a amplificadores valvulados e pedais de overdrive analógicos para ter aquele sustain cremoso e dinâmico. Um abraço!',
    date: 'Há 5 dias',
    likes: 24,
  },
];

export const QAMural: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [muralQuestions, setMuralQuestions] = useState<UserQuestion[]>(INITIAL_MURAL);
  
  // User question form state
  const [userName, setUserName] = useState('');
  const [userCategory, setUserCategory] = useState('Dúvida sobre Shows');
  const [userMessage, setUserMessage] = useState('');
  const [userContact, setUserContact] = useState('');
  const [showQuestionSentSuccess, setShowQuestionSentSuccess] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userMessage) {
      alert('Por favor, preencha seu nome e a sua pergunta/recado.');
      return;
    }

    const newQuestion: UserQuestion = {
      id: 'q-' + Date.now(),
      author: userName,
      category: userCategory,
      question: userMessage,
      answer: 'Obrigado pela sua pergunta! Matheus Storm e a produção responderão muito em breve no seu contato informado ou aqui no mural.',
      date: 'Agora mesmo',
      likes: 1,
    };

    setMuralQuestions([newQuestion, ...muralQuestions]);
    setShowQuestionSentSuccess(true);
    setUserName('');
    setUserMessage('');
    setUserContact('');

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // Confetti fallback
    }

    setTimeout(() => {
      setShowQuestionSentSuccess(false);
    }, 6000);
  };

  const likeQuestion = (id: string) => {
    setMuralQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, likes: q.likes + 1 } : q))
    );
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-storm-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-accent uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            Canal Aberto com os Fãs e Clientes
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            DÚVIDAS FREQUENTES & <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              MURAL DE PERGUNTAS DOS INTERNAUTAS
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Tem alguma curiosidade musical, dúvida técnica ou quer mandar uma mensagem direta para Matheus Storm? Você tem voz aqui!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Perguntas Frequentes (FAQ Oficial)
            </h3>

            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-cyan-400/60 bg-storm-900/90' : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-white text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Send Question Form & Live Mural */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Form Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-accent uppercase text-purple-300 font-bold tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                Faça sua Pergunta para o Matheus Storm
              </div>
              <h4 className="text-xl font-black text-white font-display mb-4">
                Envie sua Dúvida ou Recado
              </h4>

              {showQuestionSentSuccess ? (
                <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-400 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 text-purple-400 mx-auto" />
                  <div className="font-bold text-white text-sm">Pergunta enviada para o mural!</div>
                  <p className="text-xs text-slate-300">
                    Sua mensagem já foi adicionada ao mural abaixo e Matheus Storm logo responderá!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendQuestion} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-xs text-slate-400 block mb-1">Seu Nome *</span>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Beatriz Lima"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full p-2.5 rounded-xl bg-storm-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>

                    <div>
                      <span className="text-xs text-slate-400 block mb-1">Assunto / Categoria</span>
                      <select
                        value={userCategory}
                        onChange={(e) => setUserCategory(e.target.value)}
                        className="w-full p-2.5 rounded-xl bg-storm-950 border border-white/10 text-sm text-slate-200 focus:outline-none focus:border-purple-400"
                      >
                        <option value="Dúvida sobre Shows">Dúvida sobre Shows</option>
                        <option value="Casamentos & Cerimônias">Casamentos & Cerimônias</option>
                        <option value="Curiosidade Musical">Curiosidade Musical / Instrumentos</option>
                        <option value="Sugestão de Música">Sugestão de Música para Repertório</option>
                        <option value="Elogio & Mensagem de Fã">Elogio & Mensagem de Fã</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">WhatsApp ou E-mail (Opcional, para resposta direta)</span>
                    <input
                      type="text"
                      placeholder="Ex: (85) 99130-7959 ou email@exemplo.com"
                      value={userContact}
                      onChange={(e) => setUserContact(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-storm-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Sua Pergunta ou Recado *</span>
                    <textarea
                      required
                      rows={3}
                      placeholder="Escreva sua pergunta para Matheus Storm ou para a banda Stormprojekt..."
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-storm-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 hover:opacity-95 transition-opacity"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Publicar Pergunta no Mural</span>
                  </button>
                </form>
              )}
            </div>

            {/* Live Questions Mural Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-accent flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Mural Recente da Comunidade
                </h4>
                <span className="text-xs text-slate-500">
                  {muralQuestions.length} perguntas registradas
                </span>
              </div>

              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2">
                {muralQuestions.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-purple-400/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold">
                          {item.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{item.author}</div>
                          <span className="text-[10px] text-cyan-400 font-mono">
                            {item.category} • {item.date}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => likeQuestion(item.id)}
                        className="flex items-center gap-1 text-xs text-slate-400 hover:text-pink-400 transition-colors"
                        title="Curtir essa pergunta"
                      >
                        <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500/40" />
                        <span>{item.likes}</span>
                      </button>
                    </div>

                    <div className="text-xs text-slate-200 pl-9">
                      "{item.question}"
                    </div>

                    {item.answer && (
                      <div className="ml-9 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-slate-300">
                        <div className="font-bold text-purple-300 mb-0.5 flex items-center gap-1">
                          ⚡ Resposta de Matheus Storm:
                        </div>
                        <p className="leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
