import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitorBadge from "@/components/visitor-badge";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Stack & AI Engineer | Samarth Pagaria",
  description: "A professional portfolio showcasing Samarth's work and projects.",
  icons: {
    icon: "/tabLogo_circle.png",
    apple: "/tabLogo_circle.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] min-h-screen bg-background text-foreground transition-colors duration-300">
          {/* Left Column (Empty Gutter/Nav) */}
          <div className="hidden lg:block border-r border-border bg-card/50"></div>
          
          {/* Middle Column (Content) */}
          <main className="w-full relative border-x border-border md:border-none">
            {children}
          </main>
          
          {/* Right Column (Empty Gutter/Secondary) */}
          <div className="hidden lg:flex border-l border-border bg-card/50 items-start justify-end pt-4 pr-4">
            <VisitorBadge />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-30 bg-white/0 dark:bg-black/0 backdrop-blur-sm z-50" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, white 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, white 100%)" }}></div>
      </body>
    </html>
  );
}
