import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import './styles/index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-gradient-dark min-h-screen overflow-x-hidden'>
      {/* Scroll Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue z-50'
        style={{ scaleX: scrollProgress / 100 }}
        transformOrigin='left'
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='fixed bottom-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-2xl text-accent-cyan hover:shadow-glow-cyan transition-all z-40'
      >
        ↑
      </motion.button>

      {/* Cursor Glow Effect */}
      <CursorGlow />
    </div>
  );
}

// Cursor Glow Component
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className='pointer-events-none fixed w-64 h-64 rounded-full blur-3xl opacity-20 mix-blend-multiply'
      style={{
        background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
        left: `${position.x - 128}px`,
        top: `${position.y - 128}px`,
        transition: 'left 0.2s, top 0.2s',
      }}
    />
  );
};

export default App;
