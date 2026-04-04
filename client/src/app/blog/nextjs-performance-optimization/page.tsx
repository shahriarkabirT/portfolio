import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Increase Your Performance in Next.js App',
  description: 'Advanced, actionable strategies to drastically reduce load times, improve Core Web Vitals, and optimize your Next.js application.',
};

export default function NextjsPerformanceArticle() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] py-16 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-[var(--border)] pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs font-semibold">
              Performance
            </span>
            <span className="text-[var(--text-secondary)] text-sm">
              April 4, 2026
            </span>
            <span className="text-[var(--text-secondary)] text-sm">•</span>
            <span className="text-[var(--text-secondary)] text-sm">
              10 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)] tracking-tight">
            Increase Your Performance in Next.js App: Advanced Optimization Techniques
          </h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            While Next.js is fast out of the box, building production-heavy applications can lead to degraded Core Web Vitals if not optimized properly. Here are highly actionable, specific techniques to shave off megabytes and milliseconds.
          </p>
        </header>

        <div className="space-y-12 text-[var(--text-secondary)] leading-relaxed">
          
          {/* Section 1: Polyfills */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">🗑️</span> 1. Remove Unnecessary Polyfills
            </h2>
            <p>
              Next.js automatically injects polyfills for older browsers. If your application targets modern browsers, you are shipping dead code to users. You can optimize this by updating your <code>browserslist</code>.
            </p>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-[var(--primary)] font-mono">
{`// Add this to your package.json
"browserslist": [
  "last 2 Chrome versions",
  "last 2 Firefox versions",
  "last 2 Safari versions",
  "last 2 Edge versions",
  "not dead"
]`}
              </code>
            </pre>
            <p className="text-sm">
              This simple change prevents Next.js from aggressively polyfilling modern ES features (like <code>Promise.allSettled</code> or <code>Object.assign</code>), significantly reducing your base JS bundle size.
            </p>
          </section>

          {/* Section 2: LCP Image Fetching */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">🖼️</span> 2. Prioritize LCP Image Fetching
            </h2>
            <p>
              Your Largest Contentful Paint (LCP) element is almost always the Hero Image. Waiting for the browser to discover, download, and render this image kills your Lighthouse score. Tell the browser to aggressively fetch it first.
            </p>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-green-500 font-mono">
{`import Image from 'next/image';

export default function Hero() {
  return (
    <Image 
      src="/hero-banner.jpg" 
      alt="Hero Banner"
      fill
      priority={true} // Bypasses lazy loading
      fetchPriority="high" // 👈 The magic attribute
    />
  );
}`}
              </code>
            </pre>
            <p className="text-sm">
              The <code>fetchPriority="high"</code> property signals the browser scheduler to load this image concurrently with critical CSS/JS, drastically improving LCP times.
            </p>
          </section>

          {/* Section 3: Skip Initial Render Animations */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">⚡</span> 3. Skip Initial Render Animations on LCP Elements
            </h2>
            <p>
              Animating your Hero section text/images with Framer Motion looks great, but rendering them at <code>opacity: 0</code> initially causes the browser to record a massive delay on the LCP.
            </p>
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
              <p className="text-blue-400 font-semibold mb-2">💡 How to fix it:</p>
              <p>
                Only run entrance animations if it is a client-side navigation. If it is the user's very first page load (first render), bypass the animation completely.
              </p>
            </div>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-[var(--primary)] font-mono">
{`"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroContent() {
  // Check if it's the initial page load to skip animation
  const [isFirstRender, setIsFirstRender] = useState(true);
  
  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <motion.h1
      initial={isFirstRender ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Fast LCP Rendered Without Delay
    </motion.h1>
  );
}`}
              </code>
            </pre>
          </section>

          {/* Section 4: Tree-Shake Heavy Libraries */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">🌲</span> 4. Tree-Shake Heavy Libraries
            </h2>
            <p>
              Icon libraries like <code>lucide-react</code> or <code>@heroicons/react</code> can bloat your JavaScript chunk if not imported optimally. You can enforce aggressive tree-shaking natively via Next.js configuration.
            </p>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-purple-400 font-mono">
{`// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      'lodash'
    ],
  },
};
export default nextConfig;`}
              </code>
            </pre>
            <p className="text-sm">
              This forces the Next.js compiler to ONLY bundle the exact icons/functions you import, rather than downloading the entire barrel file mapping.
            </p>
          </section>

          {/* Section 5: Enable AVIF Image Compression */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">📸</span> 5. Enable AVIF Image Compression
            </h2>
            <p>
              Next.js optimizes images to WebP by default. However, AVIF offers a <strong>20% to 50% reduction in file size</strong> compared to WebP with similar or better quality.
            </p>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-[var(--primary)] font-mono">
{`// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
export default nextConfig;`}
              </code>
            </pre>
            <p className="text-sm">
              The Next.js image optimization API will now analyze the user's browser, and serve AVIF if supported, falling back to WebP otherwise.
            </p>
          </section>

          {/* Section 6: Lazy-Load Components */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">⏳</span> 6. Lazy-Load Below-the-Fold Components
            </h2>
            <p>
              If your landing page has complex components (like interactive maps, heavy charts, or 3D models) that sit entirely below the fold, you shouldn't force the browser to render them on initial load.
            </p>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-indigo-400 font-mono">
{`import dynamic from 'next/dynamic';

// Next.js will chunk this code separately
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p className="h-64 animate-pulse bg-gray-100 dark:bg-gray-800" />,
  ssr: false // Optional: Disable Server Side Rendering for pure client libs
});

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Features />
      {/* Chart will only load when the user scrolls near it */}
      <HeavyChart />
    </div>
  );
}`}
              </code>
            </pre>
          </section>

          {/* Section 7: Preconnect */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">🔗</span> 7. Preconnect to Analytics Third-Parties
            </h2>
            <p>
              Establishing DNS lookups, TCP handshakes, and SSL negotiations with third-party servers (like Google Analytics, Stripe, or Vercel Web Analytics) takes valuable time. 
            </p>
            <p>
              Add preconnect declarations to your global <code>layout.tsx</code> to instantiate these connections early in the page lifecycle:
            </p>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-rose-400 font-mono">
{`// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://api.stripe.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}`}
              </code>
            </pre>
          </section>

          {/* Section 8: Font Optimization */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
              <span className="text-2xl">✒️</span> 8. Zero CLS with <code>next/font</code>
            </h2>
            <p>
              Cumulative Layout Shift (CLS) happens when custom fonts load late and text suddenly resizes. Next.js natively solves this via <code>next/font</code> by automatically self-hosting your Google Fonts and applying generic font fallbacks pre-calculated to have the exact same CSS dimensions as your target font.
            </p>
            <pre className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] overflow-x-auto text-sm">
              <code className="text-[var(--primary)] font-mono">
{`import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Important for immediate rendering
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}`}
              </code>
            </pre>
          </section>

          {/* Conclusion */}
          <section className="space-y-4 border-t border-[var(--border)] pt-8 mt-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              🏆 Conclusion
            </h2>
            <p>
              Performance optimization is not about one silver bullet; it's the accumulation of multiple distinct optimizations. By implementing these 8 advanced architectures—AVIF compression, tree-shaking, smart dynamic imports, and LCP prioritization—you ensure that your Next.js application feels unbelievably snappy and meets Google's strictest Core Web Vital standards.
            </p>
          </section>

        </div>
      </article>
    </main>
  );
}
