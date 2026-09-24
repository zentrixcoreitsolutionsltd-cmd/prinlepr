import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, AlertTriangle, Lock, Building, Clock } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [activeMode, setActiveMode] = useState<'standard' | 'crisis'>('standard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: preselectedService || 'Public Relations',
    urgency: 'Within 24 Hours',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Company).');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid corporate email address.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Multi-Box Direct Channels & Global Corridors */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#d89e28] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase block mb-2 font-sans">
                CONTACT &amp; INGESTION CONSOLE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2137] tracking-tight leading-tight">
                Secure Institutional Ingestion
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect directly with our managing partners. All communications are reviewed under mutual non-disclosure and protected by high-bit SSL encryption.
              </p>

              {/* Multi-Box Email Configuration (Mandate Section 5) */}
              <div className="mt-8 space-y-3.5">
                <div className="bg-white p-3.5 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0d2137] text-[#d89e28] flex items-center justify-center">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                        Crisis Desk &amp; War Room (24/7)
                      </span>
                      <a href="mailto:crisis@prinleprsolutions.com" className="font-bold text-xs text-[#0d2137] hover:text-[#d89e28]">
                        crisis@prinleprsolutions.com
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    &lt; 30m SLA
                  </span>
                </div>

                <div className="bg-white p-3.5 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0d2137] text-[#d89e28] flex items-center justify-center">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Executive Secretariat
                      </span>
                      <a href="mailto:executive@prinleprsolutions.com" className="font-bold text-xs text-[#0d2137] hover:text-[#d89e28]">
                        executive@prinleprsolutions.com
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    Direct Partner
                  </span>
                </div>

                <div className="bg-white p-3.5 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0d2137] text-[#d89e28] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Corporate Invoicing &amp; Wire Transfers
                      </span>
                      <a href="mailto:billing@prinleprsolutions.com" className="font-bold text-xs text-[#0d2137] hover:text-[#d89e28]">
                        billing@prinleprsolutions.com
                      </a>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    B2B Invoicing
                  </span>
                </div>
              </div>

              {/* Physical Corridors (Nairobi, Kenya) */}
              <div className="mt-8 pt-6 border-t border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0d2137] block font-bold">Nairobi Headquarters:</strong>
                    <span>Upper Hill Financial District, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0d2137] block font-bold">Westlands Corporate Bureau:</strong>
                    <span>Westlands Commercial Corridor, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#d89e28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0d2137] block font-bold">Direct Corporate Lines:</strong>
                    <span>+254 (0) 20 790 0000 &bull; +254 700 123 456 &bull; Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="mt-8 p-4 bg-white border-l-4 border-[#d89e28] shadow-xs">
              <span className="text-xs font-bold text-[#0d2137] uppercase tracking-wider block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#d89e28]" />
                Sandboxed Corporate Protection
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Data transmitted through this console is sandboxed and encrypted under enterprise PGP protocols prior to routing.
              </p>
            </div>
          </div>

          {/* Right Column: Encrypted Ingestion Form & Crisis Console */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-slate-200 shadow-md">
              
              {/* Ingestion Mode Toggle */}
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
                <button
                  type="button"
                  onClick={() => setActiveMode('standard')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeMode === 'standard'
                      ? 'bg-[#0d2137] text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-[#0d2137]'
                  }`}
                >
                  <Building className="w-3.5 h-3.5 text-[#d89e28]" />
                  <span>Standard Ingestion</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMode('crisis')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeMode === 'crisis'
                      ? 'bg-red-900 text-white'
                      : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sandboxed Crisis Console</span>
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-50 text-[#d89e28] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0d2137] mb-2">
                    Ingestion Protocol Executed
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Brief received for <strong className="text-slate-900">{formData.company}</strong>. Our designated duty partner will initiate communications with <span className="font-semibold text-slate-900">{formData.email}</span> within {activeMode === 'crisis' ? '30 minutes' : '2 business hours'}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: 'Public Relations',
                        urgency: 'Within 24 Hours',
                        message: '',
                      });
                    }}
                    className="bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137] text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-none cursor-pointer"
                  >
                    Submit Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0d2137]">
                      {activeMode === 'crisis' ? 'Emergency Crisis Ingestion Console' : 'Executive Strategy Request'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {activeMode === 'crisis'
                        ? 'High-priority intake. Flags immediate notification across senior crisis directors.'
                        : 'Confidential strategy exploration for media positioning and market dominance.'}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-none border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Executive Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Kensington"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Corporate Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.kensington@enterprise.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Institution / Corporation *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Nova Solutions Ltd"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Practice Module
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800 bg-white"
                      >
                        <option value="Public Relations">Public Relations &amp; Placement</option>
                        <option value="Cinematic Showreel Stage">Cinematic Systems &amp; Documentaries</option>
                        <option value="Omnichannel Publishing">Omnichannel Wire Syndication</option>
                        <option value="Crisis Communication">Crisis Management &amp; War Room</option>
                        <option value="Executive Thought Leadership">Executive Thought Leadership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {activeMode === 'crisis' ? 'Urgent Incident Dossier / Facts' : 'Strategic Objective or Brief'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        activeMode === 'crisis'
                          ? 'Detail imminent press leaks, hostile publications, regulatory actions, or broadcast inquiries...'
                          : 'Share milestones, upcoming funding rounds, or narrative targets...'
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-none focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 py-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d89e28]" />
                    <span>Protected by end-to-end institutional non-disclosure protocol.</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`w-full font-black text-xs uppercase tracking-widest py-3.5 rounded-none shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        activeMode === 'crisis'
                          ? 'bg-red-800 hover:bg-red-900 text-white'
                          : 'bg-[#d89e28] hover:bg-[#c48e22] text-[#0d2137]'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{activeMode === 'crisis' ? 'DISPATCH CRISIS INTERVENTION' : 'SUBMIT STRATEGY BRIEF'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
