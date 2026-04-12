export default function LXCMultiClientHosting() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      {/* Header */}
      <header className="bg-[var(--background)] text-[var(--text-primary)] py-16 px-6 text-center border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-1 rounded-full text-sm text-[var(--text-secondary)] mb-4">
            VPS Hosting · 20 min read · April 13, 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            How to Host Multiple Clients on a Single VPS Using LXC Containers
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            One public IP, multiple isolated clients, zero conflicts — here&apos;s how to
            pull it off with LXC, Nginx, MongoDB, and a bit of Linux magic.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* Table of Contents */}
        <section className="mb-16 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ol className="list-decimal ml-6 space-y-2 text-[var(--text-secondary)]">
            <li><a href="#introduction" className="hover:text-[var(--text-primary)] transition-colors">Introduction — The Problem and the Solution</a></li>
            <li><a href="#architecture" className="hover:text-[var(--text-primary)] transition-colors">Architecture Overview</a></li>
            <li><a href="#setup" className="hover:text-[var(--text-primary)] transition-colors">Step-by-Step Setup</a></li>
            <li><a href="#realworld" className="hover:text-[var(--text-primary)] transition-colors">Real World Example</a></li>
            <li><a href="#mongodb" className="hover:text-[var(--text-primary)] transition-colors">MongoDB Setup — One Instance, Multiple Isolated Databases</a></li>
            <li><a href="#github" className="hover:text-[var(--text-primary)] transition-colors">GitHub SSH Setup Per Client</a></li>
            <li><a href="#ram" className="hover:text-[var(--text-primary)] transition-colors">RAM and Performance Considerations</a></li>
            <li><a href="#faq" className="hover:text-[var(--text-primary)] transition-colors">FAQ</a></li>
            <li><a href="#conclusion" className="hover:text-[var(--text-primary)] transition-colors">Conclusion</a></li>
          </ol>
        </section>

        {/* 1. Introduction */}
        <section id="introduction" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            1. Introduction — The Problem and the Solution
          </h2>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            Let&apos;s say you&apos;re a freelance developer with two clients — Faisal and Rifat. Both of them
            need their own web apps deployed, their own databases, their own SSH access, and their own
            GitHub credentials. But you&apos;ve only got one VPS with a single public IP address.
          </p>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            The naive solution is to create two different user accounts on the same server. But this
            immediately breaks down: they can potentially see each other&apos;s processes, they fight over ports,
            and if one client&apos;s app crashes the system, the other client goes down too. It&apos;s a mess.
          </p>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            You might think about Docker. Docker is great for running applications, but it&apos;s not really
            designed to give a client a full Linux environment with root access. Docker containers aren&apos;t
            meant to be SSH&apos;d into like a real server — they&apos;re process wrappers, not system containers.
          </p>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            <strong>LXC (Linux Containers) is the answer.</strong> LXC gives each client their own full
            Ubuntu (or any Linux) environment — a complete filesystem, their own root user, their own
            network interface, their own processes. From inside the container, it feels exactly like a
            real VPS. They can install packages with <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">apt</code>, run services, manage SSH keys — everything.
            And crucially, they cannot see anything outside their container.
          </p>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            This is actually how budget VPS providers work under the hood. When you buy a $5/month VPS,
            you&apos;re often getting an LXC container on a big dedicated machine. Now you&apos;re going to do the
            same thing yourself.
          </p>
        </section>

        {/* 2. Architecture Overview */}
        <section id="architecture" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            2. Architecture Overview
          </h2>
          <p className="mb-6 text-justify leading-relaxed text-[var(--text-secondary)]">
            Before we dive into commands, let&apos;s get the full picture clear. Here&apos;s how everything connects:
          </p>

          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 mb-8 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)] leading-relaxed">{`
Internet (Faisal's domain & Rifat's domain)
         │
         ▼
