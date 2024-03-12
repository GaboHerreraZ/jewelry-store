import Link from "next/link";

export const NotLogin = () => {
  return (
    <div className=" w-full px-16 md:px-0 mt-20 flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          401
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          No tiene permisos para acceder a esta página
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Lo sentimos, debe iniciar sesión para acceder a esta página.
        </p>
        <Link href="/auth/login" className="button-gold mt-2">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};
