"use client";
import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const workExperiences = [
  {
    company: "Gonoshashaya Samaj Vittik Medical College",
    position: "Contractual Developer",
    duration: "Feb 2025 - Mar 2025",
    description: "Developed Official Portal",
    features: [
      "Notice, Image, Faculty management",
      "Bulk Alumni Uploads",
      "Dynamic Information Update"
    ],
    stack: "MERN",
    link: "https://gonosvmc.edu.bd/",
    linkText: "View Portal"
  },
  {
    company: "Vidyamayee Government Girls Highschool, Mymensingh",
    position: "Contractual Developer",
    duration: "Dec 2024 - Feb 2025",
    description: "Developed Official Portal and Result Processing System",
    features: [
      "Authentication system",
      "Notice, Image, Video Uploads",
      "Dynamic Information Update",
      "ID card, Testimonial, Marksheet generator",
      "Bulk information upload via sheets"
    ],
    stack: "MERN",
    links: [
      { url: "https://vidyamoyee.vercel.app/", text: "View Portal" },
      { url: "https://result.vidyamayee.edu.bd", text: "Result System" }
    ]
  },
  {
    company: "CodeElevate Tech, San Francisco, California (Remote)",
    position: "Jr Software Engineer (Intern)",
    duration: "May 2024 - Aug 2024",
    description: "Developed Elevatemart Ecommerce Web Application",
    features: [
      "Complete full functional ecommerce site",
      "React JS, Redux, Redux toolkit",
      "Next JS backend with Node JS, Express JS",
      "MongoDB database",
      "RESTful API implementation"
    ],
    link: "https://urbargent.vercel.app/",
    linkText: "View Project",
    stack: "MERN"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const WorkExperience = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Experience</span>
        </motion.h2>
        
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-blue-900/30 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                    <p className="text-gray-400">{experience.position}</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-blue-400">
                  {experience.duration}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-300 mb-3">{experience.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400">
                    {experience.stack} Stack
                  </span>
                  {experience.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {experience.link && (
                <a 
                  href={experience.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {experience.linkText}
                </a>
              )}
              
              {experience.links && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {experience.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;