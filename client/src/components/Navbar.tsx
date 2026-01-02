"use client";
import { useTheme } from "@/app/ThemeProvider";
import { Code, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/work-experience" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "My Services", href: "/services" },
    { name: "About Me", href: "/about" },
  ];

  return (
    <nav
      className={`fixed w-full z-20 transition-all duration-300 backdrop-blur ${
        scrolled
          ? "bg-[var(--nav-bg-scrolled)] border-b border-[var(--border)] shadow-lg"
          : "bg-[var(--nav-bg)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-[var(--text-primary)] dark:text-white">
              Dev<span className="text-blue-500">Portfolio</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={` py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-[var(--text-secondary)] hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side: Theme + Socials + Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition text-sm"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            {/* Social Icons (Desktop only) */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/shahriarkabirT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark:text-gray-400 dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriarkabirtasin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark:text-gray-400 dark:hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:shahriarkabir078@gmail.com"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark:text-gray-400 dark:hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-3 pb-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Social Icons - Mobile */}
          <div className="flex justify-center space-x-6 py-4 border-t border-gray-700">
            <a
              href="https://github.com/shahriarkabirT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahriarkabirtasin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:shahriarkabir078@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
