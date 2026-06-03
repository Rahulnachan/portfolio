import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaCode,
} from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiWordpress, SiElementor, SiWoocommerce } from 'react-icons/si';
import { MdApi, MdDevices } from 'react-icons/md';
import { SectionTitle, SkillCard } from '../components/Cards';
import { skills } from '../data/portfolio';

const iconMap = {
  FaReact: FaReact,
  FaJs: FaJs,
  FaHtml5: FaHtml5,
  FaCss3: FaCss3,
  FaCode: FaCode,
  SiTailwindcss: SiTailwindcss,
  SiBootstrap: SiBootstrap,
  SiWordpress: SiWordpress,
  SiElementor: SiElementor,
  SiWoocommerce: SiWoocommerce,
  FaGithub: FaGithub,
  MdApi: MdApi,
  MdDevices: MdDevices,
};

export const Skills = () => {
  return (
    <section id='skills' className='section-padding relative'>
      <div className='container-max'>
        <SectionTitle
          title='Skills & Technologies'
          subtitle='Proficient in modern technologies and tools'
        />

        <div className='space-y-16'>
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            >
              <h3 className='text-2xl font-bold text-accent-cyan mb-8 text-center md:text-left'>
                {skillGroup.category}
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {skillGroup.items.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon] || FaCode;

                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className='group glass p-6 rounded-xl hover:shadow-glow-cyan transition-all duration-300 cursor-pointer'
                    >
                      <div className='flex items-start justify-between mb-4'>
                        <div className='flex-1'>
                          <h4 className='text-lg font-semibold text-accent-cyan mb-1 group-hover:text-accent-purple transition-colors'>
                            {skill.name}
                          </h4>
                          <div className='flex items-center gap-2'>
                            <div className='w-full bg-primary-800 rounded-full h-2 overflow-hidden'>
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className='h-full bg-gradient-to-r from-accent-cyan to-accent-purple'
                              />
                            </div>
                            <span className='text-sm font-semibold text-accent-cyan min-w-fit'>
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        <motion.div
                          className='text-3xl text-accent-cyan ml-4 flex-shrink-0'
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <IconComponent />
                        </motion.div>
                      </div>

                      {/* Proficiency Tag */}
                      <div className='pt-3 border-t border-white border-opacity-10'>
                        <p className='text-xs text-gray-400'>
                          {skill.level >= 90
                            ? '✨ Expert'
                            : skill.level >= 75
                            ? '⭐ Advanced'
                            : '🎯 Intermediate'}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 glass p-8 rounded-xl text-center'
        >
          <h3 className='text-2xl font-bold text-accent-cyan mb-4'>Always Learning</h3>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            I'm constantly exploring new technologies and improving my skills. Currently interested in Next.js, TypeScript, and advanced animations with Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
