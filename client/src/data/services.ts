export interface ServiceFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  delivery: string;
  tag: string | null;
  items: string[];
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroBadge: string;
  features: ServiceFeature[];
  packages: ServicePackage[];
  faqs: ServiceFAQ[];
  fiverrUrl: string;
}

export const servicesData: Record<string, ServiceData> = {
  "chatbot-integration": {
    slug: "chatbot-integration",
    title: "I'll integrate ChatGPT & OpenAI",
    subtitle: "into your web app",
    description: "Full-stack MERN & Next.js developer. I build AI-powered features — chatbots, streaming responses, GPT-4o integration — clean code, fast delivery, real results.",
    heroBadge: "Available for work · AI Integration Expert",
    fiverrUrl: "https://www.fiverr.com", // Placeholder
    features: [
      {
        icon: "⚡",
        title: "Real-time streaming",
        desc: "Typing effect like ChatGPT — responses stream live, word by word, into your UI.",
      },
      {
        icon: "🧠",
        title: "Custom AI personality",
        desc: "I configure a system prompt tailored to your brand — support bot, tutor, writer, anything.",
      },
      {
        icon: "💾",
        title: "Chat history & sessions",
        desc: "Conversations saved to MongoDB so users can pick up where they left off.",
      },
      {
        icon: "🔐",
        title: "Auth-ready",
        desc: "Works with NextAuth, JWT, or any existing authentication you already have.",
      },
      {
        icon: "🚀",
        title: "Deployed on Vercel",
        desc: "I handle deployment. Your AI feature goes live, not just local.",
      },
      {
        icon: "🎯",
        title: "GPT-4o or GPT-3.5",
        desc: "You pick the model. I wire it up correctly with proper token management.",
      },
    ],
    packages: [
      {
        name: "Basic",
        price: "$25",
        delivery: "3 days",
        tag: null,
        items: [
          "Simple chat UI in React/Next.js",
          "OpenAI API connected",
          "Basic system prompt setup",
          "1 revision",
        ],
      },
      {
        name: "Standard",
        price: "$55",
        delivery: "5 days",
        tag: "Most Popular",
        items: [
          "Everything in Basic",
          "Real-time streaming responses",
          "Chat history (session-based)",
          "Custom system prompt",
          "2 revisions",
        ],
      },
      {
        name: "Premium",
        price: "$100",
        delivery: "7 days",
        tag: null,
        items: [
          "Everything in Standard",
          "MongoDB chat storage",
          "User-specific sessions",
          "Deployment on Vercel",
          "3 revisions",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need my own OpenAI API key?",
        a: "Yes — you need your own key (free to get). I'll guide you if needed. I charge only for my dev work, not for API usage.",
      },
      {
        q: "Can you work with my existing project?",
        a: "Absolutely. Share your GitHub repo or ZIP file and I'll integrate cleanly without breaking your existing code.",
      },
      {
        q: "Which GPT model will you use?",
        a: "GPT-4o by default (fast & smart). Other models available on request.",
      },
      {
        q: "What if I need something custom?",
        a: "Message me first. I offer custom orders for unique requirements and give you a fair quote before you commit.",
      },
    ]
  },
  "payment-integration": {
    slug: "payment-integration",
    title: "I'll integrate Stripe/SSLCommerz",
    subtitle: "into your platform",
    description: "Expert Node.js & React developer. I build secure, PCI-compliant payment flows, subscription models, and checkout systems that convert.",
    heroBadge: "Available for work · Payment Gateway Expert",
    fiverrUrl: "https://www.fiverr.com", 
    features: [
      {
        icon: "💳",
        title: "Seamless Checkout",
        desc: "Custom checkout UIs or Stripe Checkout integration optimized for conversion.",
      },
      {
        icon: "🔄",
        title: "Subscriptions & Billing",
        desc: "Recurring payments, usage-based billing, and customer portals for SaaS apps.",
      },
      {
        icon: "🛡️",
        title: "PCI Compliant",
        desc: "Secure tokenization and webhook handling to ensure data safety.",
      },
      {
        icon: "🌐",
        title: "Multi-Currency",
        desc: "Support global payments with dynamic currency conversion and localization.",
      },
      {
        icon: "📊",
        title: "Webhooks Handling",
        desc: "Robust backend listeners for successful payments, failures, and updates.",
      },
      {
        icon: "🇧🇩",
        title: "Local Gateways (BD)",
        desc: "Deep integration with SSLCommerz, bKash, and other local payment solutions.",
      },
    ],
    packages: [
      {
        name: "Basic",
        price: "$50",
        delivery: "3 days",
        tag: null,
        items: [
          "Single one-time payment flow",
          "Stripe Checkout setup",
          "Basic webhook listener",
          "1 revision",
        ],
      },
      {
        name: "Standard",
        price: "$150",
        delivery: "5 days",
        tag: "Most Popular",
        items: [
          "Custom API integration",
          "Card saving & management",
          "Robust webhook handling",
          "2 revisions",
        ],
      },
      {
        name: "Premium",
        price: "$300",
        delivery: "7 days",
        tag: null,
        items: [
          "Complex subscriptions & billing",
          "Customer billing portal",
          "Multi-gateway fallback",
          "3 revisions",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a verified Stripe account?",
        a: "Yes, you need your own live accounts for production. I'll use test keys during development.",
      },
      {
        q: "Can you fix my existing payment bugs?",
        a: "Yes! Let me know the issue, and I can refactor or patch your existing implementation.",
      },
      {
        q: "Do you handle refunds programmatically?",
        a: "Yes, refunds and dispute handling can be implemented in the Standard or Premium tiers.",
      },
      {
        q: "What if I need both Stripe and PayPal?",
        a: "A multi-gateway system requires extra effort. Just message me for a custom quote.",
      },
    ]
  },
  "nextjs-seo": {
    slug: "nextjs-seo",
    title: "I'll heavily optimize SEO",
    subtitle: "for your Next.js app",
    description: "Next.js core concepts expert. I boost your Google rankings via Core Web Vitals optimization, semantic HTML, and advanced metadata techniques.",
    heroBadge: "Available for work · Technical SEO Expert",
    fiverrUrl: "https://www.fiverr.com", 
    features: [
      {
        icon: "📉",
        title: "Core Web Vitals",
        desc: "LCP, FID, CLS tuning to ensure passing scores on Lighthouse & Pagespeed Insights.",
      },
      {
        icon: "🏷️",
        title: "Dynamic Metadata",
        desc: "Properly configured titles, descriptions, and OpenGraph tags per page.",
      },
      {
        icon: "🗺️",
        title: "Sitemap & Robots",
        desc: "Dynamic XML sitemaps and proper crawler instructions configured natively.",
      },
      {
        icon: "🧩",
        title: "Structured Data (JSON-LD)",
        desc: "Rich snippets for products, articles, and businesses to dominate SERPs.",
      },
      {
        icon: "⚡",
        title: "Image Optimization",
        desc: "Migration to next/image, webp formats, and proper sizing & lazy loading.",
      },
      {
        icon: "⏱️",
        title: "SSR/SSG Strategy",
        desc: "Refactoring data fetching to leverage Static Generation for blazing speeds.",
      },
    ],
    packages: [
      {
        name: "Basic Audit",
        price: "$20",
        delivery: "2 days",
        tag: null,
        items: [
          "Full SEO technical audit",
          "Lighthouse score review",
          "Actionable report",
          "No code changes included",
        ],
      },
      {
        name: "Standard Patch",
        price: "$100",
        delivery: "4 days",
        tag: "High Impact",
        items: [
          "Fix Metadata & OpenGraph",
          "Generate Sitemap/Robots",
          "Basic image optimization",
          "Improve Lighthouse score",
        ],
      },
      {
        name: "Premium Core",
        price: "$250",
        delivery: "7 days",
        tag: null,
        items: [
          "Pass all Core Web Vitals",
          "Implement JSON-LD structures",
          "Refactor data fetching (SSG)",
          "Deep performance tuning",
        ],
      },
    ],
    faqs: [
      {
        q: "Will this guarantee rank #1 on Google?",
        a: "No honest developer can guarantee #1. I guarantee technical perfection, which is 50% of the battle. The rest is your content and backlinks.",
      },
      {
        q: "How do you measure success?",
        a: "Before and after Lighthouse scores, Core Web Vitals data, and error resolutions in Google Search Console.",
      },
      {
        q: "I have a React (Create-React-App) site, can you optimize it?",
        a: "Traditional React SPAs have inherent SEO flaws. The best optimization is migrating to Next.js — which I also offer.",
      },
      {
        q: "Do you write blog content?",
        a: "No, I strictly handle technical infrastructure formatting (SEO). You provide the words, I make Google love them.",
      },
    ]
  },
  "full-stack-development": {
    slug: "full-stack-development",
    title: "I'll build your entire Web App",
    subtitle: "from frontend to backend",
    description: "Senior MERN/Next.js Architect. Let me transform your idea into a highly scalable, production-ready full stack web application.",
    heroBadge: "Available for work · Full Stack Engineer",
    fiverrUrl: "https://www.fiverr.com", 
    features: [
      {
        icon: "🏗️",
        title: "Robust Architecture",
        desc: "Clean folder structures, reusable components, and maintainable MVC backend patterns.",
      },
      {
        icon: "💻",
        title: "Stunning Frontend",
        desc: "Responsive, animated, glassmorphic UI built with React, Tailwind CSS, & Framer Motion.",
      },
      {
        icon: "⚙️",
        title: "Secure Backend",
        desc: "RESTful or GraphQL APIs via Node.js/Express with robust validation and security middleware.",
      },
      {
        icon: "🗄️",
        title: "Database Design",
        desc: "Optimized schemas in MongoDB or PostgreSQL/Prisma depending on your relational needs.",
      },
      {
        icon: "🔐",
        title: "Authentication",
        desc: "JWT-based auth, NextAuth, OAuth (Google/Github), and role-based access control.",
      },
      {
        icon: "🚀",
        title: "CI/CD & DevOps",
        desc: "Automated deployment pipelines to Vercel/VPS, Dockerization, and cloud hosting.",
      },
    ],
    packages: [
      {
        name: "MVP Start",
        price: "$300",
        delivery: "10 days",
        tag: null,
        items: [
          "Simple 3-4 page App",
          "Authentication system",
          "Basic CRUD backend",
          "Database setup",
        ],
      },
      {
        name: "Pro Build",
        price: "$800",
        delivery: "21 days",
        tag: "Most Popular",
        items: [
          "Complex Web App (up to 10 views)",
          "Admin Dashboard included",
          "Advanced state management",
          "API Integration (Stripe/AI)",
        ],
      },
      {
        name: "Enterprise",
        price: "$2000+",
        delivery: "30+ days",
        tag: null,
        items: [
          "Large scale custom platform",
          "Microservices / Advanced DB",
          "Full DevOps / Cloud Native setup",
          "Long term support included",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you design the UI too?",
        a: "I can work off Figma designs you provide, or I can design a clean, modern UI from scratch based on references you like.",
      },
      {
        q: "Will I own the source code?",
        a: "100%. Upon completion and final payment, full intellectual property and source code is handed over.",
      },
      {
        q: "Can you sign an NDA?",
        a: "Absolutely. I respect confidentiality and handle proprietary ideas regularly.",
      },
      {
        q: "What tech stack do you precisely use?",
        a: "Usually Next.js, Tailwind CSS, Node.js, Express, MongoDB/PostgreSQL, and Prisma ORM.",
      },
    ]
  },
  "saas-development": {
    slug: "saas-development",
    title: "I'll engineer your SaaS",
    subtitle: "ready for MRR growth",
    description: "Turn your software idea into a recurring revenue machine. I build multi-tenant architectures, subscription billing, and user dashboards.",
    heroBadge: "Available for work · SaaS Architect",
    fiverrUrl: "https://www.fiverr.com", 
    features: [
      {
        icon: "🏢",
        title: "Multi-Tenancy",
        desc: "Secure architectures where users/organizations are perfectly isolated in the database.",
      },
      {
        icon: "💳",
        title: "Subscription Logic",
        desc: "Stripe integration for free trials, tiered plans, metered usage, and downgrades.",
      },
      {
        icon: "👥",
        title: "Role-Based Access",
        desc: "Admin, Manager, and User roles dynamically gating features and routes.",
      },
      {
        icon: "📈",
        title: "Admin Dashboards",
        desc: "God-mode panels to monitor MRR, active users, manage tickets, and track growth.",
      },
      {
        icon: "✉️",
        title: "Automated Emails",
        desc: "Transactional emails for onboarding, receipts, password resets, and notifications.",
      },
      {
        icon: "🌍",
        title: "Global Edge Edge",
        desc: "Deployed via Vercel Edge networks to ensure low latency for global subscribers.",
      },
    ],
    packages: [
      {
        name: "Foundation",
        price: "$500",
        delivery: "14 days",
        tag: null,
        items: [
          "Landing page & Auth",
          "Basic user dashboard",
          "Stripe checkout (one tier)",
          "Core SaaS logic",
        ],
      },
      {
        name: "Full Platform",
        price: "$1200",
        delivery: "25 days",
        tag: "Recommended",
        items: [
          "Multi-tier subscriptions",
          "Complex organizational roles",
          "Super Admin Dashboard",
          "Email & Webhook integration",
        ],
      },
      {
        name: "Scale Ready",
        price: "$2500+",
        delivery: "40 days",
        tag: null,
        items: [
          "Enterprise grade multi-tenancy",
          "Advanced analytics metrics",
          "Rate limiting & security hardcore",
          "Complete documentation",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I upgrade my SaaS later?",
        a: "Yes! I write modular code, making it very easy to add new features or pricing tiers post-launch.",
      },
      {
        q: "Do you handle hosting?",
        a: "I will set it up on your AWS/Vercel/DigitalOcean accounts so you retain full control over infrastructure.",
      },
      {
        q: "How do we handle API rate limits for users?",
        a: "I can implement Redis-based rate limiting to prevent abuse alongside your tiered pricing.",
      },
      {
        q: "What about user data privacy?",
        a: "Data is hashed and secured following best practices (Bcrypt, JWT handling, HTTPS only).",
      },
    ]
  },
  "ecommerce-web-app": {
    slug: "ecommerce-web-app",
    title: "I'll build a custom E-commerce App",
    subtitle: "designed to sell",
    description: "Forget sluggish templates. Get a lightning-fast, custom-coded Next.js storefront with dynamic carts, secure checkouts, and admin controls.",
    heroBadge: "Available for work · E-commerce Developer",
    fiverrUrl: "https://www.fiverr.com", 
    features: [
      {
        icon: "🛍️",
        title: "Dynamic Storefront",
        desc: "Lightning fast product-listing pages with advanced filtering, search, and pagination.",
      },
      {
        icon: "🛒",
        title: "Stateful Cart Options",
        desc: "Redux/Zustand powered shopping cart synchronized with local storage or backend logic.",
      },
      {
        icon: "💳",
        title: "Secure Checkouts",
        desc: "Frictionless checkout processes integrated seamlessly with Stripe or local gateways.",
      },
      {
        icon: "📦",
        title: "Inventory & Orders",
        desc: "Full admin portal to handle stock levels, update tracking info, and manage refunds.",
      },
      {
        icon: "👤",
        title: "Customer Profiles",
        desc: "User accounts for order history, saved addresses, wishlists, and easy re-ordering.",
      },
      {
        icon: "📱",
        title: "Mobile First M-commerce",
        desc: "Pixel-perfect responsiveness to capture the 70%+ of traffic coming from phones.",
      },
    ],
    packages: [
      {
        name: "Basic Store",
        price: "$400",
        delivery: "14 days",
        tag: null,
        items: [
          "Simple storefront (max 50 products)",
          "Cart & Checkout capabilities",
          "Stripe Integration",
          "Basic order tracking",
        ],
      },
      {
        name: "Pro Store",
        price: "$900",
        delivery: "21 days",
        tag: "Best Value",
        items: [
          "Advanced filtering & search",
          "Customer accounts & wishlists",
          "Comprehensive Admin Panel",
          "Reviews & Ratings system",
        ],
      },
      {
        name: "Marketplace / Custom",
        price: "$2000+",
        delivery: "35+ days",
        tag: null,
        items: [
          "Multi-vendor capabilities",
          "Complex variations/inventory",
          "Analytics & sales prediction",
          "Loyalty programs integration",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this better than Shopify?",
        a: "A custom Next.js stack avoids monthly fees, proprietary limits, and gives complete flexibility and superior SEO speeds.",
      },
      {
        q: "Can I manage products myself?",
        a: "Yes, I build an Admin Dashboard where you can easily add, edit, or delete inventory.",
      },
      {
        q: "Do you support digital products?",
        a: "Yes, we can securely handle digital downloads post-purchase.",
      },
      {
        q: "Does this include a mobile app?",
        a: "No, this is a highly responsive web application (PWA accessible). Native apps run separately.",
      },
    ]
  }
};
