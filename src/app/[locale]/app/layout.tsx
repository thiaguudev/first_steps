import { ReactNode } from "react";

import SideNav from "@/components/SideNav";
import Header from "@/components/Header";

type AppLayoutProps = {
  children: ReactNode;
};

export default async function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="w-screen h-screen flex bg-[#F5F6FA]">
      <SideNav />
      <div className="flex flex-col w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
