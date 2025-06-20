'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact({ darkMode = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saktipadmayoga@gmail.com',
      href: 'mailto:saktipadmayoga@gmail.com',
      color: 'hover:text-orange-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SaktiPadmayoga',
      href: 'https://github.com/saktipadmayoga',
      color: darkMode ? 'hover:text-white' : 'hover:text-zinc-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sakti-padmayoga',
      href: 'https://linkedin.com/in/sakti-padmayoga',
      color: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'saqtii',
      href: 'https://instagram.com/saqtii',
      color: 'hover:text-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-28 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            I'm excited to connect for opportunities or to chat about tech.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="p-6 rounded-xl border border-gray-200 card group overflow-hidden shadow-lg shadow-gray-300/20 flex flex-col justify-center space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold mb-6 text-center"
            >
              Send a Message
            </motion.h3>

            <form action="https://getform.io/f/bnlekwkb" method="POST" onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'} mb-1`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 ${darkMode ? 'bg-zinc-900 text-white border-zinc-600' : 'bg-gray-100 text-gray-900 border-zinc-200'} border rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 placeholder-zinc-400`}
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'} mb-1`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 ${darkMode ? 'bg-zinc-900 text-white border-zinc-600' : 'bg-gray-100 text-gray-900 border-zinc-200'} border rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 placeholder-zinc-400`}
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'} mb-1`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-3 py-2 ${darkMode ? 'bg-zinc-900 text-white border-zinc-600' : 'bg-gray-100 text-gray-900 border-zinc-200'} border rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200 placeholder-zinc-400 resize-none`}
                  placeholder="Tell me about your project!"
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-2 px-4 ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-500 hover:bg-gray-600'} text-white rounded-md font-semibold flex items-center justify-center space-x-2 transition-all duration-200 shadow-sm hover:shadow-md`}
              >
                <Send size={18} />
                <span>Send</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Combined Follow Me and Status */}
            <motion.div variants={itemVariants} className="p-6 rounded-xl border border-gray-200 card group overflow-hidden shadow-lg shadow-gray-300/20">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-4">Connect with Me</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Find Me</h4>
                  <div className="flex flex-col space-y-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} ${social.color} transition-all duration-200`}
                        >
                          <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-zinc-100'} rounded-full flex items-center justify-center shadow-sm hover:shadow-md`}>
                            <Icon size={20} />
                          </div>
                          <span className="font-medium text-lg ">{social.value}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Open to Opportunities</span>
                  </div>
                  <p className="text-sm mt-2">Seeking internships & entry-level roles</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}