"use client";
import { useTheme } from "@/app/ThemeProvider";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Code2,
  CreditCard,
  Layers,
  Menu,
  Rocket,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

/* ───────────────────────────── Service Data ──────────────────────────── */
const services = [
  {
    title: "Chatbot Integration",
    description: "AI-powered chatbots that engage visitors and automate support",
    icon: Bot,
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/40",
    iconColor: "text-violet-600 dark:text-violet-400",
    href: "/services/chatbot-integration",
  },
  {
    title: "Payment Integration",
    description: "Stripe, SSLCommerz & custom payment gateway setups",
    icon: CreditCard,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-950/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    href: "/services/payment-integration",
  },
  {
    title: "Next.js SEO",
    description: "Technical SEO, Core Web Vitals & search performance",
    icon: Search,
    color: "from-blue-500 to-cyan-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    href: "/services/nextjs-seo",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web apps with React, Node & modern stacks",
    icon: Code2,
    color: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/40",
    iconColor: "text-orange-600 dark:text-orange-400",
    href: "/services/full-stack-development",
  },
  {
    title: "SaaS Development",
    description: "Multi-tenant platforms with auth, billing & dashboards",
    icon: Rocket,
    color: "from-pink-500 to-rose-600",
    bgLight: "bg-pink-50",
    bgDark: "dark:bg-pink-950/40",
    iconColor: "text-pink-600 dark:text-pink-400",
    href: "/services/saas-development",
  },
  {
    title: "Ecommerce Web App",
    description: "Complete online stores with cart, checkout & inventory",
    icon: ShoppingCart,
    color: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-50",
    bgDark: "dark:bg-indigo-950/40",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    href: "/services/ecommerce-web-app",
  },
];

const navLinks = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Useful Blogs", href: "/blog" },
];

/* ────────────────────────────── Component ────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownAnimating, setDropdownAnimating] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Scroll listener ────────────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ──────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Dropdown handlers (with debounce to prevent flicker) ──────────── */
  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownAnimating(false);
    setDropdownVisible(true);
  }, []);

  const closeDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => {
      setDropdownAnimating(true);
      setTimeout(() => {
        setDropdownVisible(false);
        setDropdownAnimating(false);
      }, 180);
    }, 150);
  }, []);

  /* ── Mouse glow tracking for service cards ─────────────────────────── */
  const handleCardMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const isServiceActive = pathname.startsWith("/services");

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass-panel border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/[0.03] dark:shadow-black/[0.15]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo ──────────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center group"
            >
              <div className="relative">
                
              </div>
              <span className="text-lg text-black dark:text-white font-poppins font-bold">
              Shahriar Kabir
                
              </span>
            </Link>

            {/* ── Desktop Navigation ────────────────────────────────── */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services Trigger */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isServiceActive || dropdownVisible
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800/60"
                  }`}
                  onClick={() => setDropdownVisible((v) => !v)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      dropdownVisible ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ── Mega Dropdown ─────────────────────────────────── */}
                {dropdownVisible && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[680px] ${
                      dropdownAnimating ? "mega-dropdown-exit" : "mega-dropdown-enter"
                    }`}
                  >
                    <div className="glass-panel rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-2xl shadow-black/[0.08] dark:shadow-black/[0.3] overflow-hidden">
                      {/* Header */}
                      <div className="px-6 pt-5 pb-3">
                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                          What I Offer
                        </p>
                      </div>

                      {/* Service Grid */}
                      <div className="grid grid-cols-2 gap-1 px-3 pb-3">
                        {services.map((service, i) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className={`service-card-glow flex items-start space-x-3 p-4 rounded-xl transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 stagger-child`}
                            style={{ animationDelay: `${i * 50}ms` }}
                            onMouseMove={handleCardMouseMove}
                            onClick={() => setDropdownVisible(false)}
                          >
                            <div
                              className={`flex-shrink-0 w-10 h-10 rounded-lg ${service.bgLight} ${service.bgDark} flex items-center justify-center`}
                            >
                              <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-[var(--text-primary)] leading-tight">
                                {service.title}
                              </p>
                              <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Footer CTA */}
                      <div className="border-t border-gray-200/60 dark:border-gray-700/60 px-6 py-3.5">
                        <Link
                          href="/services"
                          className="flex items-center justify-between group/cta"
                          onClick={() => setDropdownVisible(false)}
                        >
                          <div>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">
                              View All Services
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">
                              Explore my full range of solutions
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-indigo-500 transition-transform duration-200 group-hover/cta:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 nav-active-indicator"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* ── Right Side ────────────────────────────────────────── */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-200 group"
                aria-label="Toggle theme"
              >
                <span className="text-sm transition-transform duration-300 group-hover:scale-110">
                  {theme === "dark" ? "🌙" : "☀️"}
                </span>
              </button>

              {/* CTA - Desktop */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-px"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-200"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 text-[var(--text-primary)]" />
                ) : (
                  <Menu className="w-5 h-5 text-[var(--text-primary)]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════ Mobile Full-Screen Drawer ═══════════════════ */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 mobile-overlay"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass-panel border-l border-gray-200/50 dark:border-gray-700/50 mobile-drawer-enter overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between h-16 px-5 border-b border-gray-200/50 dark:border-gray-700/50">
              <span className="text-lg font-bold text-[var(--text-primary)]">
                Menu
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-[var(--text-primary)]" />
              </button>
            </div>

            <div className="px-5 py-6 space-y-2">
              {/* Services Accordion */}
              <div>
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-semibold transition-all duration-200 ${
                    isServiceActive || mobileServicesOpen
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                      : "text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800/60"
                  }`}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 space-y-1 pl-2">
                    {services.map((service, i) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors stagger-child"
                        style={{ animationDelay: `${i * 60}ms` }}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg ${service.bgLight} ${service.bgDark} flex items-center justify-center flex-shrink-0`}
                        >
                          <service.icon
                            className={`w-4 h-4 ${service.iconColor}`}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">
                            {service.title}
                          </p>
                          <p className="text-xs text-[var(--text-secondary)] leading-tight mt-0.5">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <Link
                      href="/services"
                      className="flex items-center space-x-2 px-3 py-2.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition-colors stagger-child"
                      style={{ animationDelay: `${services.length * 60}ms` }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                        : "text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800/60"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 w-full px-5 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-base font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
