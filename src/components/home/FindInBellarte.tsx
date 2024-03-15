import "./style.css";
import { ZoomImage } from "./ZoomImage";

const images = [
  {
    className: "anillos",
    urlImage:
      "https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/home/anillos.jpg?t=2024-03-15T19%3A20%3A28.552Z",
    label: "Anillos",
    link: "https://bellartejoyeria.com/genero/all?subcategoria=%2CAnillos",
    alt: "Anillos en BellArte",
  },

  {
    className: "cadenas",
    urlImage:
      "https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/home/cadena.jpg?t=2024-03-15T19%3A20%3A03.045Z",
    label: "Cadenas",
    link: "https://bellartejoyeria.com/genero/all?subcategoria=%2CCadenas",
    alt: "Cadenas en BellArte",
  },

  {
    className: "aretes",
    urlImage:
      "https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/home/aretes.jpg?t=2024-03-15T19%3A20%3A37.464Z",
    label: "Candongas",
    link: "https://bellartejoyeria.com/genero/all?subcategoria=%2CCandongas",
    alt: "Candongas en BellArte",
  },

  {
    className: "dijes",
    urlImage:
      "https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/home/dije.jpeg?t=2024-03-15T19%3A20%3A45.457Z",
    label: "Dijes",
    link: "https://bellartejoyeria.com/genero/all?subcategoria=%2CDijes",
    alt: "Dijes en BellArte",
  },

  {
    className: "pulseras",
    urlImage:
      "https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/home/pulsera.jpg",
    label: "Pulseras",
    link: "https://bellartejoyeria.com/genero/all?subcategoria=%2CPulseras",
    alt: "Pulseras en BellArte",
  },

  {
    className: "tobilleras",
    urlImage:
      "https://neemxhjfpkzimvlwwlpe.supabase.co/storage/v1/object/public/publicImage/home/tobilleras.jpg",
    label: "Tobilleras",
    link: "https://bellartejoyeria.com/genero/all?subcategoria=%2CTobilleras",
    alt: "Tobilleras en BellArte",
  },
];

export const FindInBellarte = () => {
  return (
    <section className="grid justify-center py-10 bg-gold/10">
      <h1 className="font-bold py-10 text-gold text-center text-3xl">
        ENCUENTRA EN BELLARTE
      </h1>

      <div className="wrapper">
        {images.map((image) => (
          <ZoomImage key={image.label} {...image} />
        ))}
      </div>
    </section>
  );
};
