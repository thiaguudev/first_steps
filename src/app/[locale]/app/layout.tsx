import { ReactNode } from "react";

import SideNav from "@/components/SideNav";

type AppLayoutProps = {
  children: ReactNode;
};

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex">
      <SideNav />
      {children}
    </div>
  );
}
