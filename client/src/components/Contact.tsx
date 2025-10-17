"use client";
import React from 'react';
import { Mail, Phone, MapPin, Globe, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-gray-100 py-16 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a 
                    href="mailto:shahriarkabir078@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    shahriarkabir078@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a 
                    href="tel:+8801795148792" 
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +880 1795 148792
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Location</h4>
                  <p className="text-white">Uttara, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Website</h4>
                  <a 
                    href="https://shahriarkabir.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    shahriarkabir.netlify.app
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <Github className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">GitHub</h4>
                  <a 
                    href="https://github.com/shahriarkabirT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    github.com/shahriarkabirT
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Personal Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-400 text-sm">Full Name</h4>
                <p className="text-white">A. T. M Shahriar Kabir</p>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm">Date of Birth</h4>
                <p className="text-white">January 2, 2001</p>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm">Gender</h4>
                <p className="text-white">Male</p>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm">Nationality</h4>
                <p className="text-white">Bangladeshi</p>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm">Languages</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
                    English (Fluent)
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
                    Bangla (Native)
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
                    Hindi (Basic)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Currently open to new opportunities and collaborations. Don't hesitate to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;