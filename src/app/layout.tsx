import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lion Rar - The Viral Roar",
  description: "Join the viral sensation of Lion Rar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
