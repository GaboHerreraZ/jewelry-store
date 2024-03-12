import Link from "next/link";
interface Props {
  title: string;
  description: string;
  price: string;
  footerTitle: string;
  href: string;
}

export const BusinessCard = ({
  title,
  description,
  footerTitle,
  price,
  href,
}: Props) => {
  return (
    <article className="grid relative mt-10 w-full lg:max-w-[300px] justify-center items-center shadow-xl p-5   md:p-7 rounded hover:shadow-2xl transition-all duration-700 border-[1px] hover:border-solid  hover:border-gold">
      <header className="absolute -top-5 w-full  flex justify-center">
        <h1 className="text-center bg-gold p-1 text-gold font-bold text-xl uppercase border-gold border-[1px] border-solid">
          {title}
        </h1>
      </header>
      <p className="text-lg mt-2">{description}</p>
      <p className="text-center font-bold text-xl">Inversión desde:</p>
      <p className="py-5 text-center">
        <span className="font-bold text-gold text-4xl">$ {price}</span>
      </p>
      <footer className="text-center">
        <Link href={href} className="button-gold">
          {footerTitle}
        </Link>
      </footer>
    </article>
  );
};
