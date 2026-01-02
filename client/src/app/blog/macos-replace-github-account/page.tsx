"use client";
import { useState } from "react";
import { CommonSteps } from "./components/CommonSteps";
import { GitHubCLIContent } from "./components/GitHubCLIContent";
import { SSHMethodContent } from "./components/SSHMethodContent";

export default function GitHubSwitchGuide() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [authMethod, setAuthMethod] = useState<"gh-auth" | "ssh">("gh-auth");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Tutorial Guide
          </div>
          <h1 className="text-5xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight">
            How to Change Your GitHub Account on macOS
          </h1>
          <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto leading-relaxed">
            A complete step-by-step guide to switch GitHub accounts on your Mac
          </p>
        </header>

        {/* Tab Selection */}
        <div className="mb-12 flex gap-4 border-b border-[var(--border)]">
          <button
            type="button"
            onClick={() => setAuthMethod("gh-auth")}
            className={`px-6 py-4 font-semibold transition-colors border-b-2 ${
              authMethod === "gh-auth"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            🔐 GitHub CLI (gh auth)
          </button>
          <button
            type="button"
            onClick={() => setAuthMethod("ssh")}
            className={`px-6 py-4 font-semibold transition-colors border-b-2 ${
              authMethod === "ssh"
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            🔑 SSH Method
          </button>
        </div>

        {/* Common First Steps */}
        <CommonSteps copiedId={copiedId} onCopy={copyToClipboard} />

        {/* Conditional Content based on Selection */}
        {authMethod === "gh-auth" ? (
          <GitHubCLIContent copiedId={copiedId} onCopy={copyToClipboard} />
        ) : (
          <SSHMethodContent copiedId={copiedId} onCopy={copyToClipboard} />
        )}

        <footer className="mt-20 pt-10 border-t-2 border-[var(--border)] text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 shadow-md">
            <p className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              🎉 Congratulations!
            </p>
            <p className="text-[var(--text-secondary)] text-lg">
              Your macOS is now configured with your new GitHub account.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
