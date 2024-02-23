"use client";

import { useLocale, useTranslations } from "next-intl";

import { localeNames, locales, usePathname, useRouter } from "@/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Locale } from "@/lib/types";
import React from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  const t = useTranslations("App");

  const switchLocale = (locale: string) => {
    router.push(pathname, { locale });
  };

  const languageItems = locales.map((locale) => {
    return { language: localeNames[locale], flag: `/${locale}.png`, locale };
  });

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-none">
            <Image
              src={`/${locale}.png`}
              alt=""
              width={40}
              height={27}
              className="mr-2 rounded-sm"
            />
            {localeNames[locale]}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-44 gap-3 p-2 justify-center">
              {languageItems.map(({ language, locale, flag }, index) => {
                return (
                  <li
                    key={index}
                    className="min-w-[150px] flex justify-start p-2 rounded-sm items-center cursor-pointer leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    onClick={() => switchLocale(locale)}
                  >
                    <Image
                      src={flag}
                      alt=""
                      width={40}
                      height={27}
                      className="mr-2 rounded-sm"
                    />{" "}
                    {language}
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();
//   const t = useTranslations("App");

//   const switchLocale = (locale: string) => {
//     router.push(pathname, { locale });
//   };

//   return (
//     <Select defaultValue={locale} onValueChange={switchLocale}>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder={t("selectALanguage")} />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>{t("selectALanguage")}</SelectLabel>
//           {locales.map((loc) => (
//             <SelectItem key={loc} value={loc}>
//               {localeNames[loc]}
//             </SelectItem>
//           ))}
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }
