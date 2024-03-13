import type { Metadata } from "next";
import "./globals.css";

import { darker } from "@/config/config";
import { Loading } from "@/components/ui";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://bellartejoyeria.com"),
  title: {
    template: "%s | Joyería BellArte",
    default: "Inicio | Joyería BellArte",
  },
  description:
    "Explora en BellArte Joyería exclusivas joyas en oro, oro laminado y plata. Piezas únicas que realzan tu estilo. Encuentra tu tesoro o el regalo perfecto",
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
