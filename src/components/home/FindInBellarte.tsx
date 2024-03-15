import "./style.css";
import Image from "next/image";

import cadena from "../../../public/home/cadena.jpg";
import anillos from "../../../public/home/anillos.jpg";
import aretes from "../../../public/home/aretes.jpg";
import dije from "../../../public/home/dije.jpeg";
import pulsera from "../../../public/home/pulsera.jpg";
import tobilleras from "../../../public/home/tobilleras.jpg";
import Link from "next/link";

export const FindInBellarte = () => {
  return (
    <section className="grid justify-center py-10 bg-gold/10">
      <h1 className="font-bold py-10 text-gold text-center text-3xl">
        ENCUENTRA EN BELLARTE
      </h1>

      <div className="wrapper">
        <div className="anillos group  relative">
          <Image
            src={anillos}
            alt="Anillos en BellArte  "
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full flex justify-center bottom-4">
            <Link
              href="https://bellartejoyeria.com/genero/all?subcategoria=%2CAnillos"
              className="bg-gold/45 px-3 py-1 rounded  text-white text-xl"
            >
              Anillos
            </Link>
          </div>
        </div>
        <div className="cadenas relative">
          <Image
            src={cadena}
            alt="Cadenas en BellArte"
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full flex justify-center bottom-4">
            <Link
              href="https://bellartejoyeria.com/genero/all?subcategoria=%2CCadenas"
              className="bg-gold/45 px-3  rounded  text-white text-xl"
            >
              Cadenas
            </Link>
          </div>
        </div>
        <div className="aretes relative">
          <Image
            src={aretes}
            alt="Candongas en BellArte"
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full flex justify-center bottom-4">
            <Link
              href="https://bellartejoyeria.com/genero/all?subcategoria=%2CCandongas"
              className="bg-gold/45 px-3  rounded  text-white text-xl"
            >
              Candongas
            </Link>
          </div>
        </div>
        <div className="dijes relative">
          <Image
            src={dije}
            alt="Dijes en BellArte"
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full flex justify-center bottom-4">
            <Link
              href="https://bellartejoyeria.com/genero/all?subcategoria=%2CDijes"
              className="bg-gold/45 px-3  rounded  text-white text-xl"
            >
              Dijes
            </Link>
          </div>
        </div>
        <div className="pulseras relative">
          <Image
            src={pulsera}
            alt="Pulseras en BellArte"
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full flex justify-center bottom-4">
            <Link
              href="https://bellartejoyeria.com/genero/all?subcategoria=%2CPulseras"
              className="bg-gold/45 px-3  rounded  text-white text-xl"
            >
              Pulseras
            </Link>
          </div>
        </div>

        <div className="tobilleras relative">
          <Image
            src={tobilleras}
            alt="Tobilleras en BellArte"
            sizes="100%"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute w-full flex justify-center bottom-4">
            <Link
              href="https://bellartejoyeria.com/genero/all?subcategoria=%2CTobilleras"
              className="bg-gold/45 px-3  rounded  text-white text-xl"
            >
              Tobilleras
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
