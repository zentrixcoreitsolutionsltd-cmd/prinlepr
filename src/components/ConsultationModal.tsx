import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService || 'Public Relations',
    timeline: 'Immediate (Next 30 Days)',
    brief: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid work email.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 text-lg font-bold"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-amber-50 text-[#d89e28] rounded-full flex items-center justify-center mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0d2137] mb-1">
              Strategy Brief Submitted
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-sm mb-6">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Managing Director for Strategic PR has received your brief for <strong>{formData.company}</strong> and will follow up directly at <span className="underline">{formData.email}</span>.
            </p>
            <button
              onClick={onClose}
              className="bg-[#0d2137] hover:bg-[#15304f] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-none"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <Logo theme="dark" size="sm" />
            </div>
            <div className="mb-5">
              <span className="text-[11px] font-bold text-[#d89e28] uppercase tracking-wider block">
                Direct Engagement
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d2137]">
                Schedule Executive PR Briefing
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Converse with our practice leaders about upcoming media positioning or enterprise milestones.
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 mb-4 bg-red-50 text-red-700 text-xs rounded border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jonathan Davies"
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
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
                  placeholder="j.davies@company.com"
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Focus Area
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800 bg-white"
                  >
                    <option value="Public Relations">Public Relations</option>
                    <option value="Media Strategy">Media Strategy</option>
                    <option value="Brand Management">Brand Management</option>
                    <option value="Crisis Communication">Crisis Communication</option>
                    <option value="Executive Thought Leadership">Executive Thought Leadership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Overview / Goal
                </label>
                <textarea
                  rows={2}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Key milestones, target press channels, or timing requirements..."
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:border-[#d89e28] focus:ring-1 focus:ring-[#d89e28] outline-hidden text-slate-800"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 py-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d89e28]" />
                <span>Protected by non-disclosure confidentiality</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#d89e28] hover:bg-[#c48e22] active:scale-[0.99] text-[#0d2137] font-black text-xs uppercase tracking-widest py-3 rounded-none shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Strategic Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
