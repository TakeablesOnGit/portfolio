import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Takeables | ROBLOX Game Developer",
  description:
    "ROBLOX Game developer specializing in coding and UI Design.",
  openGraph: {
    title: "Takeables | ROBLOX Game Developer",
    description:
      "ROBLOX Game developer specializing in coding and UI Design.",
    url: "https://utkarsh-singhal.is-a.dev/",
    type: "website",
    images: [
      {
        url: "https://utkarsh-singhal.is-a.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Takeables | ROBLOX Game Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  authors: [
    { name: "Takeables", url: "https://utkarsh-singhal.is-a.dev/" },
  ],
  keywords: [
    "Takeables",
    "ROBLOX Developer",
    "Lua",
  ],
  creator: "Takeables",
  publisher: "Takeables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
