"use client";

import { useState } from "react";

/* ------------------------------------------------------------------
   MongoDB on a VPS: connect, back up, restore (A to Z guide)
   Drop this file at app/mongodb-guide/page.tsx (Next.js App Router).
   Replace the placeholders in the commands with your own values:
   YOUR_VPS_IP, DB_USER, DB_PASSWORD, DB_NAME
------------------------------------------------------------------- */

type Where = "VPS" | "Mac" | "Compass" | "File";
type Block =
  | { t: "p"; text: string }
  | { t: "note"; text: string }
  | { t: "warn"; text: string }
  | { t: "list"; items: string[] }
  | { t: "code"; where: Where; title?: string; code: string }
  | { t: "table"; head: string[]; rows: string[][] };

type Section = { id: string; title: string; blocks: Block[] };

const SECTIONS: Section[] = [
  {
    id: "overview",
    title: "Start here: two machines, one rule",
    blocks: [
      {
        t: "p",
        text: "You work with two machines. Every command in this guide is tagged with where to run it. Running a command on the wrong machine is the most common mistake.",
      },
      {
        t: "table",
        head: ["Tag", "Where", "How to tell"],
        rows: [
          ["VPS", "Your server, over SSH", "Prompt looks like root@srv…"],
          ["Mac", "Your own computer’s Terminal", "Prompt looks like yourname@MacBook…"],
          ["Compass", "The MongoDB Compass app", "Paste into the connection box"],
        ],
      },
      {
        t: "note",
        text: "Placeholders: replace YOUR_VPS_IP, DB_USER, DB_PASSWORD and DB_NAME with your real values. Never type the placeholder text literally.",
      },
    ],
  },
  {
    id: "credentials",
    title: "1. Find your username and database name",
    blocks: [
      {
        t: "p",
        text: "Your app already stores the credentials in its .env file. The connection string has this shape: mongodb://USER:PASSWORD@HOST:PORT/DBNAME?authSource=admin",
      },
      {
        t: "code",
        where: "VPS",
        title: "Show the connection string",
        code: "grep MONGODB_URI /var/www/YOUR_APP/server/.env",
      },
      {
        t: "table",
        head: ["Part of the URI", "Meaning"],
        rows: [
          ["Between // and :", "Username"],
          ["Between : and @", "Password"],
          ["After the port /", "Database name"],
          ["authSource=admin", "Login is checked in the admin database"],
        ],
      },
      {
        t: "p",
        text: "If you have no connection string, list the users from the Mongo shell (works only if authentication is off, or after you log in):",
      },
      {
        t: "code",
        where: "VPS",
        code: "mongosh\nuse admin\ndb.getUsers()",
      },
    ],
  },
  {
    id: "compass",
    title: "2. Connect Compass to the VPS",
    blocks: [
      {
        t: "p",
        text: "Two ways. The SSH tunnel is safer and works from any network, so use it unless you have a reason not to.",
      },
      { t: "p", text: "Option A: SSH tunnel (recommended)" },
      {
        t: "list",
        items: [
          "Keep MongoDB private: bindIp stays 127.0.0.1 and port 27017 stays closed.",
          "In Compass: New connection, Advanced Connection Options, Proxy/SSH tab.",
          "Choose “Use SSH tunnel with password” (or identity file).",
          "SSH hostname: YOUR_VPS_IP. Port: 22. Username and password: your VPS login.",
        ],
      },
      {
        t: "code",
        where: "Compass",
        title: "Connection string (with the tunnel on)",
        code: "mongodb://DB_USER:DB_PASSWORD@127.0.0.1:27017/DB_NAME?authSource=admin",
      },
      { t: "p", text: "Option B: direct connection by allowing your IP" },
      {
        t: "p",
        text: "Whitelist your own public IP on the VPS, not the VPS IP on your computer. Find your IP at api.ipify.org. Example values like 103.xx.xx.xx are placeholders only. Home IPs in Bangladesh often change, so you may need to repeat this.",
      },
      {
        t: "code",
        where: "VPS",
        title: "Edit /etc/mongod.conf",
        code: "sudo nano /etc/mongod.conf\n\n# set:\nnet:\n  port: 27017\n  bindIp: 0.0.0.0\nsecurity:\n  authorization: enabled",
      },
      {
        t: "code",
        where: "VPS",
        title: "Restart and open the port for your IP only",
        code: "sudo systemctl restart mongod\nsudo ufw allow from YOUR_HOME_IP to any port 27017 proto tcp\nsudo ufw reload",
      },
      {
        t: "p",
        text: "Also add an inbound rule for TCP 27017 from your IP in your hosting provider’s own firewall panel. That firewall is separate from ufw and is a common reason for timeouts.",
      },
      {
        t: "code",
        where: "Compass",
        title: "Direct connection string",
        code: "mongodb://DB_USER:DB_PASSWORD@YOUR_VPS_IP:27017/DB_NAME?authSource=admin",
      },
      {
        t: "warn",
        text: "Allowing every IP (0.0.0.0/0) invites bots that scan for open MongoDB ports. If you must, use authentication, a long random password, and TLS. Passwords containing @ : / ? # must be URL-encoded in the URI (@ becomes %40).",
      },
    ],
  },
  {
    id: "backup",
    title: "3. Create a backup on the VPS",
    blocks: [
      {
        t: "p",
        text: "mongodump writes a compressed copy of your data into one file. First check the tool exists.",
      },
      { t: "code", where: "VPS", code: "mongodump --version" },
      {
        t: "p",
        text: "If it says command not found, install the database tools:",
      },
      {
        t: "code",
        where: "VPS",
        code: "sudo apt update\nsudo apt install -y mongodb-database-tools",
      },
      {
        t: "p",
        text: "Run the backup. Single quotes around the URI matter: without them, bash treats a ! in your password as a history command and fails with “event not found”.",
      },
      {
        t: "code",
        where: "VPS",
        title: "Backup with the URI in single quotes",
        code: "mkdir -p /root/backups\nmongodump --uri='mongodb://DB_USER:DB_PASSWORD@127.0.0.1:27017/DB_NAME?authSource=admin' --gzip --archive=/root/backups/backup-$(date +%F).gz",
      },
      {
        t: "code",
        where: "VPS",
        title: "Or let it ask for the password (keeps it out of shell history)",
        code: "mongodump --host=127.0.0.1 --port=27017 --username=DB_USER --authenticationDatabase=admin --db=DB_NAME --gzip --archive=/root/backups/backup-$(date +%F).gz",
      },
      {
        t: "code",
        where: "VPS",
        title: "Confirm the file exists and is not empty",
        code: "ls -lh /root/backups/",
      },
      {
        t: "note",
        text: "The date in the file name uses the server’s clock (UTC), so a backup made late at night in Dhaka can carry the previous day’s date.",
      },
    ],
  },
  {
    id: "download",
    title: "4. Download the backup to your Mac",
    blocks: [
      {
        t: "warn",
        text: "Run scp on your Mac, not on the VPS. scp is always run by the machine that receives the file. Running it on the VPS only copies the file from the server to itself.",
      },
      {
        t: "code",
        where: "Mac",
        code: "mkdir -p ~/mongo-backups\nscp root@YOUR_VPS_IP:/root/backups/backup-2026-11-02.gz ~/mongo-backups/",
      },
      {
        t: "p",
        text: "The file lands in ~/mongo-backups, which is /Users/yourname/mongo-backups. Check it and make sure the archive is not corrupted:",
      },
      {
        t: "code",
        where: "Mac",
        code: "ls -lh ~/mongo-backups/\ngzip -t ~/mongo-backups/backup-2026-11-02.gz && echo \"File is OK\"\nchmod 600 ~/mongo-backups/backup-2026-11-02.gz\nopen ~/mongo-backups",
      },
      {
        t: "note",
        text: "Common path mistakes: ls backup-*.gz only searches the current folder, and cd /mongo-backups starts at the disk root. Use ~/mongo-backups. On macOS the list command is ls -la (there is no la).",
      },
    ],
  },
  {
    id: "view",
    title: "5. See the backup data in Compass",
    blocks: [
      {
        t: "p",
        text: "Compass cannot open a backup file. It connects to a running MongoDB. So restore the backup into a local MongoDB on your Mac, then connect Compass to it.",
      },
      {
        t: "code",
        where: "Mac",
        title: "Install a local MongoDB (needs Homebrew)",
        code: "brew tap mongodb/brew\nbrew install mongodb-community mongodb-database-tools\nbrew services start mongodb-community",
      },
      {
        t: "code",
        where: "Mac",
        title: "Restore the backup locally",
        code: "mongorestore --gzip --archive=$HOME/mongo-backups/backup-2026-11-02.gz",
      },
      {
        t: "code",
        where: "Compass",
        title: "Connect to the local copy",
        code: "mongodb://localhost:27017",
      },
      {
        t: "list",
        items: [
          "Open your database in the left sidebar and browse the collections.",
          "It is a copy: changes here never touch the VPS.",
          "macOS may auto-extract the .gz when you double-click it. Ignore the extracted file and delete it, so no extra copies of patient data are left around.",
          "Stop the local server when finished: brew services stop mongodb-community",
        ],
      },
    ],
  },
  {
    id: "automate",
    title: "6. Automate daily backups",
    blocks: [
      {
        t: "code",
        where: "File",
        title: "/root/backup.sh on the VPS",
        code: "#!/bin/bash\nmongodump --uri='mongodb://DB_USER:DB_PASSWORD@127.0.0.1:27017/DB_NAME?authSource=admin' --gzip --archive=/root/backups/db-$(date +%F).gz\nfind /root/backups -name \"db-*.gz\" -mtime +7 -delete",
      },
      {
        t: "code",
        where: "VPS",
        title: "Make it executable and schedule it for 2 AM daily",
        code: "mkdir -p /root/backups\nchmod 700 /root/backup.sh\ncrontab -e\n\n# add this line:\n0 2 * * * /root/backup.sh",
      },
      {
        t: "code",
        where: "Mac",
        title: "Pull new backups to your Mac (run by hand or schedule it)",
        code: "rsync -avz root@YOUR_VPS_IP:/root/backups/ ~/mongo-backups/",
      },
      {
        t: "p",
        text: "Other ways to back up: one-line dump over SSH with no file left on the server, or a dump through an SSH tunnel.",
      },
      {
        t: "code",
        where: "Mac",
        title: "Dump straight to your Mac over SSH",
        code: "ssh root@YOUR_VPS_IP \"mongodump --uri='mongodb://DB_USER:DB_PASSWORD@127.0.0.1:27017/DB_NAME?authSource=admin' --gzip --archive\" > ~/mongo-backups/backup-$(date +%F).gz",
      },
    ],
  },
  {
    id: "recovery",
    title: "7. If the VPS fails: restore everything",
    blocks: [
      {
        t: "p",
        text: "The backup file plus your code is enough to rebuild. Order: new server, install MongoDB, restore, create the user, reconnect the app.",
      },
      {
        t: "list",
        items: [
          "Create a new VPS and install MongoDB and mongodb-database-tools.",
          "Upload the backup from your Mac.",
          "Restore it.",
          "Recreate the database user and turn authentication on.",
          "Deploy your code, set MONGODB_URI in .env, restart the app.",
        ],
      },
      {
        t: "code",
        where: "Mac",
        title: "Upload the backup to the new server",
        code: "scp ~/mongo-backups/backup-2026-11-02.gz root@NEW_VPS_IP:/root/",
      },
      {
        t: "code",
        where: "VPS",
        title: "Restore",
        code: "mongorestore --gzip --archive=/root/backup-2026-11-02.gz",
      },
      {
        t: "code",
        where: "VPS",
        title: "Recreate the user",
        code: "mongosh\nuse admin\ndb.createUser({\n  user: \"DB_USER\",\n  pwd: \"NEW_STRONG_PASSWORD\",\n  roles: [{ role: \"readWrite\", db: \"DB_NAME\" }]\n})",
      },
      {
        t: "code",
        where: "VPS",
        title: "Enable authentication, then reconnect the app",
        code: "sudo nano /etc/mongod.conf\n# add:\n# security:\n#   authorization: enabled\nsudo systemctl restart mongod\n\n# in /var/www/YOUR_APP/server/.env\nMONGODB_URI=mongodb://DB_USER:NEW_STRONG_PASSWORD@127.0.0.1:27017/DB_NAME?authSource=admin\n\npm2 restart all",
      },
      {
        t: "p",
        text: "What the database backup does not contain, so back these up separately:",
      },
      {
        t: "list",
        items: [
          "Application code (keep it in a private Git repository).",
          "The .env file (store it in a password manager, not in Git).",
          "Uploaded files such as images and patient documents.",
          "Nginx config, SSL certificates, Cloudflare and DNS settings.",
          "Fastest full recovery: enable your hosting provider’s server snapshots as well.",
        ],
      },
      {
        t: "code",
        where: "Mac",
        title: "Back up uploaded files (adjust the path to your app)",
        code: "rsync -avz root@YOUR_VPS_IP:/var/www/YOUR_APP/server/uploads/ ~/mongo-backups/uploads/",
      },
    ],
  },
  {
    id: "security",
    title: "8. Security checklist for patient data",
    blocks: [
      {
        t: "list",
        items: [
          "Never paste real passwords or server IPs in chats, tickets or screenshots. If you did, change the password now.",
          "Authentication on, long random password, and a user limited to one database (readWrite) instead of root.",
          "Prefer the SSH tunnel over opening port 27017 to the internet.",
          "Use SSH keys and disable root password login once keys work.",
          "Backups hold real patient data: chmod 600, delete stray copies (for example in /var/www), and encrypt anything stored in the cloud.",
          "Turn on FileVault on your Mac (System Settings, Privacy & Security).",
          "Keep three copies: on the VPS, on your Mac, and one encrypted off-site.",
          "Test a restore regularly. A backup you have never restored is unproven.",
        ],
      },
      {
        t: "code",
        where: "VPS",
        title: "Change the database password",
        code: "mongosh -u DB_USER -p --authenticationDatabase admin\nuse admin\ndb.changeUserPassword(\"DB_USER\", \"NEW_STRONG_PASSWORD\")\n\n# then update MONGODB_URI in .env and run:\npm2 restart all",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "9. Troubleshooting",
    blocks: [
      {
        t: "table",
        head: ["Error", "Cause", "Fix"],
        rows: [
          ["-bash: !2025: event not found", "! in the password was read by bash", "Put the URI in single quotes, or use the password prompt"],
          ["No such file or directory (mongodump)", "Tool not installed, or output folder missing", "mongodump --version; install tools; mkdir -p /root/backups"],
          ["zsh: no matches found: backup-*.gz", "File is not in the current folder", "Look in ~/mongo-backups or use find ~ -name \"backup-*.gz\""],
          ["scp finished but nothing on Mac", "scp was run on the VPS", "Run scp from the Mac terminal"],
          ["Compass connection times out", "Firewall or bindIp blocks you", "Check ufw, provider firewall, bindIp, or use the SSH tunnel"],
          ["Authentication failed", "Wrong user, password or authSource", "Use authSource=admin and URL-encode special characters"],
          ["Compass cannot open the .gz", "Compass reads servers, not files", "mongorestore into a local MongoDB, then connect"],
        ],
      },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setDone(true);
    setTimeout(() => setDone(false), 1600);
  }
  return (
    <button className="copy" onClick={copy} aria-live="polite">
      {done ? "Copied" : "Copy"}
    </button>
  );
}

function Render({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return <p>{b.text}</p>;
    case "note":
      return <div className="callout note">{b.text}</div>;
    case "warn":
      return <div className="callout warn">{b.text}</div>;
    case "list":
      return (
        <ul>
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case "code":
      return (
        <figure className="code">
          <figcaption>
            <span className={`tag ${b.where}`}>{b.where}</span>
            {b.title && <span className="ttl">{b.title}</span>}
            <CopyButton text={b.code} />
          </figcaption>
          <pre>
            <code>{b.code}</code>
          </pre>
        </figure>
      );
    case "table":
      return (
        <div className="tbl">
          <table>
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.join("|")}>
                  {r.map((c, i) => (
                    <td key={i}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function MongoGuidePage() {
  return (
    <div className="doc">
      <style>{CSS}</style>
      <nav aria-label="Guide sections">
        <strong>MongoDB on a VPS</strong>
        <ol>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s/, "")}</a>
            </li>
          ))}
        </ol>
      </nav>
      <main>
        <header>
          <h1>Connect, back up and restore MongoDB on your VPS</h1>
          <p className="lead">
            A start-to-finish guide: connect with Compass, take a backup, download it to your Mac, view it,
            and rebuild everything if the server fails. Every command has a Copy button and a tag showing
            where to run it.
          </p>
        </header>
        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id}>
            <h2>{s.title}</h2>
            {s.blocks.map((b, i) => (
              <Render key={i} b={b} />
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}

const CSS = `
.doc{--bg:#f6f7f5;--fg:#1d2522;--mut:#5b6762;--line:#d9dfdb;--acc:#0f6b5c;--card:#fff;--code:#14201d;--codefg:#e3efe9;
--note:#e7f1ee;--warnbg:#fbeee6;--warn:#a1471b;
display:grid;grid-template-columns:260px minmax(0,1fr);min-height:100vh;padding-top:64px;background:var(--bg);color:var(--fg);
font:16px/1.65 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
@media (prefers-color-scheme:dark){.doc{--bg:#0f1514;--fg:#e4ebe8;--mut:#9aa8a2;--line:#27322f;--acc:#4fc0a8;--card:#151d1b;--code:#0a100f;--codefg:#dcebe4;--note:#16302b;--warnbg:#33201a;--warn:#f0a77f}}
.doc nav{position:sticky;top:64px;align-self:start;height:calc(100vh - 64px);overflow:auto;padding:28px 20px;border-right:1px solid var(--line)}
.doc nav strong{display:block;font-size:15px;margin-bottom:14px}
.doc nav ol{list-style:none;margin:0;padding:0}
.doc nav li{margin:0}
.doc nav a{display:block;padding:6px 10px;margin:0 -10px;border-radius:6px;color:var(--mut);text-decoration:none;font-size:14px}
.doc nav a:hover,.doc nav a:focus-visible{color:var(--fg);background:var(--note);outline:none}
.doc main{padding:48px clamp(20px,5vw,64px) 96px;max-width:860px}
.doc h1{font-size:clamp(28px,4vw,40px);line-height:1.15;margin:0 0 16px;letter-spacing:-.02em}
.doc .lead{font-size:18px;color:var(--mut);max-width:62ch;margin:0 0 40px}
.doc section{padding-top:20px;margin-top:36px;border-top:1px solid var(--line);scroll-margin-top:12px}
.doc h2{font-size:22px;margin:0 0 14px;letter-spacing:-.01em}
.doc p{max-width:68ch;margin:12px 0}
.doc ul{max-width:68ch;padding-left:22px;margin:12px 0}
.doc li{margin:6px 0}
.doc .callout{max-width:68ch;margin:16px 0;padding:12px 16px;border-radius:8px;border-left:4px solid var(--acc);background:var(--note)}
.doc .callout.warn{border-left-color:var(--warn);background:var(--warnbg)}
.doc .code{margin:16px 0;border-radius:10px;overflow:hidden;background:var(--code);border:1px solid var(--line)}
.doc figcaption{display:flex;align-items:center;gap:10px;padding:8px 10px 8px 12px;border-bottom:1px solid #ffffff1a;color:var(--codefg);font-size:13px}
.doc .ttl{flex:1;min-width:0;opacity:.8;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.doc .tag{padding:1px 9px;border-radius:99px;font-weight:600;font-size:12px;color:#06201a}
.doc .tag.VPS{background:#7fd6c2}.doc .tag.Mac{background:#f2c879}.doc .tag.Compass{background:#a9c7f5}.doc .tag.File{background:#d3c3f0}
.doc .copy{margin-left:auto;border:1px solid #ffffff33;background:transparent;color:var(--codefg);border-radius:6px;padding:3px 12px;font:inherit;font-size:13px;cursor:pointer}
.doc .copy:hover,.doc .copy:focus-visible{background:#ffffff1f;outline:none}
.doc pre{margin:0;padding:14px 16px;overflow-x:auto;color:var(--codefg);font:13.5px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
.doc .tbl{overflow-x:auto;margin:16px 0}
.doc table{border-collapse:collapse;width:100%;font-size:14.5px;background:var(--card)}
.doc th,.doc td{text-align:left;vertical-align:top;padding:9px 12px;border:1px solid var(--line)}
.doc th{background:var(--note)}
@media (max-width:860px){.doc{grid-template-columns:1fr}.doc nav{position:static;height:auto;border-right:0;border-bottom:1px solid var(--line)}}
`;