┌─────────────────────────────────────────┐
│          Your VPS (1 Public IP)         │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │     Host Nginx (Reverse Proxy)  │   │
│  │  faisaldomain.com → :3000       │   │
│  │  rifatdomain.com  → :3000       │   │
│  └────────────┬────────────────────┘   │
│               │                         │
│    ┌──────────┴──────────┐             │
│    ▼                     ▼             │
│  ┌──────────────┐  ┌──────────────┐   │
│  │  LXC: Faisal │  │  LXC: Rifat  │   │
│  │  10.4.39.212 │  │  10.4.39.231 │   │
│  │  SSH: 2221   │  │  SSH: 2222   │   │
│  │  App: :3000  │  │  App: :3000  │   │
│  └──────────────┘  └──────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │   MongoDB on Host (10.4.39.1)   │   │
│  │   DB: faisaldb / rifatdb        │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Key Points</h3>
          <ul className="list-disc ml-6 space-y-3 text-[var(--text-secondary)]">
            <li>
              <strong className="text-[var(--text-primary)]">One public IP.</strong> All incoming traffic hits your VPS&apos;s single IP. Nginx
              on the host reads the domain name (HTTP Host header) and decides which container to forward the request to.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Private internal IPs.</strong> LXC creates a virtual bridge network (lxdbr0)
              on the host. Each container gets its own private IP in the 10.x.x.x range. These IPs aren&apos;t
              reachable from the internet — only the host can talk to them.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Host controls Nginx.</strong> The clients never touch Nginx. Only you (the host admin)
              configure which domains point where. Clients can use whatever port they want inside their container.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Full root inside container.</strong> Each client gets root access inside their own container.
              They can install packages, create users, run any service. They just can&apos;t escape the container.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">SSH via different ports.</strong> You expose SSH on different host ports (2221, 2222)
              that forward into each container&apos;s port 22.
            </li>
          </ul>
        </section>

        {/* 3. Step-by-Step Setup */}
        <section id="setup" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            3. Step-by-Step Setup
          </h2>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Step 1 — Install LXD on Ubuntu 24.04</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            LXD is the daemon that manages LXC containers. On Ubuntu 24.04, install it via snap:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo snap install lxd`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            After installation, initialize LXD. It&apos;ll ask a bunch of questions — for a basic setup,
            just hit Enter on everything. This sets up the default storage pool and network bridge (lxdbr0).
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo lxd init`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Once initialized, add your user to the lxd group so you don&apos;t need sudo every time:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo usermod -aG lxd $USER
newgrp lxd`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Step 2 — Create Your Containers</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Creating a container is one command. LXD downloads the Ubuntu 24.04 image and fires it up:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`lxc launch ubuntu:24.04 Faisal
lxc launch ubuntu:24.04 Rifat`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Verify they&apos;re running and get their IPs:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`lxc list`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            You&apos;ll see output like:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`+--------+---------+----------------------+------+-----------+
| NAME   | STATE   | IPV4                 | TYPE | SNAPSHOTS |
+--------+---------+----------------------+------+-----------+
| Faisal | RUNNING | 10.4.39.212 (eth0)   | CONTAINER | 0    |
| Rifat  | RUNNING | 10.4.39.231 (eth0)   | CONTAINER | 0    |
+--------+---------+----------------------+------+-----------+`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Note these IPs — you&apos;ll need them for Nginx configuration. The IPs are assigned by LXD&apos;s
            built-in DHCP server and stay consistent as long as you don&apos;t delete and recreate the containers.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Step 3 — Set Root Password and Enable SSH Inside Containers</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Jump into the Faisal container:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`lxc exec Faisal -- bash`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            You&apos;re now root inside the container. Install SSH, set a password, and configure SSH to allow
            root with password authentication:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Inside the Faisal container
apt update && apt install -y openssh-server

# Set root password
passwd root

# Allow root login with password in SSH config
sed -i 's/#PermitRootLogin.*/PermitRootLogin yes/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication.*/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Restart SSH
systemctl restart sshd
systemctl enable sshd

exit`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Repeat the same steps inside the Rifat container:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`lxc exec Rifat -- bash
# ... same steps as above ...
exit`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Step 4 — Expose SSH on Different Host Ports</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            The containers are on a private network. To let clients SSH in from the outside world, we need
            to forward host ports to container ports using iptables NAT rules. On the <strong>host</strong> machine:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Forward host port 2221 → Faisal container port 22
