import React from "react";

export default function BlogArticle() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            VPS Memory Management & Swap Space Documentation
          </h1>
          <p className="text-gray-400 text-lg">
            Essential guide for managing memory on low-RAM VPS instances
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Overview Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Overview</h2>
            <p>
              For VPS instances with limited RAM (especially &lt; 2GB), swap space is essential for handling
              memory-intensive operations like application builds, compilations, and temporary workload spikes.
            </p>
          </section>

          {/* The Problem Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">The Problem</h2>
            <p className="font-semibold text-gray-200">Out of Memory (OOM) errors occur when:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Applications require more memory than physically available</li>
              <li>Build processes (Node.js, Next.js, etc.) get terminated</li>
              <li>System becomes unresponsive or crashes</li>
              <li>Exit code 137 indicates process was killed due to OOM</li>
            </ul>
          </section>

          {/* Swap Space Solution */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Swap Space Solution</h2>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">What is Swap?</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Virtual memory extension using disk space</li>
                <li>Acts as overflow when RAM is full</li>
                <li>Prevents system crashes from memory exhaustion</li>
                <li>Essential for low-RAM VPS environments</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Current Memory Status Check</h3>
              <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
                <code className="text-cyan-400 font-mono">
                  {`# Check current memory and swap
free -h
swapon --show`}
                </code>
              </pre>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Creating Swap Space</h3>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-300">Method 1: Using fallocate (Faster)</h4>
                <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
                  <code className="text-cyan-400 font-mono">
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
                <h4 className="text-xl font-semibold text-gray-300">Method 2: Using dd (More Compatible)</h4>
                <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
                  <code className="text-cyan-400 font-mono">
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
                <h4 className="text-xl font-semibold text-gray-300">Verify Swap Installation</h4>
                <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
                  <code className="text-cyan-400 font-mono">
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
    </main>
  );
}
