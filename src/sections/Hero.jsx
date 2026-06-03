import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaDownload,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,      // Changed: FaTwitter → FaWhatsapp
  FaEnvelope,
} from 'react-icons/fa';

import { Button } from '../components/Cards';
import { personalInfo } from '../data/portfolio';
import RahulImage from '../assets/images/Rahul.jpeg';

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const roles = ['Frontend Developer', 'React Developer', 'UI/UX Enthusiast'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let index = 0;

    const typeInterval = setInterval(() => {
      setDisplayedText(role.slice(0, index + 1));
      index++;

      if (index === role.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayedText('');
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob' />
        <div className='absolute top-40 right-10 w-72 h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000' />
        <div className='absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000' />
      </div>

      <div className='container-max px-4'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
        >
          {/* Content */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <motion.p
              variants={itemVariants}
              className='text-accent-cyan font-semibold text-lg'
            >
              👋 Welcome to my portfolio
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className='heading-main text-white'
            >
              Hi, I'm <span className='gradient-text'>{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className='h-12 flex items-center'
            >
              <h2 className='heading-section gradient-text'>
                {displayedText}
                <span className='animate-pulse'>|</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className='text-gray-300 text-lg leading-relaxed max-w-lg'
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className='flex flex-col sm:flex-row gap-4 pt-6'
            >
              <a
                href='/Rahul_Nachan.pdf'
                download='Rahul_Nachan.pdf'
              >
                <Button
                  variant='primary'
                  size='lg'
                  className='flex items-center justify-center gap-2'
                >
                  <FaDownload /> Download CV
                </Button>
              </a>
              <Button variant='secondary' size='lg' className='flex items-center justify-center gap-2'>
                Let's Talk <FaArrowRight />
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className='flex gap-4 pt-8'
            >
              <motion.a
                href='https://github.com/rahulnachan'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className='w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-accent-cyan hover:shadow-glow-cyan transition-all'
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href='https://linkedin.com/in/rahul-nachan'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className='w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-accent-cyan hover:shadow-glow-cyan transition-all'
              >
                <FaLinkedin />
              </motion.a>
              {/* WhatsApp icon - replace phone number with your actual number */}
              <motion.a
                href='https://wa.me/919022799695'   // Change to your WhatsApp number (country code + number, no '+' or spaces)
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className='w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-green-400 hover:shadow-glow-cyan transition-all'
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className='w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-accent-cyan hover:shadow-glow-cyan transition-all'
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image - now visible on all screen sizes */}
          <motion.div
            variants={itemVariants}
            className='relative'   // removed "hidden lg:block" so image appears on mobile
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className='relative'
            >
              {/* Glow Background */}
              <div className='absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl blur-3xl opacity-30 animate-pulse' />

              {/* Image Container - responsive sizing */}
              <div className='relative glass p-1 rounded-2xl overflow-hidden w-48 h-60 sm:w-64 sm:h-80 mx-auto'>
                <img
                  src={RahulImage}
                  alt='Rahul Nachan'
                  className='w-full h-full object-cover rounded-xl'
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className='absolute -bottom-6 -left-6 glass p-4 rounded-xl'
              >
                <p className='text-sm text-gray-400'>Experience</p>
                <p className='text-2xl font-bold gradient-text'>1+ Years</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className='absolute -top-6 -right-6 glass p-4 rounded-xl'
              >
                <p className='text-sm text-gray-400'>Projects</p>
                <p className='text-2xl font-bold gradient-text'>15+</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <p className='text-accent-cyan text-sm mb-2'>Scroll to explore</p>
        <div className='w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1 h-2 bg-accent-cyan rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  );
};