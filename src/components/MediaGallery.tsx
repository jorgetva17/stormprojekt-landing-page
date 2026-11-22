import React, { useState } from 'react';
import { Instagram, Play, Eye, ExternalLink, Heart, MessageCircle, Sparkles, X, Share2 } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'video' | 'photo';
  title: string;
  category: string;
  caption: string;
  likes: string;
  comments: string;
  tag: string;
  imageBg: string;
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'media-1',
    type: 'video',
    title: 'Solo de Guitarra Eletrizante',
    category: 'Show ao Vivo',
    caption: 'Matheus Storm entregando tudo no palco! A energia do rock e o sentimento do blues em cada nota. @stormprojekt',
    likes: '1.420',
    comments: '87',
    tag: '#MatheusStorm #GuitarSolo #RockVibes',
    imageBg: 'from-blue-900 via-indigo-950 to-slate-950',
  },
  {
    id: 'media-2',
    type: 'video',
    title: 'Casamento dos Sonhos: Jazz & Soul',
    category: 'Casamentos',
    caption: 'Aquele momento mágico em que os convidados são acolhidos por harmonias sofisticadas de jazz e blues suave. @stormprojekt',
    likes: '980',
    comments: '64',
    tag: '#CasamentoInesquecivel #JazzLounge',
    imageBg: 'from-amber-950 via-stone-900 to-black',
  },
  {
    id: 'media-3',
    type: 'photo',
    title: 'Backstage & Passagem de Som',
    category: 'Bastidores',
    caption: 'Alinhando cada detalhe acústico e timbres valvulados antes do show começar. O som precisa ser perfeito.',
    likes: '754',
    comments: '42',
    tag: '#Stormprojekt #BackstagePass #AudioPro',
    imageBg: 'from-purple-950 via-slate-900 to-black',
  },
  {
    id: 'media-4',
    type: 'video',
    title: 'Pista em Chamas com Grooves 70s',
    category: 'Pista de Dança',
    caption: 'Quando a banda engata o funk groove e o pop rock nacional, não tem quem fique parado! @stormprojekt',
    likes: '1.890',
    comments: '112',
    tag: '#PistaFervendo #GrooveAoVivo #MusicaBoa',
    imageBg: 'from-emerald-950 via-teal-900 to-black',
  },
  {
    id: 'media-5',
    type: 'photo',
    title: 'A Identidade Visual Stormprojekt',
    category: 'Identidade & Arte',
    caption: 'A tempestade que começou na paixão pela música agora percorre palcos e corações. Siga @stormprojekt!',
    likes: '830',
    comments: '51',
    tag: '#Stormprojekt #RockAndRoll #Arte',
    imageBg: 'from-cyan-950 via-slate-900 to-black',
  },
  {
    id: 'media-6',
    type: 'video',
    title: 'Jam Session de Blues na Madrugada',
    category: 'Blues Session',
    caption: 'A espontaneidade do improviso puro. É essa verdade que levamos para cada show com Matheus Storm.',
    likes: '1.150',
    comments: '79',
    tag: '#BluesSession #LiveJam #MatheusAzevedo',
    imageBg: 'from-rose-950 via-purple-950 to-black',
  },
];

export const MediaGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'Todos' | 'Vídeos' | 'Fotos'>('Todos');
  const [activeModalItem, setActiveModalItem] = useState<MediaItem | null>(null);

  const filteredItems = MEDIA_ITEMS.filter((item) => {
    if (selectedFilter === 'Vídeos') return item.type === 'video';
    if (selectedFilter === 'Fotos') return item.type === 'photo';
    return true;
  });

  return (
    <section id="midia" className="py-24 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-accent uppercase tracking-widest mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              Direto do Feed & Reels
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              MÍDIA & AÇÕES DA BANDA{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                @STORMPROJEKT
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
              Confira vídeos de performances ao vivo, bastidores, fotos exclusivas e a rotina de Matheus Storm nos palcos.
            </p>
          </div>

          {/* Instagram Follow Badge Card */}
          <a
            href="https://www.instagram.com/stormprojekt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3.5 rounded-2xl glass-panel border border-pink-500/40 hover:border-pink-400 transition-all shadow-lg hover:scale-105 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-pink-400 tracking-wider">
                Siga no Instagram
              </div>
              <div className="text-base font-extrabold text-white flex items-center gap-1">
                @stormprojekt
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-8">
          {(['Todos', 'Vídeos', 'Fotos'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedFilter === tab
                  ? 'bg-cyan-500 text-storm-950 shadow-md shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* Media Card Preview */}
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${item.imageBg} p-6 flex flex-col justify-between overflow-hidden`}>
                
                {/* Visual texture overlay with logo watermark */}
                <div className="absolute inset-0 opacity-15 flex items-center justify-center pointer-events-none">
                  <img
                    src="/images/Logo_Stormprojekt.jpg"
                    alt=""
                    className="w-48 h-48 object-cover rounded-full filter grayscale"
                  />
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-black/50 text-white group-hover:scale-110 transition-transform">
                    {item.type === 'video' ? (
                      <Play className="w-4 h-4 fill-white text-white" />
                    ) : (
                      <Eye className="w-4 h-4 text-cyan-300" />
                    )}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white font-display line-clamp-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Social Bar */}
              <div className="p-4 bg-storm-950/90 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 hover:text-pink-400 transition-colors">
                    <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {item.comments}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/90">
                  @stormprojekt
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Banner CTA for Instagram */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-purple-950/70 via-storm-900 to-cyan-950/70 border border-pink-500/30 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Conteúdo Diário & Novidades
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              Veja Muito Mais Vídeos e Fotos no Nosso Instagram
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Acompanhe os ensaios, novas músicas adicionadas ao repertório, histórias de shows e o dia a dia de Matheus Storm e a Stormprojekt.
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/stormprojekt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all"
              >
                <Instagram className="w-5 h-5" />
                <span>Seguir @stormprojekt no Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Item Details Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-storm-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-cyan-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`p-8 bg-gradient-to-br ${activeModalItem.imageBg} relative overflow-hidden`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-cyan-300">
                  {activeModalItem.category}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {activeModalItem.type === 'video' ? 'Vídeo / Reel' : 'Foto'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                {activeModalItem.title}
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">
                {activeModalItem.caption}
              </p>
              <div className="text-xs font-mono text-cyan-300">
                {activeModalItem.tag}
              </div>
            </div>

            <div className="p-6 bg-storm-950 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/stormprojekt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold shadow-md hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                <span>Assistir / Ver no Instagram Oficial</span>
              </a>
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
              >
                Fechar Visualização
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
