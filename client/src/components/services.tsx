"use client";
import { motion } from "framer-motion";
import { Globe, GraduationCap, Server } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      category: "Web Solutions",
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      items: [
        "Custom Web Development",
        "Custom App Development",
        "Web Security Solutions",
        "E-commerce Solutions",
        "API Development",
      ],
      cta: "Learn more",
      link: "/services/web-development",
    },
    {
      category: "Education Solutions",
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      items: [
        "School/College Management",
        "University Automation",
        "Result Processing",
        "Educational Smart Website",
      ],
      cta: "Learn more",
      link: "/services/education-solutions",
    },
    {
      category: "Hosting Services",
      icon: <Server className="w-8 h-8 text-green-500" />,
      items: [
        "Domain Registration & SSL",
        "Shared Hosting (Windows)",
        "Shared Hosting (Linux)",
        "Cloud Hosting (Windows)",
        "Cloud Hosting (Linux)",
      ],
      cta: "Learn more",
      link: "/services/hosting-services",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="py-16 px-6 md:px-12 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
              Comprehensive Services
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] dark:text-gray-400 max-w-3xl mx-auto">
            I deliver robust digital ecosystems for <span className="text-[var(--text-primary)] font-semibold">Websites</span> and <span className="text-[var(--text-primary)] font-semibold">Web Applications</span>, leading the entire execution lifecycle from <span className="text-[var(--text-primary)] font-semibold">Strategic Discovery</span> to <span className="text-[var(--text-primary)] font-semibold">Production-Grade Deployment</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] dark:text-white">
                    {service.category}
                  </h3>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {service.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
