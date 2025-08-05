"use client";

import { ReactNode } from "react";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </AppProvider>
  );
}
