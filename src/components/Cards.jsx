import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  const baseStyles = 'btn-hover font-semibold rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent-cyan to-accent-purple text-primary-950 hover:shadow-glow-cyan',
    secondary: 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-primary-950',
    outline: 'border-2 border-gray-500 text-gray-100 hover:border-accent-cyan hover:text-accent-cyan'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className='heading-section gradient-text mb-4'>{title}</h2>
      {subtitle && <p className='text-gray-400 text-lg max-w-2xl mx-auto'>{subtitle}</p>}
    </motion.div>
  );
};

export const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className='glass p-6 rounded-xl hover:shadow-glow-cyan transition-all'
    >
      <div className='flex justify-between items-center mb-3'>
        <h3 className='font-semibold text-accent-cyan'>{skill.name}</h3>
        <span className='text-sm text-gray-400'>{skill.level}%</span>
      </div>
      <div className='w-full bg-primary-800 rounded-full h-2 overflow-hidden'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className='h-full bg-gradient-to-r from-accent-cyan to-accent-purple'
        />
      </div>
    </motion.div>
  );
};

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='group glass rounded-xl overflow-hidden hover:shadow-glow-purple transition-all duration-300'
    >
      {/* Project Image */}
      <div className='relative h-48 overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-primary-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-accent-cyan mb-2'>{project.title}</h3>
        <p className='text-gray-400 text-sm mb-4'>{project.description}</p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className='text-xs bg-primary-800 text-accent-cyan px-3 py-1 rounded-full'>
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex gap-3 pt-4 border-t border-white border-opacity-10'>
          <motion.a
            href={project.liveLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex-1 text-center py-2 bg-accent-cyan text-primary-950 rounded-lg font-semibold transition-all hover:shadow-glow-cyan'
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex-1 text-center py-2 border border-accent-cyan text-accent-cyan rounded-lg font-semibold transition-all hover:bg-accent-cyan hover:text-primary-950'
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export const TimelineCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12'
    >
      {!isEven && <div />}
      
      <div className={`${isEven ? 'md:col-start-1' : 'md:col-start-2'}`}>
        <div className='glass p-6 rounded-xl hover:shadow-glow-purple transition-all duration-300'>
          <div className='flex justify-between items-start mb-2'>
            <div>
              <h3 className='text-xl font-bold text-accent-cyan'>{experience.position}</h3>
              <p className='text-accent-purple font-semibold'>{experience.company}</p>
            </div>
            <span className='text-sm text-gray-400'>{experience.duration}</span>
          </div>
          
          <p className='text-gray-400 text-sm mb-4'>{experience.location}</p>
          <p className='text-gray-300 mb-4'>{experience.description}</p>

          <div className='space-y-2'>
            <p className='text-sm font-semibold text-accent-cyan'>Key Achievements:</p>
            <ul className='space-y-1'>
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className='text-sm text-gray-400 flex items-start'>
                  <span className='text-accent-cyan mr-2'>→</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isEven && <div />}
    </motion.div>
  );
};

export const ServiceCard = ({ service, index }) => {
  const getIcon = (iconName) => {
    // This will be handled by the parent component or use a dynamic icon system
    return iconName;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className='glass p-8 rounded-xl hover:shadow-glow-cyan transition-all duration-300 text-center'
    >
      <div className='w-16 h-16 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl'>
        {service.icon}
      </div>
      <h3 className='text-xl font-bold text-accent-cyan mb-3'>{service.title}</h3>
      <p className='text-gray-400'>{service.description}</p>
    </motion.div>
  );
};

export const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='glass p-8 rounded-xl'
    >
      <div className='flex items-center gap-4 mb-4'>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className='w-12 h-12 rounded-full object-cover border-2 border-accent-cyan'
        />
        <div>
          <h4 className='font-bold text-accent-cyan'>{testimonial.name}</h4>
          <p className='text-sm text-gray-400'>{testimonial.role}</p>
        </div>
      </div>
      <p className='text-gray-300 italic'>"{testimonial.content}"</p>
    </motion.div>
  );
};

export const SocialIcon = ({ icon: IconComponent, url, label }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className='w-10 h-10 rounded-full glass flex items-center justify-center text-lg text-accent-cyan hover:text-accent-purple hover:shadow-glow-cyan transition-all'
    >
      <IconComponent />
    </motion.a>
  );
};
