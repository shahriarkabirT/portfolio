"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
} from "lucide-react";

const workExperiences = [
  {
    company: "CloudGen",
    position: "Full-stack Developer",
    type: "Full-time",
    duration: "Nov 2024 - Present",
    location: "Mirpur DOHS, Dhaka",
    description:
      "Building enterprise-grade web platforms and leading architecture decisions for scalable cloud solutions.",
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
    color: "blue",
    current: true,
  },
  {
    company: "Okobiz",
    position: "Team Lead & Web Developer",
    type: "Full-time",
    duration: "Jun 2024 - Nov 2024",
    location: "Mirpur, Dhaka",
    description:
      "Led a 5-person development squad delivering end-to-end web solutions for diverse client portfolios.",
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
    color: "indigo",
    current: false,
  },
  {
    company: "Gonoshashaya Samaj Vittik Medical College",
    position: "Contractual Developer",
    type: "Contract",
    duration: "Feb 2025 - Mar 2025",
    location: "Dhaka",
    description:
      "Engineered the official college portal with CMS, alumni network, and administrative dashboard.",
    features: ["CMS", "Bulk Upload", "Alumni", "Faculty", "Dashboard"],
    stack: "MERN",
    link: "https://gonosvmc.edu.bd/",
    linkText: "View Portal",
    color: "emerald",
    current: false,
  },
  {
    company: "Vidyamayee Govt. Girls Highschool",
    position: "Contractual Developer",
    type: "Contract",
    duration: "Dec 2024 - Feb 2025",
    location: "Mymensingh",
    description:
      "Built the school portal and an automated result processing system with PDF generation and bulk operations.",
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
    color: "pink",
    current: false,
  },
  {
    company: "CodeElevate Tech",
    position: "Jr Software Engineer (Intern)",
    type: "Remote Intern",
    duration: "May 2024 - Aug 2024",
    location: "San Francisco, CA (Remote)",
    description:
      "Developed Elevatemart — a production-ready ecommerce platform with full product lifecycle management.",
    features: [
      "E-commerce",
      "React",
      "Redux",
      "Next.js",
      "MongoDB",
      "REST API",
    ],
    stack: "MERN",
    link: "https://urbargent.vercel.app/",
    linkText: "View Project",
    color: "amber",
    current: false,
  },
];

const colorMap = {
  blue: {
    dot: "bg-blue-500 shadow-blue-500/50",
    badge: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    tag: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-950/30 dark:hover:text-blue-400 dark:hover:border-blue-800",
    border: "hover:border-blue-500/40",
    accent: "from-blue-500 to-blue-600",
  },
  indigo: {
    dot: "bg-indigo-500 shadow-indigo-500/50",
    badge: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
    tag: "hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-400 dark:hover:border-indigo-800",
    border: "hover:border-indigo-500/40",
    accent: "from-indigo-500 to-indigo-600",
  },
  emerald: {
    dot: "bg-emerald-500 shadow-emerald-500/50",
    badge: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    tag: "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400 dark:hover:border-emerald-800",
    border: "hover:border-emerald-500/40",
    accent: "from-emerald-500 to-emerald-600",
  },
  pink: {
    dot: "bg-pink-500 shadow-pink-500/50",
    badge: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800",
    tag: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 dark:hover:bg-pink-950/30 dark:hover:text-pink-400 dark:hover:border-pink-800",
    border: "hover:border-pink-500/40",
    accent: "from-pink-500 to-pink-600",
  },
  amber: {
    dot: "bg-amber-500 shadow-amber-500/50",
    badge: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
    tag: "hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 dark:hover:bg-amber-950/30 dark:hover:text-amber-400 dark:hover:border-amber-800",
    border: "hover:border-amber-500/40",
    accent: "from-amber-500 to-amber-600",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WorkExperience = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 mb-5">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Career Timeline
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                Work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                  Experience
                </span>
              </h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.fiverr.com/s/0bxz8Vk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-indigo-500/25 hover:shadow-lg transition-all duration-300 hover:-translate-y-px"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Timeline ────────────────────────────────────────────── */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-indigo-500/20 to-transparent hidden md:block" />

          <div className="space-y-3">
            {workExperiences.map((exp, index) => {
              const colors = colorMap[exp.color] || colorMap.blue;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-5 items-center justify-center">
                    <div
                      className={`w-[10px] h-[10px] rounded-full ${colors.dot} ring-4 ring-white dark:ring-[#0a0a0a] z-10 ${
                        exp.current ? "animate-pulse" : ""
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`group relative bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${colors.border}`}
                  >
                    {/* Top accent */}
                    <div
                      className={`h-[2px] bg-gradient-to-r ${colors.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="px-5 py-4">
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <h3 className="text-base font-bold text-[var(--text-primary)] truncate">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse" />
                              Current
                            </span>
                          )}
                          <span className="text-xs text-[var(--text-secondary)] hidden sm:inline">·</span>
                          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hidden sm:inline truncate">
                            {exp.position}
                          </span>
                        </div>

                        {/* Meta badges */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${colors.badge}`}
                          >
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-gray-200 dark:border-gray-700 text-[var(--text-secondary)] bg-gray-50 dark:bg-gray-800/50">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Position (mobile only) + Location */}
                      <div className="flex items-center gap-3 mb-2 text-xs text-[var(--text-secondary)]">
                        <span className="sm:hidden font-semibold text-indigo-600 dark:text-indigo-400">
                          {exp.position}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description + Stack inline */}
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                        {exp.description}
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-[10px] font-mono font-medium text-[var(--text-secondary)]">
                          ⚡ {exp.stack}
                        </span>
                      </p>

                      {/* Feature Tags + Links in one row */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1">
                          {exp.features.map((feature, i) => (
                            <span
                              key={i}
                              className={`px-2 py-0.5 rounded text-[11px] font-medium border border-gray-200 dark:border-gray-700 text-[var(--text-secondary)] bg-transparent transition-all duration-200 cursor-default ${colors.tag}`}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        {(exp.link || exp.links) && (
                          <div className="flex gap-3 flex-shrink-0">
                            {exp.link && (
                              <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 whitespace-nowrap"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {exp.linkText}
                              </a>
                            )}
                            {exp.links?.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 whitespace-nowrap"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {link.text}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
