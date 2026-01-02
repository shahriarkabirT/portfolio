import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function GitHubSwitchGuide() {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CommandBlock = ({ command, description, id }) => (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="relative bg-gray-900 rounded-md p-4 pr-12">
        <code className="text-green-400 text-sm font-mono block overflow-x-auto">
          {command}
        </code>
        <button
          onClick={() => copyToClipboard(command, id)}
          className="absolute top-3 right-3 p-2 rounded hover:bg-gray-800 transition-colors"
          aria-label="Copy command"
        >
          {copiedId === id ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );

  const Section = ({ title, children }) => (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            How to Change Your GitHub Account on macOS
          </h1>
          <p className="text-gray-600 text-lg">
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

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
            <p className="text-sm text-gray-700">
              <strong>Manual Method:</strong> Open Keychain Access app (Cmd + Space, search "Keychain Access"), 
              search for "github.com", and delete all GitHub-related entries.
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
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
            <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
              <li>Go to <strong>github.com/settings/keys</strong></li>
              <li>Click <strong>"New SSH key"</strong></li>
              <li>Give it a title (e.g., "MacBook Air")</li>
              <li>Paste your key (Cmd + V - it's already in clipboard)</li>
              <li>Click <strong>"Add SSH key"</strong></li>
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

        <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>🎉 Congratulations! Your macOS is now configured with your new GitHub account.</p>
        </footer>
      </div>
    </div>
  );
}