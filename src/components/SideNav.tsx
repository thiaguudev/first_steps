"use client";

import { Link } from "@/navigation";
import { DashboardIcon } from "@radix-ui/react-icons";
import {
  Blocks,
  Home,
  Megaphone,
  Settings,
  UserRound,
  Workflow,
  LogOut,
  ArrowLeftCircle,
} from "lucide-react";
import { useState } from "react";

export default function SideNav() {
  const [open, setOpen] = useState<boolean>(false);
  const menus = [
    { title: "Dashboard", icon: <Home />, url: "/" },
    { title: "Surveys", icon: <Megaphone />, url: "/app/surveys" },
    { title: "Integrations", icon: <Blocks />, url: "/app/integrations" },
    { title: "Flows", icon: <Workflow />, url: "/app/flows" },
    { title: "Contacts", icon: <UserRound />, url: "/app/contacts" },
  ];

  const handleOnCollapse = () => setOpen(!open);

  return (
    <div
      className={`bg-slate-100 h-screen p-5 pt-8 relative ${
        open ? "w-52" : "w-16"
      }`}
    >
      <ArrowLeftCircle
        onClick={handleOnCollapse}
        className={`bg-white text-3xl rounded-full absolute -right-3 top-9 border border-solid cursor-pointer ${
          !open && "rotate-180"
        }`}
      />

      <div className="flex flex-col justify-between h-full items-center">
        <nav>
          <ul className="pt-2">
            {menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  className={`cursor-pointer text-sm mt-2 p-2 flex items-center gap-x-4 rounded-md hover:bg-emerald-100 ${
                    open && "w-40"
                  }`}
                >
                  <Link href={menu.url} className="flex gap-x-2">
                    <span className="text-2xl block float-left">
                      {menu.icon ? menu.icon : <DashboardIcon />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-200 ${
                        !open && "hidden"
                      }`}
                    >
                      {menu.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <Link
            href="/app/settings"
            className={`text-sm mt-2 p-2 flex items-center gap-x-4 rounded-md hover:bg-emerald-100 ${
              open && "w-40"
            }`}
          >
            <span className="text-2xl block float-left">
              <Settings />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Settings
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
