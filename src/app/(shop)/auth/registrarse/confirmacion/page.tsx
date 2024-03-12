import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center ">
      <div className="min-w-[280px]  text-center bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl  font-semibold mb-4">
          ¡Un último paso para brillar con BellArte Joyería!
        </h2>
        <p className="mb-6 text-xl">
          Hemos enviado un destello a tu correo para confirmar tu cuenta. Por
          favor, revisa tu bandeja de entrada y sigue el enlace para activar tu
          cuenta y empezar a explorar nuestras exclusivas colecciones.
        </p>
        <Link className="button-gold mt-4" href="/auth/login">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}
