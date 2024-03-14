import Image from "next/image";
import logo from "../../../../public/png/Logo_negro.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { PaymentMethods } from "../payment-methods/PaymentMethods";

export const Footer = () => {
  return (
    <footer className="md:px-0 px-5 py-10 shadow-2xl mt-20">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="grid">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo Bellarte Joyería"
              width={150}
              height={80}
            />
          </Link>
          <p className="mt-4 font-bold">Siguenos en:</p>
          <div className="flex gap-2">
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
          </div>
          <p className="mt-4 text-sm font-bold">2024 BellArte Joyería</p>
          <p className="text-sm">Todos los derechos reservados</p>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">Tienda</h1>
          <ul className="mt-5">
            <li className="hover:underline">
              <Link href="/genero/hombre">Hombre</Link>
            </li>
            <li className="hover:underline">
              <Link href="/genero/mujer">Mujer</Link>
            </li>
            <li className="hover:underline">
              <Link href="/genero/nino">Niño</Link>
            </li>
            <li className="hover:underline">
              <Link href="/mayoristas">Mayoristas</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">Contacto</h1>
          <p className="mt-5">
            <span className="font-bold">Email:</span>
            <a
              href="mailto:contacto@bellartejoyeria.com"
              className="hover:underline"
            >
              contacto@bellartejoyeria.com
            </a>
          </p>
          <p>
            <span className="font-bold">Tel:</span>+57 311 785 6056
          </p>
        </div>

        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">Nosotros</h1>
          <ul className="mt-5">
            <li className="hover:underline">
              <Link href="/mayoristas">Trabaja con nosotros</Link>
            </li>
            <li className="hover:underline">
              <Link href="/terminos-y-condiciones">Terminos y condiciones</Link>
            </li>
            <li>
              <PaymentMethods />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
