import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samarth Portfolio",
  description: "A professional portfolio showcasing Samarth's work and projects.",
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] min-h-screen bg-background text-foreground mt-2">
          {/* Left Column (Empty Gutter/Nav) */}
          <div className="hidden lg:block border-r border-border/50 bg-muted/5 bg-neutral-500/40"></div>
          
          {/* Middle Column (Content) */}
          <main className="w-full ">
            {children}
          </main>
          
          {/* Right Column (Empty Gutter/Secondary) */}
          <div className="hidden lg:block border-l border-border/50  bg-neutral-500/40"></div>
        </div>
      </body>
    </html>
  );
}
