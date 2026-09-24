import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

interface SlideItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  tagline: string;
  statNumber: string;
  statLabel: string;
  node1: string;
  node2: string;
  node3: string;
  node4: string;
  node5: string;
  accentLabel: string;
  badge: string;
  // Local path you can upload later to /public/images/
  imageUrl: string;
  fallbackUrl: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    titleLine1: 'Where Vision',
    titleLine2: 'Meets Influence.',
    subtitle:
      'Strategic PR solutions that elevate your brand, build trust, and drive meaningful commercial impact across Kenya and beyond.',
    tagline: 'STRATEGIC PR & EXECUTIVE INFLUENCE',
    statNumber: '60%',
    statLabel: 'SHARE OF VOICE LIFT',
    node1: 'STRATEGIC PR',
    node2: 'NARRATIVE DESIGN',
    node3: 'MEDIA PLACEMENT',
    node4: 'REPUTATION SHIELD',
    node5: 'SCHEDULE BRIEFING',
    accentLabel: 'TIER-1 EXCLUSIVES',
    badge: 'PAN-AFRICAN REPUTATION COUNSEL',
    imageUrl: '/images/hero-slide-1.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'slide-2',
    titleLine1: 'Authority That',
    titleLine2: 'Commands Markets.',
    subtitle:
      'Securing front-page Tier-1 media placements in Nairobi that transform ambitious enterprises into recognized category leaders.',
    tagline: 'CATEGORY CREATION & MARKET PEDIGREE',
    statNumber: '85%',
    statLabel: 'TIER-1 MEDIA HIT RATE',
    node1: 'MEDIA ENGAGEMENT',
    node2: 'PRESS BRIEFINGS',
    node3: 'EDITORIAL DESKS',
    node4: 'STRATEGIC CITATIONS',
    node5: 'SCHEDULE BRIEFING',
    accentLabel: 'NEWSROOM SYNDICATE',
    badge: 'MARKET POSITIONING ARCHITECTURE',
    imageUrl: '/images/hero-slide-2.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'slide-3',
    titleLine1: 'Protecting Trust.',
    titleLine2: 'Leading Outcomes.',
    subtitle:
      '24/7 crisis insulation and proactive reputation armor preserving corporate enterprise valuation across volatile market cycles.',
    tagline: 'PROACTIVE CRISIS INSULATION & GOVERNANCE',
    statNumber: '99.4%',
    statLabel: 'REPUTATION PRESERVED',
    node1: 'CRISIS INSULATION',
    node2: 'MESSAGE ALIGNMENT',
    node3: 'STAKEHOLDER DIRECT',
    node4: 'REPUTATION SHIELD',
    node5: 'SCHEDULE BRIEFING',
    accentLabel: 'RAPID WAR ROOM',
    badge: 'INSTITUTIONAL CRISIS DEFENSE',
    imageUrl: '/images/hero-slide-3.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'slide-4',
    titleLine1: 'High-Impact',
    titleLine2: 'Cinematic Systems.',
    subtitle:
      'Documenting landmark corporate transactions and sovereign infrastructure milestones through broadcast-standard 4K visual storytelling.',
    tagline: 'CINEMATIC SHOWREEL & MULTIMEDIA NODE',
    statNumber: '100%',
    statLabel: 'BROADCAST MASTER DELIVERY',
    node1: 'CINEMA PRODUCTION',
    node2: '4K VISUAL MASTER',
    node3: 'WIRE SYNDICATION',
    node4: 'ARCHIVAL PEDIGREE',
    node5: 'SCHEDULE BRIEFING',
    accentLabel: 'EXECUTIVE DISPATCH',
    badge: 'CORPORATE DOCUMENTARIES & MEDIA',
    imageUrl: '/images/hero-slide-4.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const totalSlides = SLIDES.length;

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSelectSlide = (index: number) => {
    setActiveSlide(index);
  };

  const currentSlide = SLIDES[activeSlide];

  return (
    <section className="relative overflow-hidden bg-[#b8c9dc] pt-8 pb-14 lg:pt-12 lg:pb-16 border-b border-slate-300 select-none">
      
      {/* LEFT CORNER ARROW (Vertically centered in straight line with right arrow) */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 lg:left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-10 sm:w-11 sm:h-13 bg-[#0d2137] hover:bg-[#15304f] active:scale-95 text-white hover:text-[#d89e28] flex items-center justify-center shadow-lg transition-all duration-150 cursor-pointer border-r-2 border-[#d89e28]"
        aria-label="Previous Slide"
        title="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* RIGHT CORNER ARROW (Vertically centered in straight line with left arrow) */}
      <button
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 lg:right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-10 sm:w-11 sm:h-13 bg-[#0d2137] hover:bg-[#15304f] active:scale-95 text-white hover:text-[#d89e28] flex items-center justify-center shadow-lg transition-all duration-150 cursor-pointer border-l-2 border-[#d89e28]"
        aria-label="Next Slide"
        title="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Content Container with padding to keep clear of side arrows */}
      <div className="max-w-[1400px] mx-auto px-8 sm:px-14 lg:px-16 xl:px-20 relative z-10">
        
        {/* Institutional Corridor Ribbon - strictly Nairobi, Kenya */}
        <div className="text-[11px] font-bold text-[#0d2137]/85 uppercase tracking-wider pb-3 border-b border-[#0d2137]/20 mb-6 sm:mb-8 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d89e28]"></span>
            PRINLE PR SOLUTIONS LTD &bull; STRATEGIC REPUTATION COUNSEL
          </span>
          <span className="font-extrabold text-[#0d2137]">
            NAIROBI, KENYA &bull; UPPER HILL &bull; WESTLANDS
          </span>
        </div>

        {/* Slide Counter / Tag Ribbon */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-black text-[#0d2137] bg-white/80 px-2.5 py-1 border border-[#0d2137]/20">
              SLIDE 0{activeSlide + 1} / 0{totalSlides}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0d2137]/80 hidden sm:inline">
              {currentSlide.badge}
            </span>
          </div>

          {/* Quick jump dots in a straight line */}
          <div className="flex items-center gap-1.5">
            {SLIDES.map((s, index) => (
              <button
                key={s.id}
                onClick={() => handleSelectSlide(index)}
                className={`transition-all cursor-pointer ${
                  activeSlide === index
                    ? 'w-6 h-2 bg-[#d89e28]'
                    : 'w-2 h-2 bg-[#8ca3bd] hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Main Grid: Left Column (Content) + Right Column (Graphic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Headings & Primary CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Official Logo Lockup */}
            <div className="mb-4 sm:mb-5">
              <Logo theme="dark" size="md" />
            </div>

            {/* Dynamic Slide Content */}
            <div key={currentSlide.id} className="transition-opacity duration-200">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-black text-[#0d2137] tracking-tight leading-[1.08] font-sans">
                <span className="block">{currentSlide.titleLine1}</span>
                <span className="block text-[#0d2137]">{currentSlide.titleLine2}</span>
              </h1>

              <p className="mt-4 sm:mt-5 text-[#0d2137]/90 font-medium text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-md">
                {currentSlide.subtitle}
              </p>

              {/* Bold Brand Tagline Banner */}
              <div className="mt-5 sm:mt-6 pt-3.5 border-t border-[#0d2137]/15">
                <span className="text-base sm:text-lg lg:text-xl font-black text-[#0d2137] tracking-tight uppercase block">
                  {currentSlide.tagline}
                </span>
              </div>
            </div>

            {/* Primary Action Buttons - Spaced with no overlap */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-extrabold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                SCHEDULE CONSULTATION
              </button>

              <button
                onClick={onExploreServices}
                className="bg-[#0d2137] hover:bg-[#15304f] active:scale-[0.98] text-white font-extrabold text-xs uppercase tracking-wider px-5 sm:px-7 py-3.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                EXPLORE SERVICES
              </button>
            </div>

            {/* Location Tag */}
            <div className="mt-5 text-xs text-[#0d2137]/80 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#d89e28] rounded-full"></span>
              <span>Based in Nairobi, Kenya &bull; Serving National &amp; Pan-African Leaders</span>
            </div>
          </div>

          {/* RIGHT COLUMN: The Graphic with Wedge + Straight-Line Arrow + Straight-Line Steps */}
          <div className="lg:col-span-7 flex flex-col items-center w-full">
            <div className="relative w-full aspect-[16/11] max-w-[780px] overflow-hidden flex flex-col justify-between shadow-xs border border-[#0d2137]/10 bg-[#b8c9dc]">
              
              {/* Graphic Canvas with Straight-Line Soaring Arrow */}
              <svg
                viewBox="0 0 800 550"
                className="w-full h-full overflow-visible pointer-events-none select-none relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Navy Wedge Gradient: Left deep navy fading slightly right */}
                  <linearGradient id="navyWedgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a1a2c" />
                    <stop offset="70%" stopColor="#0d2137" />
                    <stop offset="90%" stopColor="#15304f" />
                    <stop offset="100%" stopColor="#1e4168" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Arrow flat gradient matching image's warm ochre-gold */}
                  <linearGradient id="goldArrowFill" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cfa030" />
                    <stop offset="50%" stopColor="#d89e28" />
                    <stop offset="100%" stopColor="#ddaa36" />
                  </linearGradient>
                </defs>

                {/* 1. Deep Navy Triangular Wedge with stat copy */}
                <path
                  d="M 0 0 L 520 0 L 0 520 Z"
                  fill="url(#navyWedgeGradient)"
                />

                {/* Stat Text directly placed on Navy Wedge */}
                <text x="36" y="90" fill="#ffffff" fontSize="56" fontWeight="900" fontFamily="sans-serif">
                  {currentSlide.statNumber}
                </text>
                <text x="38" y="125" fill="#ffffff" fontSize="13" fontWeight="800" letterSpacing="0.05em" fontFamily="sans-serif">
                  {currentSlide.statLabel}
                </text>

                {/* 2. THE SOARING GOLDEN ARROW — FIXED IN A PURE STRAIGHT LINE (No dips, no zigzags) */}
                <g>
                  {/* Straight Arrow Shaft & Head */}
                  <path
                    d="M 0 515
                       L 670 148
                       L 705 198
                       L 780 48
                       L 630 22
                       L 665 76
                       L 0 445
                       Z"
                    fill="url(#goldArrowFill)"
                  />
                  {/* Lower 3D depth rim along the straight bottom edge */}
                  <path
                    d="M 0 515
                       L 670 148
                       L 675 158
                       L 0 525
                       Z"
                    fill="#b8831b"
                    opacity="0.65"
                  />
                </g>
              </svg>

              {/* Accent Tag Pill placed gracefully in top right corner */}
              <div className="absolute top-3 right-3 z-20 bg-[#f8f4df] border border-slate-300 text-[#0d2137] text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-3 py-1 shadow-2xs">
                {currentSlide.accentLabel}
              </div>

              {/* 3. STEP PROCESS DIAGRAM: ALL ARROWS IN A PERFECT STRAIGHT HORIZONTAL LINE */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-[#0d2137]/95 border-t border-[#d89e28]/50 p-2 sm:p-2.5 backdrop-blur-xs">
                <div className="flex items-center justify-between gap-1 sm:gap-2 max-w-full overflow-x-auto">
                  
                  {/* Step 1 */}
                  <div className="bg-[#08172b] text-white text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1.5 whitespace-nowrap border border-slate-700 text-center shrink-0">
                    {currentSlide.node1}
                  </div>

                  {/* Straight Arrow 1 */}
                  <svg className="w-3.5 h-3 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 2 */}
                  <div className="bg-[#08172b] text-white text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1.5 whitespace-nowrap border border-slate-700 text-center shrink-0">
                    {currentSlide.node2}
                  </div>

                  {/* Straight Arrow 2 */}
                  <svg className="w-3.5 h-3 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 3 */}
                  <div className="bg-white text-[#0d2137] text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider px-2 sm:px-2.5 py-1.5 whitespace-nowrap border border-slate-300 text-center shrink-0 shadow-xs">
                    {currentSlide.node3}
                  </div>

                  {/* Straight Arrow 3 */}
                  <svg className="w-3.5 h-3 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 4 */}
                  <div className="bg-[#d89e28] text-[#0d2137] text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider px-2 sm:px-2.5 py-1.5 whitespace-nowrap text-center shrink-0 shadow-xs">
                    {currentSlide.node4}
                  </div>

                  {/* Straight Arrow 4 */}
                  <svg className="w-3.5 h-3 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 5 Action Button */}
                  <button
                    onClick={onOpenConsultation}
                    className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider px-2.5 sm:px-3 py-1.5 whitespace-nowrap text-center shrink-0 cursor-pointer shadow-xs transition-colors"
                  >
                    {currentSlide.node5}
                  </button>

                </div>
              </div>

            </div>

            {/* Bottom Slide Indicators in a straight line */}
            <div className="flex items-center justify-center gap-2 w-full max-w-[780px] mt-4 sm:mt-6">
              {SLIDES.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectSlide(index)}
                  className={`transition-all cursor-pointer flex items-center justify-center ${
                    activeSlide === index
                      ? 'w-9 h-3 bg-[#d89e28] text-[9px] font-black text-[#0d2137]'
                      : 'w-3 h-3 bg-[#8ca3bd] hover:bg-slate-500'
                  }`}
                  aria-label={`Jump to slide ${index + 1}`}
                >
                  {activeSlide === index ? `0${index + 1}` : ''}
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
