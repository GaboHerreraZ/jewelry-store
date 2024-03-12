import Link from "next/link";

import { getUser } from "@/actions";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/user/Navbar";

export default async function UsuarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id, role } = await getUser();

  if (!id) {
    return notFound();
  }

  if (role === "admin") {
    return (
      <div className="grid mt-20  justify-center items-center">
        <div className="p-10 text-center rounded shadow">
          <h1 className="text-xl font-bold">Eres usuario administrador</h1>
          <p className="py-5 text-lg">
            Solo tienes permisos para acceder al panel administrativo
          </p>
          <Link href="/admin" className="button-gold">
            Ir a Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex md:gap-14 justify-center ">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
