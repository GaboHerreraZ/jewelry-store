import Link from "next/link";

export const Categories = () => {
  return (
    <section className="my-10 ">
      <h1 className="text-center font-bold text-gold my-10 text-4xl">
        Explora nuestros Artículos
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-center gap-10 ">
        <div className="w-[200px]  group rounded-full h-[200px] bg-gold bg-cover bg-center cursor-pointer border-gold hover:shadow-lg transition-all duration-500 border-2">
          <Link
            href={""}
            className="flex justify-center items-end w-full h-full group-hover:bg-white/35"
          >
            <h1 className="text-center group-hover:scale-110 transition-all duration-500   text-gold font-bold mb-7">
              Oro Laminado 18k
            </h1>
          </Link>
        </div>
        <div className="w-[200px]  group rounded-full h-[200px] bg-silver bg-cover bg-center cursor-pointer border-silver hover:shadow-lg transition-all duration-500 border-2">
          <Link
            href={""}
            className="flex justify-center items-end w-full h-full group-hover:bg-white/35"
          >
            <h1 className="text-center group-hover:scale-110 transition-all duration-500   text-silver/100 font-bold mb-7">
              Plata 925
            </h1>
          </Link>
        </div>
        <div className="w-[200px]  group rounded-full h-[200px] bg-bisuteria bg-cover bg-center cursor-pointer border-bisuteria hover:shadow-lg transition-all duration-500 border-2">
          <Link
            href={""}
            className="flex justify-center items-end w-full h-full group-hover:bg-white/35"
          >
            <h1 className="text-center group-hover:scale-110 transition-all duration-500   text-bisuteria font-bold mb-7">
              Bisutería
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};
