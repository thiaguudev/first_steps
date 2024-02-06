"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export default function ButtonSignIn() {
  const t = useTranslations("Auth");

  const handleSign = async () => {
    const response = await signIn("google", {
      redirect: false,
      callbackUrl: "",
    });

    console.log(response);
  };

  return <Button onClick={handleSign}>{t("signIn")}</Button>;
}
