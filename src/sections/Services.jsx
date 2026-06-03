import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCogs } from 'react-icons/fa';
import { MdDevices, MdDesignServices } from 'react-icons/md';
import { SiWordpress } from 'react-icons/si';
import { SectionTitle } from '../components/Cards';
import { services } from '../data/portfolio';

const iconMap = {
  FaCode: FaCode,
  FaCogs: FaCogs,
  MdDevices: MdDevices,
  MdDesignServices: MdDesignServices,
  SiWordpress: SiWordpress,
};

export const Services = () => {
  return (
    <section id='services' className='section-padding relative'>
      <div className='container-max'>
        <SectionTitle
          title='Services'
          subtitle='What I offer to help you succeed'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className='group glass p-8 rounded-xl text-center hover:shadow-glow-cyan transition-all duration-300'
              >
                <motion.div
                  className='w-20 h-20 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-white group-hover:shadow-glow-cyan transition-all'
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <IconComponent />
                </motion.div>

                <h3 className='text-xl font-bold text-accent-cyan mb-3 group-hover:text-accent-purple transition-colors'>
                  {service.title}
                </h3>
                <p className='text-gray-400 leading-relaxed'>{service.description}</p>

                {/* Learn More Link */}
                <motion.div
                  className='mt-6 pt-6 border-t border-white border-opacity-10'
                  whileHover={{ x: 5 }}
                >
                  <p className='text-accent-cyan font-semibold cursor-pointer group-hover:text-accent-purple transition-colors'>
                    Learn more →
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-20'
        >
          <h3 className='text-3xl font-bold text-accent-cyan mb-12 text-center'>My Process</h3>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
              { step: '02', title: 'Design', description: 'Creating wireframes and UI mockups' },
              { step: '03', title: 'Development', description: 'Building responsive and efficient code' },
              { step: '04', title: 'Deployment', description: 'Testing and launching your project' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='glass p-6 rounded-xl text-center relative'
              >
                <div className='text-4xl font-bold gradient-text mb-2'>{item.step}</div>
                <h4 className='text-lg font-semibold text-accent-cyan mb-2'>{item.title}</h4>
                <p className='text-gray-400 text-sm'>{item.description}</p>

                {/* Arrow */}
                {index < 3 && (
                  <motion.div
                    className='hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2'
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className='text-accent-cyan text-2xl'>→</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
