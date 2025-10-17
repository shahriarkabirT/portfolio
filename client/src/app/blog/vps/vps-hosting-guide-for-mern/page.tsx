export default function VPSHostingTutorial() {
  const steps = [
    {
      id: 1,
      title: "Initial Server Setup",
      icon: "🖥️",
      commands: [
        {
          description: "Connect to your VPS via SSH",
          code: "ssh root@your_server_ip"
        },
        {
          description: "Update and upgrade system packages",
          code: "sudo apt update\nsudo apt upgrade"
        }
      ]
    },
    {
      id: 2,
      title: "Install Node.js via NVM",
      icon: "📦",
      commands: [
        {
          description: "Install NVM (Node Version Manager)",
          code: "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"
        },
        {
          description: "Install Node.js LTS version",
          code: "nvm install --lts"
        },
        {
          description: "Verify installation",
          code: "node --version\nnpm --version"
        }
      ]
    },
    {
      id: 3,
      title: "Install MongoDB",
      icon: "🍃",
      commands: [
        {
          description: "Import MongoDB public GPG key",
          code: "curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \\\nsudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor"
        },
        {
          description: "Add MongoDB repository",
          code: 'echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list'
        },
        {
          description: "Install MongoDB",
          code: "sudo apt-get update\nsudo apt-get install -y mongodb-org"
        },
        {
          description: "Start and enable MongoDB",
          code: "sudo systemctl start mongod\nsudo systemctl enable mongod\nsudo systemctl status mongod"
        }
      ]
    },
    {
      id: 4,
      title: "Setup Git & Clone Project",
      icon: "🔧",
      commands: [
        {
          description: "Install Git and GitHub CLI",
          code: "sudo apt install git\nsudo apt install gh"
        },
        {
          description: "Authenticate GitHub CLI",
          code: "gh auth login"
        },
        {
          description: "Clone your repository",
          code: "git clone https://github.com/username/your-project.git\ncd your-project"
        }
      ]
    },
    {
      id: 5,
      title: "Install Package Manager",
      icon: "📥",
      commands: [
        {
          description: "Install pnpm globally",
          code: "npm install -g pnpm"
        }
      ]
    },
    {
      id: 6,
      title: "Backend Setup",
      icon: "⚙️",
      commands: [
        {
          description: "Navigate to backend directory",
          code: "cd backend"
        },
        {
          description: "Create environment file",
          code: "nano .env"
        },
        {
          description: "Add your environment variables (example)",
          code: "PORT=5001\nMONGO_URI=mongodb://localhost:27017/yourdb\nJWT_SECRET=your_secret_key\nNODE_ENV=production"
        },
        {
          description: "Save file (Ctrl+O, Enter, then Ctrl+X)",
          code: ""
        },
        {
          description: "Install dependencies",
          code: "pnpm install"
        }
      ]
    },
    {
      id: 7,
      title: "Install & Configure PM2",
      icon: "🔄",
      commands: [
        {
          description: "Install PM2 globally",
          code: "npm install -g pm2"
        },
        {
          description: "Start backend with PM2",
          code: 'pm2 start npm --name "backend-app" -- start'
        },
        {
          description: "Save PM2 configuration",
          code: "pm2 save\npm2 startup"
        },
        {
          description: "Test your backend",
          code: "curl http://localhost:5001"
        }
      ]
    },
    {
      id: 8,
      title: "Frontend Setup (Next.js)",
      icon: "⚛️",
      commands: [
        {
          description: "Navigate to frontend directory",
          code: "cd ../frontend"
        },
        {
          description: "Create environment file",
          code: "nano .env.local"
        },
        {
          description: "Add your environment variables",
          code: "NEXT_PUBLIC_API_URL=http://your_server_ip:5001"
        },
        {
          description: "Install dependencies and build",
          code: "pnpm install\npnpm run build"
        },
        {
          description: "Test the build locally",
          code: "pnpm start"
        }
      ]
    },
    {
      id: 9,
      title: "Configure Firewall (UFW)",
      icon: "🛡️",
      commands: [
        {
          description: "Enable firewall and allow necessary ports",
          code: "sudo ufw enable\nsudo ufw allow 22    # SSH\nsudo ufw allow 80    # HTTP\nsudo ufw allow 443   # HTTPS\nsudo ufw status"
        }
      ]
    },
    {
      id: 10,
      title: "Install & Configure Nginx",
      icon: "🌐",
      commands: [
        {
          description: "Install Nginx",
          code: "sudo apt install nginx"
        },
        {
          description: "Navigate to Nginx configuration",
          code: "cd /etc/nginx/sites-available"
        },
        {
          description: "Create configuration for Next.js app",
          code: "sudo nano yourdomain.com.conf"
        },
        {
          description: "Add this configuration",
          code: `server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    client_max_body_size 100M;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`
        },
        {
          description: "Create symbolic link and restart Nginx",
          code: "sudo ln -s /etc/nginx/sites-available/yourdomain.com.conf /etc/nginx/sites-enabled/\nsudo nginx -t\nsudo systemctl restart nginx"
        }
      ]
    },
    {
      id: 11,
      title: "Setup Backend API Subdomain",
      icon: "🔗",
      commands: [
        {
          description: "Create API subdomain configuration",
          code: "cd /etc/nginx/sites-available\nsudo nano api.yourdomain.com.conf"
        },
        {
          description: "Add this configuration",
          code: `server {
    listen 80;
    listen [::]:80;
    server_name api.yourdomain.com www.api.yourdomain.com;

    client_max_body_size 100M;

    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`
        },
        {
          description: "Enable configuration and restart",
          code: "sudo ln -s /etc/nginx/sites-available/api.yourdomain.com.conf /etc/nginx/sites-enabled/\nsudo systemctl restart nginx"
        }
      ]
    },
    {
      id: 12,
      title: "Configure PM2 for Next.js",
      icon: "🚀",
      commands: [
        {
          description: "Create PM2 ecosystem file",
          code: "cd ~/your-project/frontend\nnano ecosystem.config.js"
        },
        {
          description: "Add this configuration",
          code: `module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "start",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ]
}`
        },
        {
          description: "Start application with PM2",
          code: "pm2 start ecosystem.config.js\npm2 save"
        },
        {
          description: "Check PM2 status",
          code: "pm2 status\npm2 logs"
        }
      ]
    },
    {
      id: 13,
      title: "Domain Configuration",
      icon: "🌍",
      commands: [
        {
          description: "Point your domain to your VPS IP in DNS settings:",
          code: "Type A Record:\nHostname: @\nValue: your_server_ip\n\nType A Record:\nHostname: www\nValue: your_server_ip\n\nType A Record:\nHostname: api\nValue: your_server_ip"
        },
        {
          description: "Update frontend environment to use domain",
          code: "nano .env.local\n# Change to:\nNEXT_PUBLIC_API_URL=https://api.yourdomain.com"
        },
        {
          description: "Rebuild and restart",
          code: "pnpm run build\npm2 restart nextjs-app"
        }
      ]
    },
    {
      id: 14,
      title: "Install SSL Certificate (Optional)",
      icon: "🔒",
      commands: [
        {
          description: "Install Certbot",
          code: "sudo apt install certbot python3-certbot-nginx"
        },
        {
          description: "Obtain SSL certificate",
          code: "sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com\nsudo certbot --nginx -d api.yourdomain.com"
        },
        {
          description: "Auto-renewal test",
          code: "sudo certbot renew --dry-run"
        }
      ]
    }
  ];

  const usefulCommands = [
    {
      title: "PM2 Commands",
      commands: [
        { cmd: "pm2 list", desc: "List all running processes" },
        { cmd: "pm2 restart app_name", desc: "Restart specific app" },
        { cmd: "pm2 stop app_name", desc: "Stop specific app" },
        { cmd: "pm2 delete app_name", desc: "Delete app from PM2" },
        { cmd: "pm2 logs", desc: "View application logs" },
        { cmd: "pm2 monit", desc: "Monitor processes" }
      ]
    },
    {
      title: "Nginx Commands",
      commands: [
        { cmd: "sudo systemctl status nginx", desc: "Check Nginx status" },
        { cmd: "sudo systemctl restart nginx", desc: "Restart Nginx" },
        { cmd: "sudo nginx -t", desc: "Test Nginx configuration" },
        { cmd: "sudo systemctl reload nginx", desc: "Reload Nginx config" }
      ]
    },
    {
      title: "Troubleshooting",
      commands: [
        { cmd: "sudo lsof -i :PORT", desc: "Check what's using a port" },
        { cmd: "sudo kill -9 $(sudo lsof -t -i:PORT)", desc: "Kill process on port" },
        { cmd: "pm2 logs app_name --lines 100", desc: "View recent logs" },
        { cmd: "cat /var/log/nginx/error.log", desc: "Check Nginx errors" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121A33]">
      {/* Navigation */}
      <nav className="bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">T</span>
              </div>  
              <span className="text-white font-bold text-xl">TechBlog</span>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm">
              Back to Blog
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
          <span className="inline-block bg-white text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
            COMPLETE TUTORIAL
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Deploy MERN + Next.js Application on VPS
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A step-by-step guide to hosting your full-stack application on a Virtual Private Server with MongoDB, Express, React, Node.js, and Next.js
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>⏱️ 30 min read</span>
            <span>•</span>
            <span>🎯 Beginner Friendly</span>
            <span>•</span>
            <span>📅 Updated Oct 2025</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="bg-[#121A33] rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">📋 Prerequisites</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span>A VPS server (Ubuntu 20.04 or higher recommended)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span>Root or sudo access to your server</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span>A domain name (optional but recommended)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span>Your MERN/Next.js project ready on GitHub</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-3">✓</span>
              <span>Basic command line knowledge</span>
            </li>
          </ul>
        </section>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <section
              key={step.id}
              className="bg-[#121A33] rounded-2xl overflow-hidden border border-gray-700"
            >
              <div className="bg-blue-900 p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{step.icon}</div>
                  <div>
                    <div className="text-white text-sm font-semibold opacity-90">
                      STEP {step.id}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {step.commands.map((cmd, cmdIndex) => (
                  <div key={cmdIndex}>
                    {cmd.description && (
                      <p className="text-gray-300 mb-3 font-medium">
                        {cmd.description}
                      </p>
                    )}
                    {cmd.code && (
                      <div className="bg-black rounded-lg p-4 border border-gray-700">
                        <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
                          {cmd.code}
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Useful Commands */}
        <section className="mt-16 bg-[#121A33] rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🛠️ Useful Commands Reference
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {usefulCommands.map((category, index) => (
              <div key={index} className="bg-black bg-opacity-50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.commands.map((item, cmdIndex) => (
                    <div key={cmdIndex} className="border-l-2 border-blue-500 pl-3">
                      <code className="text-green-400 text-sm block mb-1">{item.cmd}</code>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mt-12 bg-gradient-to-r from-blue-800 to-black/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">💡 Pro Tips</h2>
          <ul className="space-y-3 text-white">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Always test your Nginx configuration with <code className="bg-black bg-opacity-30 px-2 py-1 rounded">sudo nginx -t</code> before restarting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Use <code className="bg-black bg-opacity-30 px-2 py-1 rounded">pm2 logs</code> to debug application issues</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Keep your environment variables secure and never commit them to Git</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Set up automatic MongoDB backups for production applications</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Enable UFW firewall to protect your server from unauthorized access</span>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mt-12 bg-[#121A33] rounded-2xl p-8 border border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">🎉 Congratulations!</h2>
          <p className="text-gray-300 text-lg mb-6">
            You've successfully deployed your MERN + Next.js application on a VPS server. Your application should now be live and accessible via your domain or IP address.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Share This Tutorial
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              View More Tutorials
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 backdrop-blur-md border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Need help? Join our community or leave a comment below.
          </p>
          <p className="text-gray-500 text-xs">
            © 2025 TechBlog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}