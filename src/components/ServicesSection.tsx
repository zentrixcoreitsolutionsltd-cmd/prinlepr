import React, { useState } from 'react';
import { Megaphone, TrendingUp, Users, ClipboardCheck, Award, Globe, ShieldAlert, Sparkles, Check, Film, Tv, Radio, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModule, setActiveModule] = useState<'all' | 'pr' | 'cinematic' | 'omnichannel'>('all');
  const [activeModalService, setActiveModalService] = useState<any | null>(null);

  const services = [
    // Module 1: Strategic PR
    {
      id: 'pr',
      module: 'pr',
      moduleLabel: 'Module 1: PR & Reputation',
      title: 'Public Relations',
      description: 'Building strong narratives that connect with your audience.',
      icon: Megaphone,
      deliverables: [
        'Tier-1 Press Releases & Wire Syndication',
        'Keynote & Media Booking for Founders',
        'Editorial Narrative Framing',
        'Industry Trade Journal Feature Articles',
      ],
      impactMetric: '+140% Average Earned Media Reach',
    },
    {
      id: 'media',
      module: 'pr',
      moduleLabel: 'Module 1: PR & Reputation',
      title: 'Media Strategy',
      description: 'Strategic media placement that maximizes visibility and impact.',
      icon: TrendingUp,
      deliverables: [
        'Direct Editor & Journalist Rolodex Access',
        'Embargoed Product Launch Coordination',
        'Broadcast & Podcast Tour Management',
        'Data-Driven Media Sentiment Attribution',
      ],
      impactMetric: '85% Hit Rate on Target Publications',
    },
    {
      id: 'brand',
      module: 'pr',
      moduleLabel: 'Module 1: PR & Reputation',
      title: 'Brand Management',
      description: 'Enhancing your brand reputation and positioning in the market.',
      icon: Users,
      deliverables: [
        'Corporate Messaging Hierarchy & Playbook',
        'Executive Personal Branding on LinkedIn',
        'Category Creation & Competitive Moat PR',
        'Customer Case Study Storytelling Kits',
      ],
      impactMetric: '3.2x Valuation Multiplier Lift',
    },
    {
      id: 'crisis',
      module: 'pr',
      moduleLabel: 'Module 1: PR & Reputation',
      title: 'Crisis Communication',
      description: 'Protecting your reputation with proactive and effective communication.',
      icon: ClipboardCheck,
      deliverables: [
        '24/7 Rapid Response Incident War Room',
        'Holding Statement & Q&A Protocol Matrices',
        'Regulatory & Legal PR Alignment',
        'Algorithmic Search Engine De-amplification',
      ],
      impactMetric: '< 45 min Response Time SLA',
    },

    // Module 2: Cinematic Systems
    {
      id: 'cinematic-doc',
      module: 'cinematic',
      moduleLabel: 'Module 2: Cinematic Systems',
      title: 'Corporate Documentaries',
      description: 'Full-bleed high-bitrate 4K documentary production for landmark transactions.',
      icon: Film,
      deliverables: [
        'Cinema-Grade Multi-Camera 4K Crew',
        'Sovereign Infrastructure Showreel',
        'Davos & UN Ministerial Screenings',
        'Executive Interview Master Recordings',
      ],
      impactMetric: 'Broadcast-Standard 4K Assets',
    },
    {
      id: 'broadcast-keynote',
      module: 'cinematic',
      moduleLabel: 'Module 2: Cinematic Systems',
      title: 'Cinematic Showreel Stage',
      description: 'Dynamic showreel execution presenting corporate pedigree and capability.',
      icon: Tv,
      deliverables: [
        'Investor Day Keynote Visual Architecture',
        'High-Density Motion Graphics & Soundscapes',
        'Annual Financial Results Stream Production',
        'Archival Master Asset Vaulting',
      ],
      impactMetric: '99.8% Corporate Visual Retention',
    },

    // Module 3: Omnichannel Publishing
    {
      id: 'omnichannel-wire',
      module: 'omnichannel',
      moduleLabel: 'Module 3: Omnichannel Publishing',
      title: 'Wire Syndication Network',
      description: 'Multi-territory press wire syndication directly to newsroom terminals.',
      icon: Radio,
      deliverables: [
        'Bloomberg Terminal Direct Ingestion',
        'Reuters & AP Enterprise Wire Vectors',
        'Pan-African Regional Newsroom Desks',
        'Search Engine Structured Metadata Ingestion',
      ],
      impactMetric: 'Instant Global Newsroom Dissemination',
    },
    {
      id: 'thought-leadership',
      module: 'omnichannel',
      moduleLabel: 'Module 3: Omnichannel Publishing',
      title: 'Executive Thought Leadership',
      description: 'Positioning founders and C-suite leaders as authoritative industry visionaries.',
      icon: Award,
      deliverables: [
        'Ghostwritten Forbes & HBR Column Placement',
        'TEDx & Davos Panel Speaker Placements',
        'Custom Whitepapers & Research Reports',
      ],
      impactMetric: 'Over 500K Executive Impressions',
    },
  ];

  const displayedServices = activeModule === 'all'
    ? services
    : services.filter((s) => s.module === activeModule);

  return (
    <section id="services" className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#d89e28] font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase block mb-2 font-sans">
            SERVICES MATRIX &bull; 3-PILLAR OPERATIONAL MODULES
          </span>
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#0d2137] tracking-tight leading-tight">
            Solutions That Drive Results
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Engineered communications programs tailored for ambitious enterprises, high-growth scaleups, and sovereign institutions.
          </p>
        </div>

        {/* 3-Pillar UI Matrix Tabs (Callar/Oxygene Model: Zero Text Bloat) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center gap-1 bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveModule('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeModule === 'all'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              All Matrix Modules
            </button>
            <button
              onClick={() => setActiveModule('pr')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeModule === 'pr'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              1. Strategic PR &amp; Crisis
            </button>
            <button
              onClick={() => setActiveModule('cinematic')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeModule === 'cinematic'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              2. Cinematic Systems
            </button>
            <button
              onClick={() => setActiveModule('omnichannel')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeModule === 'omnichannel'
                  ? 'bg-[#0d2137] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0d2137]'
              }`}
            >
              3. Omnichannel Publishing
            </button>
          </div>
        </div>

        {/* Services Grid (Matches Reference Layout Exactly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className="group bg-white rounded-none p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(13,33,55,0.08)] hover:border-slate-200 transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4">
                    {/* Deep Navy Square Icon Container */}
                    <div className="w-13 h-13 bg-[#0d2137] flex items-center justify-center text-white shrink-0 group-hover:bg-[#15304f] transition-colors">
                      <Icon className="w-6 h-6 text-white stroke-[1.8]" />
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-[#d89e28] uppercase tracking-wider block mb-0.5">
                        {service.moduleLabel}
                      </span>
                      <h3 className="font-bold text-[#0d2137] text-base group-hover:text-[#d89e28] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subdued metric pill or subtle action */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">{service.impactMetric}</span>
                  <span className="text-[#d89e28] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveModule(activeModule === 'all' ? 'pr' : 'all')}
            className="bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer"
          >
            {activeModule === 'all' ? 'FILTER 3-PILLAR MATRIX' : 'VIEW ALL MATRIX MODULES'}
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-none max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-fadeIn">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 text-lg font-bold"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0d2137] rounded-none flex items-center justify-center text-white">
                <activeModalService.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#d89e28]">
                  {activeModalService.moduleLabel}
                </span>
                <h3 className="text-xl font-extrabold text-[#0d2137]">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activeModalService.description} We construct tailored narrative strategies and execute with rigorous editorial discretion.
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#0d2137] uppercase tracking-wider mb-3">
                Key Deliverables &amp; Execution:
              </h4>
              <ul className="space-y-2">
                {activeModalService.deliverables?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-3.5 border border-slate-100 mb-6 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Standard Impact Metric:</span>
              <strong className="text-[#0d2137] font-bold">{activeModalService.impactMetric}</strong>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const serviceTitle = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(serviceTitle);
                }}
                className="flex-1 bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3.5 transition-colors text-center cursor-pointer"
              >
                INQUIRE FOR THIS PRACTICE
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-3.5 border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
