import React, { useState } from 'react';
import { Mic, Video, Newspaper, Play, Pause, ExternalLink, ArrowUpRight, Volume2, Calendar, Radio } from 'lucide-react';

export const MultimediaNodeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'podcasts' | 'broadcasts' | 'releases'>('podcasts');
  const [playingPodcastId, setPlayingPodcastId] = useState<string | null>(null);

  const podcasts = [
    {
      id: 'pod-1',
      episode: 'EPISODE 48',
      title: 'The Sovereign Narrative: How Nation Brands Attract Global FDI',
      guest: 'Amb. Dr. Evans Mwangi, Trade & Investment Envoy',
      duration: '38:12 min',
      date: 'Sept 22, 2026',
      summary:
        'Unpacking the geopolitical messaging strategies required when pitching sovereign infrastructure bonds to institutional European capital markets.',
    },
    {
      id: 'pod-2',
      episode: 'EPISODE 47',
      title: '45-Minute War Room: Anatomy of a Corporate Hostile Takeover Defense',
      guest: 'Helena Vance, Senior Crisis Counsel at Prinle PR',
      duration: '42:50 min',
      date: 'Sept 14, 2026',
      summary:
        'Step-by-step containment protocols during high-stakes corporate proxy battles, proxy advisory firm disclosures, and regulatory disclosures.',
    },
    {
      id: 'pod-3',
      episode: 'EPISODE 46',
      title: 'De-commoditizing AI: Getting Tier-1 Coverage Without Buzzwords',
      guest: 'Tariq Al-Mansoor, Tech Editor at Global Venture Dispatch',
      duration: '31:05 min',
      date: 'Sept 04, 2026',
      summary:
        'What top business and technology editors in Nairobi and regional financial desks actually look for when evaluating enterprises claiming category creation.',
    },
  ];

  const broadcasts = [
    {
      id: 'yt-1',
      title: 'Prinle PR Annual Media Sentiment Index: Key Findings Briefing',
      channel: 'Prinle Corporate Broadcasts',
      duration: '18:45',
      date: 'Sept 2026',
      views: '124,000 Views',
      summary: 'Executive presentation on journalist migration, AI content detection in newsrooms, and the collapse of blanket press releases.',
    },
    {
      id: 'yt-2',
      title: 'Nairobi Corporate Corridor: The 2026 Capital Inflow Documentary',
      channel: 'Pan-African Business Channel',
      duration: '24:10',
      date: 'Aug 2026',
      views: '280,000 Views',
      summary: 'In-depth investigative feature tracing private equity deployments across renewable energy and fintech in East & Central Africa.',
    },
    {
      id: 'yt-3',
      title: 'Crisis Simulation: Live Broadcast Media Defense Drill (Excerpt)',
      channel: 'Prinle Academy Archive',
      duration: '12:30',
      date: 'July 2026',
      views: '92,000 Views',
      summary: 'Behind-the-scenes recording of our sandbox simulation training C-suite executives to handle antagonistic national press conferences.',
    },
  ];

  const releases = [
    {
      id: 'pr-1',
      tag: 'FINANCIAL PR',
      title: 'Prinle PR Solutions Ltd Expands Strategic Desk to Upper Hill Financial District, Nairobi',
      date: 'Sept 23, 2026',
      wire: 'Syndicated via Bloomberg Terminal & Reuters',
      summary: 'Strengthening enterprise crisis advisory and sovereign communications capabilities across key African trade and investment corridors.',
    },
    {
      id: 'pr-2',
      tag: 'RESEARCH REPORT',
      title: 'Whitepaper Release: Algorithmic Perception & Corporate Reputation in GenAI Search Engines',
      date: 'Sept 18, 2026',
      wire: 'Corporate Advisory Network',
      summary: 'Empirical analysis across 500 blue-chip entities demonstrating how AI answer engines source, weight, and summarize executive controversies.',
    },
    {
      id: 'pr-3',
      tag: 'APPOINTMENT',
      title: 'Former National News Desk Editor Joins Prinle PR as Senior Vice President of Media Strategy',
      date: 'Sept 02, 2026',
      wire: 'Associated Press Syndicate',
      summary: 'Bolstering direct journalist access and Tier-1 embargoed placement operations across the UK, East Africa, and North America.',
    },
  ];

  return (
    <section id="multimedia" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[#d89e28] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2 font-sans">
              MULTIMEDIA NODE &bull; SYNDICATION FEED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
              Corporate Podcasts, Broadcasts &amp; Wires
            </h2>
          </div>
          
          {/* Node Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveTab('podcasts')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'podcasts'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              <Mic className="w-3.5 h-3.5 text-[#d89e28]" />
              <span>Podcasts</span>
            </button>

            <button
              onClick={() => setActiveTab('broadcasts')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'broadcasts'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-[#d89e28]" />
              <span>Broadcasts</span>
            </button>

            <button
              onClick={() => setActiveTab('releases')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'releases'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5 text-[#d89e28]" />
              <span>Press Wires</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Podcasts */}
        {activeTab === 'podcasts' && (
          <div className="space-y-4 animate-fadeIn">
            {podcasts.map((pod) => {
              const isPlaying = playingPodcastId === pod.id;
              return (
                <div
                  key={pod.id}
                  className="bg-slate-50 border border-slate-200 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#d89e28] transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Play / Pause Button */}
                    <button
                      onClick={() => setPlayingPodcastId(isPlaying ? null : pod.id)}
                      className={`w-12 h-12 shrink-0 flex items-center justify-center font-bold transition-transform cursor-pointer ${
                        isPlaying
                          ? 'bg-[#d89e28] text-[#0d2137]'
                          : 'bg-[#0d2137] text-white hover:bg-[#15304f]'
                      }`}
                      aria-label="Play podcast"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                    </button>

                    <div>
                      <div className="flex items-center gap-3 text-xs mb-1">
                        <span className="font-bold uppercase tracking-widest text-[#d89e28]">
                          {pod.episode}
                        </span>
                        <span className="text-slate-400">&bull;</span>
                        <span className="text-slate-500 font-medium">{pod.date}</span>
                        <span className="text-slate-400">&bull;</span>
                        <span className="text-slate-500 font-mono">{pod.duration}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0d2137]">
                        {pod.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-semibold">
                        Guest: <span className="text-slate-700">{pod.guest}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                        {pod.summary}
                      </p>
                      {isPlaying && (
                        <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#d89e28] bg-[#0d2137] p-2 inline-flex items-center">
                          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                          <span>Streaming audio feed: 256kbps Studio Master (Live Simulation)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => setPlayingPodcastId(isPlaying ? null : pod.id)}
                      className="text-xs font-bold uppercase tracking-wider text-[#0d2137] hover:text-[#d89e28] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isPlaying ? 'Pause' : 'Listen Now'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#d89e28]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Broadcasts / Video */}
        {activeTab === 'broadcasts' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {broadcasts.map((bc) => (
              <div
                key={bc.id}
                className="bg-slate-50 border border-slate-200 hover:border-[#d89e28] transition-colors p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video bg-[#0d2137] flex items-center justify-center mb-4 text-white overflow-hidden group cursor-pointer">
                    <div className="w-12 h-12 bg-[#d89e28] text-[#0d2137] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5">
                      {bc.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                    <span className="font-bold text-[#d89e28] uppercase">{bc.channel}</span>
                    <span>{bc.views}</span>
                  </div>

                  <h3 className="font-bold text-[#0d2137] text-base leading-snug mb-2">
                    {bc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {bc.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0d2137]">
                  <span>Watch 4K Stream</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d89e28]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Press Wires */}
        {activeTab === 'releases' && (
          <div className="space-y-4 animate-fadeIn">
            {releases.map((rel) => (
              <div
                key={rel.id}
                className="bg-slate-50 border border-slate-200 p-5 sm:p-6 hover:border-[#d89e28] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs mb-1">
                    <span className="font-bold uppercase tracking-widest text-[#d89e28]">
                      {rel.tag}
                    </span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-500 font-medium">{rel.date}</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-500 font-semibold">{rel.wire}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d2137]">
                    {rel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                    {rel.summary}
                  </p>
                </div>

                <button
                  onClick={() => alert(`Syndication Dispatch: "${rel.title}" is archived in the official Prinle PR press vector.`)}
                  className="bg-[#0d2137] hover:bg-[#15304f] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-none shrink-0 cursor-pointer"
                >
                  Read Release
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
