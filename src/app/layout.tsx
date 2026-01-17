import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simba Safari - Ingressos Online",
  description: "Compre seus ingressos para o Simba Safari online e evite filas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
