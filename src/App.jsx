import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { BeyondTech } from './components/BeyondTech';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-navy-950 dark:text-slate-100 transition-colors duration-200">
        {/* WCAG Skip to Main Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-300 font-medium text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
          <Hero />
          <About />
          <Skills />
          <FeaturedProject />
          <Experience />
          <Education />
          <BeyondTech />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
