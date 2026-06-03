import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, TimelineCard } from '../components/Cards';
import { experiences } from '../data/portfolio';

export const Experience = () => {
  return (
    <section id='experience' className='section-padding relative'>
      <div className='container-max'>
        <SectionTitle
          title='Professional Experience'
          subtitle='My journey in web development'
        />

        {/* Timeline */}
        <div className='relative'>
          {/* Timeline Line */}
          <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-blue' />

          {/* Timeline Items */}
          <div className='space-y-12'>
            {experiences.map((experience, index) => (
              <motion.div key={experience.id} className='relative'>
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className='hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-8 w-6 h-6 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full border-4 border-primary-900 shadow-glow-cyan'
                />

                <TimelineCard experience={experience} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 glass p-8 rounded-xl text-center'
        >
          <h3 className='text-2xl font-bold text-accent-cyan mb-4'>Open to Opportunities</h3>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            I'm actively looking for challenging opportunities where I can contribute to innovative projects and grow as a developer. Let's connect and discuss how I can add value to your team!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
