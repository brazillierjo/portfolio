"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Download, Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PERSONAL_INFO } from "@/lib/constants/personal";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/skills", key: "skills" },
  { href: "/experience", key: "experience" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as "fr" | "en" | "it";
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-border/40 bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="border-primary bg-primary/10 flex h-8 w-8 items-center justify-center border">
            <Terminal className="text-primary h-4 w-4" />
          </div>
          <span className="font-mono text-sm font-bold tracking-wider">
            {PERSONAL_INFO.initials}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(item.key)}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="default" size="sm" className="hidden gap-2 md:flex" asChild>
            <a href={PERSONAL_INFO.cv[locale]} download>
              <Download className="h-4 w-4" />
              {t("downloadCV")}
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
                <Button variant="default" className="mt-4 gap-2" asChild>
                  <a href={PERSONAL_INFO.cv[locale]} download>
                    <Download className="h-4 w-4" />
                    {t("downloadCV")}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
