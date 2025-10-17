// app/providers.tsx
"use client";

import { Provider } from "react-redux";
import { store } from "../store"; // Make sure this is properly exported

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}