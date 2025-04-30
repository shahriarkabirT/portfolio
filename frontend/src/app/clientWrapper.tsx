"use client";

import ClientProvider from "./clientProvider";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ClientProvider>{children}</ClientProvider>;
};

export default ClientWrapper;