import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciudatos - Collector",
  description: "Ciudatos - Collector tiene como propósito recolectar información de la ciudad de Cochabamba y Bolivia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
