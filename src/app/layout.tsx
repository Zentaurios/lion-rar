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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="tags" content="lion, rar, viral, meng, lion rar, memecoin" />
        <meta property="og:title" content="Lion Rar - The Viral Roar" />
        <meta property="og:description" content="Join the viral sensation of Lion Rar!" />
        <meta property="og:image" content="/lion-rar-logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lion Rar - The Viral Roar" />
        <meta name="twitter:description" content="Join the viral sensation of Lion Rar!" />
        <meta name="twitter:image" content="/lion-rar-logo.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
