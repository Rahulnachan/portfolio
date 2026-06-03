import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, ProjectCard } from '../components/Cards';
import { projects } from '../data/portfolio';

export const Projects = () => {
  return (
    <section id='projects' className='section-padding relative'>
      <div className='container-max'>
        <SectionTitle
          title='Featured Projects'
          subtitle='Check out my recent work and projects'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 text-center'
        >
          <motion.a
            href='#'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block px-8 py-3 border-2 border-accent-cyan text-accent-cyan rounded-lg font-semibold hover:bg-accent-cyan hover:text-primary-950 transition-all duration-300'
          >
            View All Projects →
          </motion.a>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-16 glass p-8 rounded-xl text-center'
        >
          <h3 className='text-2xl font-bold text-accent-cyan mb-4'>Have a Project in Mind?</h3>
          <p className='text-gray-300 max-w-2xl mx-auto mb-6'>
            I'm open to freelance projects and collaborations. Whether it's building a new web application or improving an existing one, let's create something amazing together!
          </p>
          <motion.a
            href='#contact'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-primary-950 rounded-lg font-semibold hover:shadow-glow-cyan transition-all duration-300'
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
