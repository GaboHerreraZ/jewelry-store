import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Página no encontrada
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Lo sentimos, la página que buscas no se pudo encontrar.
        </p>
        <Link href="/" className="button-gold mt-2">
          Regresar a la tienda
        </Link>
      </div>
    </div>
  );
};
