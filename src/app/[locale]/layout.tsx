import { ReactNode } from "react";
import type { Metadata } from "next";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Chat from "@/components/Chat";
import HotJar from "@/components/HotJar";
import { ThemeProvider } from "@/components/ThemeProvider";
import SessionProvider from "@/components/SessionProvider";
import "../globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
  params: { locale: string };
}>;

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={fontSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <SessionProvider>{children}</SessionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        {/* <Chat />
        <HotJar />
        <Analytics /> */}
      </body>

      <Script id="scripts" defer>
        {`
          (function (w, d, a, n) {
            if (!w[n]) {
              w[n] =  { identity:  a };
              const script = d.createElement('script');
              script.SNIPPET_VERSION = '0.0.1';
              script.type = 'text/javascript';
              script.async = !0;
              script.defer = true;
              script.src = '/integrations/v1/script.js'
              const p = d.getElementsByTagName('script')[0];
              p.parentNode.insertBefore(script, p);
            }
          })(window, document, '123456789', 'survey')
        `}
      </Script>
    </html>
  );
}
