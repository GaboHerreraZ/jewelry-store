import { ContactForm } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bellartejoyeria.com/contacto"),
  title: "Contáctanos",
  description:
    "Contáctanos en BellArte Joyería para consultas o pedidos personalizados. Nuestro equipo está listo para ayudarte a encontrar la joya perfecta o resolver tus dudas.",
};

export default function ContactPage() {
  return <ContactForm />;
}