sudo iptables -t nat -A PREROUTING -p tcp --dport 2221 -j DNAT --to-destination 10.4.39.212:22
sudo iptables -A FORWARD -p tcp -d 10.4.39.212 --dport 22 -j ACCEPT

# Forward host port 2222 → Rifat container port 22
sudo iptables -t nat -A PREROUTING -p tcp --dport 2222 -j DNAT --to-destination 10.4.39.231:22
sudo iptables -A FORWARD -p tcp -d 10.4.39.231 --dport 22 -j ACCEPT`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            To make these rules survive a reboot, install iptables-persistent:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo apt install iptables-persistent
sudo netfilter-persistent save`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Now clients can SSH in like this:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Faisal connects on port 2221
ssh -p 2221 root@your.vps.ip

# Rifat connects on port 2222
ssh -p 2222 root@your.vps.ip`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Step 5 — Install Nginx on Host as Reverse Proxy</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            On the <strong>host machine</strong>, install Nginx:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo apt update && sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Step 6 — Configure Nginx to Route Domains to Containers</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Create separate Nginx config files for each client. For Faisal:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo nano /etc/nginx/sites-available/faisaldomain.com`}</pre>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`server {
    listen 80;
    server_name faisaldomain.com www.faisaldomain.com;

    location / {
        proxy_pass http://10.4.39.212:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            For Rifat:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`server {
    listen 80;
    server_name rifatdomain.com www.rifatdomain.com;

    location / {
        proxy_pass http://10.4.39.231:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Enable both sites and test:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo ln -s /etc/nginx/sites-available/faisaldomain.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/rifatdomain.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx`}</pre>
          </div>
        </section>

        {/* 4. Real World Example */}
        <section id="realworld" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            4. Real World Example
          </h2>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            Here&apos;s the exact scenario: both clients are running Next.js e-commerce apps, and both are
            running them on port 3000. This would be impossible with two users on the same server — you
            can&apos;t bind two processes to the same port. With LXC, there&apos;s zero conflict.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Client 1 — Faisal</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Faisal SSHs in on port 2221, clones his repo, and starts his Next.js app:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Faisal's container — 10.4.39.212
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Clone and build
git clone git@github.com:faisal/ecommerce-app.git
cd ecommerce-app
npm install
npm run build

# Start on port 3000 (using pm2)
npm install -g pm2
pm2 start npm --name "faisal-app" -- start
pm2 startup && pm2 save`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Client 2 — Rifat</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Rifat does the exact same thing inside his own container — port 3000, same setup:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Rifat's container — 10.4.39.231
# Same commands — completely separate environment
git clone git@github.com:rifat/his-app.git
cd his-app
npm install && npm run build
pm2 start npm --name "rifat-app" -- start`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">How the Routing Works</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            When a browser visits <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">faisaldomain.com</code>:
          </p>
          <ol className="list-decimal ml-6 space-y-2 text-[var(--text-secondary)] mb-6">
            <li>DNS resolves faisaldomain.com → your VPS IP (e.g., 103.x.x.x)</li>
            <li>Nginx on the host receives the request on port 80</li>
            <li>Nginx reads the Host header: <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">faisaldomain.com</code></li>
            <li>Nginx proxies the request to <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">10.4.39.212:3000</code> (Faisal&apos;s container)</li>
            <li>Faisal&apos;s Next.js app responds, Nginx sends the response back to the browser</li>
          </ol>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            When someone visits <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">rifatdomain.com</code>,
            the same process happens but Nginx forwards to <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">10.4.39.231:3000</code>.
            Both apps can be on port 3000 because they&apos;re in completely separate network namespaces.
          </p>
        </section>

        {/* 5. MongoDB Setup */}
        <section id="mongodb" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            5. MongoDB Setup — One Instance, Multiple Isolated Databases
          </h2>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            You don&apos;t need to install MongoDB separately inside each container. That would eat RAM fast.
            Instead, install MongoDB once on the host and create isolated databases with separate users per client.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Install MongoDB on Host</h3>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Import MongoDB GPG key and repo
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] \
  https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
  sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

sudo apt update && sudo apt install -y mongodb-org
sudo systemctl enable mongod && sudo systemctl start mongod`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Bind MongoDB to the LXC Bridge IP</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            By default, MongoDB only listens on localhost (127.0.0.1). You need it to also listen on
            the LXC bridge interface so the containers can reach it. Edit the MongoDB config:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo nano /etc/mongod.conf`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Change the <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">bindIp</code> line:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`# Before:
net:
  bindIp: 127.0.0.1

# After (10.4.39.1 is the host's LXC bridge IP):
net:
  bindIp: 127.0.0.1,10.4.39.1`}</pre>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo systemctl restart mongod`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Create Separate Database and User Per Client</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Connect to MongoDB on the host and set up isolated databases:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`mongosh`}</pre>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`// Create admin user first
use admin
db.createUser({
  user: "adminUser",
  pwd: "strongAdminPassword",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
})

// Create Faisal's database and user
use faisaldb
db.createUser({
  user: "faisal",
  pwd: "faisalSecurePassword123",
  roles: [{ role: "readWrite", db: "faisaldb" }]
})

// Create Rifat's database and user
use rifatdb
db.createUser({
  user: "rifat",
  pwd: "rifatSecurePassword456",
  roles: [{ role: "readWrite", db: "rifatdb" }]
})`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Enable Authentication</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            In <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">/etc/mongod.conf</code>,
            enable security:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`security:
  authorization: enabled`}</pre>
          </div>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`sudo systemctl restart mongod`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Now each client connects using their own credentials and can only access their own database.
            The connection string in Faisal&apos;s <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">.env.local</code>:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`MONGODB_URI=mongodb://faisal:faisalSecurePassword123@10.4.39.1:27017/faisaldb`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            And in Rifat&apos;s <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">.env.local</code>:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`MONGODB_URI=mongodb://rifat:rifatSecurePassword456@10.4.39.1:27017/rifatdb`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Faisal literally cannot access rifatdb even if he tries, because MongoDB authentication would reject him.
          </p>
        </section>

        {/* 6. GitHub SSH Setup */}
        <section id="github" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            6. GitHub SSH Setup Per Client
          </h2>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            This is one of the most important isolation benefits. Each container has a completely separate
            <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm"> ~/.ssh/</code> directory.
            SSH keys generated inside one container never leave that container.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Inside Faisal&apos;s Container</h3>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# SSH into Faisal's container first
