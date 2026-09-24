import React, { useState } from 'react';
import { Quote, ShieldCheck, CheckCircle2, Play, Building2, Globe2 } from 'lucide-react';

export const ClientEndorsementsSection: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<any | null>(null);

  const endorsements = [
    {
      id: 'end-1',
      quote:
        'Prinle PR transformed how Wall Street and international capital markets perceive our cross-border settlements infrastructure. Their narrative precision contributed directly to our oversubscribed funding round and dominant tier-1 editorial share.',
      author: 'Marcus Sterling',
      role: 'Chief Executive Officer',
      org: 'NovaPay Global Financial Technologies',
      location: 'Nairobi, Kenya',
      category: 'Fintech Unicorn',
      verifiedDate: 'Audited 2026',
      videoDuration: '02:45 min',
    },
    {
      id: 'end-2',
      quote:
        'During a hostile misinformation campaign targeted at our commercial trade ports, Prinle PR established an emergency war room within 30 minutes. Their counter-narrative and direct editor briefings insulated our share price completely.',
      author: 'Amina Al-Hassan',
      role: 'Group Executive Director of Corporate Affairs',
      org: 'Sovereign Ports & Logistics Authority',
      location: 'Nairobi & Dubai Corridor',
      category: 'Sovereign Infrastructure',
      verifiedDate: 'Audited 2026',
      videoDuration: '03:10 min',
    },
    {
      id: 'end-3',
      quote:
        'The cinematic documentary produced by Prinle PR did not just win media accolades; it positioned our clean energy grid as the benchmark for sovereign transition finance across Africa and the EU.',
      author: 'Dr. Jean-Luc Ndayisaba',
      role: 'Chairman of the Board',
      org: 'Equatorial Clean Energy Consortium',
      location: 'Kigali & Brussels',
      category: 'Energy Infrastructure',
      verifiedDate: 'Audited 2025',
      videoDuration: '04:15 min',
    },
  ];

  return (
    <section id="endorsements" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#d89e28] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase block mb-2 font-sans">
            CLIENT ENDORSEMENTS &bull; INSTITUTIONAL TRUST
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
            Verified Endorsements from Blue-Chip &amp; Sovereign Leaders
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Every engagement backed by verified governance, commercial impact metrics, and NDA-compliant validation.
          </p>
        </div>

        {/* Endorsements 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {endorsements.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Header with verified badge and quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[#0d2137] text-[#d89e28] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Institutional</span>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author and Video Proof Trigger */}
              <div className="pt-6 border-t border-slate-100">
                <div className="mb-4">
                  <h4 className="font-extrabold text-base text-[#0d2137]">
                    {item.author}
                  </h4>
                  <p className="text-xs font-semibold text-[#d89e28]">
                    {item.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.org} &bull; <span className="text-slate-400">{item.location}</span>
                  </p>
                </div>

                <button
                  onClick={() => setActiveVideoModal(item)}
                  className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0d2137] text-xs font-bold uppercase tracking-wider py-2.5 px-3 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#d89e28]" />
                  <span>Watch Executive Testimonial ({item.videoDuration})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sovereign Trust Strip */}
        <div className="mt-12 bg-[#0d2137] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#d89e28]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#15304f] text-[#d89e28] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">
                Strict Institutional Non-Disclosure Compliance
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                All client engagements operate under strict Swiss and British corporate confidentiality and UK Data Protection statutes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-300 font-mono shrink-0">
            <span>&bull; ISO/IEC 27001 Protocol</span>
            <span>&bull; Nairobi, Kenya &bull; Upper Hill</span>
          </div>
        </div>

      </div>

      {/* Video Modal Simulation */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0d2137] text-white max-w-xl w-full p-6 border border-[#d89e28] shadow-2xl relative">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 text-xl font-bold"
            >
              ✕
            </button>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#d89e28] block mb-1">
              Executive Video Validation &bull; {activeVideoModal.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-1">
              {activeVideoModal.author} &bull; {activeVideoModal.org}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Recorded in 4K for the Prinle PR Institutional Annual Review.
            </p>

            <div className="aspect-video bg-black flex flex-col items-center justify-center border border-slate-700 relative mb-6">
              <div className="w-16 h-16 rounded-full bg-[#d89e28] text-[#0d2137] flex items-center justify-center mb-3">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
              <span className="text-xs font-mono text-slate-300">
                Playing High-Bitrate Master Feed ({activeVideoModal.videoDuration})
              </span>
            </div>

            <p className="text-xs text-slate-300 italic mb-6">
              &ldquo;{activeVideoModal.quote}&rdquo;
            </p>

            <button
              onClick={() => setActiveVideoModal(null)}
              className="w-full bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3 cursor-pointer"
            >
              Close Testimonial
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
