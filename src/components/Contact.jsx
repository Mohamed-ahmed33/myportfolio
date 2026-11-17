import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  ExternalLink 
} from 'lucide-react';

export const Contact = () => {
  const [copiedLocation, setCopiedLocation] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { contact, location, status } = personalInfo;

  // Check if any contact link has been provided in portfolioData.js
  const hasEmail = Boolean(contact.email && contact.email.trim() !== '');
  const hasLinkedin = Boolean(contact.linkedin && contact.linkedin.trim() !== '');
  const hasGithub = Boolean(contact.github && contact.github.trim() !== '');
  const hasPhone = Boolean(contact.phone && contact.phone.trim() !== '');

  const hasAnySocial = hasEmail || hasLinkedin || hasGithub || hasPhone;

  const handleCopyLocation = () => {
    navigator.clipboard.writeText(location);
    setCopiedLocation(true);
    setTimeout(() => setCopiedLocation(false), 2000);
  };

  const handleCopyMessage = () => {
    const textToCopy = `To: Mohamed Ahmed Shaban\nFrom: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasEmail) {
      // If email is configured, open default mail client with pre-filled content
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry - Mohamed Ahmed Shaban'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-brand-500" aria-hidden="true" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Open to discussing junior web developer roles, business analysis opportunities, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Location Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold block mb-1">
                  Availability & Location
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Based in {location}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Available for full-time, on-site, hybrid, and remote engagements.
                </p>
              </div>

              {/* Status pill */}
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
                <span className="flex h-2.5 w-2.5 relative mt-1 flex-shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="text-xs">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-300 block">
                    Current Status:
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400">
                    {status}
                  </span>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-brand-500" aria-hidden="true" />
                  <span className="font-semibold">{location}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyLocation}
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label="Copy location to clipboard"
                  title="Copy location"
                >
                  {copiedLocation ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels (Hides when values are empty) */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                  Direct Channels
                </span>

                {hasAnySocial ? (
                  <div className="space-y-2">
                    {hasEmail && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label={`Send email to ${contact.email}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Mail className="w-4 h-4 text-brand-500" aria-hidden="true" />
                          <span>{contact.email}</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      </a>
                    )}

                    {hasLinkedin && (
                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Visit Mohamed Ahmed Shaban's LinkedIn profile (opens in a new tab)"
                      >
                        <div className="flex items-center gap-2.5">
                          <Linkedin className="w-4 h-4 text-blue-500" aria-hidden="true" />
                          <span>LinkedIn Profile</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      </a>
                    )}

                    {hasGithub && (
                      <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label="Visit Mohamed Ahmed Shaban's GitHub profile (opens in a new tab)"
                      >
                        <div className="flex items-center gap-2.5">
                          <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" aria-hidden="true" />
                          <span>GitHub Profile</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      </a>
                    )}

                    {hasPhone && (
                      <a
                        href={`tel:${contact.phone}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-brand-50 dark:hover:bg-brand-950/60 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                        aria-label={`Call Mohamed Ahmed Shaban at ${contact.phone}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Phone className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                          <span>{contact.phone}</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-400">
                    <p className="italic">
                      Social & contact URLs can be configured anytime in <code className="text-brand-600 dark:text-brand-400 font-mono">src/data/portfolioData.js</code>. Direct buttons will automatically appear once filled.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400">
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Reach out directly for interviews or project discussions
                    </p>
                  </div>
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    {hasEmail 
                      ? 'Your default mail client was triggered. If it did not open automatically, you can copy the full note below.' 
                      : 'Your message has been formatted. You can copy the note text below to send it directly to Mohamed.'}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-4 h-4" aria-hidden="true" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
                          <span>Copy Message Details</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label 
                        htmlFor="contact-name" 
                        className="text-xs font-semibold text-slate-700 dark:text-slate-300 block"
                      >
                        Your Name <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Recruiter / Team Lead"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label 
                        htmlFor="contact-email" 
                        className="text-xs font-semibold text-slate-700 dark:text-slate-300 block"
                      >
                        Your Email <span className="text-rose-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label 
                      htmlFor="contact-subject" 
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 block"
                    >
                      Subject <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Junior Web Developer Opportunity / Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label 
                      htmlFor="contact-message" 
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 block"
                    >
                      Message <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohamed, we reviewed your portfolio and would like to discuss an opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-brand-500/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
