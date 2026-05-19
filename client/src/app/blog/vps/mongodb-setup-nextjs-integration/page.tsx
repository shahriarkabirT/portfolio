"use client";

import { useState } from "react";
import { ExternalLink, Check, Copy } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Install MongoDB on Ubuntu 24.04",
    summary: "Add repository, install packages, and enable service",
    blocks: [
      {
        label: "Add GPG key & repo",
        code: `curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \\
  sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \\
  https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | \\
  sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`,
      },
      {
        label: "Install & start",
        code: `sudo apt update
sudo apt install -y mongodb-org
sudo systemctl enable mongod
sudo systemctl start mongod
sudo systemctl status mongod`,
      },
    ],
  },
  {
    id: 2,
    title: "Fix mongod.conf",
    summary: "Clean YAML configuration — avoids 'Unrecognized option' crash",
    note: "Ubuntu 24.04 is strict about YAML indentation. Replace the entire file with this.",
    blocks: [
      {
        label: "Open config",
        code: `sudo nano /etc/mongod.conf`,
      },
      {
        label: "Paste this exact content",
        code: `storage:
  dbPath: /var/lib/mongodb

systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

net:
  port: 27017
  bindIp: 0.0.0.0

processManagement:
  timeZoneInfo: /usr/share/zoneinfo

security:
  authorization: enabled`,
      },
      {
        label: "Restart",
        code: `sudo systemctl restart mongod
sudo ss -tlnp | grep 27017
# Should show: 0.0.0.0:27017`,
      },
    ],
  },
  {
    id: 3,
    title: "Create users",
    summary: "Admin user + per-app database user (best practice)",
    note: "Always use single quotes around passwords with special characters like ! to avoid bash history expansion errors.",
    blocks: [
      {
        label: "Open mongosh",
        code: `mongosh`,
      },
      {
        label: "Create admin user",
        code: `use admin

db.createUser({
  user: "adminUser",
  pwd: "StrongPassword123!",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    "readWriteAnyDatabase"
  ]
})`,
      },
      {
        label: "Create app-specific user",
        code: `use blogDB

db.createUser({
  user: "blogUser",
  pwd: "BlogPass456!",
  roles: [{ role: "readWrite", db: "blogDB" }]
})`,
      },
      {
        label: "Test login (use single quotes!)",
        code: `mongosh -u adminUser -p 'StrongPassword123!' --authenticationDatabase admin`,
      },
    ],
  },
  {
    id: 4,
    title: "Open firewall",
    summary: "Allow only your machine's IP — never open to the world",
    blocks: [
      {
        label: "Get your local machine's public IP",
        code: `curl ifconfig.me`,
      },
      {
        label: "Allow your IP on VPS",
        code: `sudo ufw allow from YOUR_PC_IP to any port 27017
sudo ufw reload
sudo ufw status`,
      },
    ],
  },
  {
    id: 5,
    title: "Your connection URIs",
    summary: "Internal, external, and MongoDB Compass URIs",
    uris: [
      {
        label: "Internal (app on same VPS)",
        uri: "mongodb://blogUser:BlogPass456!@127.0.0.1:27017/blogDB?authSource=blogDB",
        tag: "internal",
      },
      {
        label: "External (remote app / Compass)",
        uri: "mongodb://blogUser:BlogPass456!@YOUR_VPS_IP:27017/blogDB?authSource=blogDB",
        tag: "external",
      },
      {
        label: "Admin URI",
        uri: "mongodb://adminUser:StrongPassword123!@YOUR_VPS_IP:27017/?authSource=admin",
        tag: "admin",
      },
    ],
    note: "Replace YOUR_VPS_IP with the output of: curl ifconfig.me",
    blocks: [
      {
        label: "Get your VPS public IP",
        code: `curl ifconfig.me`,
      },
      {
        label: "Test URI locally on VPS",
        code: `mongosh "mongodb://blogUser:BlogPass456!@127.0.0.1:27017/blogDB?authSource=blogDB"`,
      },
    ],
  },
  {
    id: 6,
    title: "Connect Compass",
    summary: "GUI access to your MongoDB databases",
    note: "Compass sometimes struggles with special characters in the URI bar. If it fails, use the connection form fields instead.",
    compassFields: [
      { field: "Host", value: "YOUR_VPS_IP" },
      { field: "Port", value: "27017" },
      { field: "Authentication", value: "Username / Password" },
      { field: "Username", value: "blogUser" },
      { field: "Password", value: "BlogPass456!" },
      { field: "Auth Database", value: "blogDB" },
    ],
    blocks: [
      {
        label: "Or paste this URI directly in Compass",
        code: `mongodb://blogUser:BlogPass456!@YOUR_VPS_IP:27017/blogDB?authSource=blogDB`,
      },
    ],
  },
  {
    id: 7,
    title: "Use in Next.js project",
    summary: "MongoDB URI in .env.local + connection client helper",
    blocks: [
      {
        label: ".env.local",
        code: `MONGODB_URI=mongodb://blogUser:BlogPass456!@YOUR_VPS_IP:27017/blogDB?authSource=blogDB
MONGODB_DB=blogDB`,
      },
      {
        label: "lib/mongodb.js — connection helper",
        code: `import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise`,
      },
      {
        label: "app/api/posts/route.js — API route",
        code: `import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB)
  const posts = await db
    .collection('posts')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()
  return NextResponse.json(
    posts.map(p => ({ ...p, _id: p._id.toString() }))
  )
}

export async function POST(req) {
  const { title, slug, content } = await req.json()
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB)
  const result = await db.collection('posts').insertOne({
    title, slug, content,
    createdAt: new Date()
  })
  return NextResponse.json({ id: result.insertedId }, { status: 201 })
}`,
      },
      {
        label: "Install MongoDB driver",
        code: `npm install mongodb`,
      },
    ],
  },
];

