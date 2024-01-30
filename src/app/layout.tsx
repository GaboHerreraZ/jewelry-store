import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darker = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Joyería BellArte | Shop",
    default: "Inicio - Joyería BellArte | Shop",
  },
  description: "Tienda virtual de productos de Joyería de oro laminado 18k",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={darker.className}>{children}</body>
    </html>
  );
}
