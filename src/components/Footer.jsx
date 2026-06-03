import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <footer className='bg-primary-950 border-t border-white border-opacity-10'>
      <div className='container-max px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl font-bold gradient-text mb-2'>RN.</h3>
            <p className='text-gray-400 text-sm'>
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className='text-accent-cyan font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <ScrollLink
                    to={link.href}
                    smooth={true}
                    duration={500}
                    className='text-gray-400 hover:text-accent-cyan transition-colors cursor-pointer'
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className='text-accent-cyan font-semibold mb-4'>Services</h4>
            <ul className='space-y-2'>
              <li className='text-gray-400 hover:text-accent-cyan transition-colors cursor-pointer'>Frontend Development</li>
              <li className='text-gray-400 hover:text-accent-cyan transition-colors cursor-pointer'>WordPress</li>
              <li className='text-gray-400 hover:text-accent-cyan transition-colors cursor-pointer'>UI/UX Design</li>
              <li className='text-gray-400 hover:text-accent-cyan transition-colors cursor-pointer'>Responsive Design</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className='text-accent-cyan font-semibold mb-4'>Connect</h4>
            <div className='flex gap-4'>
              <motion.a
                href='#'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className='w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all'
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href='#'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className='w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all'
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href='#'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className='w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all'
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href='mailto:rahul@example.com'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className='w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all'
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-white border-opacity-10 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              © 2024 Rahul Nachan. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all'
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
