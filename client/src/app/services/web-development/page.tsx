"use client";
import { useState } from 'react';
import { Code, Smartphone, Shield, ShoppingCart, Database, ArrowRight, CheckCircle, Zap, Users, TrendingUp } from 'lucide-react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: <Code className="w-12 h-12" />,
      title: "Custom Web Development",
      shortDesc: "Tailored web solutions designed to meet your unique business needs",
      fullDesc: "We create custom web applications from scratch, perfectly aligned with your business goals. Our development process focuses on scalability, performance, and user experience to deliver solutions that grow with your business.",
      benefits: [
        "Fully customized to your requirements",
        "Scalable architecture for future growth",
        "Modern, responsive design",
        "SEO-optimized from the ground up",
        "Cross-browser compatibility",
        "Performance optimization"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
      process: [
        "Requirements analysis and planning",
        "UI/UX design and prototyping",
        "Agile development with regular updates",
        "Quality assurance and testing",
        "Deployment and launch",
        "Ongoing support and maintenance"
      ],
      useCases: [
        "Corporate websites and portals",
        "SaaS applications",
        "Content management systems",
        "Business automation tools"
      ]
    },
    {
      id: 1,
      icon: <Smartphone className="w-12 h-12" />,
      title: "Custom App Development",
      shortDesc: "Native and cross-platform mobile applications for iOS and Android",
      fullDesc: "Transform your ideas into powerful mobile applications. We build native and cross-platform apps that deliver exceptional user experiences, seamless performance, and robust functionality across all devices.",
      benefits: [
        "Native iOS and Android development",
        "Cross-platform solutions with React Native",
        "Intuitive user interfaces",
        "Offline functionality support",
        "Push notifications and real-time updates",
        "App store optimization"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "RESTful APIs"],
      process: [
        "Concept validation and market research",
        "User experience design",
        "Iterative development sprints",
        "Beta testing with real users",
        "App store submission",
        "Post-launch optimization"
      ],
      useCases: [
        "E-commerce mobile apps",
        "Booking and reservation systems",
        "Social networking platforms",
        "Productivity and utility apps"
      ]
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12" />,
      title: "Web Security Solutions",
      shortDesc: "Comprehensive security measures to protect your digital assets",
      fullDesc: "Safeguard your web applications and data with our comprehensive security solutions. We implement industry-standard security practices and conduct thorough audits to protect against threats and vulnerabilities.",
      benefits: [
        "SSL/TLS certificate implementation",
        "Security audits and penetration testing",
        "Data encryption at rest and in transit",
        "Regular security updates and patches",
        "DDoS protection and mitigation",
        "Compliance with security standards"
      ],
      technologies: ["OAuth 2.0", "JWT", "Encryption protocols", "Firewall systems", "Security monitoring tools"],
      process: [
        "Security assessment and risk analysis",
        "Implementation of security protocols",
        "Vulnerability scanning",
        "Security hardening",
        "Monitoring and incident response",
        "Regular security audits"
      ],
      useCases: [
        "Financial applications",
        "Healthcare systems",
        "E-commerce platforms",
        "Enterprise portals"
      ]
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Solutions",
      shortDesc: "Complete online store solutions with payment integration and inventory management",
      fullDesc: "Launch and scale your online business with our feature-rich e-commerce solutions. From product catalogs to payment processing, we build complete platforms that drive sales and enhance customer satisfaction.",
      benefits: [
        "Custom shopping cart and checkout",
        "Multiple payment gateway integration",
        "Inventory and order management",
        "Customer account management",
        "Analytics and reporting dashboard",
        "Mobile-responsive design"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "PayPal", "Redis"],
      process: [
        "Business model and requirements analysis",
        "Platform architecture design",
        "Feature development and integration",
        "Payment gateway setup",
        "Testing and optimization",
        "Launch and scaling support"
      ],
      useCases: [
        "B2C online retail stores",
        "B2B wholesale platforms",
        "Subscription-based services",
        "Digital product marketplaces"
      ]
    },
    {
      id: 4,
      icon: <Database className="w-12 h-12" />,
      title: "API Development",
      shortDesc: "Robust and scalable APIs for seamless data integration and communication",
      fullDesc: "Connect your systems and enable seamless data flow with our custom API development services. We build RESTful and GraphQL APIs that are secure, well-documented, and designed for optimal performance.",
      benefits: [
        "RESTful and GraphQL API design",
        "Comprehensive API documentation",
        "Authentication and authorization",
        "Rate limiting and throttling",
        "Version control and backward compatibility",
        "Real-time data synchronization"
      ],
      technologies: ["Node.js", "Express", "GraphQL", "MongoDB", "PostgreSQL", "Redis"],
      process: [
        "API requirements gathering",
        "Architecture and endpoint design",
        "Development and testing",
        "Documentation with Swagger/OpenAPI",
        "Deployment and monitoring",
        "Maintenance and updates"
      ],
      useCases: [
        "Third-party integrations",
        "Mobile app backends",
        "Microservices architecture",
        "Data aggregation platforms"
      ]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50+", label: "Projects Delivered" },
    { icon: <Zap className="w-8 h-8" />, value: "99.9%", label: "Uptime Guarantee" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional <span className="text-blue-500">Web Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your digital presence with our comprehensive web development services. 
            From custom applications to secure e-commerce platforms, we deliver solutions that drive growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-blue-500 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Service Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-white">
                  {services[activeService].icon}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  {services[activeService].title}
                </h2>
              </div>
              <p className="text-blue-100 text-lg">
                {services[activeService].shortDesc}
              </p>
            </div>

            {/* Service Content */}
            <div className="p-8 sm:p-12">
              {/* Full Description */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {services[activeService].fullDesc}
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {services[activeService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development Process */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-4">
                  {services[activeService].process.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services[activeService].useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-blue-900/20 to-transparent p-4 rounded-lg border border-blue-900/30">
                      <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Get Started with {services[activeService].title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Contact Us
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}