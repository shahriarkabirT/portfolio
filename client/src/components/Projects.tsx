"use client"
import { useState } from 'react';
import { Code, ExternalLink, Github, Layers, Calendar } from 'lucide-react';

export default function ProjectsSection({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Vidyamayee Government Girls Highschool Portal",
      description: "Official web portal for Vidyamayee Government Girls Highschool with authentication, notice management, and media uploads.",
      image: "vidyamayee.png",
      category: "web",
      stack: ["MERN", "React", "Node.js", "Express", "MongoDB"],
      link: "https://vidyamayee.edu.bd",
      date: "Dec 2024 - Feb 2025",
      features: [
        "Authentication system",
        "Notice, Image, Video Uploads",
        "Dynamic Information Update",
        "Admin Dashboard"
      ]
    },
    {
      id: 2,
      title: "Vidyamayee Result Processing Website",
      description: "Comprehensive result management system for educational institution with document generation and bulk data processing.",
      image: "result_vidyamayee.png",
      category: "web",
      stack: ["MERN", "React", "Node.js", "Express", "MongoDB"],
      link: "https://result.vidyamayee.edu.bd",
      date: "Dec 2024 - Feb 2025",
      features: [
        "ID card, Testimonial, Marksheet and Result Generator",
        "Tabulation system",
        "Dynamic Information Update",
        "Student Profile management",
        "Bulk Information Upload via Sheets"
      ]
    },
    {
      id: 3,
      title: "Urbangent E-commerce",
      description: "Enhanced version of e-commerce platform with complete functionality and modern tech stack.",
      image: "urbargent.png",
      category: "web",
      stack: ["React JS", "Redux", "Redux Toolkit", "Next JS", "Node JS", "Express JS", "MongoDB"],
      link: "https://urbargent.vercel.app",
      github: "https://github.com/shahriarkabirT/urbangent",
      date: "Aug 2024 - Nov 2024",
      features: [
        "User authentication and profiles",
        "Product catalog and search",
        "Shopping cart and checkout",
        "Order management",
        "Admin dashboard"
      ]
    },
    {
      id: 4,
      title: "ElevateMart E-commerce",
      description: "Full-featured e-commerce web application built during internship at CodeElevate Tech.",
      image: "elevatemart.png",
      category: "web",
      stack: ["React JS", "Redux", "Redux Toolkit", "Next JS", "Node JS", "Express JS", "MongoDB", "RESTful API"],
      date: "May 2024 - Aug 2024",
      features: [
        "Complete e-commerce functionality",
        "User authentication",
        "Product management",
        "Shopping cart",
        "Order processing"
      ]
    },
    {
      id: 5,
      title: "Gonoshasthaya Samaj Vittik Medical College Portal",
      description: "Official web portal for medical college with dynamic content management features.",
      image: "gonosvmc.png",
      category: "web",
      stack: ["MERN", "React", "Node.js", "Express", "MongoDB"],
      link: "https://gonosvmc.edu.bd/",
      date: "Feb 2025 - Mar 2025",
      features: [
        "Notice management",
        "Image uploads",
        "Faculty profiles",
        "Bulk Alumni Uploads",
        "Dynamic Information Update"
      ]
    },
    {
      id: 6,
      title: "Audio GuestBook",
      description: "Innovative digital guestbook that allows visitors to record audio messages instead of written notes.",
      image: "audio.png",
      category: "web",
      stack: ["Next JS", "Fastify", "RESTful API"],
      date: "Jan 2025 - Feb 2025",
      features: [
        "Audio recording and playback",
        "Guestbook entries management",
        "User-friendly interface",
        "Secure data storage"
      ]
    },
    {
      id: 7,
      title: "Attendance Management System using Face Recognition",
      description: "Advanced attendance tracking system using facial recognition with anti-spoofing measures.",
      image: "/api/placeholder/800/500",
      category: "ai",
      stack: ["Python", "OpenCV", "DLIB"],
      date: "Aug 2023 - Jan 2024",
      features: [
        "Anti-spoofing detection",
        "Head Movement Detection",
        "Face Recognition",
        "Attendance Recording and Management"
      ]
    }
  ];
  
  const filteredProjects =
  filter === "all"
    ? projects.slice(0, limit || projects.length) // Apply the limit here
    : projects
        .filter((project) => project.category === filter)
        .slice(0, limit || projects.length);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work across web development and software engineering.
            These projects demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              filter === 'web' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              filter === 'ai' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            AI Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    stack: string[];
    link?: string;
    github?: string;
    date: string;
    features: string[];
  }
  
  function ProjectCard({ project }: { project: Project }) {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4 flex space-x-2">
            {project.stack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-blue-900/70 text-blue-300 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-xs px-2 py-1 bg-blue-900/70 text-blue-300 rounded-full">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
  
        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{project.date}</span>
          </div>
  
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
  
          <p className="text-gray-400 text-sm mb-4">
            {showDetails
              ? project.description
              : `${project.description.substring(0, 100)}${
                  project.description.length > 100 ? '...' : ''
                }`}
          </p>
  
          {/* Project Features */}
          {showDetails && (
            <div className="mt-4 mb-5">
              <h4 className="text-white font-medium mb-2 flex items-center">
                <Layers className="w-4 h-4 mr-1 text-blue-500" />
                Key Features
              </h4>
              <ul className="text-gray-400 text-sm space-y-1 ml-5">
                {project.features.map((feature, index) => (
                  <li key={index} className="list-disc">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
  
          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition"
            >
              {showDetails ? 'Show Less' : 'Show More'}
            </button>
  
            <div className="flex space-x-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }