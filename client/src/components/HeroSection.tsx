"use client";
import { ChevronDown, ExternalLink, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "Full Stack Developer",
    "React Specialist",
    "App Developer",
    "Web Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const shouldDelete = isDeleting;
      const speed = isDeleting ? 50 : typingSpeed;

      if (!shouldDelete && typedText === currentPhrase) {
        setIsDeleting(true);
        setTypingSpeed(100);
        return;
      }

      if (shouldDelete && typedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        setTypingSpeed(150);
        return;
      }

      const newText = shouldDelete
        ? currentPhrase.substring(0, typedText.length - 1)
        : currentPhrase.substring(0, typedText.length + 1);

      setTypedText(newText);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen py-16 overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Subtle background pattern for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-transparent dark:from-transparent dark:via-blue-900/10 dark:to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwMCAwIEwgMCAwIDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 dark:opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content - Takes 7 columns */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Professional greeting */}
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Available for new opportunities
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
                A.T.M. Shahriar
                <span className="block text-blue-600 dark:text-blue-400">
                  Kabir
                </span>
              </h1>

              <div className="h-16 flex items-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl text-[var(--text-secondary)] font-light">
                  <span className="text-[var(--text-primary)] font-medium">
                    Full Stack Developer
                  </span>
                  <span className="block text-lg sm:text-xl lg:text-2xl mt-2 text-blue-600 dark:text-blue-400 font-medium">
                    {typedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Professional description */}
            <div className="space-y-6 mb-10">
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Passionate software engineer with expertise in modern web
                technologies. I create scalable, user-focused solutions that
                drive business growth and innovation.
              </p>

              {/* Professional stats */}
              <div className="flex flex-wrap gap-6 lg:gap-8 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[var(--text-secondary)]">
                    5+ Years Experience
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-[var(--text-secondary)]">
                    50+ Projects Completed
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-[var(--text-secondary)]">
                    Full Stack Expertise
                  </span>
                </div>
              </div>
            </div>

            {/* Professional CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={scrollToProjects}
                className="group w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 border-2 border-[var(--border)] hover:border-blue-500 text-[var(--text-primary)] hover:text-blue-500 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Professional social links */}
            <div className="flex justify-center lg:justify-start items-center space-x-1">
              <span className="text-sm text-[var(--text-secondary)] mr-4">
                Connect:
              </span>
              <a
                href="https://github.com/shahriarkabirT"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahriarkabirtasin/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://www.ccloude.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Portfolio Website"
              >
                <ExternalLink className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Image - Takes 5 columns */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Professional image container */}
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-square max-w-sm mx-auto lg:max-w-none rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl">
                  <Image
                    src="/shahriarkabir.png"
                    alt="A.T.M. Shahriar Kabir - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Professional tech badges */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-4">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProjects}
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
