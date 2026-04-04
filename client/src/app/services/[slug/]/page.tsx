"use client";
import { useEffect, useState, useRef, use } from "react";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { Check, ChevronDown, ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";
import Head from 'next/head';

const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // Replace with your WhatsApp number

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="border-b border-gray-200 dark:border-gray-800 py-5 cursor-pointer group"
    >
      <div className="flex justify-between items-center gap-4">
        <span className="text-[15px] font-medium text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {q}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-indigo-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "200px" : "0", opacity: open ? 1 : 0 }}
      >
        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ServiceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const data = servicesData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  const WHATSAPP_MSG = encodeURIComponent(`Hi! I saw your ${data.title} service and I'm interested. Can we talk?`);
  
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] pt-16 selection:bg-indigo-500 selection:text-white">
      {/* SEO Title Simulation - Should ideally use generateMetadata in a layout/page but for client component using standard tags or just relying on layout */}
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-8 border-b border-gray-100 dark:border-gray-800/50">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[80px] pointer-events-none" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDggMEwwIDAgMCA0OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDM3LCA5OSwgMjM1LCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              {data.heroBadge}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)] mb-6"
          >
            {data.title}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
              {data.subtitle}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10 mx-auto sm:mx-0"
          >
            {data.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
          >
            <a 
              href={data.fiverrUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Order on Fiverr
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-transparent text-[#25D366] hover:bg-[#25D366]/10 px-8 py-3.5 rounded-xl font-semibold border-2 border-[#25D366] hover:-translate-y-0.5 transition-all outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black/20">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-xs font-semibold text-[var(--text-secondary)] mb-4 uppercase tracking-wider">
              What You Get
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Everything your feature needs
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Not just bare minimum code — a complete, production-ready integration built into your existing app architecture.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-800 rounded-2xl p-7 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-[17px] font-bold text-[var(--text-primary)] mb-2.5">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="packages" className="py-24 px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-semibold mb-4 uppercase tracking-wider">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              No hidden fees. No upsell tricks. Pay once, get exceptional code quality.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.packages.map((pkg, i) => (
              <FadeIn key={pkg.name} delay={i * 0.15}>
                <div className={`relative bg-white dark:bg-[#111318] border rounded-2xl p-8 flex flex-col h-full transition-all hover:-translate-y-1 ${
                  pkg.tag 
                    ? "border-indigo-500 shadow-xl shadow-indigo-500/10 dark:shadow-none" 
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-sm"
                }`}>
                  {pkg.tag && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                      {pkg.tag}
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2">
                      {pkg.name}
                    </p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`text-4xl font-extrabold ${pkg.tag ? "text-indigo-600 dark:text-indigo-400" : "text-[var(--text-primary)]"}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Delivery in {pkg.delivery}</p>
                  </div>

                  <div className="flex-1 space-y-3 mb-8">
                    {pkg.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={data.fiverrUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all ${
                      pkg.tag 
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20" 
                        : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-[var(--text-primary)] border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    Select {pkg.name}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-black/20">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-lg text-xs font-semibold text-[var(--text-secondary)] mb-4 uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Common Questions
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800/50">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-800 rounded-3xl p-10 sm:p-16 text-center overflow-hidden shadow-xl shadow-black/5 dark:shadow-none">
            {/* Abstract bg element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                Ready to elevate your project?
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-xl mx-auto">
                Order on Fiverr or message me on WhatsApp. I'll confirm I can handle your requirements before you spend a dollar.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={data.fiverrUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition-all"
                >
                  Order on Fiverr
                </a>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent text-[#25D366] hover:bg-[#25D366]/5 px-8 py-3.5 rounded-xl font-semibold border-2 border-[#25D366] hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  WhatsApp me
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
