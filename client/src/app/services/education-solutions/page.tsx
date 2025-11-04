"use client";
import { useState } from 'react';
import { GraduationCap, School, Building2, FileText, Globe, ArrowRight, CheckCircle, Users, BookOpen, Trophy } from 'lucide-react';

export default function EducationServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: <School className="w-12 h-12" />,
      title: "School/College Management System",
      shortDesc: "Comprehensive management solution for K-12 schools and colleges",
      fullDesc: "Streamline your educational institution's operations with our all-in-one management system. From student enrollment to fee collection, attendance tracking to parent communication, we digitize every aspect of school administration to enhance efficiency and transparency.",
      benefits: [
        "Student information management and profiles",
        "Automated attendance tracking system",
        "Fee management and payment integration",
        "Staff and teacher management portal",
        "Parent-teacher communication platform",
        "Timetable and class scheduling",
        "Library management system",
        "Transport management module",
        "SMS and email notifications",
        "Mobile app for parents and students"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express", "RESTful API", "Firebase"],
      process: [
        "Institution requirement analysis",
        "Custom module selection and design",
        "Database architecture planning",
        "Phased development and testing",
        "Staff training and onboarding",
        "Data migration from existing systems",
        "Go-live support and monitoring",
        "Ongoing technical support"
      ],
      useCases: [
        "Primary and secondary schools",
        "Higher secondary colleges",
        "Coaching centers and institutes",
        "Preschools and kindergartens"
      ],
      features: {
        admin: ["Complete dashboard control", "User role management", "Report generation", "System configuration"],
        teachers: ["Digital attendance", "Grade entry", "Assignment management", "Student progress tracking"],
        parents: ["Real-time updates", "Fee payment", "Attendance monitoring", "Academic reports"],
        students: ["Access study materials", "Submit assignments", "View grades", "Class schedule"]
      }
    },
    {
      id: 1,
      icon: <Building2 className="w-12 h-12" />,
      title: "University Automation System",
      shortDesc: "Enterprise-level automation solution for universities and higher education",
      fullDesc: "Transform your university operations with our comprehensive automation platform. Designed to handle complex academic structures, multiple departments, and large student populations, our system integrates admission, academics, examination, and administration into one unified platform.",
      benefits: [
        "Online admission and enrollment system",
        "Academic program and course management",
        "Semester and credit hour tracking",
        "Faculty workload and scheduling",
        "Research and publication management",
        "Hostel and accommodation management",
        "Alumni network and engagement",
        "Placement and career services portal",
        "Financial aid and scholarship management",
        "Integration with LMS platforms"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "GraphQL", "Docker"],
      process: [
        "Campus-wide needs assessment",
        "Department-wise customization",
        "Integration planning with existing systems",
        "Modular development approach",
        "Pilot testing with select departments",
        "University-wide rollout",
        "Faculty and staff training programs",
        "Continuous improvement and updates"
      ],
      useCases: [
        "Public and private universities",
        "Medical and engineering colleges",
        "Multi-campus institutions",
        "Distance learning universities"
      ],
      features: {
        admin: ["Multi-campus management", "Policy implementation", "Resource allocation", "Analytics dashboard"],
        faculty: ["Course management", "Grade submission", "Research tracking", "Student advisement"],
        students: ["Course registration", "Grade viewing", "Thesis submission", "Career services"],
        departments: ["Budget tracking", "Curriculum planning", "Faculty management", "Program assessment"]
      }
    },
    {
      id: 2,
      icon: <FileText className="w-12 h-12" />,
      title: "Result Processing System",
      shortDesc: "Automated examination and result management with document generation",
      fullDesc: "Eliminate manual errors and save countless hours with our intelligent result processing system. Our solution handles everything from mark entry to final certificate generation, including tabulation sheets, transcripts, grade cards, and performance analytics with just a few clicks.",
      benefits: [
        "Bulk mark entry and validation",
        "Automated grade calculation and GPA",
        "Digital mark sheets and certificates",
        "Tabulation sheet generation",
        "Student testimonial creation",
        "ID card generation with photos",
        "Merit list and ranking system",
        "Result publication on web portal",
        "Excel/CSV import for bulk data",
        "SMS and email result notifications"
      ],
      technologies: ["React", "Node.js", "MongoDB", "PDF Generation Libraries", "Excel Processing", "Template Engine"],
      process: [
        "Grading system configuration",
        "Template design for documents",
        "Mark entry interface development",
        "Validation rule implementation",
        "Bulk processing optimization",
        "Testing with sample data",
        "Staff training for mark entry",
        "Result publication workflow setup"
      ],
      useCases: [
        "Board examinations",
        "Internal assessments",
        "Semester examinations",
        "Annual result processing"
      ],
      features: {
        admin: ["Result approval workflow", "Document template management", "Bulk operations", "Error detection"],
        teachers: ["Mark entry portal", "Subject-wise grading", "Comment addition", "Progress reports"],
        students: ["Online result viewing", "Download certificates", "Performance analytics", "Historical records"],
        examination: ["Admit card generation", "Seating arrangement", "Answer script tracking", "Revaluation management"]
      }
    },
    {
      id: 3,
      icon: <Globe className="w-12 h-12" />,
      title: "Educational Smart Website",
      shortDesc: "Modern, dynamic websites tailored for educational institutions",
      fullDesc: "Establish a strong online presence with our feature-rich educational websites. Built with modern design principles and powered by content management systems, our smart websites serve as the digital front door to your institution, showcasing achievements, facilitating admissions, and keeping stakeholders informed.",
      benefits: [
        "Responsive and mobile-friendly design",
        "Dynamic content management system",
        "Notice and announcement board",
        "Photo and video gallery management",
        "Faculty and staff profiles",
        "Academic calendar integration",
        "Online admission forms",
        "Student/alumni portal",
        "News and events section",
        "SEO optimization for visibility",
        "Multi-language support",
        "Social media integration"
      ],
      technologies: ["React", "Next.js", "Headless CMS", "MongoDB", "Tailwind CSS", "Image Optimization"],
      process: [
        "Brand identity and design consultation",
        "Information architecture planning",
        "Content strategy development",
        "Custom design and prototyping",
        "CMS integration and setup",
        "Content migration and population",
        "SEO optimization",
        "Launch and performance monitoring"
      ],
      useCases: [
        "Schools and colleges",
        "Universities and departments",
        "Educational foundations",
        "Training institutes"
      ],
      features: {
        public: ["Course information", "Admission details", "Contact forms", "Virtual tours"],
        admin: ["Easy content updates", "Media management", "User management", "Analytics dashboard"],
        students: ["Student login portal", "Download resources", "Event registration", "Alumni network"],
        visitors: ["Search functionality", "News updates", "Event calendar", "Gallery browsing"]
      }
    }
  ];

  const stats = [
    { icon: <School className="w-8 h-8" />, value: "25+", label: "Educational Institutions" },
    { icon: <Users className="w-8 h-8" />, value: "10K+", label: "Active Users" },
    { icon: <Trophy className="w-8 h-8" />, value: "100%", label: "Client Satisfaction" },
  ];

  const institutions = [
    "Vidyamayee Government Girls Highschool",
    "Gonoshasthaya Samaj Vittik Medical College",
    "Various schools and colleges across Bangladesh"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Education <span className="text-blue-500">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Empowering educational institutions with cutting-edge technology solutions. 
            From school management to university automation, we digitize education for better outcomes.
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

      {/* Trusted By Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-400 mb-4">Trusted By Leading Institutions</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {institutions.map((inst, index) => (
              <div key={index} className="text-gray-300 text-sm px-4 py-2 bg-gray-800 rounded-lg">
                {inst}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-6 rounded-xl font-medium transition-all duration-300 text-left ${
                  activeService === service.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="mb-3">
                  {service.icon}
                </div>
                <div className="font-semibold">{service.title}</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Key Features & Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role-Based Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Features by User Role</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(services[activeService].features).map(([role, features], index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700">
                      <h4 className="text-blue-400 font-semibold text-lg mb-4 capitalize">{role}</h4>
                      <ul className="space-y-2">
                        {features.map((feature : any, idx : number) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
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
                <h3 className="text-2xl font-bold text-white mb-6">Implementation Process</h3>
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
                <h3 className="text-2xl font-bold text-white mb-6">Ideal For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services[activeService].useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-blue-900/20 to-transparent p-4 rounded-lg border border-blue-900/30">
                      <BookOpen className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Request Demo for {services[activeService].title}
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
            Why Educational Institutions Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Experience</h3>
              <p className="text-gray-400">
                Successfully delivered solutions to 25+ educational institutions with measurable improvements in efficiency.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-400">
                24/7 technical support with dedicated account managers ensuring smooth operations year-round.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-400">
                Tailored to your institution's unique needs with flexibility to adapt as you grow and evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Schedule a free consultation to discuss how our solutions can digitize your educational institution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Schedule Demo
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}