import Image from "next/image";
import logo from "../../../../public/png/Logo_negro.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { WompiIcon } from "@/utils/icons";

export const Footer = () => {
  return (
    <footer className="md:px-0 px-5 pt-10 shadow-2xl mt-20">
      <div className="grid md:px-20 md:mx-20 grid-cols-1 md:grid-cols-4 justify-center ">
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="Logo Bellarte Joyería"
              width={180}
              height={90}
            />
          </Link>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">INFORMACIÓN</h1>
          <div className="grid mt-5">
            <Link href="/mayoristas">Trabaja con nosotros</Link>
            <Link href="/terminos-y-condiciones">Terminos y condiciones</Link>
            <h2 className="font-bold mt-4">Pagos seguros con:</h2>
            <WompiIcon />
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">CONTÁCTANOS</h1>
          <div className="grid mt-5">
            <Link href="">Whatsapp</Link>
            <Link href="">Correo Electrónico</Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">REDES SOCIALES</h1>
          <div className="grid mt-5">
            <Link href="https://www.facebook.com/profile.php?id=61556018750523">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/bellartejoyeria_/">
              Instagram
            </Link>
            <Link href="https://www.tiktok.com/@bellarte_joyeria?_t=8kfoh896BBG&_r=1 b ">
              TikTok
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 mt-10 justify-center items-center grid-flow-row">
        <Link
          href="https://www.facebook.com/profile.php?id=61556018750523"
          target="_blank"
        >
          <FaFacebook size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/bellartejoyeria_/"
          target="_blank"
        >
          <FaInstagram size={20} />
        </Link>
        <Link
          href="https://www.tiktok.com/@bellarte_joyeria?_t=8kfoh896BBG&_r=1"
          target="_blank"
        >
          <FaTiktok size={20} />
        </Link>
      </div>

      <div className="md:px-40 border-t-[1px] mt-5  border-gray-200">
        <p className="py-4 text-md">
          © 2021 Bellarte Joyería. Diseñado por
          <Link href="https://gabrielherrerazdev.com/en"> GaboGhz</Link>
        </p>
      </div>
    </footer>
  );
};
