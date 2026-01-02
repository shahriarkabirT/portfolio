"use client";
import { motion } from "framer-motion";
import { Cloud, Code2, GitBranch, Server, Terminal } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="w-6 h-6 text-indigo-500" />,
    items: [
      "React JS",
      "Next JS",
      "Redux",
      "Vanilla JavaScript",
      "CSS",
      "HTML",
    ],
  },
  {
    category: "Backend & Database",
    icon: <Server className="w-6 h-6 text-yellow-500" />,
    items: ["Node JS", "Express JS", "MongoDB", "SQL", "PostgreSQL"],
  },
  {
    category: "Version Control",
    icon: <GitBranch className="w-6 h-6 text-pink-500" />,
    items: ["Git", "GitHub"],
  },
  {
    category: "Hosting Platforms",
    icon: <Cloud className="w-6 h-6 text-green-500" />,
    items: ["VPS", "Render", "Vercel", "Netlify", "Webuzo"],
  },
  {
    category: "Programming Languages",
    icon: <Terminal className="w-6 h-6 text-blue-500" />,
    items: ["JavaScript", "PHP", "Java", "C++", "C#", "C"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[var(--background)] text-[var(--foreground)] dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] dark:text-white mb-12 text-center"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
            Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ category, items, icon }, index) => (
            <motion.div
              key={category}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              <ul className="space-y-3 pl-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuously expanding my skill set with the latest technologies and
            best practices in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
