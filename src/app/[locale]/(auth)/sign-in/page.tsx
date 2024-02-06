import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SignIn</h1>
    </div>
  );
}
