import {
  Blocks,
  Home,
  Megaphone,
  Settings,
  UserRound,
  Workflow,
  LogOut,
} from "lucide-react";

import { Link } from "@/navigation";

export default function SideNav() {
  return (
    <nav className="w-[273px]">
      <ul>
        <li className="py-3 flex items-center ml-5">
          <Link href="/" className="flex items-center gap-3 text-green-500">
            <Home /> Home
          </Link>
        </li>
        <li className="py-3 flex items-center ml-5">
          <Link href="/surveys" className="flex items-center gap-3">
            <Megaphone /> Surveys
          </Link>
        </li>
        <li className="py-3 flex items-center ml-5">
          <Link href="/integrations" className="flex items-center gap-3">
            <Blocks /> Integrations
          </Link>
        </li>
        <li className="py-3 flex items-center ml-5">
          <Link href="/flows" className="flex items-center gap-3">
            <Workflow /> Flows
          </Link>
        </li>
        <li className="py-3 flex items-center ml-5">
          <Link href="/profile" className="flex items-center gap-3">
            <UserRound /> Profile
          </Link>
        </li>
        <li className="py-3 flex items-center ml-5">
          <Link href="/settings" className="flex items-center gap-3">
            <Settings /> Settings
          </Link>
        </li>
        <li className="py-3 flex items-center ml-5">Switch theme</li>
        <li className="py-3 flex items-center ml-5">
          <LogOut />
        </li>
      </ul>
    </nav>
  );
}
