import React from 'react';
import { ShieldCheck, Target, Award, Globe2, Quote } from 'lucide-react';

export const AboutSection: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* About Main Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            <span className="text-[#d89e28] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2">
              ABOUT PRINLE PR SOLUTIONS LTD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
              Shaping The Conversations That Define Market Leaders.
            </h2>
            
            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded on the belief that public relations is fundamentally an engine of commercial trust, Prinle PR Solutions Ltd bridges visionary enterprise ambition with high-impact editorial storytelling.
            </p>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our team consists of veteran business journalists, former national newsroom editors, and senior corporate crisis directors stationed across key financial hubs. We don't issue hollow press releases; we craft compelling, agenda-setting narratives that top editors actively seek out.
            </p>

            {/* Core Values / Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-100">
              <div>
                <span className="text-3xl font-black text-[#0d2137] block">14+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                  Years of Excellence
                </span>
              </div>
              <div>
                <span className="text-3xl font-black text-[#d89e28] block">1,200+</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                  Tier-1 Features Placed
                </span>
              </div>
              <div>
                <span className="text-3xl font-black text-[#0d2137] block">Nairobi, Kenya</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                  Upper Hill &bull; Westlands &bull; East Africa
                </span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenConsultation}
                className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider px-7 py-3 rounded-none shadow-xs transition-colors cursor-pointer"
              >
                SCHEDULE EXECUTIVE BRIEFING
              </button>
            </div>
          </div>

          {/* Right Card / Architecture Highlight */}
          <div className="lg:col-span-5">
            <div className="bg-[#0d2137] text-white rounded-none p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#d89e28]/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[#d89e28] text-xs font-bold uppercase tracking-widest block mb-3">
                The Prinle Advantage
              </span>
              <h3 className="text-xl font-bold mb-6">
                Our Four Narrative Pillars
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Precision Targeting</strong>
                    <span className="text-slate-300">
                      Bypassing spam wires to pitch directly to beat reporters and section editors.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Executive Stature</strong>
                    <span className="text-slate-300">
                      Positioning leadership as the definitive subject-matter authority in their vertical.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Global Syndicate Reach</strong>
                    <span className="text-slate-300">
                      Synchronized cross-border releases across North America, Europe, and Asia-Pacific.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-[#15304f] flex items-center justify-center shrink-0 text-[#d89e28]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-sm">Reputation Insulation</strong>
                    <span className="text-slate-300">
                      Proactive scenario planning that protects enterprise balance sheets.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Client Testimonial Adjacency */}
        <div className="mt-16 bg-slate-50 border border-slate-200/80 rounded-none p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-[#d89e28]/15 text-[#d89e28] rounded-none flex items-center justify-center shrink-0">
            <Quote className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#0d2137] text-base sm:text-lg font-semibold italic leading-relaxed">
              "Prinle PR transformed how Wall Street and international tech journals perceive our platform. Their narrative precision contributed directly to our oversubscribed Series B and category dominance."
            </p>
            <div className="mt-3 text-xs text-slate-500 font-medium">
              <strong className="text-[#0d2137] font-bold">Marcus Sterling</strong> &middot; Chief Executive Officer, NovaPay International
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
