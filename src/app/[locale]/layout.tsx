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
        <Chat />
        <HotJar />
        <Analytics />
        <iframe
          src="http://localhost:3000/api/surveys/template/nps"
          scrolling="no"
          frameBorder="0"
          height={350}
          style={{ width: "100vw", overflow: "hidden" }}
        />
      </body>

      <Script id="delighted">
        {`!function(e,t,r,n){
          if(!e[n]){
            for(var a=e[n]=[],i=["survey","reset","config","init","set","get","event","identify","track","page","screen","group","alias"],c=0;c<i.length;c++){
              var s=i[c];a[s]=a[s]||function(e){
                return function(){
                  var t=Array.prototype.slice.call(arguments);
                  a.push([e,t])}}(s)}
                  a.SNIPPET_VERSION="1.0.1";
                  var o=t.createElement("script");
                  o.type="text/javascript",
                  o.async=!0,
                  o.src="https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/"+r+"/"+n+".js";
                  var p=t.getElementsByTagName("script")[0];
                  p.parentNode.insertBefore(o,p)}}(window,document,"BacF9eMb6mIWPbJR","delighted");`}

        {`
          (function (s, u, r, v, e, y) {
            
          })(window, document, '123456789', 'survey.apoli')
          console.log(window);
        `}
      </Script>
    </html>
  );
}
