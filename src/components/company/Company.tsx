import { BusinessCard } from "./BusinessCard";

const BUSINESS = [
  {
    title: "Emprendedor",
    description:
      "Ideal para aquellos que buscan iniciar su propio negocio en el mundo de la joyería. Te ofrecemos el soporte y la formación necesaria para que brilles con luz propia, administrando tu tiempo y recursos a tu manera",
    price: "1'000.000",
    footerTitle: "Ser Emprendedor",
    href: "/mayorista",
  },
  {
    title: "Empresario",
    description:
      " Diseñada para quienes ya tienen experiencia en negocios o en la industria de la joyería y están listos para dar un paso más. Te brindamos herramientas avanzadas, productos exclusivos y un modelo de negocio probado para expandir tu éxito.",
    price: "5'000.000",
    footerTitle: "Ser Empresario",
    href: "/mayorista",
  },
];

export const Company = () => {
  return (
    <>
      <section className="grid justify-center my-10">
        <h1 className="text-center text-gold font-bold text-4xl">
          Trabaja con Nosotros
        </h1>
        <p className="text-2xl px-5 md:px-20 text-center my-5 font-bold">
          ¿Estás buscando una oportunidad emocionante en el mundo de la joyería?
        </p>
        <p className="text-2xl px-5">
          ¡Tu momento ha llegado! En{" "}
          <span className="text-gold font-bold">BellArte</span>, no solo
          vendemos joyas; creamos experiencias inolvidables y oportunidades
          únicas de crecimiento.
        </p>
      </section>
      <section className="flex flex-col mb-10 justify-center  gap-10 md:gap-20 px-2 md:px-20  md:flex-row">
        {BUSINESS.map((business) => (
          <BusinessCard key={business.title} {...business} />
        ))}
      </section>
    </>
  );
};
