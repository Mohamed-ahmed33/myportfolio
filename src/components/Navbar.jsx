import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  Terminal, 
  Layers, 
  FileCode, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  Mail 
} from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about', icon: Terminal },
  { name: 'Skills', href: '#skills', icon: Layers },
  { name: 'Featured Work', href: '#project', icon: FileCode },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Beyond Tech', href: '#beyond-tech', icon: ShieldCheck },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [cvExists, setCvExists] = useState(Boolean(personalInfo.cvPath));

  // Check if CV file is genuinely reachable
  useEffect(() => {
    if (!personalInfo.cvPath) {
      setCvExists(false);
      return;
    }
    fetch(personalInfo.cvPath, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok && res.status !== 405) {
          setCvExists(false);
        } else {
          setCvExists(true);
        }
      })
      .catch(() => {
        // Fallback: file is present in project public folder
        setCvExists(true);
      });
  }, []);

  // Track scroll for shadow and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If near the top, no specific inner section is active (hero is visible)
      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }

      // Check if scrolled near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-md py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-xl"
            aria-label="Mohamed Ahmed Shaban - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-mono font-bold text-sm shadow-glow-sm group-hover:scale-105 transition-transform duration-200">
              MS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                Mohamed Shaban
              </span>
              <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 mt-1 leading-none">
                MIS • Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/80 dark:bg-slate-900/70 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 backdrop-blur-md"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isActive
                      ? 'bg-white dark:bg-brand-600 text-brand-600 dark:text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle dark/light theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" aria-hidden="true" />
              )}
            </button>

            {/* CV Download (Only displayed if CV file is genuinely available) */}
            {cvExists && personalInfo.cvPath && (
              <a
                href={personalInfo.cvPath}
                download="Mohamed-Ahmed-Shaban-CV.pdf"
                aria-label="Download Mohamed Ahmed Shaban's CV as PDF"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-brand-600 dark:hover:bg-brand-500 transition-all duration-200 shadow-sm shadow-brand-500/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Resume</span>
              </a>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle navigation menu"
              aria-controls="mobile-nav-drawer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          role="navigation"
          aria-label="Mobile Navigation"
          className="lg:hidden mt-2 px-4 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-800 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-600 dark:bg-brand-950/70 dark:text-brand-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                  <span>{link.name}</span>
                </a>
              );
            })}

            {cvExists && personalInfo.cvPath && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={personalInfo.cvPath}
                  download="Mohamed-Ahmed-Shaban-CV.pdf"
                  aria-label="Download Mohamed Ahmed Shaban's CV as PDF"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-500 transition-colors"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
