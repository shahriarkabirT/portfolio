import { ReactNode } from "react";

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 pb-3 border-b-2 border-blue-500 flex items-center gap-2">
      <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
        {title.charAt(0)}
      </span>
      {title}
    </h2>
    {children}
  </section>
);
