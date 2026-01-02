import { CommandBlock } from "./CommandBlock";
import { Section } from "./Section";

interface GitHubCLIContentProps {
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}

export const GitHubCLIContent = ({
  copiedId,
  onCopy,
}: GitHubCLIContentProps) => (
  <>
    <Section title="3. Logout from Current GitHub Account">
      <CommandBlock
        id="gh-logout"
        description="Logout from your current GitHub account:"
        command="gh auth logout"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>

    <Section title="4. Login with New GitHub Account">
      <CommandBlock
        id="gh-login"
        description="Login to GitHub with your new account:"
        command="gh auth login"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 mb-6 rounded-md shadow-sm">
        <h3 className="font-semibold text-green-800 dark:text-green-300 mb-3 text-base">
          📋 GitHub CLI Login Steps:
        </h3>
        <ol className="text-sm text-[var(--text-secondary)] space-y-2 list-decimal list-inside leading-relaxed">
          <li>
            Select <strong>GitHub.com</strong> as the host
          </li>
          <li>
            Choose <strong>HTTPS</strong> or <strong>SSH</strong> as your
            protocol
          </li>
          <li>
            Select <strong>Login with a web browser</strong>
          </li>
          <li>Authorize GitHub CLI in your browser</li>
          <li>Paste the one-time code when prompted</li>
        </ol>
      </div>

      <CommandBlock
        id="gh-verify"
        description="Verify you're logged in with the new account:"
        command="gh auth status"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>

    <Section title="5. Update Repository Remote URLs">
      <CommandBlock
        id="check-remote"
        description="Navigate to your repository and check current remote URL:"
        command="cd /path/to/your/repo && git remote -v"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="update-https"
        description="Update remote URL to use HTTPS with new account:"
        command="git remote set-url origin https://github.com/new-username/repo-name.git"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>

    <Section title="6. Test Git Operations">
      <CommandBlock
        id="test-pull"
        description="Test pulling from your repository:"
        command="git pull"
        copiedId={copiedId}
        onCopy={onCopy}
      />

      <CommandBlock
        id="test-push"
        description="Test pushing to your repository:"
        command="git push"
        copiedId={copiedId}
        onCopy={onCopy}
      />
    </Section>
  </>
);
