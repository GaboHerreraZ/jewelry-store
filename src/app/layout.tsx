import type { Metadata } from "next";
import "./globals.css";

import { darker } from "@/config/config";
import { Loading } from "@/components/ui";
import { Toaster } from "react-hot-toast";

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
      <body className={darker.className}>
        {children}
        <Loading />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#020617",
              color: "#C48B21",
            },
          }}
        />
      </body>
    </html>
  );
}
