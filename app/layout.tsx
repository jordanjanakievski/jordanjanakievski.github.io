import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ModeToggle } from "@/components/custom/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

const alliance = localFont({
  src: "../assets/font/Alliance-No-2-Regular.woff2",
  variable: "--font-alliance-no2-regular",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${alliance.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ModeToggle />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
