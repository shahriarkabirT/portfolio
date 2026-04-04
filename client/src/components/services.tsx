"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  CreditCard,
  Rocket,
  Search,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Chatbot Integration",
    slug: "chatbot-integration",
    description:
      "AI-powered chatbots that engage visitors and automate support",
    icon: Bot,
    gradient: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/40",
    iconColor: "text-violet-600 dark:text-violet-400",
    borderHover: "hover:border-violet-400/50",
    shadowHover: "hover:shadow-violet-500/10",
    features: [
      "Custom AI chatbot development",
      "Natural language processing integration",
      "Multi-platform deployment (web, WhatsApp, Messenger)",
      "Automated customer support workflows",
      "Analytics & conversation insights",
    ],
  },
  {
    title: "Payment Integration",
    slug: "payment-integration",
    description:
      "Stripe, SSLCommerz & custom payment gateway setups",
    icon: CreditCard,
    gradient: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-950/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-400/50",
    shadowHover: "hover:shadow-emerald-500/10",
    features: [
      "Stripe & SSLCommerz integration",
      "Subscription & recurring billing",
      "PCI-compliant payment flows",
      "Multi-currency support",
      "Payment analytics dashboard",
    ],
  },
  {
    title: "Next.js SEO",
    slug: "nextjs-seo",
    description:
      "Technical SEO, Core Web Vitals & search performance",
    icon: Search,
    gradient: "from-blue-500 to-cyan-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderHover: "hover:border-blue-400/50",
    shadowHover: "hover:shadow-blue-500/10",
    features: [
      "Server-side rendering & static generation",
      "Core Web Vitals optimization",
      "Structured data & JSON-LD",
      "Sitemap & robots.txt configuration",
      "Performance auditing & monitoring",
    ],
  },
  {
    title: "Full Stack Development",
    slug: "full-stack-development",
    description:
      "End-to-end web apps with React, Node & modern stacks",
    icon: Code2,
    gradient: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/40",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderHover: "hover:border-orange-400/50",
    shadowHover: "hover:shadow-orange-500/10",
    features: [
      "React / Next.js frontend architecture",
      "Node.js / Express backend APIs",
      "MongoDB & PostgreSQL databases",
      "Authentication & authorization",
      "CI/CD & cloud deployment",
    ],
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    description:
      "Multi-tenant platforms with auth, billing & dashboards",
    icon: Rocket,
    gradient: "from-pink-500 to-rose-600",
    bgLight: "bg-pink-50",
    bgDark: "dark:bg-pink-950/40",
    iconColor: "text-pink-600 dark:text-pink-400",
    borderHover: "hover:border-pink-400/50",
    shadowHover: "hover:shadow-pink-500/10",
    features: [
      "Multi-tenant architecture design",
      "User management & role-based access",
      "Subscription billing integration",
      "Admin dashboards & analytics",
      "Scalable cloud infrastructure",
    ],
  },
  {
    title: "Ecommerce Web App",
    slug: "ecommerce-web-app",
    description:
      "Complete online stores with cart, checkout & inventory",
    icon: ShoppingCart,
    gradient: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-50",
    bgDark: "dark:bg-indigo-950/40",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    borderHover: "hover:border-indigo-400/50",
    shadowHover: "hover:shadow-indigo-500/10",
    features: [
      "Product catalog & inventory management",
      "Shopping cart & checkout flow",
      "Order tracking & management",
      "Customer accounts & wishlists",
      "Admin panel with sales analytics",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="pt-28 pb-20 px-6 md:px-12 bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              What I Offer
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5">
            Services I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
              Specialize In
            </span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            I deliver robust digital ecosystems for{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Websites
            </span>{" "}
            and{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Web Applications
            </span>
            , leading the entire execution lifecycle from{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Strategic Discovery
            </span>{" "}
            to{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Production-Grade Deployment
            </span>
            .
          </p>
        </motion.div>

        {/* ── Service Cards Grid ──────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-800 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${service.borderHover} ${service.shadowHover}`}
            >
              {/* Gradient accent line at top */}
              <div
                className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${service.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Icon + Title */}
              <div className="flex items-center space-x-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl ${service.bgLight} ${service.bgDark} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-tight">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.iconColor}`}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/services/${service.slug}`}
                className={`inline-flex items-center space-x-2 text-sm font-semibold transition-all duration-200 ${service.iconColor} hover:underline underline-offset-4`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-px"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-[var(--text-secondary)]">
              Free consultation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
