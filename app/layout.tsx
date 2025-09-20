import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navigation from "@/components/custom/navigation";
import { FooterSection } from "@/components/sections/footer";

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
                <link rel="preload" href="images/empty.png" as="image" />
                <link
                    rel="preload"
                    href="images/executive_llama.png"
                    as="image"
                />
                <link
                    rel="preload"
                    href="images/framed_profile.png"
                    as="image"
                />
                <link
                    rel="preload"
                    href="images/framed_turtle.png"
                    as="image"
                />
                <link rel="preload" href="images/framed_watch.png" as="image" />
                <link rel="preload" href="images/medscrybe.png" as="image" />
                <link rel="preload" href="images/github_card.png" as="image" />
                <link rel="preload" href="images/go_racing.png" as="image" />
                <link rel="preload" href="images/plankton_eye.png" as="image" />
                <link rel="preload" href="images/tces.png" as="image" />
                <link rel="preload" href="images/walnut_slab.jpg" as="image" />
            </head>
            <body className={`${inter.className} ${alliance.className}`}>
                {/* <ThemeProvider attribute="class" defaultTheme="system"> */}
                <div className="items-center">
                    <Navigation />
                    {children}
                    <FooterSection />
                </div>
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
