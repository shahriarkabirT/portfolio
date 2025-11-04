"use client";
import { useState } from 'react';
import { Globe, Server, Cloud, Shield, Layout, Settings, ArrowRight, CheckCircle, Zap, Lock, BarChart } from 'lucide-react';

export default function HostingManagementServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: <Globe className="w-12 h-12" />,
      title: "Domain Registration & SSL Management",
      shortDesc: "Complete domain registration and SSL certificate setup and management",
      fullDesc: "We handle all aspects of your domain registration and SSL certificate management. From finding and registering the perfect domain name to installing and maintaining SSL certificates, we ensure your online identity is secure and properly configured.",
      benefits: [
        "Domain search and registration assistance",
        "DNS configuration and management",
        "Domain privacy protection setup",
        "SSL certificate procurement and installation",
        "SSL renewal management",
        "Domain transfer handling",
        "Email forwarding configuration",
        "WHOIS record management",
        "Multi-domain management",
        "Regular DNS monitoring"
      ],
      technologies: ["DNS Management", "Let's Encrypt", "Comodo SSL", "DigiCert", "Domain Registrars", "DNS Monitoring Tools"],
      process: [
        "Consultation on domain requirements",
        "Domain availability check and registration",
        "DNS records configuration",
        "SSL certificate selection and purchase",
        "SSL installation on your server",
        "DNS propagation verification",
        "Email and subdomain setup",
        "Ongoing renewal management"
      ],
      useCases: [
        "New website launches",
        "Domain portfolio management",
        "SSL upgrade for existing sites",
        "Multi-domain businesses"
      ],
      deliverables: [
        "Registered domain with privacy protection",
        "Configured DNS records",
        "Installed SSL certificate",
        "Email forwarding setup",
        "Domain management credentials",
        "Renewal calendar and reminders"
      ]
    },
    {
      id: 1,
      icon: <Server className="w-12 h-12" />,
      title: "VPS Server Management",
      shortDesc: "Complete VPS setup, configuration, security, and ongoing maintenance",
      fullDesc: "Let us handle the complexities of VPS management. We configure, secure, optimize, and maintain your virtual private server, ensuring maximum uptime, security, and performance. Focus on your business while we handle the technical infrastructure.",
      benefits: [
        "Initial server setup and hardening",
        "Operating system installation and updates",
        "Security configuration and firewall setup",
        "Performance optimization",
        "Regular server monitoring",
        "Automated backup configuration",
        "Software installation and updates",
        "Resource usage optimization",
        "DDoS protection setup",
        "24/7 server health monitoring"
      ],
      technologies: ["Linux/Windows Server", "WHM/cPanel", "Nginx/Apache", "Security Tools", "Monitoring Tools", "Backup Solutions"],
      process: [
        "Server requirement analysis",
        "VPS procurement guidance",
        "Initial server configuration",
        "Security hardening implementation",
        "Control panel installation",
        "Backup system setup",
        "Monitoring tools deployment",
        "Ongoing maintenance and support"
      ],
      useCases: [
        "High-traffic websites",
        "E-commerce platforms",
        "Application hosting",
        "Development environments"
      ],
      deliverables: [
        "Fully configured and secured VPS",
        "Control panel access",
        "Automated backup system",
        "Monitoring dashboard access",
        "Security report",
        "Documentation and credentials"
      ]
    },
    {
      id: 2,
      icon: <Layout className="w-12 h-12" />,
      title: "Shared Hosting Management",
      shortDesc: "Setup and manage your shared hosting accounts for optimal performance",
      fullDesc: "We configure and manage your shared hosting environment to ensure your websites run smoothly. From initial setup to ongoing maintenance, email configuration to security monitoring, we handle all aspects of your shared hosting needs.",
      benefits: [
        "Hosting account setup and configuration",
        "Website migration to hosting",
        "Email account creation and setup",
        "Database creation and management",
        "SSL certificate installation",
        "Automated backup configuration",
        "File and folder permissions setup",
        "Performance optimization",
        "Security monitoring",
        "Regular updates and maintenance"
      ],
      technologies: ["cPanel/Plesk", "WordPress", "PHP", "MySQL", "FTP", "Email Protocols"],
      process: [
        "Hosting plan assessment",
        "Account setup and configuration",
        "Domain pointing and DNS setup",
        "Website/application installation",
        "Email accounts configuration",
        "SSL certificate activation",
        "Backup schedule setup",
        "Performance testing and optimization"
      ],
      useCases: [
        "Small business websites",
        "Personal blogs and portfolios",
        "WordPress sites",
        "Landing pages"
      ],
      deliverables: [
        "Configured hosting account",
        "Migrated website(s)",
        "Email accounts with documentation",
        "SSL certificate installed",
        "Control panel access",
        "Backup system configured"
      ]
    },
    {
      id: 3,
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Hosting Management",
      shortDesc: "Manage and optimize your cloud infrastructure for scalability and reliability",
      fullDesc: "We architect, deploy, and manage your cloud hosting infrastructure across leading cloud platforms. Our expertise ensures your applications are scalable, highly available, and cost-optimized while maintaining peak performance and security.",
      benefits: [
        "Cloud architecture design",
        "Multi-server deployment",
        "Load balancer configuration",
        "Auto-scaling setup",
        "CDN integration and optimization",
        "Database clustering",
        "Container orchestration",
        "Cost optimization strategies",
        "Performance monitoring",
        "Disaster recovery planning"
      ],
      technologies: ["AWS/DigitalOcean/Linode", "Docker", "Kubernetes", "Load Balancers", "CDN", "Monitoring Tools"],
      process: [
        "Infrastructure requirement analysis",
        "Cloud platform selection",
        "Architecture design and planning",
        "Initial deployment and configuration",
        "Load testing and optimization",
        "Monitoring and alerting setup",
        "Auto-scaling rules configuration",
        "Ongoing performance tuning"
      ],
      useCases: [
        "High-traffic applications",
        "E-commerce platforms",
        "SaaS applications",
        "Enterprise websites"
      ],
      deliverables: [
        "Deployed cloud infrastructure",
        "Configured auto-scaling",
        "Load balancing setup",
        "CDN integration",
        "Monitoring dashboard",
        "Infrastructure documentation"
      ]
    },
    {
      id: 4,
      icon: <Settings className="w-12 h-12" />,
      title: "cPanel Setup & Management",
      shortDesc: "Professional cPanel installation, configuration, and ongoing management",
      fullDesc: "We set up and manage your cPanel hosting environment, making website and email management simple and efficient. From initial installation to day-to-day management tasks, we ensure your cPanel environment is optimized and secure.",
      benefits: [
        "cPanel/WHM installation on VPS",
        "User account creation and management",
        "Email server configuration",
        "DNS zone management",
        "Database administration",
        "Backup management",
        "Security hardening",
        "Software updates and patches",
        "Resource limit configuration",
        "Troubleshooting and support"
      ],
      technologies: ["cPanel/WHM", "Softaculous", "LiteSpeed/Apache", "MySQL/PostgreSQL", "PHP Selector", "ModSecurity"],
      process: [
        "cPanel license procurement",
        "Installation on your VPS",
        "Initial security configuration",
        "Email server setup",
        "Account creation and limits",
        "Backup system configuration",
        "Softaculous installation",
        "Training and documentation"
      ],
      useCases: [
        "Web hosting businesses",
        "Agency client hosting",
        "Multi-website management",
        "Reseller hosting"
      ],
      deliverables: [
        "Installed and configured cPanel/WHM",
        "Secure email server",
        "Configured backup system",
        "User accounts setup",
        "WHM root access",
        "Management documentation"
      ]
    },
    {
      id: 5,
      icon: <Layout className="w-12 h-12" />,
      title: "Webuzo Panel Setup & Management",
      shortDesc: "Install and configure Webuzo control panel for easy VPS management",
      fullDesc: "We install and configure Webuzo on your VPS, providing you with an easy-to-use interface to manage your server, install applications, and handle domains. Perfect for users who want simple VPS management without the complexity of command line.",
      benefits: [
        "Webuzo panel installation",
        "Initial server configuration",
        "Application installation (WordPress, etc.)",
        "Domain and subdomain setup",
        "Email account management",
        "Database creation and management",
        "PHP version configuration",
        "SSL installation and management",
        "Backup and restore setup",
        "Security configuration"
      ],
      technologies: ["Webuzo Panel", "Linux Server", "Apache/Nginx", "PHP", "MySQL/MariaDB", "Application Scripts"],
      process: [
        "VPS compatibility check",
        "Webuzo license setup",
        "Panel installation",
        "Server optimization",
        "Domain configuration",
        "Email server setup",
        "Application installations",
        "User training"
      ],
      useCases: [
        "Personal VPS hosting",
        "Small business servers",
        "Development environments",
        "Application testing servers"
      ],
      deliverables: [
        "Installed Webuzo panel",
        "Configured server environment",
        "Installed applications",
        "Email accounts setup",
        "SSL certificates installed",
        "Access credentials and guide"
      ]
    }
  ];

  const stats = [
    { icon: <Server className="w-8 h-8" />, value: "100+", label: "Servers Managed" },
    { icon: <Zap className="w-8 h-8" />, value: "99.9%", label: "Client Uptime" },
    { icon: <Shield className="w-8 h-8" />, value: "24/7", label: "Monitoring & Support" },
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security First",
      description: "Every server we manage is hardened with industry-standard security practices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "We optimize every aspect of your hosting for maximum speed and efficiency"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Proactive Monitoring",
      description: "24/7 monitoring with instant alerts and rapid issue resolution"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Server className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional <span className="text-blue-500">Hosting Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert server and hosting management services. We handle the technical complexities 
            so you can focus on your business. From domain setup to cloud infrastructure management.
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

      {/* Key Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-4 rounded-xl font-medium transition-all duration-300 text-center ${
                  activeService === service.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="flex justify-center mb-2">
                  {service.icon}
                </div>
                <div className="text-sm font-semibold">{service.title.split(' ')[0]}</div>
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
                <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {services[activeService].fullDesc}
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Services Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Receive</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services[activeService].deliverables.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-900/20 to-transparent p-4 rounded-lg border border-blue-900/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies & Tools We Use</h3>
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

              {/* Management Process */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Management Process</h3>
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
                  Get {services[activeService].title} Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Management</h3>
              <p className="text-gray-400">
                Years of experience managing servers and hosting for businesses of all sizes. We know what works.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proactive Approach</h3>
              <p className="text-gray-400">
                We don't wait for problems. Continuous monitoring and proactive maintenance keep your sites running smoothly.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Complete Peace of Mind</h3>
              <p className="text-gray-400">
                Focus on your business while we handle all technical aspects of your hosting infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Hand Over Your Hosting Management?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let our experts handle your hosting infrastructure while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Get Started Today
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}