ssh -p 2221 root@your.vps.ip

# Generate SSH key
ssh-keygen -t ed25519 -C "faisal@faisaldomain.com"
# Accept defaults (no passphrase if you want automation-friendly)

# Display the public key
cat ~/.ssh/id_ed25519.pub`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Copy that public key and add it to Faisal&apos;s GitHub account under
            Settings → SSH and GPG Keys → New SSH Key. Then test:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`ssh -T git@github.com
# Hi faisal! You've successfully authenticated...`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Inside Rifat&apos;s Container</h3>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# SSH into Rifat's container
ssh -p 2222 root@your.vps.ip

# Same steps — totally separate SSH key
ssh-keygen -t ed25519 -C "rifat@rifatdomain.com"
cat ~/.ssh/id_ed25519.pub`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Add to Rifat&apos;s GitHub account. These are two completely independent GitHub identities.
            Faisal cannot push to Rifat&apos;s repos and vice versa — the keys are physically in different containers.
          </p>
        </section>

        {/* 7. RAM and Performance */}
        <section id="ram" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            7. RAM and Performance Considerations
          </h2>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            This is where real-world constraints bite. Let&apos;s be honest about the numbers.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Memory Usage Breakdown</h3>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-[var(--text-secondary)]">{`Ubuntu 24.04 host OS baseline:     ~300 MB
