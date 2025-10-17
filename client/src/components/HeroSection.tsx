"use client"
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const phrases = [
    'Full Stack Developer',
    'React Specialist',
    'App Developer',
    'Web Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const shouldDelete = isDeleting;
      const speed = isDeleting ? 50 : typingSpeed;
      
      if (!shouldDelete && typedText === currentPhrase) {
        // Pause at the end of typing
        setIsDeleting(true);
        setTypingSpeed(100);
        return;
      } else if (shouldDelete && typedText === '') {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        setTypingSpeed(150);
        return;
      }
      
      // Handle typing or deleting
      const newText = shouldDelete 
        ? currentPhrase.substring(0, typedText.length - 1)
        : currentPhrase.substring(0, typedText.length + 1);
        
      setTypedText(newText);
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-24 overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 opacity-90" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
        <div className="text-center md:text-left">
          {/* Greeting */}
          <h2 className="text-blue-500 font-medium text-xl mb-2">
            Hello, I'm
          </h2>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            A.T.M. Shahriar Kabir
          </h1>
          
          {/* Animated profession */}
          <div className="h-10 mb-6">
            <h2 className="text-xl sm:text-2xl text-gray-300 inline-block">
              I'm a <span className="text-blue-400">{typedText}</span>
              <span className="text-blue-400 animate-pulse">|</span>
            </h2>
          </div>
          
          {/* Brief intro */}
          <p className="text-gray-400 max-w-xl mb-8 text-lg">
            Passionate about creating elegant solutions to complex problems. 
            I specialize in building performant web applications with modern technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <button 
              onClick={scrollToProjects}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto"
            >
              View My Work
            </button>
            <a 
              href="#contact"
              className="px-6 py-3 border border-blue-500 hover:bg-blue-500/10 text-blue-500 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center md:justify-start space-x-5">
            <a 
              href="https://github.com/shahriarkabirT" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
            >
              <Github className="h-5 w-5 mr-2" />
              <span>Github</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shahriarkabirtasin/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.ccloude.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              <span>Website : Collaborative Cloud</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects} 
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}