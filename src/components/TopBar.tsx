import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0d2137] text-white text-[13px] py-2 px-4 sm:px-12 border-b border-[#15304f]">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@prinleprsolutions.com"
            className="flex items-center gap-2 hover:text-[#d89e28] transition-colors"
          >
            <span>info@prinleprsolutions.com</span>
          </a>
          <a
            href="tel:+254207900000"
            className="flex items-center gap-2 hover:text-[#d89e28] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>+254 (0) 20 790 0000 &bull; Nairobi, Kenya</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-[#d89e28] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 fill-current" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="text-white hover:text-[#d89e28] transition-colors"
          >
            <Twitter className="w-3.5 h-3.5 fill-current" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-[#d89e28] transition-colors"
          >
            <Facebook className="w-3.5 h-3.5 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
};
