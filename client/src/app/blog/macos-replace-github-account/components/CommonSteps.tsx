import { CommandBlock } from "./CommandBlock";
import { Section } from "./Section";

interface CommonStepsProps {
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}

export const CommonSteps = ({ copiedId, onCopy }: CommonStepsProps) => (
  <>
    <Section title="1. Remove Current GitHub Credentials">
      <CommandBlock
        id="check-credential"
        description="First, check which credential helper you're currently using:"
        command="git config --global credential.helper"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="erase-credential"
        description="Remove stored credentials from macOS Keychain (press Enter twice after the last line):"
        command={`git credential-osxkeychain erase
host=github.com
protocol=https`}
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 mb-6 rounded-md shadow-sm">
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          <strong className="text-blue-700 dark:text-blue-300 font-semibold">
            💡 Manual Method:
          </strong>{" "}
          Open Keychain Access app (Cmd + Space, search &quot;Keychain
          Access&quot;), search for &quot;github.com&quot;, and delete all
          GitHub-related entries.
        </p>
      </div>
    </Section>

    <Section title="2. Update Git Configuration">
      <CommandBlock
        id="check-user"
        description="Check your current Git username and email:"
        command="git config --global user.name && git config --global user.email"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="update-name"
        description="Update to your new GitHub username:"
        command='git config --global user.name "Your New Name"'
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="update-email"
        description="Update to your new GitHub email:"
        command='git config --global user.email "newemail@example.com"'
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="verify-config"
        description="Verify your changes were applied correctly:"
        command="git config --global --list"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>
  </>
);
