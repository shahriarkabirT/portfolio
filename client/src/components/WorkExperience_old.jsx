"use client";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const workExperiences = [
  {
    company: "CloudGen",
    position: "Full-stack Developer",
    duration: "Nov 2024 - Present",
    description: "Developing enterprise solutions at Mirpur DOHS First Gate",
    features: ["MERN", "Next.js", "Prisma", "PostgreSQL", "VPS", "Docker", "CI/CD"],
    stack: "MERN + Next.js + Prisma + PostgreSQL",
    link: "https://cloudgen.com.bd",
    linkText: "Visit CloudGen",
  },
  {
    company: "Okobiz",
    position: "Team Lead & Web Developer",
    duration: "Jun 2024 - Nov 2024",
    description:
      "Leading development team and building web solutions in Mirpur",
    features: ["Leadership", "MERN", "Next.js", "React", "Prisma", "PostgreSQL", "Docker", "CI/CD"],
    stack: "MERN + Next.js + Prisma + PostgreSQL",
    link: "https://okobiz.com",
    linkText: "Visit Okobiz",
  },
  {
    company: "Gonoshashaya Samaj Vittik Medical College",
    position: "Contractual Developer",
    duration: "Feb 2025 - Mar 2025",
    description: "Developed Official Portal",
    features: ["CMS", "Bulk Upload", "Alumni", "Faculty", "Dashboard"],
    stack: "MERN",
    link: "https://gonosvmc.edu.bd/",
    linkText: "View Portal",
  },
  {
    company: "Vidyamayee Government Girls Highschool, Mymensingh",
    position: "Contractual Developer",
    duration: "Dec 2024 - Feb 2025",
    description: "Developed Official Portal and Result Processing System",
    features: ["Auth", "CMS", "PDF Generator", "ID Cards", "Marksheets", "Bulk Upload"],
    stack: "MERN",
    links: [
      { url: "https://vidyamoyee.vercel.app/", text: "View Portal" },
      { url: "https://result.vidyamayee.edu.bd", text: "Result System" },
    ],
  },
  {
    company: "CodeElevate Tech, San Francisco, California (Remote)",
    position: "Jr Software Engineer (Intern)",
    duration: "May 2024 - Aug 2024",
    description: "Developed Elevatemart Ecommerce Web Application",
    features: ["E-commerce", "React", "Redux", "Next.js", "MongoDB", "REST API"],
    link: "https://urbargent.vercel.app/",
    linkText: "View Project",
    stack: "MERN",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WorkExperience = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[var(--background)] relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/30"
          >
            <span className="text-sm font-semibold text-blue-600">
              EXPERIENCE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
              Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Transforming ideas into robust, scalable solutions with modern web
            technologies and team leadership
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-20 flex-wrap"
        >
          <a
            href="https://www.fiverr.com/s/0bxz8Vk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-7 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 -skew-x-12"></div>
            <span className="relative">Hire Me on Fiverr</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://okobiz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-3 bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-lg font-semibold text-[var(--text-primary)] hover:border-blue-500/60 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span>Okobiz</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://cloudgen.com.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-3 bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-lg font-semibold text-[var(--text-primary)] hover:border-indigo-500/60 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span>CloudGen</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-5">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl overflow-hidden"
            >
              {/* Card background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 -z-10"></div>

              {/* Top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-indigo-500/0 group-hover:via-blue-500 transition-all duration-500"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-5">
                <div className="flex items-start gap-5 flex-1">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-xl flex-shrink-0 mt-1"
                  >
                    <Briefcase className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 leading-tight">
                      {experience.company}
                    </h3>
                    <p className="text-[var(--text-secondary)] font-semibold text-lg">
                      {experience.position}
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/12 rounded-xl border border-blue-500/25 flex-shrink-0"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-bold text-blue-600">
                    {experience.duration}
                  </span>
                </motion.div>
              </div>

              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-base">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-6 pb-6 border-b border-[var(--border)]">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/10 rounded-full text-sm font-semibold text-blue-600 border border-blue-500/20">
                  {experience.stack}
                </span>
                {experience.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[var(--border)] rounded-full text-sm text-[var(--text-secondary)] font-medium hover:bg-blue-500/10 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {experience.link && (
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm group/link"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform" />
                    {experience.linkText}
                  </motion.a>
                )}

                {experience.links &&
                  experience.links.map((link, i) => (
                    <motion.a
                      whileHover={{ x: 4 }}
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm group/link"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/link:translate-x-1 transition-transform" />
                      {link.text}
                    </motion.a>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