LXC + Nginx on host:               ~100 MB
Faisal's container (idle):         ~150 MB
Rifat's container (idle):          ~150 MB
MongoDB (idle):                    ~200-400 MB
Next.js (Faisal, running):         ~200-300 MB
Next.js (Rifat, running):          ~200-300 MB
──────────────────────────────────────────
Total (rough estimate):            ~1.3 - 1.8 GB`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            A 2GB RAM VPS is cutting it very close. The moment one client runs <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">npm run build</code>,
            you&apos;ll feel it.
          </p>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Add 4GB Swap Space</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            Swap is your safety net. It&apos;s slow (disk-backed), but it prevents the OOM killer from terminating
            your processes. Always add swap on a low-RAM VPS:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Create a 4GB swap file
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make it permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Verify
free -h`}</pre>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">The Next.js Build Problem — Exit Code 137</h3>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            If you&apos;ve ever seen this during <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">npm run build</code>:
          </p>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-red-400">{`info  - Generating static pages (0/24)
Killed
npm ERR! code 137`}</pre>
          </div>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            <strong>Exit code 137 = process was killed by the OOM killer.</strong> The Linux kernel ran out
            of RAM, panicked, and killed the most memory-hungry process (your Node.js build).
          </p>
          <p className="mb-4 text-[var(--text-secondary)] leading-relaxed">
            The fix is the swap space above. Additionally:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] mb-6">
            <li>Stop unused containers before building: <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">lxc stop Rifat</code></li>
            <li>Build one client at a time, never simultaneously</li>
            <li>After the build is done, start the container again: <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">lxc start Rifat</code></li>
            <li>If you regularly hit OOM, upgrade to a 4GB RAM plan — it&apos;s absolutely worth it</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Stopping and Starting Containers</h3>
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
            <pre className="text-green-400">{`# Stop a container (frees its RAM immediately)
lxc stop Rifat

# Start it back up
lxc start Rifat

# Check status
lxc list`}</pre>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            8. FAQ
          </h2>

          {/* FAQ Items */}
          <div className="space-y-8">

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">Do clients have access to host Nginx?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                <strong>No.</strong> Nginx runs on the host machine, not inside any container. The client only
                has root access inside their own container&apos;s filesystem. They can&apos;t see <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">/etc/nginx/</code>
                on the host, they can&apos;t modify configurations, and they can&apos;t even reach the host&apos;s localhost.
                The host is an entirely separate environment from their perspective.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">Can clients see each other&apos;s files or processes?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                <strong>No.</strong> Each LXC container has its own isolated filesystem, process namespace,
                and network namespace. When Faisal runs <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">ps aux</code>
                inside his container, he only sees his own processes — not Rifat&apos;s, not the host&apos;s. When he
                browses <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">/</code>, he only sees his own container&apos;s root filesystem.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">Can two clients run apps on the same port?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                <strong>Yes, absolutely.</strong> Port numbers are per network namespace. Faisal&apos;s port 3000
                exists inside his container&apos;s network namespace. Rifat&apos;s port 3000 exists inside his.
                These are completely separate networking stacks — they have no awareness of each other.
                The host Nginx is what bridges them to the outside world by proxying to their respective container IPs.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">How do clients SSH into their container?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Via the iptables port forwarding we set up. Faisal SSHs to the VPS on port 2221, which
                gets forwarded to his container&apos;s port 22. Rifat uses port 2222.
                The commands are <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">ssh -p 2221 root@your.vps.ip</code> and
                <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm"> ssh -p 2222 root@your.vps.ip</code> respectively.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">Will Faisal see Rifat&apos;s GitHub credentials?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                <strong>No.</strong> SSH keys live at <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">~/.ssh/</code>
                which is inside each container&apos;s filesystem. Faisal literally cannot navigate to Rifat&apos;s
                container&apos;s filesystem. Git configs, GitHub tokens, SSH keys — all of it is siloed per container.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">Do I need to install MongoDB separately for each client?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                <strong>No.</strong> Install MongoDB once on the host. Create one database per client with its
                own user credentials. MongoDB&apos;s authentication system ensures Faisal can only read/write
                to faisaldb and Rifat can only read/write to rifatdb. This is the most RAM-efficient approach.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">How does one public IP serve multiple clients?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Through Nginx&apos;s Server Name Indication (SNI) and the HTTP Host header. All traffic comes
                in on port 80/443. Nginx reads the domain name from the request headers and routes to the
                correct backend. <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">faisaldomain.com</code> goes to
                <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm"> 10.4.39.212:3000</code> and
                <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm"> rifatdomain.com</code> goes to
                <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm"> 10.4.39.231:3000</code>. This is called virtual hosting.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">What happens during Next.js build with low RAM? Explain OOM kill.</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The Linux OOM (Out Of Memory) killer is a kernel mechanism that activates when the system
                runs completely out of physical RAM and swap. It picks the process consuming the most memory
                and kills it with SIGKILL (signal 9). The process exits with code 137 (128 + 9). Next.js builds
                are particularly memory-heavy because webpack/turbopack loads the entire app into memory for
                bundling. The fix: add swap space (4GB recommended) and stop other containers before building.
              </p>
            </div>

            <div className="border-l-4 border-[var(--primary)] pl-6">
              <h3 className="text-xl font-semibold mb-2">How do I switch from host root into a client container?</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Use <code className="bg-[var(--card-bg)] px-1 py-0.5 rounded text-sm">lxc exec</code>. This directly executes a command inside the container as root
                without needing SSH:
              </p>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 mt-3 font-mono text-sm overflow-x-auto">
                <pre className="text-green-400">{`# Get a shell inside Faisal's container
