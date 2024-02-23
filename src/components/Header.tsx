import LanguageSwitcher from "./LanguageSwitcher";
import Notifications from "./Notifications";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <header className="flex justify-end items-center gap-5 w-full h-[70px] px-3 bg-white">
      <Notifications />
      <LanguageSwitcher />
      <UserNav />
    </header>
  );
}
