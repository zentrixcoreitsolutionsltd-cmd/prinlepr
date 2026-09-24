import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-xs">
      <div className="w-full px-3 sm:px-6 lg:px-8 2xl:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 lg:gap-4">
        
        {/* Brand Logo - Compact shrink-0 so it never encroaches */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-hidden shrink-0 cursor-pointer"
          aria-label="Prinle PR Solutions Home"
        >
          <Logo theme="dark" size="md" />
        </button>

        {/* Desktop Nav Links - Flexibly spaced with min-w-0 and no overlap */}
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

        {/* Right CTA Button & Mobile Toggle - Explicit layout with zero collision */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.98] text-[#0d2137] font-black text-xs uppercase tracking-wider px-4 sm:px-5 2xl:px-7 py-2.5 rounded-none shadow-xs transition-all duration-150 cursor-pointer whitespace-nowrap"
          >
            SCHEDULE BRIEFING
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#0d2137] hover:text-[#d89e28] focus:outline-hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2.5 text-xs font-bold tracking-wider">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 uppercase transition-colors cursor-pointer border-b border-slate-100 last:border-0 ${
                    isActive ? 'text-[#d89e28]' : 'text-[#0d2137] hover:text-[#d89e28]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 mt-1 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] font-black text-xs uppercase tracking-wider py-3 rounded-none text-center shadow-xs cursor-pointer"
              >
                SCHEDULE BRIEFING
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
