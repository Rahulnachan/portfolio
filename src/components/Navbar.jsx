import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { navigation } from '../data/portfolio';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container-max px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='text-2xl font-bold gradient-text cursor-pointer'
        >
          Rahul R Nachan
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-8'>
          {navigation.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(item.href)}
              className={`cursor-pointer transition-colors duration-300 font-medium ${
                activeSection === item.href
                  ? 'text-accent-cyan'
                  : 'text-gray-400 hover:text-accent-cyan'
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
          className='md:hidden text-2xl text-accent-cyan'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className='md:hidden overflow-hidden glass'
      >
        <div className='px-4 py-4 space-y-3 flex flex-col'>
          {navigation.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveSection(item.href)}
              onClick={() => handleNavClick(item.href)}
              className={`cursor-pointer transition-colors duration-300 font-medium py-2 ${
                activeSection === item.href
                  ? 'text-accent-cyan'
                  : 'text-gray-400 hover:text-accent-cyan'
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};