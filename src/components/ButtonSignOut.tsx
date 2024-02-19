"use client";

import { signOut } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "./ui/button";

export default function ButtonSignOut() {
  const t = useTranslations("Auth");
  const locale = useLocale();

  const handleSignOut = () => signOut({ callbackUrl: `/${locale}/sign-in` });

  return <Button onClick={handleSignOut} variant="destructive">{t("signOut")}</Button>;
}
