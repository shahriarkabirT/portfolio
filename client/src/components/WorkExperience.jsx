"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const workExperiences = [
  {
    company: "CloudGen",
    position: "Full-stack Developer",
    duration: "Nov 2024 - Present",
    description: "Developing enterprise solutions at Mirpur DOHS First Gate",
    features: [
      "Node.js",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "VPS",
      "Docker",
      "CI/CD",
    ],
    stack: "Node.js + Next.js + Prisma + PostgreSQL",
    link: "https://cloudgen.com.bd",
    linkText: "Visit CloudGen",
  },
  {
    company: "Okobiz",
    position: "Team Lead & Web Developer",
    duration: "Jun 2024 - Nov 2024",
    description:
      "Leading development team and building web solutions in Mirpur",
    features: [
      "Leadership",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Next.js",
      "React",
      "CI/CD",
    ],
    stack: "Node.js + Express.js + MongoDB + Next.js + React",
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
    features: [
      "Auth",
      "CMS",
      "PDF Generator",
      "ID Cards",
      "Marksheets",
      "Bulk Upload",
    ],
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
    features: [
      "E-commerce",
      "React",
      "Redux",
      "Next.js",
      "MongoDB",
      "REST API",
    ],
    link: "https://urbargent.vercel.app/",
    linkText: "View Project",
    stack: "MERN",
  },
];

const WorkExperience = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Experience
            </span>
          </h2>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://www.fiverr.com/s/0bxz8Vk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-sm font-semibold text-white hover:shadow-lg transition-all"
            >
              Hire Me
            </a>
            <a
              href="https://okobiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[var(--card-border)] rounded-lg text-sm font-semibold text-[var(--text-primary)] hover:border-blue-500 transition-all"
            >
              Okobiz
            </a>
            <a
              href="https://cloudgen.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[var(--card-border)] rounded-lg text-sm font-semibold text-[var(--text-primary)] hover:border-indigo-500 transition-all"
            >
              CloudGen
            </a>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:shadow-2xl shadow-md overflow-hidden transition-all duration-300 hover:border-blue-500/50"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 -z-10"></div>

              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Left Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-blue-500 to-indigo-600 group-hover:h-full transition-all duration-500"></div>

              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5 mt-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-blue-600 transition-colors">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] font-medium">
                    {experience.position}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full border border-blue-500/30 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-sm shadow-blue-500"></div>
                  <span className="text-xs font-bold text-blue-600 whitespace-nowrap">
                    {experience.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                {experience.description}
              </p>

              {/* Stack Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/15 rounded-full text-xs font-bold text-blue-600 border border-blue-500/20 shadow-sm">
                  {experience.stack}
                </span>
              </div>

              {/* Features - Compact Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {experience.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[var(--border)] rounded-md text-xs text-[var(--text-secondary)] font-medium hover:bg-blue-500/10 hover:text-blue-600 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(experience.link || experience.links) && (
                <div className="flex gap-4 text-xs pt-4 mt-4 border-t border-[var(--border)]">
                  {experience.link && (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold hover:gap-2 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {experience.linkText}
                    </a>
                  )}
                  {experience.links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold hover:gap-2 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
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
