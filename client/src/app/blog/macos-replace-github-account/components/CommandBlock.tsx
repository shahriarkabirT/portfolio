import { Check, Copy } from "lucide-react";

export interface CommandBlockProps {
  command: string;
  description: string;
  id: string;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}

export const CommandBlock = ({
  command,
  description,
  id,
  copiedId,
  onCopy,
}: CommandBlockProps) => (
  <div className="mb-6 bg-[var(--card-bg)] rounded-lg shadow-md border border-[var(--card-border)] p-5 hover:shadow-lg transition-shadow duration-300">
    <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">
      {description}
    </p>
    <div className="relative bg-[var(--background)] dark:bg-gray-950 rounded-md p-4 pr-12 border border-[var(--card-border)]">
      <code className="text-[var(--primary)] text-sm font-mono block overflow-x-auto leading-relaxed">
        {command}
      </code>
      <button
        type="button"
        onClick={() => onCopy(command, id)}
        className="absolute top-3 right-3 p-2 rounded-md hover:bg-[var(--card-bg)] transition-all duration-200 hover:scale-110"
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
