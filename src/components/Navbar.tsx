import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, PhoneCall, ShieldAlert, MessageCircle } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Exact navigation mapped to Blueprint Section 4:
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT / PEDIGREE' },
    { id: 'services', label: 'SERVICES MATRIX' },
    { id: 'portfolio', label: 'VISUAL PORTFOLIO' },
    { id: 'multimedia', label: 'MULTIMEDIA NODE' },
    { id: 'endorsements', label: 'ENDORSEMENTS' },
    { id: 'downloads', label: 'DOWNLOADS' },
    { id: 'contact', label: 'CONTACT & INTAKE' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="w-full px-3 sm:px-6 lg:px-8 2xl:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 lg:gap-4">
        
        {/* Brand Logo - Compact shrink-0 */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-hidden shrink-0 cursor-pointer min-h-[44px] flex items-center"
          aria-label="Prinle PR Solutions Home"
        >
          <Logo theme="dark" size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center justify-center gap-2.5 2xl:gap-5 flex-1 min-w-0 px-2 text-[10.5px] 2xl:text-[11.5px] font-bold tracking-normal">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 px-1 transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#d89e28]'
                    : 'text-[#0d2137] hover:text-[#d89e28]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d89e28]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-black text-xs uppercase tracking-wider px-4 sm:px-5 2xl:px-7 py-2.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer whitespace-nowrap min-h-[40px]"
          >
            SCHEDULE BRIEFING
          </button>

          {/* Mobile Menu Button - min 44x44 touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-11 h-11 flex items-center justify-center text-[#0d2137] hover:text-[#d89e28] active:bg-slate-100 focus:outline-hidden cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bottom-0 z-50 bg-slate-950/60 backdrop-blur-xs flex flex-col justify-start">
          <div 
            className="bg-white border-b border-slate-200 px-5 sm:px-8 py-5 shadow-2xl max-h-[82vh] overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col text-xs font-bold tracking-wider divide-y divide-slate-100">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3.5 px-1 min-h-[46px] flex items-center justify-between uppercase transition-colors cursor-pointer ${
                      isActive ? 'text-[#d89e28] font-black' : 'text-[#0d2137] hover:text-[#d89e28]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#d89e28]"></span>}
                  </button>
                );
              })}
            </div>

            {/* Mobile Actions in Drawer */}
            <div className="pt-5 mt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3.5 rounded-none text-center shadow-xs cursor-pointer min-h-[46px] flex items-center justify-center"
              >
                SCHEDULE BRIEFING
              </button>

              <a
                href="https://wa.me/254725128059?text=Hello%20Prinle%20PR%20Solutions,%20I%20would%20like%20to%20request%20an%20executive%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20b858] text-[#0d2137] font-extrabold text-xs uppercase tracking-wider py-3 px-3 text-center flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#0d2137]" />
                <span>WhatsApp: +254 725 128 059</span>
              </a>

              <a
                href="tel:0725128059"
                className="w-full bg-[#0d2137] hover:bg-[#15304f] text-white font-bold text-xs uppercase tracking-wider py-3 px-3 text-center flex items-center justify-center gap-2 min-h-[44px]"
              >
                <PhoneCall className="w-4 h-4 text-[#d89e28]" />
                <span>Call Hotline: 0725 128 059</span>
              </a>
            </div>
          </div>

          {/* Clickable Backdrop to close */}
          <div 
            className="flex-1" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
};
