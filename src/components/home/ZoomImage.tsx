import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  urlImage: string;
  label: string;
  link: string;
  alt: string;
}

export const ZoomImage = ({ className, urlImage, label, alt, link }: Props) => {
  return (
    <div className={clsx("relative overflow-hidden h-full w-full", className)}>
      <div className=" group absolute h-full w-full ">
        <Image
          src={urlImage}
          alt={alt}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-1000 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute w-full flex justify-center bottom-4">
          <Link
            href={link}
            className="bg-gold/45 px-3 py-1 rounded  text-white text-xl"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
};
