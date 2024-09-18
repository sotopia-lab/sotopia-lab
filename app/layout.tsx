import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Space_Grotesk, Open_Sans} from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DownArrowIcon } from "@/components/Icon";
import { Github, Sotopia} from "@/components/icons";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ui/model-toggle";
import {SiteFooter} from "@/components/footer";

import { NavigationMenuSotopia } from "@/components/navigation";

const clash = localFont({
  src: "../styles/ClashDisplay-Semibold.otf",
  variable: "--font-clash",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"]
});

const sourceSans = Open_Sans({
  variable: "--font-space",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Sotopia",
  description:
    "A research platform for building interactive social agents.",
  metadataBase: new URL("https://sotopia.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrolled = false;
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(clash.variable, space.variable, "min-h-screen")}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Toaster />
        <div className="relative flex min-h-screen flex-col items-center pb-10">
          <div
            className={`fixed top-0 w-full ${
              scrolled
                ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                : "bg-white/3"
            } z-30 transition-all`}
          >
            <div className="w-full pl-3 sm:px-12 flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center font-display text-4xl">
                <Sotopia className="dark:text-sky-400 dark:drop-shadow-[0_3px_10px_#bae6fd]" />
                <p className="dark:text-sky-400 dark:drop-shadow-[0_3px_10px_#bae6fd]">Sotopia</p>
              </Link>
              <div className="flex items-center space-x-4 sm:px-6">
              <NavigationMenuSotopia />
                <a
                  href="https://github.com/sotopia-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <Github className="dark:text-sky-500 dark:drop-shadow-[0_3px_10px_#bae6fd]" />
                </a>
                <ModeToggle className="dark:text-sky-500 dark:drop-shadow-[0_3px_10px_#bae6fd]" />
              </div>
            </div>
          </div>
          <main className="flex w-full flex-col items-center justify-center">
            {children}
          </main> 
          <SiteFooter />
        </div>
       
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
