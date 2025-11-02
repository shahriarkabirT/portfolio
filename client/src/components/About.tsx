"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Code, School, Award, ExternalLink } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack developer and tech entrepreneur passionate about building innovative solutions
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 bg-gray-800 rounded-full overflow-hidden border-4 border-indigo-500/20">
                {/* Replace with your actual photo */}
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                  <span className="text-sm"><img src='shahriar.png' alt=''></img></span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 px-4 py-2 rounded-full">
                <span className="text-white font-medium">Shahriar</span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">A. T. M Shahriar Kabir</h3>
                <p className="text-gray-400">Full-stack Developer | Tech Entrepreneur</p>
              </div>

              <p className="text-gray-300">
                I'm a full-stack developer with expertise in MERN stack and a strong foundation in software development principles. 
                Experienced in building responsive web applications, implementing authentication systems, and managing VPS hosting 
                environments. Passionate about exploring AI technologies and software quality assurance methodologies.
              </p>

              {/* Startup Info */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-3 mb-3">
                  <Rocket className="w-6 h-6 text-indigo-400" />
                  <a href='https://ccloude.com'><h4 className="text-xl font-semibold text-white">Collaborative Cloud</h4></a>
                </div>
                <p className="text-gray-300 mb-4">
                  As founder of Collaborative Cloud, I'm building innovative cloud solutions that empower teams to work more efficiently. 
                  Our platform integrates cutting-edge technologies to streamline collaboration and project management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
                    Cloud Computing
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
                    Team Collaboration
                  </span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
                    SaaS Platform
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                  <Briefcase className="w-5 h-5 text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Experience</h4>
                    <p className="text-gray-400 text-sm">4+ years in web development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                  <Code className="w-5 h-5 text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Projects</h4>
                    <p className="text-gray-400 text-sm">100+ completed projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                  <School className="w-5 h-5 text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Education</h4>
                    <p className="text-gray-400 text-sm">BSc in CSE from IUBAT</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                  <Award className="w-5 h-5 text-indigo-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Achievements</h4>
                    <p className="text-gray-400 text-sm">Multiple hackathon participations</p>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
        <div className="mt-16">

        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-12"
                >
                  <a 
                    href="https://www.fiverr.com/s/0bxz8Vk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Hire Me on Fiverr
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </motion.div>
              </div>
      </div>
    </section>
  );
};

export default AboutMe;