lxc exec Faisal -- bash

# Run a specific command
lxc exec Faisal -- pm2 status
lxc exec Rifat -- systemctl status sshd`}</pre>
              </div>
            </div>

          </div>
        </section>

        {/* 9. Conclusion */}
        <section id="conclusion" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 pb-3 border-b-2 border-[var(--border)]">
            9. Conclusion
          </h2>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            Here&apos;s what you&apos;ve built: a production-capable multi-tenant hosting environment on a single budget
            VPS. Each client gets their own isolated Ubuntu system with full root access. They can run any app
            on any port, manage their own GitHub keys, and connect to their own MongoDB database — all without
            having the slightest awareness of each other&apos;s existence.
          </p>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            The architecture: <strong>Internet → Host Nginx (routes by domain) → LXC containers (isolated environments) → MongoDB on host (isolated by credentials).</strong>
          </p>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            And here&apos;s a fun fact: this is exactly how cheap VPS providers work. DigitalOcean&apos;s $4/month droplet,
            Vultr&apos;s basic plan, Linode Nanode — many of these are LXC (or similar) containers on large physical
            servers. You just built your own mini cloud provider.
          </p>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            <strong>Practical recommendations by client count:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2 text-[var(--text-secondary)] mb-6">
            <li><strong>1-2 clients:</strong> 2GB RAM with 4GB swap can work, but it&apos;s tight. Always have swap enabled.</li>
            <li><strong>3-4 clients:</strong> Upgrade to 4GB RAM. You&apos;ll thank yourself during builds.</li>
            <li><strong>5+ clients:</strong> Go to 8GB RAM or distribute across multiple VPS instances.</li>
          </ul>
          <p className="mb-4 text-justify leading-relaxed text-[var(--text-secondary)]">
            The isolation you get from LXC is serious — kernel-level namespace separation, not just
            file permission tricks. It&apos;s the right tool for running multiple client environments without
            buying multiple servers. Scale smart.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 px-6 text-center text-[var(--text-secondary)] text-sm">
        <p>
          Written by Shahriar Kabir · April 13, 2026
        </p>
        <p className="mt-2">
          Tags: LXC, VPS, Nginx, MongoDB, Ubuntu, DevOps, Multi-tenant
        </p>
      </footer>
    </div>
  );
}
