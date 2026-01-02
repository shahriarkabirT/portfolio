import React, { useState, ReactNode } from 'react';
import { Copy, Check } from 'lucide-react';

interface CommandBlockProps {
  command: string;
  description: string;
  id: string;
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function GitHubSwitchGuide() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CommandBlock = ({ command, description, id }: CommandBlockProps) => (
    <div className="mb-6 bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300">
      <p className="text-gray-700 mb-3 leading-relaxed">{description}</p>
      <div className="relative bg-gray-950 rounded-lg p-4 pr-12 border border-gray-800">
        <code className="text-green-400 text-sm font-mono block overflow-x-auto leading-relaxed">
          {command}
        </code>
        <button
          onClick={() => copyToClipboard(command, id)}
          className="absolute top-3 right-3 p-2 rounded-md hover:bg-gray-800 transition-all duration-200 hover:scale-110"
          aria-label="Copy command"
        >
          {copiedId === id ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 hover:text-gray-200" />
          )}
        </button>
      </div>
    </div>
  );

  const Section = ({ title, children }: SectionProps) => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-500 flex items-center gap-2">
        <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
          {title.charAt(0)}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Tutorial Guide
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            How to Change Your GitHub Account on macOS
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            A complete step-by-step guide to switch GitHub accounts on your Mac
          </p>
        </header>

        <Section title="1. Remove Current GitHub Credentials">
          <CommandBlock
            id="check-credential"
            description="First, check which credential helper you're currently using:"
            command="git config --global credential.helper"
          />
          
          <CommandBlock
            id="erase-credential"
            description="Remove stored credentials from macOS Keychain (press Enter twice after the last line):"
            command={`git credential-osxkeychain erase
host=github.com
protocol=https`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong className="text-blue-700 font-semibold">💡 Manual Method:</strong> Open Keychain Access app (Cmd + Space, search &quot;Keychain Access&quot;), 
              search for &quot;github.com&quot;, and delete all GitHub-related entries.
            </p>
          </div>
        </Section>

        <Section title="2. Update Git Configuration">
          <CommandBlock
            id="check-user"
            description="Check your current Git username and email:"
            command="git config --global user.name && git config --global user.email"
          />
          
          <CommandBlock
            id="update-name"
            description="Update to your new GitHub username:"
            command='git config --global user.name "Your New Name"'
          />
          
          <CommandBlock
            id="update-email"
            description="Update to your new GitHub email:"
            command='git config --global user.email "newemail@example.com"'
          />
          
          <CommandBlock
            id="verify-config"
            description="Verify your changes were applied correctly:"
            command="git config --global --list"
          />
        </Section>

        <Section title="3. Remove Old SSH Keys">
          <CommandBlock
            id="list-ssh"
            description="List all existing SSH keys in your system:"
            command="ls -la ~/.ssh"
          />
          
          <CommandBlock
            id="remove-rsa"
            description="Remove old RSA SSH keys (if you have them):"
            command="rm ~/.ssh/id_rsa ~/.ssh/id_rsa.pub"
          />
          
          <CommandBlock
            id="remove-ed25519"
            description="Remove old Ed25519 SSH keys (if you have them):"
            command="rm ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub"
          />
        </Section>

        <Section title="4. Generate New SSH Key">
          <CommandBlock
            id="generate-key"
            description="Generate a new Ed25519 SSH key (recommended). Press Enter to accept default location, optionally set a passphrase:"
            command='ssh-keygen -t ed25519 -C "newemail@example.com"'
          />
          
          <CommandBlock
            id="start-agent"
            description="Start the SSH agent in the background:"
            command='eval "$(ssh-agent -s)"'
          />
          
          <CommandBlock
            id="add-key"
            description="Add your new SSH private key to the SSH agent:"
            command="ssh-add ~/.ssh/id_ed25519"
          />
          
          <CommandBlock
            id="copy-key"
            description="Copy your public SSH key to clipboard (ready to paste into GitHub):"
            command="pbcopy < ~/.ssh/id_ed25519.pub"
          />
        </Section>

        <Section title="5. Add SSH Key to GitHub">
          <div className="bg-green-50 border-l-4 border-green-500 p-5 mb-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-800 mb-3 text-base">📝 Steps to add SSH key:</h3>
            <ol className="text-sm text-gray-800 space-y-2 list-decimal list-inside leading-relaxed">
              <li>Go to <strong className="text-green-700">github.com/settings/keys</strong></li>
              <li>Click <strong className="text-green-700">&quot;New SSH key&quot;</strong></li>
              <li>Give it a title (e.g., &quot;MacBook Air&quot;)</li>
              <li>Paste your key (Cmd + V - it&apos;s already in clipboard)</li>
              <li>Click <strong className="text-green-700">&quot;Add SSH key&quot;</strong></li>
            </ol>
          </div>
        </Section>

        <Section title="6. Test SSH Connection">
          <CommandBlock
            id="test-ssh"
            description="Verify that your SSH connection to GitHub works. You should see a success message with your new username:"
            command="ssh -T git@github.com"
          />
        </Section>

        <Section title="7. Update Repository Remote URLs">
          <CommandBlock
            id="check-remote"
            description="Navigate to your repository and check current remote URL:"
            command="cd /path/to/your/repo && git remote -v"
          />
          
          <CommandBlock
            id="update-https"
            description="Update remote URL to use HTTPS with new account:"
            command="git remote set-url origin https://github.com/new-username/repo-name.git"
          />
          
          <CommandBlock
            id="update-ssh"
            description="Or update remote URL to use SSH with new account:"
            command="git remote set-url origin git@github.com:new-username/repo-name.git"
          />
        </Section>

        <Section title="8. Final Verification">
          <CommandBlock
            id="test-pull"
            description="Test that everything works by pulling from your repository:"
            command="git pull"
          />
          
          <CommandBlock
            id="test-push"
            description="Or test by pushing to your repository:"
            command="git push"
          />
        </Section>

        <footer className="mt-20 pt-10 border-t-2 border-gray-300 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-md">
            <p className="text-2xl font-bold text-gray-800 mb-2">🎉 Congratulations!</p>
            <p className="text-gray-600 text-lg">Your macOS is now configured with your new GitHub account.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}