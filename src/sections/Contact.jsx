import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SectionTitle } from '../components/Cards';
import { personalInfo } from '../data/portfolio';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  return (
    <section id='contact' className='section-padding relative'>
      <div className='container-max'>
        <SectionTitle
          title='Get In Touch'
          subtitle="Let's discuss your project and how I can help"
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-accent-cyan mb-4'>
                Let's work together!
              </h3>
              <p className='text-gray-300 leading-relaxed mb-6'>
                Whether you have a project in mind or just want to chat about web development, feel free to reach out. I'm always excited to collaborate on innovative projects.
              </p>
            </div>

            {/* Contact Details */}
            <div className='space-y-4'>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className='glass p-4 rounded-lg flex items-center gap-4 hover:shadow-glow-cyan transition-all cursor-pointer group'
                  >
                    <div className='text-2xl text-accent-cyan group-hover:text-accent-purple transition-colors'>
                      <Icon />
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>{item.label}</p>
                      <p className='font-semibold text-accent-cyan group-hover:text-accent-purple transition-colors'>
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className='text-accent-cyan font-semibold mb-4'>Connect with me:</p>
              <div className='flex gap-4'>
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                  <motion.a
                    key={index}
                    href='#'
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:shadow-glow-cyan transition-all font-semibold text-sm'
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='glass p-8 rounded-xl'
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className='mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 text-green-400 rounded-lg text-center'
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Name */}
              <div>
                <label className='block text-sm font-semibold text-accent-cyan mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-gray-500 focus:border-accent-cyan focus:outline-none focus:shadow-glow-cyan transition-all'
                  placeholder='John Doe'
                />
              </div>

              {/* Email */}
              <div>
                <label className='block text-sm font-semibold text-accent-cyan mb-2'>
                  Your Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-gray-500 focus:border-accent-cyan focus:outline-none focus:shadow-glow-cyan transition-all'
                  placeholder='john@example.com'
                />
              </div>

              {/* Subject */}
              <div>
                <label className='block text-sm font-semibold text-accent-cyan mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-gray-500 focus:border-accent-cyan focus:outline-none focus:shadow-glow-cyan transition-all'
                  placeholder='Project Discussion'
                />
              </div>

              {/* Message */}
              <div>
                <label className='block text-sm font-semibold text-accent-cyan mb-2'>
                  Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-gray-500 focus:border-accent-cyan focus:outline-none focus:shadow-glow-cyan transition-all resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type='submit'
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='w-full py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-primary-950 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-glow-cyan transition-all disabled:opacity-50'
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
