import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { SectionTitle } from '../components/Cards';
import { testimonials } from '../data/portfolio';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section className='section-padding relative'>
      <div className='container-max'>
        <SectionTitle
          title='Client Testimonials'
          subtitle='What people say about working with me'
        />

        {/* Testimonials Carousel */}
        <div className='relative max-w-4xl mx-auto'>
          <AnimatePresence mode='wait'>
            {testimonials[currentIndex] && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='glass p-12 rounded-xl'
              >
                {/* Quote Mark */}
                <div className='text-6xl text-accent-cyan opacity-20 mb-6'>"</div>

                {/* Content */}
                <p className='text-gray-300 text-xl leading-relaxed mb-6 italic'>
                  {testimonials[currentIndex].content}
                </p>

                {/* Author */}
                <div className='flex items-center gap-4'>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className='w-16 h-16 rounded-full object-cover border-2 border-accent-cyan'
                  />
                  <div>
                    <h4 className='font-bold text-accent-cyan'>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className='text-gray-400 text-sm'>
                      {testimonials[currentIndex].role}
                    </p>
                    {/* Rating */}
                    <div className='flex gap-1 mt-2'>
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className='text-yellow-400 text-sm' />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className='absolute -left-6 md:-left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all hover:scale-110'
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className='absolute -right-6 md:-right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all hover:scale-110'
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicators */}
        <div className='flex justify-center gap-3 mt-8'>
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoplay(false);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-accent-cyan w-8'
                  : 'bg-gray-600 w-2 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 grid grid-cols-3 gap-6'
        >
          {[
            { label: 'Happy Clients', value: '20+' },
            { label: 'Projects Completed', value: '15+' },
            { label: 'Client Satisfaction', value: '98%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='glass p-6 rounded-xl text-center hover:shadow-glow-purple transition-all'
            >
              <p className='text-3xl font-bold gradient-text mb-2'>{stat.value}</p>
              <p className='text-gray-400'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
