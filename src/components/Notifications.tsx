import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <div className="cursor-pointer relative">
      <div className="w-3 h-3 absolute right-0 -top-1 bg-red-600 flex justify-center items-center rounded-full text-xs text-white">
        6
      </div>
      <Bell className="fill-blue-400 stroke-blue-400" />
    </div>
  );
}
