"use client"
import {
  Check,
  ChevronRight,
  Code,
  Copy,
  GitBranch,
  Menu,
  Moon,
  Server,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

export default function CICDBlog() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({
    code,
    language,
    id,
  }: {
    code: string;
    language: string;
    id: string;
  }) => (
    <div
      className={`relative rounded-lg overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      } my-4`}
    >
      <div
        className={`flex items-center justify-between px-4 py-2 border-b ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-gray-200 border-gray-300"
        }`}
      >
        <span
          className={`text-xs font-mono ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {language}
        </ span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className={`p-1.5 rounded transition-colors ${
            isDark ? "hover:bg-gray-700" : "hover:bg-gray-300"
          }`}
        >
          {copiedCode === id ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy
              className={`w-4 h-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-800"}`}
        >
          {code}
        </code>
      </pre>
    </div>
  );

  const Section = ({
    children,
    title,
    icon: Icon,
  }: {
    children: React.ReactNode;
    title: string;
    icon: React.ComponentType<{ className: string }>;
  }) => (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <Icon
            className={`w-6 h-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
          />
        )}
        <h2
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${
          isDark
            ? "bg-gray-900/80 border-gray-800"
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Terminal
                className={`w-6 h-6 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <h1 className="text-xl font-bold">CI/CD Guide</h1>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className={`border-b ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-gray-950 border-gray-800"
            : "bg-gradient-to-b from-gray-50 to-white border-gray-200"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1
              className={`text-4xl sm:text-5xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              CI/CD with VPS: Complete A to Z Guide
            </h1>
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-3xl mx-auto`}
            >
              From theory to practical implementation - Build a real-world CI/CD
              pipeline for your VPS
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { icon: GitBranch, text: "Git Integration" },
                { icon: Zap, text: "Auto Deploy" },
                { icon: Server, text: "VPS Ready" },
                { icon: Code, text: "Production Ready" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <item.icon
                    className={`w-4 h-4 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Part 1: Theory */}
        <Section title="Part 1: Theory & Fundamentals" icon={Code}>
          <div
            className={`rounded-lg p-6 mb-6 ${
              isDark
                ? "bg-gray-900 border border-gray-800"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              What is CI/CD?
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  Continuous Integration (CI)
                </h4>
                <ul
                  className={`space-y-1 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>
                      Developers merge code changes into a central repository
                      frequently
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Automated builds and tests run on each commit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>
                      Catches bugs early and improves software quality
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  Continuous Deployment (CD)
                </h4>
                <ul
                  className={`space-y-1 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>
                      Automatically deploys code changes to production after
                      passing tests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Reduces manual deployment errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Enables rapid feature delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`rounded-lg p-6 ${
              isDark
                ? "bg-blue-900/20 border border-blue-800"
                : "bg-blue-50 border border-blue-200"
            }`}
          >
            <h4 className="font-semibold mb-3">CI/CD Pipeline Flow</h4>
            <div
              className={`font-mono text-sm p-4 rounded ${
                isDark ? "bg-gray-900" : "bg-white"
              }`}
            >
              Code Push → Git Repository → CI/CD Service → Build → Test → Deploy
              to VPS → Health Check
            </div>
          </div>
        </Section>

        {/* Part 2: Prerequisites */}
        <Section title="Part 2: Prerequisites" icon={Server}>
          <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Before diving into implementation, make sure you have the following
            ready:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "A VPS (DigitalOcean, Linode, AWS EC2, etc.)",
              "A Git Repository (GitHub, GitLab, or Bitbucket)",
              "A CI/CD Service (GitHub Actions or GitLab CI)",
              "SSH Access to your VPS",
              "Basic knowledge of Linux commands",
              "Node.js application (or any other stack)",
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-lg ${
                  isDark ? "bg-gray-900" : "bg-gray-50"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isDark
                      ? "bg-blue-900/50 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {i + 1}
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">VPS Initial Setup</h4>
            <CodeBlock
              id="vps-setup"
              language="bash"
              code={`# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (for Ubuntu)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install nginx (reverse proxy)
sudo apt install -y nginx

# Install PM2 (process manager)
sudo npm install -g pm2`}
            />
          </div>
        </Section>

        {/* Part 3: Implementation */}
        <Section title="Part 3: Practical Implementation" icon={Zap}>
          {/* Step 1: Application */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Step 1: Create Your Application
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Let's create a simple Node.js Express application with health
              checks:
            </p>
            <CodeBlock
              id="app-js"
              language="javascript"
              code={`// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from CI/CD Pipeline!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const server = app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = app;`}
            />
          </div>

          {/* Step 2: SSH Keys */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Step 2: Set Up SSH Keys for Deployment
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Generate SSH keys for secure, automated deployments:
            </p>
            <CodeBlock
              id="ssh-setup"
              language="bash"
              code={`# Generate SSH key pair (run locally)
ssh-keygen -t ed25519 -C "cicd@yourproject" -f ~/.ssh/cicd_deploy_key

# Copy public key to VPS
ssh-copy-id -i ~/.ssh/cicd_deploy_key.pub YOUR_USER@YOUR_VPS_IP

# Test SSH connection
ssh -i ~/.ssh/cicd_deploy_key YOUR_USER@YOUR_VPS_IP

# Get private key for CI/CD secrets
cat ~/.ssh/cicd_deploy_key`}
            />
          </div>

          {/* Step 3: GitHub Actions */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Step 3: GitHub Actions CI/CD Pipeline
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Create{" "}
              <code
                className={`px-2 py-1 rounded ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                .github/workflows/deploy.yml
              </code>{" "}
              in your repository:
            </p>
            <CodeBlock
              id="github-actions"
              language="yaml"
              code={`name: CI/CD Pipeline

on:
  push:
    branches: [ main, master ]

env:
  NODE_VERSION: '20.x'
  APP_DIR: /home/deploy/app
  APP_NAME: myapp

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: \${{ env.NODE_VERSION }}
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Deploy to VPS
      uses: appleboy/ssh-action@v1.0.0
      with:
        host: \${{ secrets.VPS_HOST }}
        username: \${{ secrets.VPS_USERNAME }}
        key: \${{ secrets.VPS_SSH_KEY }}
        script: |
          cd \${{ env.APP_DIR }}
          git pull origin main
          npm ci --production
          pm2 restart \${{ env.APP_NAME }}
          pm2 save
    
    - name: Health Check
      run: |
        sleep 10
        curl -f http://\${{ secrets.VPS_HOST }}/health`}
            />
          </div>

          {/* Step 4: VPS Prep */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Step 4: VPS Preparation Script
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Run this script on your VPS to prepare it for deployment:
            </p>
            <CodeBlock
              id="vps-prep"
              language="bash"
              code={`#!/bin/bash
set -e

echo "🚀 Starting VPS setup for CI/CD..."

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install nginx
apt install -y nginx

# Install PM2
npm install -g pm2

# Create deployment user
useradd -m -s /bin/bash deploy

# Create app directory
mkdir -p /home/deploy/app
chown -R deploy:deploy /home/deploy/app

# Setup PM2 startup
su - deploy -c "pm2 startup systemd -u deploy --hp /home/deploy"

# Configure nginx
cat > /etc/nginx/sites-available/app << 'EOF'
server {
    listen 80;
    server_name _;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/app /etc/nginx/sites-enabled/app
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl restart nginx

echo "✅ VPS setup complete!"`}
            />
          </div>

          {/* Step 5: GitHub Secrets */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Step 5: Configure GitHub Secrets
            </h3>
            <div
              className={`rounded-lg p-6 ${
                isDark ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <p
                className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                Add these secrets to your GitHub repository (Settings → Secrets
                and variables → Actions):
              </p>
              <div className="space-y-3">
                {[
                  {
                    name: "VPS_HOST",
                    desc: "Your VPS IP or domain (e.g., 192.168.1.100)",
                  },
                  { name: "VPS_USERNAME", desc: "SSH username (e.g., deploy)" },
                  {
                    name: "VPS_SSH_KEY",
                    desc: "Private SSH key content (from ~/.ssh/cicd_deploy_key)",
                  },
                  {
                    name: "VPS_PORT",
                    desc: "SSH port (default: 22) - Optional",
                  },
                ].map((secret, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded ${
                      isDark ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <code
                      className={`font-mono font-semibold ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {secret.name}
                    </code>
                    <p
                      className={`text-sm mt-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {secret.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Testing Section */}
        <Section title="Testing Your Pipeline" icon={Terminal}>
          <div
            className={`rounded-lg p-6 ${
              isDark
                ? "bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-800"
                : "bg-gradient-to-r from-green-50 to-blue-50 border border-green-200"
            }`}
          >
            <h4 className="font-semibold mb-3">Deploy Your First Version</h4>
            <ol
              className={`space-y-2 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li className="flex items-start gap-2">
                <span
                  className={`font-bold ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                >
                  1.
                </span>
                <span>Commit and push your code to the main branch</span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className={`font-bold ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                >
                  2.
                </span>
                <span>
                  Check the Actions tab in GitHub to see your pipeline running
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className={`font-bold ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                >
                  3.
                </span>
                <span>Wait for tests to pass and deployment to complete</span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className={`font-bold ${
                    isDark ? "text-green-400" : "text-green-600"
                  }`}
                >
                  4.
                </span>
                <span>Visit your VPS IP or domain to see your app live!</span>
              </li>
            </ol>
          </div>

          <div className="mt-6">
            <CodeBlock
              id="test-commands"
              language="bash"
              code={`# Test your deployment
curl http://YOUR_VPS_IP/

# Check health endpoint
curl http://YOUR_VPS_IP/health

# View PM2 status on VPS
ssh deploy@YOUR_VPS_IP
pm2 status
pm2 logs myapp`}
            />
          </div>
        </Section>

        {/* Best Practices */}
        <Section title="Best Practices & Tips" icon={Zap}>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Security",
                tips: [
                  "Rotate SSH keys regularly",
                  "Use environment variables for secrets",
                  "Enable firewall (UFW) on VPS",
                  "Keep dependencies updated",
                ],
              },
              {
                title: "Performance",
                tips: [
                  "Use PM2 cluster mode for scaling",
                  "Enable Nginx caching",
                  "Monitor with PM2 Keymetrics",
                  "Set up proper logging",
                ],
              },
              {
                title: "Reliability",
                tips: [
                  "Always run tests before deploy",
                  "Implement health checks",
                  "Set up error alerting",
                  "Keep backups of your code",
                ],
              },
              {
                title: "Development",
                tips: [
                  "Use staging environment first",
                  "Test deployments locally",
                  "Document your pipeline",
                  "Version your infrastructure",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className={`p-6 rounded-lg ${
                  isDark ? "bg-gray-900" : "bg-gray-50"
                }`}
              >
                <h4 className="font-semibold mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.tips.map((tip, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-2 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Conclusion */}
        <div
          className={`rounded-lg p-8 text-center ${
            isDark
              ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800"
              : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            🎉 You're All Set!
          </h3>
          <p
            className={`text-lg mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            You now have a fully automated CI/CD pipeline that deploys your
            application to a VPS whenever you push to the main branch.
          </p>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Start building, commit your changes, and watch your code
            automatically deploy to production!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`border-t mt-16 ${
          isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Happy Deploying! 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
