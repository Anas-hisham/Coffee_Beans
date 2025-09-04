import type { ReactNode } from "react";
import NavBar from "@/components/layout/NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-30">
      <NavBar />
      <main className="pb-20 md:pb-10">{children}</main>
    </div>
  );
}
