import { ExternalLink } from "lucide-react";

export default function BlogArticle() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] py-12 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-[var(--border)] pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            VPS Memory Management & Swap Space Documentation
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Essential guide for managing memory on low-RAM VPS instances
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed">
          {/* Overview Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Overview
            </h2>
            <p>
              For VPS instances with limited RAM (especially &lt; 2GB), swap
              space is essential for handling memory-intensive operations like
              application builds, compilations, and temporary workload spikes.
            </p>
          </section>

          {/* The Problem Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              The Problem
            </h2>
            <p className="font-semibold text-[var(--text-primary)]">
              Out of Memory (OOM) errors occur when:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Applications require more memory than physically available
              </li>
              <li>Build processes (Node.js, Next.js, etc.) get terminated</li>
              <li>System becomes unresponsive or crashes</li>
              <li>Exit code 137 indicates process was killed due to OOM</li>
            </ul>
          </section>

          {/* Swap Space Solution */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mt-8 mb-4">
              Swap Space Solution
            </h2>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                What is Swap?
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Virtual memory extension using disk space</li>
                <li>Acts as overflow when RAM is full</li>
                <li>Prevents system crashes from memory exhaustion</li>
                <li>Essential for low-RAM VPS environments</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Current Memory Status Check
              </h3>
              <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
                <code className="text-cyan-400 font-mono">
                  {`# Check current memory and swap
free -h
swapon --show`}
                </code>
              </pre>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Creating Swap Space
              </h3>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-[var(--text-secondary)]">
                  Method 1: Using fallocate (Faster)
                </h4>
                <pre className="bg-[var(--card-bg)] p-4 rounded border border-[var(--card-border)] overflow-x-auto text-sm">
                  <code className="text-[var(--primary)] font-mono">
                    {`sudo swapoff -a
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`}
                  </code>
                </pre>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-[var(--text-secondary)]">
                  Method 2: Using dd (More Compatible)
                </h4>
                <pre className="bg-[var(--card-bg)] p-4 rounded border border-[var(--card-border)] overflow-x-auto text-sm">
                  <code className="text-[var(--primary)] font-mono">
                    {`sudo swapoff -a
sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`}
                  </code>
                </pre>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-[var(--text-secondary)]">
                  Verify Swap Installation
                </h4>
                <pre className="bg-[var(--card-bg)] p-4 rounded border border-[var(--card-border)] overflow-x-auto text-sm">
                  <code className="text-[var(--primary)] font-mono">
                    {`free -h
# Should show swap in the output`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* You can continue adding Optimization, Swap Management, Best Practices, Workflow, etc. */}
        </div>
      </article>

      <div className="mt-16">
        <div className="flex justify-center mb-12">
          <a
            href="https://www.fiverr.com/s/Ayeo8r4"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Hire Me on Fiverr
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
