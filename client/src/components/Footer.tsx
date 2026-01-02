"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--border)] dark:bg-[#0a0a0a] dark:text-gray-300 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--text-primary)] text-lg font-semibold mb-4 dark:text-white">
              A. T. M Shahriar Kabir
            </h3>
            <p className="mb-4 text-[var(--text-secondary)] dark:text-gray-300">
              Full-stack developer specializing in MERN stack with a passion for
              building responsive web applications and exploring AI
              technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shahriarkabirT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriarkabirtasin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--text-primary)] text-lg font-semibold mb-4 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-400"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-400"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--text-primary)] text-lg font-semibold mb-4 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[var(--text-secondary)] mt-0.5" />
                <a
                  href="mailto:shahriarkabir078@gmail.com"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-300"
                >
                  shahriarkabir078@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[var(--text-secondary)] mt-0.5" />
                <a
                  href="tel:+8801795148792"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-300"
                >
                  +880 1795 148792
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--text-secondary)] mt-0.5" />
                <span className="text-[var(--text-secondary)] dark:text-gray-300">
                  Uttara, Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Website Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--text-primary)] text-lg font-semibold mb-4 dark:text-white">
              Website
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://shahriarkabir.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://urbargent.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-300"
                >
                  UrbarGent
                </a>
              </li>
              <li>
                <a
                  href="https://ccloude.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors text-[var(--text-secondary)] dark:text-gray-300"
                >
                  Collaborative Cloud
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-[var(--border)] mt-4 pt-8 text-center text-[var(--text-secondary)] text-sm dark:text-gray-500"
        >
          <p>© {currentYear} A. T. M Shahriar Kabir. All rights reserved.</p>
          <p className="mt-1">Built with React, Next.js, and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
