import BlogCard from "@/components/BlogCard";

export default function TechBlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to VPS Hosting for MERN stack project",
      description: "Learn how to host you mern with next js website in the vps",
      category: "VPS Hosting",
      readTime: "15 min read",
      date: "Oct 15, 2025",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      link: "/blog/vps/vps-hosting-guide-for-mern",
    },
    {
      id: 2,
      title: "What is VPS Hosting",
      description:
        "Everything you need to know about Virtual Private Server hosting, from setup to optimization and security best practices.",
      category: "VPS Hosting",
      readTime: "15 min read",
      date: "Oct 15, 2025",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      link: "/blog/vps/what-is-vps-hosting",
    },
    {
      id: 3,
      title: "Docker vs Kubernetes: Which Should You Choose?",
      description:
        "A comprehensive comparison of containerization technologies and when to use each for your infrastructure needs.",
      category: "DevOps",
      readTime: "10 min read",
      date: "Oct 12, 2025",
      image:
        "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop",
      link: "/blog/docker-vs-kubernetes",
    },
    {
      id: 4,
      title: "Securing Your Linux Server: Essential Tips",
      description:
        "Learn the fundamental security practices every system administrator should implement to protect their servers.",
      category: "Security",
      readTime: "12 min read",
      date: "Oct 10, 2025",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop",
      link: "/blog/linux-server-security",
    },
    {
      id: 5,
      title: "Virtual Memory and Swap Space in VPS",
      description:
        "Essential guide for managing memory on low-RAM VPS instances, including swap space setup and optimization techniques.",
      category: "VPS Hosting",
      readTime: "8 min read",
      date: "Oct 9, 2025",
      image:
        "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=400&h=250&fit=crop",
      link: "/blog/vps/virtual-memory",
    },
    {
      id: 6,
      title: "Understanding Cloud Computing: AWS vs Azure vs GCP",
      description:
        "An in-depth analysis of the three major cloud platforms to help you make an informed decision for your business.",
      category: "Cloud Computing",
      readTime: "18 min read",
      date: "Oct 8, 2025",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      link: "/blog/cloud-platforms-comparison",
    },
    {
      id: 7,
      title: "Database Optimization Techniques for High Traffic",
      description:
        "Master database performance tuning with advanced indexing, query optimization, and caching strategies.",
      category: "Database",
      readTime: "14 min read",
      date: "Oct 5, 2025",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      link: "/blog/database-optimization",
    },
    {
      id: 8,
      title: "CI/CD Pipeline Best Practices for Modern Development",
      description:
        "Build robust continuous integration and deployment workflows that accelerate your software delivery.",
      category: "DevOps",
      readTime: "11 min read",
      date: "Oct 3, 2025",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop",
      link: "/blog/cicd-best-practices",
    },
    {
      id: 9,
      title: "Microservices Architecture: A Practical Guide",
      description:
        "Learn how to design, implement, and scale microservices-based applications effectively.",
      category: "Architecture",
      readTime: "16 min read",
      date: "Sep 30, 2025",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      link: "/blog/microservices-guide",
    },
    {
      id: 10,
      title: "Web Performance Optimization: Speed Up Your Site",
      description:
        "Proven techniques to improve website loading times, reduce bounce rates, and enhance user experience.",
      category: "Performance",
      readTime: "13 min read",
      date: "Sep 28, 2025",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      link: "/blog/web-performance",
    },
    {
      id: 11,
      title: "API Design Best Practices: RESTful vs GraphQL",
      description:
        "Compare different API design approaches and learn when to use REST or GraphQL for your projects.",
      category: "API Development",
      readTime: "10 min read",
      date: "Sep 25, 2025",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      link: "/blog/api-design-practices",
    },
    {
      id: 12,
      title: "How to Change Your GitHub Account on macOS",
      description:
        "A complete step-by-step guide to switch GitHub accounts on your Mac, including SSH key setup and credential management.",
      category: "DevOps",
      readTime: "12 min read",
      date: "Jan 2, 2026",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop",
      link: "/blog/macos-replace-github-account",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Tech Insights & Tutorials
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master cloud computing, DevOps, security, and modern web development
            with our in-depth guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Post */}
        <section className="mb-16">
          <BlogCard post={blogPosts[0]} isFeatured={true} />
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {[
              "VPS Hosting",
              "DevOps",
              "Security",
              "Cloud Computing",
              "Database",
              "Architecture",
              "Performance",
              "API Development",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-gray-500 hover:scale-105"
              >
                <p className="font-semibold text-white">{category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#171F2F] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Stay Updated
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto text-lg">
            Get the latest tech articles, tutorials, and insights delivered
            directly to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 text-white placeholder-gray-200 focus:outline-none focus:border-opacity-50 transition-colors"
            />
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
