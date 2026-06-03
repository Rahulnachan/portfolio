import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaAward } from 'react-icons/fa';
import { SectionTitle } from '../components/Cards';
import { personalInfo } from '../data/portfolio';

export const About = () => {
  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: '15+' },
    { icon: FaLaptopCode, label: 'Years Experience', value: '1+' },
    { icon: FaRocket, label: 'Skills Mastered', value: '12+' },
    { icon: FaAward, label: 'Certifications', value: '2' },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id='about' className='section-padding relative'>
      <div className='container-max'>
        <SectionTitle
          title='About Me'
          subtitle='Learn more about my background and expertise'
        />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
        >
          {/* Content */}
          <motion.div variants={itemVariants} className='space-y-6'>
            <p className='text-gray-300 text-lg leading-relaxed'>
              I'm a passionate Frontend Developer with a strong foundation in React.js and modern web technologies. With over a year of professional experience, I've worked on diverse projects ranging from educational platforms to e-commerce solutions.
            </p>

            <p className='text-gray-300 text-lg leading-relaxed'>
              My journey in web development started with a curiosity about how things work on the web. Today, I'm committed to creating beautiful, functional, and user-friendly applications that solve real problems. I believe in writing clean, maintainable code and following best practices in every project.
            </p>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className='glass p-6 rounded-xl'
            >
              <h3 className='text-accent-cyan font-semibold mb-2 flex items-center gap-2'>
                <FaAward /> Education
              </h3>
              <p className='font-bold text-white'>{personalInfo.education.degree}</p>
              <p className='text-gray-400'>{personalInfo.education.university}</p>
              <p className='text-sm text-gray-500 mt-1'>Graduated: {personalInfo.education.year}</p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className='grid grid-cols-2 gap-4'
            >
              <div className='glass p-4 rounded-xl'>
                <p className='text-sm text-gray-400'>Location</p>
                <p className='font-semibold text-accent-cyan'>{personalInfo.location}</p>
              </div>
              <div className='glass p-4 rounded-xl'>
                <p className='text-sm text-gray-400'>Email</p>
                <p className='font-semibold text-accent-cyan text-sm'>{personalInfo.email}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-4'
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className='glass p-6 rounded-xl text-center hover:shadow-glow-cyan transition-all'
                >
                  <div className='text-4xl text-accent-cyan mb-3 flex justify-center'>
                    <Icon />
                  </div>
                  <p className='text-3xl font-bold gradient-text mb-2'>{stat.value}</p>
                  <p className='text-gray-400 text-sm'>{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mt-16'
        >
          <h3 className='text-2xl font-bold text-accent-cyan mb-8 text-center'>Core Competencies</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[
              'React.js',
              'JavaScript',
              'HTML & CSS',
              'Tailwind CSS',
              'Responsive Design',
              'API Integration',
              'WordPress',
              'Git & GitHub',
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className='glass p-4 rounded-lg text-center hover:shadow-glow-purple transition-all cursor-pointer'
              >
                <p className='text-accent-cyan font-semibold'>{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
