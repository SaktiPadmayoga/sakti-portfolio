import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

import { DarkModeProvider } from './context/DarkModeContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sakti Padmayoga - Portfolio",
  description: "Portfolio website of Sakti Padmayoga, Computer Science Student",
  icons: {
    icon: '/favicon.png', // atau .png sesuai file kamu
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}


