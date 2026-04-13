"use client";

import { ExternalLink } from "lucide-react";

export default function GitHubSSHGuide() {
  const steps = [
    {
      id: 1,
      title: "Generate an SSH key pair on your machine:",
      icon: "1",
      commands: [
        {
          description: "Press Enter three times — accept defaults, skip passphrase.",
          code: 'ssh-keygen -t ed25519 -C "your@email.com"',
        },
      ],
    },
    {
      id: 2,
      title: "Copy your public key:",
      icon: "2",
      commands: [
        {
          description: "Select all the output and copy it.",
          code: "cat ~/.ssh/id_ed25519.pub",
        },
      ],
    },
    {
      id: 3,
      title: "Go to GitHub → Settings → SSH and GPG keys → New SSH key, paste your key, and save.",
      icon: "3",
      commands: [],
    },
    {
      id: 4,
      title: "Test that it works:",
      icon: "4",
      commands: [
        {
          description: '"Hi username! You\'ve successfully authenticated..."',
          code: "ssh -T git@github.com",
        },
      ],
    },
    {
      id: 5,
      title: "Switch existing repos from HTTPS to SSH:",
      icon: "5",
      commands: [
        {
          description: "Done. No more credential prompts — ever.",
          code: "git remote set-url origin git@github.com:user/repo.git",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-[var(--background)] text-[var(--text-primary)]">
      <header className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">
            GIT & LINUX
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Stop typing your GitHub password on every push
        </h1>
        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
          <span>April 2026</span>
          <span>•</span>
          <span>2 min read</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        {/* The Problem */}
        <section className="bg-red-950/30 border border-red-900/30 rounded-xl p-8 mb-12">
          <h2 className="text-red-500 text-xs font-black uppercase tracking-widest mb-4">
            THE PROBLEM
          </h2>
          <p className="text-lg text-red-100/90 leading-relaxed">
            Every time you run <code className="bg-black/40 px-1.5 py-0.5 rounded text-white font-mono text-sm">git push</code> or <code className="bg-black/40 px-1.5 py-0.5 rounded text-white font-mono text-sm">git pull</code>, Ubuntu asks for your GitHub credentials. GitHub has deprecated plain password auth, so now you need a personal access token too — a long, ugly string you have to paste every single time. There's a better way.
          </p>
        </section>

        {/* The Solution */}
        <section className="mb-8">
          <h2 className="text-emerald-500 text-xs font-black uppercase tracking-widest mb-8">
            THE SOLUTION — SSH AUTHENTICATION
          </h2>
          
          <div className="bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-8 space-y-12">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4 text-white/95">
                        {step.title}
                      </h3>
                      {step.commands.map((cmd, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="bg-black/50 rounded-lg p-4 border border-white/5 group relative">
                            <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                              {cmd.code}
                            </pre>
                          </div>
                          {cmd.description && (
                            <p className="text-[var(--text-secondary)] italic text-sm">
                              {cmd.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {step.id !== steps.length && (
                    <div className="absolute left-4 top-12 bottom-0 w-px bg-white/5 -mb-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer info/call to action */}
        <footer className="mt-20 pt-12 border-t border-[var(--border)] text-center">
          <p className="text-[var(--text-secondary)] mb-8">
            Setting up SSH keys is the professional way to interact with GitHub. It's more secure than HTTPS and saves you countless hours of pasting tokens.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.fiverr.com/s/Ayeo8r4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-emerald-600/20"
            >
              Need help with DevOps? Hire me
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
