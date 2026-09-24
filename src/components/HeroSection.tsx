import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
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
  imageUrl: string;
  fallbackUrl: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    titleLine1: 'Protective',
    titleLine2: 'Architectures.',
    subtitle:
      'Constructing protective communication architectures for blue-chip companies, public boards, and multinational entities at the intersection of East African corporate corridors and global market networks.',
    tagline: 'STRATEGIC COMMUNICATIONS & BESPOKE RETAINERS',
    statNumber: '100%',
    statLabel: 'BESPOKE RETAINER ARCHITECTURE',
    node1: 'STRATEGIC PR',
    node2: 'REPUTATION SHIELD',
    node3: 'CINEMATIC NODE',
    node4: 'OMNICHANNEL',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'PREMIER CORPORATE ADVISORY',
    badge: 'CROSS-BORDER COMMUNICATION ARCHITECTURE',
    imageUrl: '/images/hero-slide-1.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'slide-2',
    titleLine1: 'Absolute Clarity.',
    titleLine2: 'Cinematic Authority.',
    subtitle:
      'Guiding global institutions through intricate regulatory, media, and reputational ecosystems with absolute clarity and cinematic authority.',
    tagline: 'PILLAR A • STRATEGIC PR & CONSULTING',
    statNumber: '92%',
    statLabel: 'TIER-1 MEDIA HIT RATE',
    node1: 'MEDIA RELATIONS',
    node2: 'STAKEHOLDER PROTOCOLS',
    node3: 'EDITORIAL DESKS',
    node4: 'STRATEGIC CITATIONS',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'PAN-AFRICAN SYNDICATE',
    badge: 'INSTITUTIONAL CONSULTING MATRIX',
    imageUrl: '/images/hero-slide-2.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'slide-3',
    titleLine1: 'Defending Stature.',
    titleLine2: 'Shifting Perceptions.',
    subtitle:
      'Engineering high-integrity PR frameworks that defend corporate reputations, engage elite stakeholders, and shift regional market perceptions with precision.',
    tagline: 'CRISIS COUNTERMEASURES & SHIELDING',
    statNumber: '24/7',
    statLabel: 'CRISIS CONSOLE ACTIVE 365',
    node1: 'CRISIS WAR ROOM',
    node2: 'HOLDING MATRICES',
    node3: 'REPUTATION SHIELD',
    node4: 'REGULATORY ALIGNMENT',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'RAPID DEFENSE PROTOCOL',
    badge: 'INSTITUTIONAL REPUTATION SHIELD',
    imageUrl: '/images/hero-slide-3.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'slide-4',
    titleLine1: 'Cinematic Systems.',
    titleLine2: 'Omnichannel Reach.',
    subtitle:
      'Industrial photography, broadcast-ready videography, corporate documentaries, and multi-channel publication loops engineered for lasting market authority.',
    tagline: 'PILLAR B & C • CINEMATIC MEDIA & BRANDING',
    statNumber: '4K',
    statLabel: 'BROADCAST MASTER SUITE',
    node1: 'CINEMA PRODUCTION',
    node2: '4K DOCUMENTARIES',
    node3: 'OMNICHANNEL SYNDICATION',
    node4: 'BRAND GOVERNANCE',
    node5: 'REQUEST PROPOSAL',
    accentLabel: 'BROADCAST & POSTPRODUCTION',
    badge: 'MULTIMEDIA NARRATIVE SYSTEMS',
    imageUrl: '/images/hero-slide-4.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // Touch swipe gesture handlers for iOS & Android
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > 45; // 45px swipe threshold
    if (isSwipe) {
      if (distance > 0) {
        handleNextSlide(); // Swiped left -> next
      } else {
        handlePrevSlide(); // Swiped right -> prev
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = SLIDES[activeSlide];

  return (
    <section 
      className="relative overflow-hidden bg-[#b8c9dc] pt-6 pb-12 sm:pt-8 sm:pb-14 lg:pt-12 lg:pb-16 border-b border-slate-300 select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* LEFT CORNER ARROW (Desktop / Tablet) */}
      <button
        onClick={handlePrevSlide}
        className="hidden md:flex absolute left-2 sm:left-4 lg:left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-11 sm:w-11 sm:h-13 bg-[#0d2137] hover:bg-[#15304f] active:scale-95 text-white hover:text-[#d89e28] items-center justify-center shadow-lg transition-all duration-150 cursor-pointer border-r-2 border-[#d89e28]"
        aria-label="Previous Slide"
        title="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* RIGHT CORNER ARROW (Desktop / Tablet) */}
      <button
        onClick={handleNextSlide}
        className="hidden md:flex absolute right-2 sm:right-4 lg:right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-11 sm:w-11 sm:h-13 bg-[#0d2137] hover:bg-[#15304f] active:scale-95 text-white hover:text-[#d89e28] items-center justify-center shadow-lg transition-all duration-150 cursor-pointer border-l-2 border-[#d89e28]"
        aria-label="Next Slide"
        title="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Institutional Corridor Ribbon - Responsive stack on mobile */}
        <div className="text-[10px] sm:text-[11px] font-bold text-[#0d2137]/85 uppercase tracking-wider pb-2.5 sm:pb-3 border-b border-[#0d2137]/20 mb-4 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d89e28] shrink-0"></span>
            <span>PRINLE PR SOLUTIONS LTD &bull; STRATEGIC REPUTATION COUNSEL</span>
          </span>
          <span className="font-extrabold text-[#0d2137] flex items-center gap-1.5 text-[9.5px] sm:text-[11px]">
            <MapPin className="w-3 h-3 text-[#d89e28] shrink-0" />
            <span>NAIROBI, KENYA &bull; UPPER HILL &bull; WESTLANDS</span>
          </span>
        </div>

        {/* Slide Counter / Tag Ribbon */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-black text-[#0d2137] bg-white/80 px-2 sm:px-2.5 py-1 border border-[#0d2137]/20">
              SLIDE 0{activeSlide + 1} / 0{totalSlides}
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-widest text-[#0d2137]/80 truncate max-w-[200px] xs:max-w-none">
              {currentSlide.badge}
            </span>
          </div>

          {/* Quick jump dots & mobile navigation buttons */}
          <div className="flex items-center gap-2">
            {/* Mobile Prev / Next Buttons */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={handlePrevSlide}
                className="w-7 h-7 bg-[#0d2137] text-white flex items-center justify-center active:bg-[#d89e28] active:text-[#0d2137]"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-7 h-7 bg-[#0d2137] text-white flex items-center justify-center active:bg-[#d89e28] active:text-[#0d2137]"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {SLIDES.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectSlide(index)}
                  className={`transition-all cursor-pointer ${
                    activeSlide === index
                      ? 'w-5 sm:w-6 h-2 bg-[#d89e28]'
                      : 'w-2 h-2 bg-[#8ca3bd] hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid: Left Column (Content) + Right Column (Graphic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Headings & Primary CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Official Logo Lockup */}
            <div className="mb-3 sm:mb-5">
              <Logo theme="dark" size="md" />
            </div>

            {/* Dynamic Slide Content */}
            <div key={currentSlide.id} className="transition-opacity duration-200">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[3.15rem] font-black text-[#0d2137] tracking-tight leading-[1.12] sm:leading-[1.08] font-sans">
                <span className="block">{currentSlide.titleLine1}</span>
                <span className="block text-[#0d2137]">{currentSlide.titleLine2}</span>
              </h1>

              <p className="mt-3 sm:mt-5 text-[#0d2137]/90 font-medium text-xs xs:text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-md">
                {currentSlide.subtitle}
              </p>

              {/* Bold Brand Tagline Banner */}
              <div className="mt-4 sm:mt-6 pt-3 border-t border-[#0d2137]/15">
                <span className="text-sm xs:text-base sm:text-lg lg:text-xl font-black text-[#0d2137] tracking-tight uppercase block">
                  {currentSlide.tagline}
                </span>
              </div>
            </div>

            {/* Primary Action Buttons - Full width on mobile, side-by-side on sm+ */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-extrabold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer text-center justify-center min-h-[44px] flex items-center"
              >
                SCHEDULE CONSULTATION
              </button>

              <button
                onClick={onExploreServices}
                className="bg-[#0d2137] hover:bg-[#15304f] active:scale-[0.98] text-white font-extrabold text-xs uppercase tracking-wider px-5 sm:px-7 py-3.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer text-center justify-center min-h-[44px] flex items-center"
              >
                EXPLORE SERVICES
              </button>
            </div>

            {/* Location Tag */}
            <div className="mt-4 sm:mt-5 text-[11px] sm:text-xs text-[#0d2137]/80 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#d89e28] rounded-full shrink-0"></span>
              <span>Based in Nairobi, Kenya &bull; Serving National &amp; Pan-African Leaders</span>
            </div>
          </div>

          {/* RIGHT COLUMN: The Graphic with Wedge + Straight-Line Arrow + Straight-Line Steps */}
          <div className="lg:col-span-7 flex flex-col items-center w-full mt-2 lg:mt-0">
            <div className="relative w-full aspect-[16/11] max-w-[780px] overflow-hidden flex flex-col justify-between shadow-xs border border-[#0d2137]/10 bg-[#b8c9dc]">
              
              {/* Graphic Canvas with Straight-Line Soaring Arrow */}
              <svg
                viewBox="0 0 800 550"
                className="w-full h-full overflow-visible pointer-events-none select-none relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Navy Wedge Gradient */}
                  <linearGradient id="navyWedgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0a1a2c" />
                    <stop offset="70%" stopColor="#0d2137" />
                    <stop offset="90%" stopColor="#15304f" />
                    <stop offset="100%" stopColor="#1e4168" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Arrow flat gradient matching warm ochre-gold */}
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

                {/* 2. THE SOARING GOLDEN ARROW — FIXED IN A PURE STRAIGHT LINE */}
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
                  {/* Lower 3D depth rim */}
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
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 bg-[#f8f4df] border border-slate-300 text-[#0d2137] text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider px-2 sm:px-3 py-1 shadow-2xs">
                {currentSlide.accentLabel}
              </div>

              {/* 3. STEP PROCESS DIAGRAM: Horizontally swipeable on mobile */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-[#0d2137]/95 border-t border-[#d89e28]/50 p-1.5 sm:p-2.5 backdrop-blur-xs">
                <div className="flex items-center justify-between gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar py-0.5">
                  
                  {/* Step 1 */}
                  <div className="bg-[#08172b] text-white text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-1 sm:py-1.5 whitespace-nowrap border border-slate-700 text-center shrink-0">
                    {currentSlide.node1}
                  </div>

                  {/* Straight Arrow 1 */}
                  <svg className="w-2.5 h-2.5 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 2 */}
                  <div className="bg-[#08172b] text-white text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-1 sm:py-1.5 whitespace-nowrap border border-slate-700 text-center shrink-0">
                    {currentSlide.node2}
                  </div>

                  {/* Straight Arrow 2 */}
                  <svg className="w-2.5 h-2.5 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 3 */}
                  <div className="bg-white text-[#0d2137] text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider px-1.5 sm:px-2.5 py-1 sm:py-1.5 whitespace-nowrap border border-slate-300 text-center shrink-0 shadow-xs">
                    {currentSlide.node3}
                  </div>

                  {/* Straight Arrow 3 */}
                  <svg className="w-2.5 h-2.5 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 4 */}
                  <div className="bg-[#d89e28] text-[#0d2137] text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider px-1.5 sm:px-2.5 py-1 sm:py-1.5 whitespace-nowrap text-center shrink-0 shadow-xs">
                    {currentSlide.node4}
                  </div>

                  {/* Straight Arrow 4 */}
                  <svg className="w-2.5 h-2.5 sm:w-4 sm:h-3 text-[#d89e28] shrink-0" viewBox="0 0 16 12" fill="none">
                    <path d="M0 6H12M12 6L8 2M12 6L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* Step 5 Action Button */}
                  <button
                    onClick={onOpenConsultation}
                    className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap text-center shrink-0 cursor-pointer shadow-xs transition-colors"
                  >
                    {currentSlide.node5}
                  </button>

                </div>
              </div>

            </div>

            {/* Bottom Slide Indicators in a straight line */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-[780px] mt-3 sm:mt-5">
              {SLIDES.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => handleSelectSlide(index)}
                  className={`transition-all cursor-pointer flex items-center justify-center min-h-[28px] ${
                    activeSlide === index
                      ? 'w-8 sm:w-9 h-3 bg-[#d89e28] text-[8.5px] sm:text-[9px] font-black text-[#0d2137]'
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