interface CopyButtonProps {
  text: string;
}

function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={copy}
      className={`absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
        copied
          ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
          : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
      }`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>copy</span>
        </>
      )}
    </button>
  );
}

interface CodeBlockProps {
  label?: string;
  code: string;
}

function CodeBlock({ label, code }: CodeBlockProps) {
  return (
    <div className="mb-5">
      {label && (
        <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-60 mb-2 font-sans">
          {label}
        </div>
      )}
      <div className="relative group">
        <pre className="bg-[#18181b] border border-white/5 rounded-xl p-5 pr-14 overflow-x-auto font-mono text-[13px] leading-relaxed text-zinc-200">
          <code>{code}</code>
        </pre>
        <CopyButton text={code} />
      </div>
    </div>
  );
}

interface UriCardProps {
  label: string;
  uri: string;
  tag: string;
}

function UriCard({ label, uri, tag }: UriCardProps) {
  const [copied, setCopied] = useState(false);
  
  const tagColors: Record<string, string> = {
    internal: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    external: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    admin:    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  };
  
  const copy = () => {
    navigator.clipboard.writeText(uri).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="border border-[var(--card-border)] bg-[var(--card-bg)] rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${tagColors[tag] || "bg-gray-500/10 text-gray-600 border-gray-500/20"}`}>
          {tag}
        </span>
        <span className="text-xs text-[var(--text-secondary)] font-medium">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <code className="flex-1 text-xs font-mono bg-black/10 dark:bg-black/35 border border-[var(--card-border)] rounded-lg p-2.5 overflow-x-auto whitespace-nowrap text-emerald-500 dark:text-emerald-400">
          {uri}
        </code>
        <button
          onClick={copy}
          className={`flex-shrink-0 cursor-pointer p-2.5 rounded-lg border transition-all duration-200 ${
            copied
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              : "bg-white/5 border border-white/10 text-[var(--text-secondary)] hover:bg-white/10 hover:text-white"
          }`}
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

interface CompassField {
  field: string;
  value: string;
}

interface CompassTableProps {
  fields: CompassField[];
}

function CompassTable({ fields }: CompassTableProps) {
  return (
    <div className="border border-[var(--card-border)] rounded-xl overflow-hidden mb-6 bg-[var(--card-bg)] text-[13px]">
      {fields.map((r, i) => (
        <div
          key={i}
          className={`flex flex-col sm:flex-row ${
            i < fields.length - 1 ? "border-b border-[var(--card-border)]" : ""
          }`}
        >
          <div className="sm:w-48 p-3.5 bg-black/5 dark:bg-black/20 text-[var(--text-secondary)] font-semibold border-b sm:border-b-0 sm:border-r border-[var(--card-border)] text-xs uppercase tracking-wider flex items-center">
            {r.field}
          </div>
          <div className="p-3.5 font-mono text-[12.5px] text-[var(--text-primary)] flex-1 overflow-x-auto">
            {r.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MongoDBBlogGuide() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <div className="min-h-screen py-12 bg-[var(--background)] text-[var(--text-primary)]">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-600/20 text-emerald-500 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
            VPS · Ubuntu 24.04
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          MongoDB Setup & Next.js Integration
        </h1>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">
          Full, secure deployment procedure — install packages, clean YAML config files, isolate privileges with dedicated databases, customize system firewalls, connect Compass GUI, and connect a MERN or Next.js app safely.
        </p>
        <div className="flex items-center gap-4 mt-6 text-sm text-[var(--text-secondary)] opacity-85">
          <span>May 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </header>

      {/* Steps */}
      <main className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {steps.map((step) => {
            const isOpen = open === step.id;
            return (
              <div
                key={step.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--primary)] bg-[var(--card-bg)] shadow-xl shadow-blue-500/5"
                    : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-gray-500/30"
                }`}
              >
                {/* Step header */}
                <button
                  onClick={() => setOpen(isOpen ? null : step.id)}
                  className="w-full flex items-center gap-4 p-5 text-left cursor-pointer transition-colors duration-200"
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      isOpen
                        ? "bg-[var(--primary)] text-white ring-4 ring-blue-500/10"
                        : "bg-[var(--muted)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {step.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] opacity-75">
                      {step.summary}
                    </p>
                  </div>
                  <span
                    className={`text-xl text-[var(--text-secondary)] transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-[var(--primary)] font-bold" : "rotate-0"
                    }`}
                  >
                    ›
                  </span>
                </button>

                {/* Step body */}
                {isOpen && (
                  <div className="p-6 border-t border-[var(--card-border)] bg-[var(--background)]">
                    {step.note && (
                      <div className="bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 rounded-xl p-4 mb-6 text-sm flex gap-3 items-start">
                        <span className="text-base flex-shrink-0">⚠️</span>
                        <div className="leading-relaxed">
                          <strong className="font-semibold">Note:</strong> {step.note}
                        </div>
                      </div>
                    )}

                    {step.uris && (
                      <div className="space-y-4 mb-6">
                        {step.uris.map((u, i) => (
                          <UriCard key={i} {...u} />
                        ))}
                      </div>
                    )}

                    {step.compassFields && (
                      <div className="mb-6">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-60 mb-3 font-sans">
                          Compass connection details
                        </div>
                        <CompassTable fields={step.compassFields} />
                      </div>
                    )}

                    {step.blocks &&
                      step.blocks.map((b, i) => (
                        <div key={i} className="mt-2">
                          <CodeBlock label={b.label} code={b.code} />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick ref footer */}
        <div className="mt-12 p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-65 mb-4 font-sans">
            Quick reference — URI patterns
          </h4>
          <div className="space-y-4">
            {[
              ["Same VPS (internal)", "mongodb://user:pass@127.0.0.1:27017/db?authSource=db"],
              ["Remote app / Compass", "mongodb://user:pass@VPS_IP:27017/db?authSource=db"],
              ["Admin access", "mongodb://adminUser:pass@VPS_IP:27017/?authSource=admin"],
              [".env.local key", "MONGODB_URI=mongodb://user:pass@VPS_IP:27017/db?authSource=db"],
            ].map(([label, val], i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[var(--card-border)] pb-3 last:border-0 last:pb-0"
              >
                <span className="text-xs font-semibold text-[var(--text-secondary)] md:w-48">
                  {label}
                </span>
                <code className="flex-1 text-[11.5px] font-mono bg-black/10 dark:bg-black/35 border border-[var(--card-border)] rounded px-2.5 py-1 text-[var(--text-primary)] overflow-x-auto whitespace-nowrap">
                  {val}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info/call to action */}
        <footer className="mt-20 pt-12 border-t border-[var(--border)] text-center">
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            Configuring a clean and secure database system is the backbone of any production-grade application. Implementing robust security protocols, user permissions, and strict firewalls protects your data from malicious exploits.
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
