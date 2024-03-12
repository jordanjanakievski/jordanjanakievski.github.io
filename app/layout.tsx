import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navigation from "@/components/custom/navigation";

const inter = Inter({ subsets: ["latin"] });

const alliance = localFont({
  src: "../assets/fonts/Alliance-No-2-Regular.woff2",
  variable: "--font-alliance-no2-regular",
});

export const metadata: Metadata = {
  title: "Jordan Janakievski",
  description: "Jordan Janakievski's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${alliance.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex flex-col items-center">
            <div className="max-w-[var(--max-width)] ml-[10%] mr-[10%]">
              <Navigation />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
