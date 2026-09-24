import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Twitter, Facebook, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#071526] text-slate-300 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 py-14 sm:py-16">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            {/* White/Gold Official Logo */}
            <div className="mb-5 select-none">
              <Logo theme="light" size="md" />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Strategic public relations, high-density cinematic showreels, corporate reputation armor, and executive thought leadership for market leaders worldwide.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-none bg-slate-800/80 flex items-center justify-center hover:text-white hover:bg-[#15304f] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="w-8 h-8 rounded-none bg-slate-800/80 flex items-center justify-center hover:text-white hover:bg-[#15304f] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-none bg-slate-800/80 flex items-center justify-center hover:text-white hover:bg-[#15304f] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links matching Blueprint Section 4 */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  About / Pedigree
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  Services Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  Visual Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('multimedia')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  Multimedia Node
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('endorsements')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  Endorsements
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('downloads')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  Downloads
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#d89e28] transition-colors cursor-pointer">
                  Contact &amp; Intake
                </button>
              </li>
            </ul>
          </div>

          {/* Core Practices / 3-Pillar Operational Modules */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Operational Modules
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#d89e28] transition-colors cursor-pointer text-left">
                  1. Strategic PR &amp; Media Placement
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#d89e28] transition-colors cursor-pointer text-left">
                  2. Cinematic Systems &amp; 4K Showreels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#d89e28] transition-colors cursor-pointer text-left">
                  3. Omnichannel Wire Syndication
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#d89e28] transition-colors cursor-pointer text-left">
                  Sandboxed Crisis Intake Console
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#d89e28] transition-colors cursor-pointer text-left">
                  Executive Thought Leadership
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Briefing */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Executive Briefing
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Curated monthly analysis on newsroom trends, journalist shifts, and media sentiment across international corporate corridors.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to Executive Briefings</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="corporate.email@company.com"
                  className="px-3 py-2 text-xs bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-hidden focus:border-[#d89e28]"
                />
                <button
                  type="submit"
                  className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] text-xs font-black uppercase tracking-wider py-2.5 transition-colors cursor-pointer"
                >
                  SUBSCRIBE TO DISPATCHES
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Tier: Offices & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Prinle PR Solutions Ltd. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Nairobi, Kenya &bull; Upper Hill &bull; Westlands</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="text-slate-400">executive@prinleprsolutions.com</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d89e28]" />
              Enterprise SSL Encrypted
            </span>
            <span>&middot;</span>
            <span>B2B Wire Transfers Only</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
