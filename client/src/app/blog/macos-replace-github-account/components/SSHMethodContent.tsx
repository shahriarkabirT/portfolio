import { CommandBlock } from "./CommandBlock";
import { Section } from "./Section";

interface SSHMethodContentProps {
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}

export const SSHMethodContent = ({
  copiedId,
  onCopy,
}: SSHMethodContentProps) => (
  <>
    <Section title="3. Remove Old SSH Keys">
      <CommandBlock
        id="list-ssh"
        description="List all existing SSH keys in your system:"
        command="ls -la ~/.ssh"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="remove-rsa"
        description="Remove old RSA SSH keys (if you have them):"
        command="rm ~/.ssh/id_rsa ~/.ssh/id_rsa.pub"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="remove-ed25519"
        description="Remove old Ed25519 SSH keys (if you have them):"
        command="rm ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>

    <Section title="4. Generate New SSH Key">
      <CommandBlock
        id="generate-key"
        description="Generate a new Ed25519 SSH key (recommended). Press Enter to accept default location, optionally set a passphrase:"
        command='ssh-keygen -t ed25519 -C "newemail@example.com"'
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="start-agent"
        description="Start the SSH agent in the background:"
        command='eval "$(ssh-agent -s)"'
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="add-key"
        description="Add your new SSH private key to the SSH agent:"
        command="ssh-add ~/.ssh/id_ed25519"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="copy-key"
        description="Copy your public SSH key to clipboard (ready to paste into GitHub):"
        command="pbcopy < ~/.ssh/id_ed25519.pub"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>

    <Section title="5. Add SSH Key to GitHub">
      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 mb-6 rounded-md shadow-sm">
        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-base">
          📝 Steps to add SSH key:
        </h3>
        <ol className="text-sm text-[var(--text-secondary)] space-y-2 list-decimal list-inside leading-relaxed">
          <li>
            Go to{" "}
            <strong className="text-green-700 dark:text-green-300">
              github.com/settings/keys
            </strong>
          </li>
          <li>
            Click{" "}
            <strong className="text-green-700 dark:text-green-300">
              &quot;New SSH key&quot;
            </strong>
          </li>
          <li>Give it a title (e.g., &quot;MacBook Air&quot;)</li>
          <li>Paste your key (Cmd + V - it&apos;s already in clipboard)</li>
          <li>
            Click{" "}
            <strong className="text-green-700 dark:text-green-300">
              &quot;Add SSH key&quot;
            </strong>
          </li>
        </ol>
      </div>
    </Section>

    <Section title="6. Test SSH Connection">
      <CommandBlock
        id="test-ssh"
        description="Verify that your SSH connection to GitHub works. You should see a success message with your new username:"
        command="ssh -T git@github.com"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>

    <Section title="7. Update Repository Remote URLs">
      <CommandBlock
        id="check-remote-ssh"
        description="Navigate to your repository and check current remote URL:"
        command="cd /path/to/your/repo && git remote -v"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="update-ssh-remote"
        description="Update remote URL to use SSH with new account:"
        command="git remote set-url origin git@github.com:new-username/repo-name.git"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>

    <Section title="8. Final Verification">
      <CommandBlock
        id="test-pull-ssh"
        description="Test that everything works by pulling from your repository:"
        command="git pull"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="test-push-ssh"
        description="Or test by pushing to your repository:"
        command="git push"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>
  </>
);
