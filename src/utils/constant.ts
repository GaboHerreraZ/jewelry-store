import { Base } from "@/interfaces/base";
import { Order } from "@/interfaces/order";

export enum Gender {
  men = "hombre",
  women = "mujer",
  kid = "nino",
  unisex = "unisex",
}

export enum ShippingStatus {
  inProgress = "inProgress",
  shipped = "shipped",
  delivered = "delivered",
}

export enum OrderStatus {
  pending = "pending",
  paid = "paid",
}

export const ORDER_STATUS: Base[] = [
  {
    id: OrderStatus.pending,
    name: "Pendiente",
    description: "",
  },
  {
    id: OrderStatus.paid,
    name: "Pagado",
    description: "",
  },
];

export const SHIPIING_STATUS: Base[] = [
  {
    id: ShippingStatus.inProgress,
    name: "En proceso",
    description: "",
  },
  {
    id: ShippingStatus.shipped,
    name: "Enviado",
    description: "",
  },
  {
    id: ShippingStatus.delivered,
    name: "Entregado",
    description: "",
  },
];

export const GENDERS: Base[] = [
  {
    id: Gender.men,
    name: "Hombre",
    description: "",
  },
  {
    id: Gender.women,
    name: "Mujer",
    description: "",
  },
  {
    id: Gender.kid,
    name: "Niño",
    description: "",
  },
];

export const ORDERBY: Order[] = [
  {
    id: "name-asc",
    orderBy: "name",
    order: "asc",
    name: "Alfabéticamente, A-Z",
  },
  {
    id: "name-desc",
    orderBy: "name",
    order: "desc",
    name: "Alfabéticamente, Z-A",
  },
  {
    id: "price-asc",
    orderBy: "detailPrice",
    order: "asc",
    name: "Precio, menor a mayor",
  },
  {
    id: "price-desc",
    orderBy: "detailPrice",
    order: "desc",
    name: "Precio, mayor a menor",
  },
];

export const DEPARTAMENTOS: Base[] = [
  {
    id: "5",
    name: "Antioquia",
    description: "Antioquia",
  },
  {
    id: "15",
    name: "Boyacá",
    description: "Boyacá",
  },
  {
    id: "23",
    name: "Córdoba",
    description: "Córdoba",
  },
  {
    id: "27",
    name: "Chocó",
    description: "Chocó",
  },
  {
    id: "52",
    name: "Nariño",
    description: "Nariño",
  },
  {
    id: "68",
    name: "Santander",
    description: "Santander",
  },
  {
    id: "50",
    name: "Meta",
    description: "Meta",
  },
  {
    id: "8",
    name: "Atlántico",
    description: "Atlántico",
  },
  {
    id: "13",
    name: "Bolívar",
    description: "Bolívar",
  },
  {
    id: "17",
    name: "Caldas",
    description: "Caldas",
  },
  {
    id: "18",
    name: "Caquetá",
    description: "Caquetá",
  },
  {
    id: "19",
    name: "Cauca",
    description: "Cauca",
  },
  {
    id: "20",
    name: "Cesar",
    description: "Cesar",
  },
  {
    id: "25",
    name: "Cundinamarca",
    description: "Cundinamarca",
  },
  {
    id: "41",
    name: "Huila",
    description: "Huila",
  },
  {
    id: "44",
    name: "La Guajira",
    description: "La Guajira",
  },
  {
    id: "47",
    name: "Magdalena",
    description: "Magdalena",
  },
  {
    id: "63",
    name: "Quindío",
    description: "Quindío",
  },
  {
    id: "66",
    name: "Risaralda",
    description: "Risaralda",
  },
  {
    id: "70",
    name: "Sucre",
    description: "Sucre",
  },
  {
    id: "73",
    name: "Tolima",
    description: "Tolima",
  },
  {
    id: "81",
    name: "Arauca",
    description: "Arauca",
  },
  {
    id: "85",
    name: "Casanare",
    description: "Casanare",
  },
  {
    id: "86",
    name: "Putumayo",
    description: "Putumayo",
  },
  {
    id: "91",
    name: "Amazonas",
    description: "Amazonas",
  },
  {
    id: "94",
    name: "Guainía",
    description: "Guainía",
  },
  {
    id: "97",
    name: "Vaupés",
    description: "Vaupés",
  },
  {
    id: "99",
    name: "Vichada",
    description: "Vichada",
  },
  {
    id: "95",
    name: "Guaviare",
    description: "Guaviare",
  },
  {
    id: "88",
    name: "Archipiélago de San Andrés, Providencia y Santa Catalina",
    description: "Archipiélago de San Andrés, Providencia y Santa Catalina",
  },
  {
    id: "11",
    name: "Bogotá D.C.",
    description: "Bogotá D.C.",
  },
  {
    id: "54",
    name: "Norte de Santander",
    description: "Norte de Santander",
  },
  {
    id: "76",
    name: "Valle del Cauca",
    description: "Valle del Cauca",
  },
];

export const MUNICIPIOS: (Base & { municipios: Base[] })[] = [
  {
    id: "5",
    name: "Antioquia",
    description: "Antioquia",
    municipios: [
      {
        id: "5.001",
        name: "Medellín",
        description: "Medellín",
      },
      {
        id: "5.002",
        name: "Abejorral",
        description: "Abejorral",
      },
      {
        id: "5.004",
        name: "Abriaquí",
        description: "Abriaquí",
      },
      {
        id: "5.021",
        name: "Alejandría",
        description: "Alejandría",
      },
      {
        id: "5.03",
        name: "Amagá",
        description: "Amagá",
      },
      {
        id: "5.031",
        name: "Amalfi",
        description: "Amalfi",
      },
      {
        id: "5.034",
        name: "Andes",
        description: "Andes",
      },
      {
        id: "5.036",
        name: "Angelópolis",
        description: "Angelópolis",
      },
      {
        id: "5.038",
        name: "Angostura",
        description: "Angostura",
      },
      {
        id: "5.04",
        name: "Anorí",
        description: "Anorí",
      },
      {
        id: "5.044",
        name: "Anza",
        description: "Anza",
      },
      {
        id: "5.045",
        name: "Apartadó",
        description: "Apartadó",
      },
      {
        id: "5.051",
        name: "Arboletes",
        description: "Arboletes",
      },
      {
        id: "5.055",
        name: "Argelia",
        description: "Argelia",
      },
      {
        id: "5.059",
        name: "Armenia",
        description: "Armenia",
      },
      {
        id: "5.079",
        name: "Barbosa",
        description: "Barbosa",
      },
      {
        id: "5.088",
        name: "Bello",
        description: "Bello",
      },
      {
        id: "5.091",
        name: "Betania",
        description: "Betania",
      },
      {
        id: "5.093",
        name: "Betulia",
        description: "Betulia",
      },
      {
        id: "5.101",
        name: "Ciudad Bolívar",
        description: "Ciudad Bolívar",
      },
      {
        id: "5.107",
        name: "Briceño",
        description: "Briceño",
      },
      {
        id: "5.113",
        name: "Buriticá",
        description: "Buriticá",
      },
      {
        id: "5.12",
        name: "Cáceres",
        description: "Cáceres",
      },
      {
        id: "5.125",
        name: "Caicedo",
        description: "Caicedo",
      },
      {
        id: "5.129",
        name: "Caldas",
        description: "Caldas",
      },
      {
        id: "5.134",
        name: "Campamento",
        description: "Campamento",
      },
      {
        id: "5.138",
        name: "Cañasgordas",
        description: "Cañasgordas",
      },
      {
        id: "5.142",
        name: "Caracolí",
        description: "Caracolí",
      },
      {
        id: "5.145",
        name: "Caramanta",
        description: "Caramanta",
      },
      {
        id: "5.147",
        name: "Carepa",
        description: "Carepa",
      },
      {
        id: "5.15",
        name: "Carolina",
        description: "Carolina",
      },
      {
        id: "5.154",
        name: "Caucasia",
        description: "Caucasia",
      },
      {
        id: "5.172",
        name: "Chigorodó",
        description: "Chigorodó",
      },
      {
        id: "5.19",
        name: "Cisneros",
        description: "Cisneros",
      },
      {
        id: "5.197",
        name: "Cocorná",
        description: "Cocorná",
      },
      {
        id: "5.206",
        name: "Concepción",
        description: "Concepción",
      },
      {
        id: "5.209",
        name: "Concordia",
        description: "Concordia",
      },
      {
        id: "5.212",
        name: "Copacabana",
        description: "Copacabana",
      },
      {
        id: "5.234",
        name: "Dabeiba",
        description: "Dabeiba",
      },
      {
        id: "5.237",
        name: "Don Matías",
        description: "Don Matías",
      },
      {
        id: "5.24",
        name: "Ebéjico",
        description: "Ebéjico",
      },
      {
        id: "5.25",
        name: "El Bagre",
        description: "El Bagre",
      },
      {
        id: "5.264",
        name: "Entrerrios",
        description: "Entrerrios",
      },
      {
        id: "5.266",
        name: "Envigado",
        description: "Envigado",
      },
      {
        id: "5.282",
        name: "Fredonia",
        description: "Fredonia",
      },
      {
        id: "5.306",
        name: "Giraldo",
        description: "Giraldo",
      },
      {
        id: "5.308",
        name: "Girardota",
        description: "Girardota",
      },
      {
        id: "5.31",
        name: "Gómez Plata",
        description: "Gómez Plata",
      },
      {
        id: "5.315",
        name: "Guadalupe",
        description: "Guadalupe",
      },
      {
        id: "5.318",
        name: "Guarne",
        description: "Guarne",
      },
      {
        id: "5.321",
        name: "Guatapé",
        description: "Guatapé",
      },
      {
        id: "5.347",
        name: "Heliconia",
        description: "Heliconia",
      },
      {
        id: "5.353",
        name: "Hispania",
        description: "Hispania",
      },
      {
        id: "5.36",
        name: "Itagui",
        description: "Itagui",
      },
      {
        id: "5.361",
        name: "Ituango",
        description: "Ituango",
      },
      {
        id: "5.086",
        name: "Belmira",
        description: "Belmira",
      },
      {
        id: "5.368",
        name: "Jericó",
        description: "Jericó",
      },
      {
        id: "5.376",
        name: "La Ceja",
        description: "La Ceja",
      },
      {
        id: "5.38",
        name: "La Estrella",
        description: "La Estrella",
      },
      {
        id: "5.39",
        name: "La Pintada",
        description: "La Pintada",
      },
      {
        id: "5.4",
        name: "La Unión",
        description: "La Unión",
      },
      {
        id: "5.411",
        name: "Liborina",
        description: "Liborina",
      },
      {
        id: "5.425",
        name: "Maceo",
        description: "Maceo",
      },
      {
        id: "5.44",
        name: "Marinilla",
        description: "Marinilla",
      },
      {
        id: "5.467",
        name: "Montebello",
        description: "Montebello",
      },
      {
        id: "5.475",
        name: "Murindó",
        description: "Murindó",
      },
      {
        id: "5.48",
        name: "Mutatá",
        description: "Mutatá",
      },
      {
        id: "5.483",
        name: "Nariño",
        description: "Nariño",
      },
      {
        id: "5.49",
        name: "Necoclí",
        description: "Necoclí",
      },
      {
        id: "5.495",
        name: "Nechí",
        description: "Nechí",
      },
      {
        id: "5.501",
        name: "Olaya",
        description: "Olaya",
      },
      {
        id: "5.541",
        name: "Peñol",
        description: "Peñol",
      },
      {
        id: "5.543",
        name: "Peque",
        description: "Peque",
      },
      {
        id: "5.576",
        name: "Pueblorrico",
        description: "Pueblorrico",
      },
      {
        id: "5.579",
        name: "Puerto Berrío",
        description: "Puerto Berrío",
      },
      {
        id: "5.585",
        name: "Puerto Nare",
        description: "Puerto Nare",
      },
      {
        id: "5.591",
        name: "Puerto Triunfo",
        description: "Puerto Triunfo",
      },
      {
        id: "5.604",
        name: "Remedios",
        description: "Remedios",
      },
      {
        id: "5.607",
        name: "Retiro",
        description: "Retiro",
      },
      {
        id: "5.615",
        name: "Rionegro",
        description: "Rionegro",
      },
      {
        id: "5.628",
        name: "Sabanalarga",
        description: "Sabanalarga",
      },
      {
        id: "5.631",
        name: "Sabaneta",
        description: "Sabaneta",
      },
      {
        id: "5.642",
        name: "Salgar",
        description: "Salgar",
      },
      {
        id: "5.652",
        name: "San Francisco",
        description: "San Francisco",
      },
      {
        id: "5.656",
        name: "San Jerónimo",
        description: "San Jerónimo",
      },
      {
        id: "5.66",
        name: "San Luis",
        description: "San Luis",
      },
      {
        id: "5.664",
        name: "San Pedro",
        description: "San Pedro",
      },
      {
        id: "5.667",
        name: "San Rafael",
        description: "San Rafael",
      },
      {
        id: "5.67",
        name: "San Roque",
        description: "San Roque",
      },
      {
        id: "5.674",
        name: "San Vicente",
        description: "San Vicente",
      },
      {
        id: "5.679",
        name: "Santa Bárbara",
        description: "Santa Bárbara",
      },
      {
        id: "5.69",
        name: "Santo Domingo",
        description: "Santo Domingo",
      },
      {
        id: "5.697",
        name: "El Santuario",
        description: "El Santuario",
      },
      {
        id: "5.736",
        name: "Segovia",
        description: "Segovia",
      },
      {
        id: "5.761",
        name: "Sopetrán",
        description: "Sopetrán",
      },
      {
        id: "5.789",
        name: "Támesis",
        description: "Támesis",
      },
      {
        id: "5.79",
        name: "Tarazá",
        description: "Tarazá",
      },
      {
        id: "5.792",
        name: "Tarso",
        description: "Tarso",
      },
      {
        id: "5.809",
        name: "Titiribí",
        description: "Titiribí",
      },
      {
        id: "5.819",
        name: "Toledo",
        description: "Toledo",
      },
      {
        id: "5.837",
        name: "Turbo",
        description: "Turbo",
      },
      {
        id: "5.842",
        name: "Uramita",
        description: "Uramita",
      },
      {
        id: "5.847",
        name: "Urrao",
        description: "Urrao",
      },
      {
        id: "5.854",
        name: "Valdivia",
        description: "Valdivia",
      },
      {
        id: "5.856",
        name: "Valparaíso",
        description: "Valparaíso",
      },
      {
        id: "5.858",
        name: "Vegachí",
        description: "Vegachí",
      },
      {
        id: "5.861",
        name: "Venecia",
        description: "Venecia",
      },
      {
        id: "5.885",
        name: "Yalí",
        description: "Yalí",
      },
      {
        id: "5.887",
        name: "Yarumal",
        description: "Yarumal",
      },
      {
        id: "5.89",
        name: "Yolombó",
        description: "Yolombó",
      },
      {
        id: "5.893",
        name: "Yondó",
        description: "Yondó",
      },
      {
        id: "5.895",
        name: "Zaragoza",
        description: "Zaragoza",
      },
      {
        id: "5.665",
        name: "San Pedro de Uraba",
        description: "San Pedro de Uraba",
      },
      {
        id: "5.042",
        name: "Santafé de Antioquia",
        description: "Santafé de Antioquia",
      },
      {
        id: "5.686",
        name: "Santa Rosa de Osos",
        description: "Santa Rosa de Osos",
      },
      {
        id: "5.647",
        name: "San Andrés de Cuerquía",
        description: "San Andrés de Cuerquía",
      },
      {
        id: "5.873",
        name: "Vigía del Fuerte",
        description: "Vigía del Fuerte",
      },
      {
        id: "5.658",
        name: "San José de La Montaña",
        description: "San José de La Montaña",
      },
      {
        id: "5.659",
        name: "San Juan de Urabá",
        description: "San Juan de Urabá",
      },
      {
        id: "5.148",
        name: "El Carmen de Viboral",
        description: "El Carmen de Viboral",
      },
      {
        id: "5.649",
        name: "San Carlos",
        description: "San Carlos",
      },
    ],
  },
  {
    id: "15",
    name: "Boyacá",
    description: "Boyacá",
    municipios: [
      {
        id: "15.832",
        name: "Tununguá",
        description: "Tununguá",
      },
      {
        id: "15.476",
        name: "Motavita",
        description: "Motavita",
      },
      {
        id: "15.189",
        name: "Ciénega",
        description: "Ciénega",
      },
      {
        id: "15.001",
        name: "Tunja",
        description: "Tunja",
      },
      {
        id: "15.022",
        name: "Almeida",
        description: "Almeida",
      },
      {
        id: "15.047",
        name: "Aquitania",
        description: "Aquitania",
      },
      {
        id: "15.051",
        name: "Arcabuco",
        description: "Arcabuco",
      },
      {
        id: "15.09",
        name: "Berbeo",
        description: "Berbeo",
      },
      {
        id: "15.092",
        name: "Betéitiva",
        description: "Betéitiva",
      },
      {
        id: "15.097",
        name: "Boavita",
        description: "Boavita",
      },
      {
        id: "15.104",
        name: "Boyacá",
        description: "Boyacá",
      },
      {
        id: "15.106",
        name: "Briceño",
        description: "Briceño",
      },
      {
        id: "15.109",
        name: "Buena Vista",
        description: "Buena Vista",
      },
      {
        id: "15.114",
        name: "Busbanzá",
        description: "Busbanzá",
      },
      {
        id: "15.131",
        name: "Caldas",
        description: "Caldas",
      },
      {
        id: "15.135",
        name: "Campohermoso",
        description: "Campohermoso",
      },
      {
        id: "15.162",
        name: "Cerinza",
        description: "Cerinza",
      },
      {
        id: "15.172",
        name: "Chinavita",
        description: "Chinavita",
      },
      {
        id: "15.176",
        name: "Chiquinquirá",
        description: "Chiquinquirá",
      },
      {
        id: "15.18",
        name: "Chiscas",
        description: "Chiscas",
      },
      {
        id: "15.183",
        name: "Chita",
        description: "Chita",
      },
      {
        id: "15.185",
        name: "Chitaraque",
        description: "Chitaraque",
      },
      {
        id: "15.187",
        name: "Chivatá",
        description: "Chivatá",
      },
      {
        id: "15.204",
        name: "Cómbita",
        description: "Cómbita",
      },
      {
        id: "15.212",
        name: "Coper",
        description: "Coper",
      },
      {
        id: "15.215",
        name: "Corrales",
        description: "Corrales",
      },
      {
        id: "15.218",
        name: "Covarachía",
        description: "Covarachía",
      },
      {
        id: "15.223",
        name: "Cubará",
        description: "Cubará",
      },
      {
        id: "15.224",
        name: "Cucaita",
        description: "Cucaita",
      },
      {
        id: "15.226",
        name: "Cuítiva",
        description: "Cuítiva",
      },
      {
        id: "15.232",
        name: "Chíquiza",
        description: "Chíquiza",
      },
      {
        id: "15.236",
        name: "Chivor",
        description: "Chivor",
      },
      {
        id: "15.238",
        name: "Duitama",
        description: "Duitama",
      },
      {
        id: "15.244",
        name: "El Cocuy",
        description: "El Cocuy",
      },
      {
        id: "15.248",
        name: "El Espino",
        description: "El Espino",
      },
      {
        id: "15.272",
        name: "Firavitoba",
        description: "Firavitoba",
      },
      {
        id: "15.276",
        name: "Floresta",
        description: "Floresta",
      },
      {
        id: "15.293",
        name: "Gachantivá",
        description: "Gachantivá",
      },
      {
        id: "15.296",
        name: "Gameza",
        description: "Gameza",
      },
      {
        id: "15.299",
        name: "Garagoa",
        description: "Garagoa",
      },
      {
        id: "15.317",
        name: "Guacamayas",
        description: "Guacamayas",
      },
      {
        id: "15.322",
        name: "Guateque",
        description: "Guateque",
      },
      {
        id: "15.325",
        name: "Guayatá",
        description: "Guayatá",
      },
      {
        id: "15.332",
        name: "Güicán",
        description: "Güicán",
      },
      {
        id: "15.362",
        name: "Iza",
        description: "Iza",
      },
      {
        id: "15.367",
        name: "Jenesano",
        description: "Jenesano",
      },
      {
        id: "15.368",
        name: "Jericó",
        description: "Jericó",
      },
      {
        id: "15.377",
        name: "Labranzagrande",
        description: "Labranzagrande",
      },
      {
        id: "15.38",
        name: "La Capilla",
        description: "La Capilla",
      },
      {
        id: "15.401",
        name: "La Victoria",
        description: "La Victoria",
      },
      {
        id: "15.425",
        name: "Macanal",
        description: "Macanal",
      },
      {
        id: "15.442",
        name: "Maripí",
        description: "Maripí",
      },
      {
        id: "15.455",
        name: "Miraflores",
        description: "Miraflores",
      },
      {
        id: "15.464",
        name: "Mongua",
        description: "Mongua",
      },
      {
        id: "15.466",
        name: "Monguí",
        description: "Monguí",
      },
      {
        id: "15.469",
        name: "Moniquirá",
        description: "Moniquirá",
      },
      {
        id: "15.48",
        name: "Muzo",
        description: "Muzo",
      },
      {
        id: "15.491",
        name: "Nobsa",
        description: "Nobsa",
      },
      {
        id: "15.494",
        name: "Nuevo Colón",
        description: "Nuevo Colón",
      },
      {
        id: "15.5",
        name: "Oicatá",
        description: "Oicatá",
      },
      {
        id: "15.507",
        name: "Otanche",
        description: "Otanche",
      },
      {
        id: "15.511",
        name: "Pachavita",
        description: "Pachavita",
      },
      {
        id: "15.514",
        name: "Páez",
        description: "Páez",
      },
      {
        id: "15.516",
        name: "Paipa",
        description: "Paipa",
      },
      {
        id: "15.518",
        name: "Pajarito",
        description: "Pajarito",
      },
      {
        id: "15.522",
        name: "Panqueba",
        description: "Panqueba",
      },
      {
        id: "15.531",
        name: "Pauna",
        description: "Pauna",
      },
      {
        id: "15.533",
        name: "Paya",
        description: "Paya",
      },
      {
        id: "15.542",
        name: "Pesca",
        description: "Pesca",
      },
      {
        id: "15.55",
        name: "Pisba",
        description: "Pisba",
      },
      {
        id: "15.572",
        name: "Puerto Boyacá",
        description: "Puerto Boyacá",
      },
      {
        id: "15.58",
        name: "Quípama",
        description: "Quípama",
      },
      {
        id: "15.599",
        name: "Ramiriquí",
        description: "Ramiriquí",
      },
      {
        id: "15.6",
        name: "Ráquira",
        description: "Ráquira",
      },
      {
        id: "15.621",
        name: "Rondón",
        description: "Rondón",
      },
      {
        id: "15.632",
        name: "Saboyá",
        description: "Saboyá",
      },
      {
        id: "15.638",
        name: "Sáchica",
        description: "Sáchica",
      },
      {
        id: "15.646",
        name: "Samacá",
        description: "Samacá",
      },
      {
        id: "15.66",
        name: "San Eduardo",
        description: "San Eduardo",
      },
      {
        id: "15.673",
        name: "San Mateo",
        description: "San Mateo",
      },
      {
        id: "15.686",
        name: "Santana",
        description: "Santana",
      },
      {
        id: "15.69",
        name: "Santa María",
        description: "Santa María",
      },
      {
        id: "15.696",
        name: "Santa Sofía",
        description: "Santa Sofía",
      },
      {
        id: "15.72",
        name: "Sativanorte",
        description: "Sativanorte",
      },
      {
        id: "15.723",
        name: "Sativasur",
        description: "Sativasur",
      },
      {
        id: "15.74",
        name: "Siachoque",
        description: "Siachoque",
      },
      {
        id: "15.753",
        name: "Soatá",
        description: "Soatá",
      },
      {
        id: "15.755",
        name: "Socotá",
        description: "Socotá",
      },
      {
        id: "15.757",
        name: "Socha",
        description: "Socha",
      },
      {
        id: "15.759",
        name: "Sogamoso",
        description: "Sogamoso",
      },
      {
        id: "15.761",
        name: "Somondoco",
        description: "Somondoco",
      },
      {
        id: "15.762",
        name: "Sora",
        description: "Sora",
      },
      {
        id: "15.763",
        name: "Sotaquirá",
        description: "Sotaquirá",
      },
      {
        id: "15.764",
        name: "Soracá",
        description: "Soracá",
      },
      {
        id: "15.774",
        name: "Susacón",
        description: "Susacón",
      },
      {
        id: "15.776",
        name: "Sutamarchán",
        description: "Sutamarchán",
      },
      {
        id: "15.778",
        name: "Sutatenza",
        description: "Sutatenza",
      },
      {
        id: "15.79",
        name: "Tasco",
        description: "Tasco",
      },
      {
        id: "15.798",
        name: "Tenza",
        description: "Tenza",
      },
      {
        id: "15.804",
        name: "Tibaná",
        description: "Tibaná",
      },
      {
        id: "15.808",
        name: "Tinjacá",
        description: "Tinjacá",
      },
      {
        id: "15.81",
        name: "Tipacoque",
        description: "Tipacoque",
      },
      {
        id: "15.814",
        name: "Toca",
        description: "Toca",
      },
      {
        id: "15.82",
        name: "Tópaga",
        description: "Tópaga",
      },
      {
        id: "15.822",
        name: "Tota",
        description: "Tota",
      },
      {
        id: "15.835",
        name: "Turmequé",
        description: "Turmequé",
      },
      {
        id: "15.839",
        name: "Tutazá",
        description: "Tutazá",
      },
      {
        id: "15.842",
        name: "Umbita",
        description: "Umbita",
      },
      {
        id: "15.861",
        name: "Ventaquemada",
        description: "Ventaquemada",
      },
      {
        id: "15.879",
        name: "Viracachá",
        description: "Viracachá",
      },
      {
        id: "15.897",
        name: "Zetaquira",
        description: "Zetaquira",
      },
      {
        id: "15.816",
        name: "Togüí",
        description: "Togüí",
      },
      {
        id: "15.407",
        name: "Villa de Leyva",
        description: "Villa de Leyva",
      },
      {
        id: "15.537",
        name: "Paz de Río",
        description: "Paz de Río",
      },
      {
        id: "15.693",
        name: "Santa Rosa de Viterbo",
        description: "Santa Rosa de Viterbo",
      },
      {
        id: "15.681",
        name: "San Pablo de Borbur",
        description: "San Pablo de Borbur",
      },
      {
        id: "15.667",
        name: "San Luis de Gaceno",
        description: "San Luis de Gaceno",
      },
      {
        id: "15.664",
        name: "San José de Pare",
        description: "San José de Pare",
      },
      {
        id: "15.676",
        name: "San Miguel de Sema",
        description: "San Miguel de Sema",
      },
      {
        id: "15.837",
        name: "Tuta",
        description: "Tuta",
      },
    ],
  },
  {
    id: "23",
    name: "Córdoba",
    description: "Córdoba",
    municipios: [
      {
        id: "23.675",
        name: "San Bernardo del Viento",
        description: "San Bernardo del Viento",
      },
      {
        id: "23.001",
        name: "Montería",
        description: "Montería",
      },
      {
        id: "23.068",
        name: "Ayapel",
        description: "Ayapel",
      },
      {
        id: "23.079",
        name: "Buenavista",
        description: "Buenavista",
      },
      {
        id: "23.09",
        name: "Canalete",
        description: "Canalete",
      },
      {
        id: "23.162",
        name: "Cereté",
        description: "Cereté",
      },
      {
        id: "23.168",
        name: "Chimá",
        description: "Chimá",
      },
      {
        id: "23.182",
        name: "Chinú",
        description: "Chinú",
      },
      {
        id: "23.3",
        name: "Cotorra",
        description: "Cotorra",
      },
      {
        id: "23.417",
        name: "Lorica",
        description: "Lorica",
      },
      {
        id: "23.419",
        name: "Los Córdobas",
        description: "Los Córdobas",
      },
      {
        id: "23.464",
        name: "Momil",
        description: "Momil",
      },
      {
        id: "23.5",
        name: "Moñitos",
        description: "Moñitos",
      },
      {
        id: "23.555",
        name: "Planeta Rica",
        description: "Planeta Rica",
      },
      {
        id: "23.57",
        name: "Pueblo Nuevo",
        description: "Pueblo Nuevo",
      },
      {
        id: "23.574",
        name: "Puerto Escondido",
        description: "Puerto Escondido",
      },
      {
        id: "23.586",
        name: "Purísima",
        description: "Purísima",
      },
      {
        id: "23.66",
        name: "Sahagún",
        description: "Sahagún",
      },
      {
        id: "23.67",
        name: "San Andrés Sotavento",
        description: "San Andrés Sotavento",
      },
      {
        id: "23.672",
        name: "San Antero",
        description: "San Antero",
      },
      {
        id: "23.686",
        name: "San Pelayo",
        description: "San Pelayo",
      },
      {
        id: "23.807",
        name: "Tierralta",
        description: "Tierralta",
      },
      {
        id: "23.815",
        name: "Tuchín",
        description: "Tuchín",
      },
      {
        id: "23.855",
        name: "Valencia",
        description: "Valencia",
      },
      {
        id: "23.682",
        name: "San José de Uré",
        description: "San José de Uré",
      },
      {
        id: "23.189",
        name: "Ciénaga de Oro",
        description: "Ciénaga de Oro",
      },
      {
        id: "23.678",
        name: "San Carlos",
        description: "San Carlos",
      },
    ],
  },
  {
    id: "27",
    name: "Chocó",
    description: "Chocó",
    municipios: [
      {
        id: "27.361",
        name: "Istmina",
        description: "Istmina",
      },
      {
        id: "27.001",
        name: "Quibdó",
        description: "Quibdó",
      },
      {
        id: "27.006",
        name: "Acandí",
        description: "Acandí",
      },
      {
        id: "27.025",
        name: "Alto Baudo",
        description: "Alto Baudo",
      },
      {
        id: "27.05",
        name: "Atrato",
        description: "Atrato",
      },
      {
        id: "27.073",
        name: "Bagadó",
        description: "Bagadó",
      },
      {
        id: "27.075",
        name: "Bahía Solano",
        description: "Bahía Solano",
      },
      {
        id: "27.077",
        name: "Bajo Baudó",
        description: "Bajo Baudó",
      },
      {
        id: "27.099",
        name: "Bojaya",
        description: "Bojaya",
      },
      {
        id: "27.16",
        name: "Cértegui",
        description: "Cértegui",
      },
      {
        id: "27.205",
        name: "Condoto",
        description: "Condoto",
      },
      {
        id: "27.372",
        name: "Juradó",
        description: "Juradó",
      },
      {
        id: "27.413",
        name: "Lloró",
        description: "Lloró",
      },
      {
        id: "27.425",
        name: "Medio Atrato",
        description: "Medio Atrato",
      },
      {
        id: "27.43",
        name: "Medio Baudó",
        description: "Medio Baudó",
      },
      {
        id: "27.45",
        name: "Medio San Juan",
        description: "Medio San Juan",
      },
      {
        id: "27.491",
        name: "Nóvita",
        description: "Nóvita",
      },
      {
        id: "27.495",
        name: "Nuquí",
        description: "Nuquí",
      },
      {
        id: "27.58",
        name: "Río Iro",
        description: "Río Iro",
      },
      {
        id: "27.6",
        name: "Río Quito",
        description: "Río Quito",
      },
      {
        id: "27.615",
        name: "Riosucio",
        description: "Riosucio",
      },
      {
        id: "27.745",
        name: "Sipí",
        description: "Sipí",
      },
      {
        id: "27.8",
        name: "Unguía",
        description: "Unguía",
      },
      {
        id: "27.25",
        name: "El Litoral del San Juan",
        description: "El Litoral del San Juan",
      },
      {
        id: "27.135",
        name: "El Cantón del San Pablo",
        description: "El Cantón del San Pablo",
      },
      {
        id: "27.245",
        name: "El Carmen de Atrato",
        description: "El Carmen de Atrato",
      },
      {
        id: "27.66",
        name: "San José del Palmar",
        description: "San José del Palmar",
      },
      {
        id: "27.086",
        name: "Belén de Bajira",
        description: "Belén de Bajira",
      },
    ],
  },
  {
    id: "52",
    name: "Nariño",
    description: "Nariño",
    municipios: [
      {
        id: "52.699",
        name: "Santacruz",
        description: "Santacruz",
      },
      {
        id: "52.001",
        name: "Pasto",
        description: "Pasto",
      },
      {
        id: "52.019",
        name: "Albán",
        description: "Albán",
      },
      {
        id: "52.022",
        name: "Aldana",
        description: "Aldana",
      },
      {
        id: "52.036",
        name: "Ancuyá",
        description: "Ancuyá",
      },
      {
        id: "52.079",
        name: "Barbacoas",
        description: "Barbacoas",
      },
      {
        id: "52.203",
        name: "Colón",
        description: "Colón",
      },
      {
        id: "52.207",
        name: "Consaca",
        description: "Consaca",
      },
      {
        id: "52.21",
        name: "Contadero",
        description: "Contadero",
      },
      {
        id: "52.215",
        name: "Córdoba",
        description: "Córdoba",
      },
      {
        id: "52.224",
        name: "Cuaspud",
        description: "Cuaspud",
      },
      {
        id: "52.227",
        name: "Cumbal",
        description: "Cumbal",
      },
      {
        id: "52.233",
        name: "Cumbitara",
        description: "Cumbitara",
      },
      {
        id: "52.25",
        name: "El Charco",
        description: "El Charco",
      },
      {
        id: "52.254",
        name: "El Peñol",
        description: "El Peñol",
      },
      {
        id: "52.256",
        name: "El Rosario",
        description: "El Rosario",
      },
      {
        id: "52.26",
        name: "El Tambo",
        description: "El Tambo",
      },
      {
        id: "52.287",
        name: "Funes",
        description: "Funes",
      },
      {
        id: "52.317",
        name: "Guachucal",
        description: "Guachucal",
      },
      {
        id: "52.32",
        name: "Guaitarilla",
        description: "Guaitarilla",
      },
      {
        id: "52.323",
        name: "Gualmatán",
        description: "Gualmatán",
      },
      {
        id: "52.352",
        name: "Iles",
        description: "Iles",
      },
      {
        id: "52.354",
        name: "Imués",
        description: "Imués",
      },
      {
        id: "52.356",
        name: "Ipiales",
        description: "Ipiales",
      },
      {
        id: "52.378",
        name: "La Cruz",
        description: "La Cruz",
      },
      {
        id: "52.381",
        name: "La Florida",
        description: "La Florida",
      },
      {
        id: "52.385",
        name: "La Llanada",
        description: "La Llanada",
      },
      {
        id: "52.39",
        name: "La Tola",
        description: "La Tola",
      },
      {
        id: "52.399",
        name: "La Unión",
        description: "La Unión",
      },
      {
        id: "52.405",
        name: "Leiva",
        description: "Leiva",
      },
      {
        id: "52.411",
        name: "Linares",
        description: "Linares",
      },
      {
        id: "52.418",
        name: "Los Andes",
        description: "Los Andes",
      },
      {
        id: "52.427",
        name: "Magüí",
        description: "Magüí",
      },
      {
        id: "52.435",
        name: "Mallama",
        description: "Mallama",
      },
      {
        id: "52.473",
        name: "Mosquera",
        description: "Mosquera",
      },
      {
        id: "52.48",
        name: "Nariño",
        description: "Nariño",
      },
      {
        id: "52.49",
        name: "Olaya Herrera",
        description: "Olaya Herrera",
      },
      {
        id: "52.506",
        name: "Ospina",
        description: "Ospina",
      },
      {
        id: "52.52",
        name: "Francisco Pizarro",
        description: "Francisco Pizarro",
      },
      {
        id: "52.54",
        name: "Policarpa",
        description: "Policarpa",
      },
      {
        id: "52.56",
        name: "Potosí",
        description: "Potosí",
      },
      {
        id: "52.565",
        name: "Providencia",
        description: "Providencia",
      },
      {
        id: "52.573",
        name: "Puerres",
        description: "Puerres",
      },
      {
        id: "52.585",
        name: "Pupiales",
        description: "Pupiales",
      },
      {
        id: "52.612",
        name: "Ricaurte",
        description: "Ricaurte",
      },
      {
        id: "52.621",
        name: "Roberto Payán",
        description: "Roberto Payán",
      },
      {
        id: "52.678",
        name: "Samaniego",
        description: "Samaniego",
      },
      {
        id: "52.683",
        name: "Sandoná",
        description: "Sandoná",
      },
      {
        id: "52.685",
        name: "San Bernardo",
        description: "San Bernardo",
      },
      {
        id: "52.687",
        name: "San Lorenzo",
        description: "San Lorenzo",
      },
      {
        id: "52.693",
        name: "San Pablo",
        description: "San Pablo",
      },
      {
        id: "52.696",
        name: "Santa Bárbara",
        description: "Santa Bárbara",
      },
      {
        id: "52.72",
        name: "Sapuyes",
        description: "Sapuyes",
      },
      {
        id: "52.786",
        name: "Taminango",
        description: "Taminango",
      },
      {
        id: "52.788",
        name: "Tangua",
        description: "Tangua",
      },
      {
        id: "52.838",
        name: "Túquerres",
        description: "Túquerres",
      },
      {
        id: "52.885",
        name: "Yacuanquer",
        description: "Yacuanquer",
      },
      {
        id: "52.694",
        name: "San Pedro de Cartago",
        description: "San Pedro de Cartago",
      },
      {
        id: "52.258",
        name: "El Tablón de Gómez",
        description: "El Tablón de Gómez",
      },
    ],
  },
  {
    id: "68",
    name: "Santander",
    description: "Santander",
    municipios: [
      {
        id: "68.575",
        name: "Puerto Wilches",
        description: "Puerto Wilches",
      },
      {
        id: "68.573",
        name: "Puerto Parra",
        description: "Puerto Parra",
      },
      {
        id: "68.001",
        name: "Bucaramanga",
        description: "Bucaramanga",
      },
      {
        id: "68.013",
        name: "Aguada",
        description: "Aguada",
      },
      {
        id: "68.02",
        name: "Albania",
        description: "Albania",
      },
      {
        id: "68.051",
        name: "Aratoca",
        description: "Aratoca",
      },
      {
        id: "68.077",
        name: "Barbosa",
        description: "Barbosa",
      },
      {
        id: "68.079",
        name: "Barichara",
        description: "Barichara",
      },
      {
        id: "68.081",
        name: "Barrancabermeja",
        description: "Barrancabermeja",
      },
      {
        id: "68.092",
        name: "Betulia",
        description: "Betulia",
      },
      {
        id: "68.101",
        name: "Bolívar",
        description: "Bolívar",
      },
      {
        id: "68.121",
        name: "Cabrera",
        description: "Cabrera",
      },
      {
        id: "68.132",
        name: "California",
        description: "California",
      },
      {
        id: "68.152",
        name: "Carcasí",
        description: "Carcasí",
      },
      {
        id: "68.16",
        name: "Cepitá",
        description: "Cepitá",
      },
      {
        id: "68.162",
        name: "Cerrito",
        description: "Cerrito",
      },
      {
        id: "68.167",
        name: "Charalá",
        description: "Charalá",
      },
      {
        id: "68.169",
        name: "Charta",
        description: "Charta",
      },
      {
        id: "68.179",
        name: "Chipatá",
        description: "Chipatá",
      },
      {
        id: "68.19",
        name: "Cimitarra",
        description: "Cimitarra",
      },
      {
        id: "68.207",
        name: "Concepción",
        description: "Concepción",
      },
      {
        id: "68.209",
        name: "Confines",
        description: "Confines",
      },
      {
        id: "68.211",
        name: "Contratación",
        description: "Contratación",
      },
      {
        id: "68.217",
        name: "Coromoro",
        description: "Coromoro",
      },
      {
        id: "68.229",
        name: "Curití",
        description: "Curití",
      },
      {
        id: "68.245",
        name: "El Guacamayo",
        description: "El Guacamayo",
      },
      {
        id: "68.255",
        name: "El Playón",
        description: "El Playón",
      },
      {
        id: "68.264",
        name: "Encino",
        description: "Encino",
      },
      {
        id: "68.266",
        name: "Enciso",
        description: "Enciso",
      },
      {
        id: "68.271",
        name: "Florián",
        description: "Florián",
      },
      {
        id: "68.276",
        name: "Floridablanca",
        description: "Floridablanca",
      },
      {
        id: "68.296",
        name: "Galán",
        description: "Galán",
      },
      {
        id: "68.298",
        name: "Gambita",
        description: "Gambita",
      },
      {
        id: "68.307",
        name: "Girón",
        description: "Girón",
      },
      {
        id: "68.318",
        name: "Guaca",
        description: "Guaca",
      },
      {
        id: "68.32",
        name: "Guadalupe",
        description: "Guadalupe",
      },
      {
        id: "68.322",
        name: "Guapotá",
        description: "Guapotá",
      },
      {
        id: "68.324",
        name: "Guavatá",
        description: "Guavatá",
      },
      {
        id: "68.327",
        name: "Güepsa",
        description: "Güepsa",
      },
      {
        id: "68.368",
        name: "Jesús María",
        description: "Jesús María",
      },
      {
        id: "68.37",
        name: "Jordán",
        description: "Jordán",
      },
      {
        id: "68.377",
        name: "La Belleza",
        description: "La Belleza",
      },
      {
        id: "68.385",
        name: "Landázuri",
        description: "Landázuri",
      },
      {
        id: "68.397",
        name: "La Paz",
        description: "La Paz",
      },
      {
        id: "68.406",
        name: "Lebríja",
        description: "Lebríja",
      },
      {
        id: "68.418",
        name: "Los Santos",
        description: "Los Santos",
      },
      {
        id: "68.425",
        name: "Macaravita",
        description: "Macaravita",
      },
      {
        id: "68.432",
        name: "Málaga",
        description: "Málaga",
      },
      {
        id: "68.444",
        name: "Matanza",
        description: "Matanza",
      },
      {
        id: "68.464",
        name: "Mogotes",
        description: "Mogotes",
      },
      {
        id: "68.468",
        name: "Molagavita",
        description: "Molagavita",
      },
      {
        id: "68.498",
        name: "Ocamonte",
        description: "Ocamonte",
      },
      {
        id: "68.5",
        name: "Oiba",
        description: "Oiba",
      },
      {
        id: "68.502",
        name: "Onzaga",
        description: "Onzaga",
      },
      {
        id: "68.522",
        name: "Palmar",
        description: "Palmar",
      },
      {
        id: "68.533",
        name: "Páramo",
        description: "Páramo",
      },
      {
        id: "68.547",
        name: "Piedecuesta",
        description: "Piedecuesta",
      },
      {
        id: "68.549",
        name: "Pinchote",
        description: "Pinchote",
      },
      {
        id: "68.572",
        name: "Puente Nacional",
        description: "Puente Nacional",
      },
      {
        id: "68.615",
        name: "Rionegro",
        description: "Rionegro",
      },
      {
        id: "68.669",
        name: "San Andrés",
        description: "San Andrés",
      },
      {
        id: "68.679",
        name: "San Gil",
        description: "San Gil",
      },
      {
        id: "68.682",
        name: "San Joaquín",
        description: "San Joaquín",
      },
      {
        id: "68.686",
        name: "San Miguel",
        description: "San Miguel",
      },
      {
        id: "68.705",
        name: "Santa Bárbara",
        description: "Santa Bárbara",
      },
      {
        id: "68.745",
        name: "Simacota",
        description: "Simacota",
      },
      {
        id: "68.755",
        name: "Socorro",
        description: "Socorro",
      },
      {
        id: "68.77",
        name: "Suaita",
        description: "Suaita",
      },
      {
        id: "68.773",
        name: "Sucre",
        description: "Sucre",
      },
      {
        id: "68.78",
        name: "Suratá",
        description: "Suratá",
      },
      {
        id: "68.82",
        name: "Tona",
        description: "Tona",
      },
      {
        id: "68.861",
        name: "Vélez",
        description: "Vélez",
      },
      {
        id: "68.867",
        name: "Vetas",
        description: "Vetas",
      },
      {
        id: "68.872",
        name: "Villanueva",
        description: "Villanueva",
      },
      {
        id: "68.895",
        name: "Zapatoca",
        description: "Zapatoca",
      },
      {
        id: "68.524",
        name: "Palmas del Socorro",
        description: "Palmas del Socorro",
      },
      {
        id: "68.689",
        name: "San Vicente de Chucurí",
        description: "San Vicente de Chucurí",
      },
      {
        id: "68.684",
        name: "San José de Miranda",
        description: "San José de Miranda",
      },
      {
        id: "68.72",
        name: "Santa Helena del Opón",
        description: "Santa Helena del Opón",
      },
      {
        id: "68.655",
        name: "Sabana de Torres",
        description: "Sabana de Torres",
      },
      {
        id: "68.235",
        name: "El Carmen de Chucurí",
        description: "El Carmen de Chucurí",
      },
      {
        id: "68.855",
        name: "Valle de San José",
        description: "Valle de San José",
      },
      {
        id: "68.673",
        name: "San Benito",
        description: "San Benito",
      },
      {
        id: "68.344",
        name: "Hato",
        description: "Hato",
      },
    ],
  },
  {
    id: "50",
    name: "Meta",
    description: "Meta",
    municipios: [
      {
        id: "50.37",
        name: "Uribe",
        description: "Uribe",
      },
      {
        id: "50.001",
        name: "Villavicencio",
        description: "Villavicencio",
      },
      {
        id: "50.006",
        name: "Acacias",
        description: "Acacias",
      },
      {
        id: "50.124",
        name: "Cabuyaro",
        description: "Cabuyaro",
      },
      {
        id: "50.223",
        name: "Cubarral",
        description: "Cubarral",
      },
      {
        id: "50.226",
        name: "Cumaral",
        description: "Cumaral",
      },
      {
        id: "50.245",
        name: "El Calvario",
        description: "El Calvario",
      },
      {
        id: "50.251",
        name: "El Castillo",
        description: "El Castillo",
      },
      {
        id: "50.27",
        name: "El Dorado",
        description: "El Dorado",
      },
      {
        id: "50.313",
        name: "Granada",
        description: "Granada",
      },
      {
        id: "50.318",
        name: "Guamal",
        description: "Guamal",
      },
      {
        id: "50.325",
        name: "Mapiripán",
        description: "Mapiripán",
      },
      {
        id: "50.33",
        name: "Mesetas",
        description: "Mesetas",
      },
      {
        id: "50.35",
        name: "La Macarena",
        description: "La Macarena",
      },
      {
        id: "50.4",
        name: "Lejanías",
        description: "Lejanías",
      },
      {
        id: "50.45",
        name: "Puerto Concordia",
        description: "Puerto Concordia",
      },
      {
        id: "50.568",
        name: "Puerto Gaitán",
        description: "Puerto Gaitán",
      },
      {
        id: "50.573",
        name: "Puerto López",
        description: "Puerto López",
      },
      {
        id: "50.577",
        name: "Puerto Lleras",
        description: "Puerto Lleras",
      },
      {
        id: "50.59",
        name: "Puerto Rico",
        description: "Puerto Rico",
      },
      {
        id: "50.606",
        name: "Restrepo",
        description: "Restrepo",
      },
      {
        id: "50.686",
        name: "San Juanito",
        description: "San Juanito",
      },
      {
        id: "50.689",
        name: "San Martín",
        description: "San Martín",
      },
      {
        id: "50.711",
        name: "Vista Hermosa",
        description: "Vista Hermosa",
      },
      {
        id: "50.11",
        name: "Barranca de Upía",
        description: "Barranca de Upía",
      },
      {
        id: "50.287",
        name: "Fuente de Oro",
        description: "Fuente de Oro",
      },
      {
        id: "50.68",
        name: "San Carlos de Guaroa",
        description: "San Carlos de Guaroa",
      },
      {
        id: "50.683",
        name: "San Juan de Arama",
        description: "San Juan de Arama",
      },
    ],
  },
  {
    id: "8",
    name: "Atlántico",
    description: "Atlántico",
    municipios: [
      {
        id: "8.001",
        name: "Barranquilla",
        description: "Barranquilla",
      },
      {
        id: "8.078",
        name: "Baranoa",
        description: "Baranoa",
      },
      {
        id: "8.141",
        name: "Candelaria",
        description: "Candelaria",
      },
      {
        id: "8.296",
        name: "Galapa",
        description: "Galapa",
      },
      {
        id: "8.421",
        name: "Luruaco",
        description: "Luruaco",
      },
      {
        id: "8.433",
        name: "Malambo",
        description: "Malambo",
      },
      {
        id: "8.436",
        name: "Manatí",
        description: "Manatí",
      },
      {
        id: "8.549",
        name: "Piojó",
        description: "Piojó",
      },
      {
        id: "8.558",
        name: "Polonuevo",
        description: "Polonuevo",
      },
      {
        id: "8.634",
        name: "Sabanagrande",
        description: "Sabanagrande",
      },
      {
        id: "8.638",
        name: "Sabanalarga",
        description: "Sabanalarga",
      },
      {
        id: "8.675",
        name: "Santa Lucía",
        description: "Santa Lucía",
      },
      {
        id: "8.685",
        name: "Santo Tomás",
        description: "Santo Tomás",
      },
      {
        id: "8.758",
        name: "Soledad",
        description: "Soledad",
      },
      {
        id: "8.77",
        name: "Suan",
        description: "Suan",
      },
      {
        id: "8.832",
        name: "Tubará",
        description: "Tubará",
      },
      {
        id: "8.849",
        name: "Usiacurí",
        description: "Usiacurí",
      },
      {
        id: "8.372",
        name: "Juan de Acosta",
        description: "Juan de Acosta",
      },
      {
        id: "8.52",
        name: "Palmar de Varela",
        description: "Palmar de Varela",
      },
      {
        id: "8.137",
        name: "Campo de La Cruz",
        description: "Campo de La Cruz",
      },
    ],
  },
  {
    id: "13",
    name: "Bolívar",
    description: "Bolívar",
    municipios: [
      {
        id: "13.006",
        name: "Achí",
        description: "Achí",
      },
      {
        id: "13.042",
        name: "Arenal",
        description: "Arenal",
      },
      {
        id: "13.052",
        name: "Arjona",
        description: "Arjona",
      },
      {
        id: "13.062",
        name: "Arroyohondo",
        description: "Arroyohondo",
      },
      {
        id: "13.14",
        name: "Calamar",
        description: "Calamar",
      },
      {
        id: "13.16",
        name: "Cantagallo",
        description: "Cantagallo",
      },
      {
        id: "13.188",
        name: "Cicuco",
        description: "Cicuco",
      },
      {
        id: "13.212",
        name: "Córdoba",
        description: "Córdoba",
      },
      {
        id: "13.222",
        name: "Clemencia",
        description: "Clemencia",
      },
      {
        id: "13.248",
        name: "El Guamo",
        description: "El Guamo",
      },
      {
        id: "13.43",
        name: "Magangué",
        description: "Magangué",
      },
      {
        id: "13.433",
        name: "Mahates",
        description: "Mahates",
      },
      {
        id: "13.44",
        name: "Margarita",
        description: "Margarita",
      },
      {
        id: "13.458",
        name: "Montecristo",
        description: "Montecristo",
      },
      {
        id: "13.468",
        name: "Mompós",
        description: "Mompós",
      },
      {
        id: "13.473",
        name: "Morales",
        description: "Morales",
      },
      {
        id: "13.49",
        name: "Norosí",
        description: "Norosí",
      },
      {
        id: "13.549",
        name: "Pinillos",
        description: "Pinillos",
      },
      {
        id: "13.58",
        name: "Regidor",
        description: "Regidor",
      },
      {
        id: "13.6",
        name: "Río Viejo",
        description: "Río Viejo",
      },
      {
        id: "13.647",
        name: "San Estanislao",
        description: "San Estanislao",
      },
      {
        id: "13.65",
        name: "San Fernando",
        description: "San Fernando",
      },
      {
        id: "13.657",
        name: "San Juan Nepomuceno",
        description: "San Juan Nepomuceno",
      },
      {
        id: "13.673",
        name: "Santa Catalina",
        description: "Santa Catalina",
      },
      {
        id: "13.683",
        name: "Santa Rosa",
        description: "Santa Rosa",
      },
      {
        id: "13.744",
        name: "Simití",
        description: "Simití",
      },
      {
        id: "13.76",
        name: "Soplaviento",
        description: "Soplaviento",
      },
      {
        id: "13.78",
        name: "Talaigua Nuevo",
        description: "Talaigua Nuevo",
      },
      {
        id: "13.81",
        name: "Tiquisio",
        description: "Tiquisio",
      },
      {
        id: "13.836",
        name: "Turbaco",
        description: "Turbaco",
      },
      {
        id: "13.838",
        name: "Turbaná",
        description: "Turbaná",
      },
      {
        id: "13.873",
        name: "Villanueva",
        description: "Villanueva",
      },
      {
        id: "13.074",
        name: "Barranco de Loba",
        description: "Barranco de Loba",
      },
      {
        id: "13.688",
        name: "Santa Rosa del Sur",
        description: "Santa Rosa del Sur",
      },
      {
        id: "13.3",
        name: "Hatillo de Loba",
        description: "Hatillo de Loba",
      },
      {
        id: "13.244",
        name: "El Carmen de Bolívar",
        description: "El Carmen de Bolívar",
      },
      {
        id: "13.667",
        name: "San Martín de Loba",
        description: "San Martín de Loba",
      },
      {
        id: "13.03",
        name: "Altos del Rosario",
        description: "Altos del Rosario",
      },
      {
        id: "13.655",
        name: "San Jacinto del Cauca",
        description: "San Jacinto del Cauca",
      },
      {
        id: "13.67",
        name: "San Pablo de Borbur",
        description: "San Pablo de Borbur",
      },
      {
        id: "13.654",
        name: "San Jacinto",
        description: "San Jacinto",
      },
    ],
  },
  {
    id: "17",
    name: "Caldas",
    description: "Caldas",
    municipios: [
      {
        id: "17.001",
        name: "Manizales",
        description: "Manizales",
      },
      {
        id: "17.013",
        name: "Aguadas",
        description: "Aguadas",
      },
      {
        id: "17.042",
        name: "Anserma",
        description: "Anserma",
      },
      {
        id: "17.05",
        name: "Aranzazu",
        description: "Aranzazu",
      },
      {
        id: "17.088",
        name: "Belalcázar",
        description: "Belalcázar",
      },
      {
        id: "17.174",
        name: "Chinchiná",
        description: "Chinchiná",
      },
      {
        id: "17.272",
        name: "Filadelfia",
        description: "Filadelfia",
      },
      {
        id: "17.38",
        name: "La Dorada",
        description: "La Dorada",
      },
      {
        id: "17.388",
        name: "La Merced",
        description: "La Merced",
      },
      {
        id: "17.433",
        name: "Manzanares",
        description: "Manzanares",
      },
      {
        id: "17.442",
        name: "Marmato",
        description: "Marmato",
      },
      {
        id: "17.446",
        name: "Marulanda",
        description: "Marulanda",
      },
      {
        id: "17.486",
        name: "Neira",
        description: "Neira",
      },
      {
        id: "17.495",
        name: "Norcasia",
        description: "Norcasia",
      },
      {
        id: "17.513",
        name: "Pácora",
        description: "Pácora",
      },
      {
        id: "17.524",
        name: "Palestina",
        description: "Palestina",
      },
      {
        id: "17.541",
        name: "Pensilvania",
        description: "Pensilvania",
      },
      {
        id: "17.614",
        name: "Riosucio",
        description: "Riosucio",
      },
      {
        id: "17.616",
        name: "Risaralda",
        description: "Risaralda",
      },
      {
        id: "17.653",
        name: "Salamina",
        description: "Salamina",
      },
      {
        id: "17.662",
        name: "Samaná",
        description: "Samaná",
      },
      {
        id: "17.665",
        name: "San José",
        description: "San José",
      },
      {
        id: "17.777",
        name: "Supía",
        description: "Supía",
      },
      {
        id: "17.867",
        name: "Victoria",
        description: "Victoria",
      },
      {
        id: "17.873",
        name: "Villamaría",
        description: "Villamaría",
      },
      {
        id: "17.877",
        name: "Viterbo",
        description: "Viterbo",
      },
    ],
  },
  {
    id: "18",
    name: "Caquetá",
    description: "Caquetá",
    municipios: [
      {
        id: "18.001",
        name: "Florencia",
        description: "Florencia",
      },
      {
        id: "18.029",
        name: "Albania",
        description: "Albania",
      },
      {
        id: "18.205",
        name: "Curillo",
        description: "Curillo",
      },
      {
        id: "18.247",
        name: "El Doncello",
        description: "El Doncello",
      },
      {
        id: "18.256",
        name: "El Paujil",
        description: "El Paujil",
      },
      {
        id: "18.479",
        name: "Morelia",
        description: "Morelia",
      },
      {
        id: "18.592",
        name: "Puerto Rico",
        description: "Puerto Rico",
      },
      {
        id: "18.756",
        name: "Solano",
        description: "Solano",
      },
      {
        id: "18.785",
        name: "Solita",
        description: "Solita",
      },
      {
        id: "18.86",
        name: "Valparaíso",
        description: "Valparaíso",
      },
      {
        id: "18.61",
        name: "San José del Fragua",
        description: "San José del Fragua",
      },
      {
        id: "18.094",
        name: "Belén de Los Andaquies",
        description: "Belén de Los Andaquies",
      },
      {
        id: "18.15",
        name: "Cartagena del Chairá",
        description: "Cartagena del Chairá",
      },
    ],
  },
  {
    id: "19",
    name: "Cauca",
    description: "Cauca",
    municipios: [
      {
        id: "19.001",
        name: "Popayán",
        description: "Popayán",
      },
      {
        id: "19.022",
        name: "Almaguer",
        description: "Almaguer",
      },
      {
        id: "19.05",
        name: "Argelia",
        description: "Argelia",
      },
      {
        id: "19.075",
        name: "Balboa",
        description: "Balboa",
      },
      {
        id: "19.1",
        name: "Bolívar",
        description: "Bolívar",
      },
      {
        id: "19.11",
        name: "Buenos Aires",
        description: "Buenos Aires",
      },
      {
        id: "19.13",
        name: "Cajibío",
        description: "Cajibío",
      },
      {
        id: "19.137",
        name: "Caldono",
        description: "Caldono",
      },
      {
        id: "19.142",
        name: "Caloto",
        description: "Caloto",
      },
      {
        id: "19.212",
        name: "Corinto",
        description: "Corinto",
      },
      {
        id: "19.256",
        name: "El Tambo",
        description: "El Tambo",
      },
      {
        id: "19.29",
        name: "Florencia",
        description: "Florencia",
      },
      {
        id: "19.3",
        name: "Guachené",
        description: "Guachené",
      },
      {
        id: "19.318",
        name: "Guapi",
        description: "Guapi",
      },
      {
        id: "19.355",
        name: "Inzá",
        description: "Inzá",
      },
      {
        id: "19.364",
        name: "Jambaló",
        description: "Jambaló",
      },
      {
        id: "19.392",
        name: "La Sierra",
        description: "La Sierra",
      },
      {
        id: "19.397",
        name: "La Vega",
        description: "La Vega",
      },
      {
        id: "19.418",
        name: "López",
        description: "López",
      },
      {
        id: "19.45",
        name: "Mercaderes",
        description: "Mercaderes",
      },
      {
        id: "19.455",
        name: "Miranda",
        description: "Miranda",
      },
      {
        id: "19.473",
        name: "Morales",
        description: "Morales",
      },
      {
        id: "19.513",
        name: "Padilla",
        description: "Padilla",
      },
      {
        id: "19.532",
        name: "Patía",
        description: "Patía",
      },
      {
        id: "19.533",
        name: "Piamonte",
        description: "Piamonte",
      },
      {
        id: "19.548",
        name: "Piendamó",
        description: "Piendamó",
      },
      {
        id: "19.573",
        name: "Puerto Tejada",
        description: "Puerto Tejada",
      },
      {
        id: "19.585",
        name: "Puracé",
        description: "Puracé",
      },
      {
        id: "19.622",
        name: "Rosas",
        description: "Rosas",
      },
      {
        id: "19.701",
        name: "Santa Rosa",
        description: "Santa Rosa",
      },
      {
        id: "19.743",
        name: "Silvia",
        description: "Silvia",
      },
      {
        id: "19.76",
        name: "Sotara",
        description: "Sotara",
      },
      {
        id: "19.78",
        name: "Suárez",
        description: "Suárez",
      },
      {
        id: "19.785",
        name: "Sucre",
        description: "Sucre",
      },
      {
        id: "19.807",
        name: "Timbío",
        description: "Timbío",
      },
      {
        id: "19.809",
        name: "Timbiquí",
        description: "Timbiquí",
      },
      {
        id: "19.821",
        name: "Toribio",
        description: "Toribio",
      },
      {
        id: "19.824",
        name: "Totoró",
        description: "Totoró",
      },
      {
        id: "19.845",
        name: "Villa Rica",
        description: "Villa Rica",
      },
      {
        id: "19.698",
        name: "Santander de Quilichao",
        description: "Santander de Quilichao",
      },
      {
        id: "19.693",
        name: "San Sebastián",
        description: "San Sebastián",
      },
    ],
  },
  {
    id: "20",
    name: "Cesar",
    description: "Cesar",
    municipios: [
      {
        id: "20.001",
        name: "Valledupar",
        description: "Valledupar",
      },
      {
        id: "20.011",
        name: "Aguachica",
        description: "Aguachica",
      },
      {
        id: "20.013",
        name: "Agustín Codazzi",
        description: "Agustín Codazzi",
      },
      {
        id: "20.032",
        name: "Astrea",
        description: "Astrea",
      },
      {
        id: "20.045",
        name: "Becerril",
        description: "Becerril",
      },
      {
        id: "20.06",
        name: "Bosconia",
        description: "Bosconia",
      },
      {
        id: "20.175",
        name: "Chimichagua",
        description: "Chimichagua",
      },
      {
        id: "20.178",
        name: "Chiriguaná",
        description: "Chiriguaná",
      },
      {
        id: "20.228",
        name: "Curumaní",
        description: "Curumaní",
      },
      {
        id: "20.238",
        name: "El Copey",
        description: "El Copey",
      },
      {
        id: "20.25",
        name: "El Paso",
        description: "El Paso",
      },
      {
        id: "20.295",
        name: "Gamarra",
        description: "Gamarra",
      },
      {
        id: "20.31",
        name: "González",
        description: "González",
      },
      {
        id: "20.383",
        name: "La Gloria",
        description: "La Gloria",
      },
      {
        id: "20.443",
        name: "Manaure",
        description: "Manaure",
      },
      {
        id: "20.517",
        name: "Pailitas",
        description: "Pailitas",
      },
      {
        id: "20.55",
        name: "Pelaya",
        description: "Pelaya",
      },
      {
        id: "20.57",
        name: "Pueblo Bello",
        description: "Pueblo Bello",
      },
      {
        id: "20.621",
        name: "La Paz",
        description: "La Paz",
      },
      {
        id: "20.71",
        name: "San Alberto",
        description: "San Alberto",
      },
      {
        id: "20.75",
        name: "San Diego",
        description: "San Diego",
      },
      {
        id: "20.77",
        name: "San Martín",
        description: "San Martín",
      },
      {
        id: "20.787",
        name: "Tamalameque",
        description: "Tamalameque",
      },
      {
        id: "20.614",
        name: "Río de Oro",
        description: "Río de Oro",
      },
      {
        id: "20.4",
        name: "La Jagua de Ibirico",
        description: "La Jagua de Ibirico",
      },
    ],
  },
  {
    id: "25",
    name: "Cundinamarca",
    description: "Cundinamarca",
    municipios: [
      {
        id: "25.035",
        name: "Anapoima",
        description: "Anapoima",
      },
      {
        id: "25.053",
        name: "Arbeláez",
        description: "Arbeláez",
      },
      {
        id: "25.086",
        name: "Beltrán",
        description: "Beltrán",
      },
      {
        id: "25.095",
        name: "Bituima",
        description: "Bituima",
      },
      {
        id: "25.099",
        name: "Bojacá",
        description: "Bojacá",
      },
      {
        id: "25.12",
        name: "Cabrera",
        description: "Cabrera",
      },
      {
        id: "25.123",
        name: "Cachipay",
        description: "Cachipay",
      },
      {
        id: "25.126",
        name: "Cajicá",
        description: "Cajicá",
      },
      {
        id: "25.148",
        name: "Caparrapí",
        description: "Caparrapí",
      },
      {
        id: "25.151",
        name: "Caqueza",
        description: "Caqueza",
      },
      {
        id: "25.168",
        name: "Chaguaní",
        description: "Chaguaní",
      },
      {
        id: "25.178",
        name: "Chipaque",
        description: "Chipaque",
      },
      {
        id: "25.181",
        name: "Choachí",
        description: "Choachí",
      },
      {
        id: "25.183",
        name: "Chocontá",
        description: "Chocontá",
      },
      {
        id: "25.2",
        name: "Cogua",
        description: "Cogua",
      },
      {
        id: "25.214",
        name: "Cota",
        description: "Cota",
      },
      {
        id: "25.224",
        name: "Cucunubá",
        description: "Cucunubá",
      },
      {
        id: "25.245",
        name: "El Colegio",
        description: "El Colegio",
      },
      {
        id: "25.26",
        name: "El Rosal",
        description: "El Rosal",
      },
      {
        id: "25.279",
        name: "Fomeque",
        description: "Fomeque",
      },
      {
        id: "25.281",
        name: "Fosca",
        description: "Fosca",
      },
      {
        id: "25.286",
        name: "Funza",
        description: "Funza",
      },
      {
        id: "25.288",
        name: "Fúquene",
        description: "Fúquene",
      },
      {
        id: "25.293",
        name: "Gachala",
        description: "Gachala",
      },
      {
        id: "25.295",
        name: "Gachancipá",
        description: "Gachancipá",
      },
      {
        id: "25.297",
        name: "Gachetá",
        description: "Gachetá",
      },
      {
        id: "25.307",
        name: "Girardot",
        description: "Girardot",
      },
      {
        id: "25.312",
        name: "Granada",
        description: "Granada",
      },
      {
        id: "25.317",
        name: "Guachetá",
        description: "Guachetá",
      },
      {
        id: "25.32",
        name: "Guaduas",
        description: "Guaduas",
      },
      {
        id: "25.322",
        name: "Guasca",
        description: "Guasca",
      },
      {
        id: "25.324",
        name: "Guataquí",
        description: "Guataquí",
      },
      {
        id: "25.326",
        name: "Guatavita",
        description: "Guatavita",
      },
      {
        id: "25.335",
        name: "Guayabetal",
        description: "Guayabetal",
      },
      {
        id: "25.339",
        name: "Gutiérrez",
        description: "Gutiérrez",
      },
      {
        id: "25.368",
        name: "Jerusalén",
        description: "Jerusalén",
      },
      {
        id: "25.372",
        name: "Junín",
        description: "Junín",
      },
      {
        id: "25.377",
        name: "La Calera",
        description: "La Calera",
      },
      {
        id: "25.386",
        name: "La Mesa",
        description: "La Mesa",
      },
      {
        id: "25.394",
        name: "La Palma",
        description: "La Palma",
      },
      {
        id: "25.398",
        name: "La Peña",
        description: "La Peña",
      },
      {
        id: "25.402",
        name: "La Vega",
        description: "La Vega",
      },
      {
        id: "25.407",
        name: "Lenguazaque",
        description: "Lenguazaque",
      },
      {
        id: "25.426",
        name: "Macheta",
        description: "Macheta",
      },
      {
        id: "25.43",
        name: "Madrid",
        description: "Madrid",
      },
      {
        id: "25.436",
        name: "Manta",
        description: "Manta",
      },
      {
        id: "25.438",
        name: "Medina",
        description: "Medina",
      },
      {
        id: "25.473",
        name: "Mosquera",
        description: "Mosquera",
      },
      {
        id: "25.483",
        name: "Nariño",
        description: "Nariño",
      },
      {
        id: "25.486",
        name: "Nemocón",
        description: "Nemocón",
      },
      {
        id: "25.488",
        name: "Nilo",
        description: "Nilo",
      },
      {
        id: "25.489",
        name: "Nimaima",
        description: "Nimaima",
      },
      {
        id: "25.491",
        name: "Nocaima",
        description: "Nocaima",
      },
      {
        id: "25.506",
        name: "Venecia",
        description: "Venecia",
      },
      {
        id: "25.513",
        name: "Pacho",
        description: "Pacho",
      },
      {
        id: "25.518",
        name: "Paime",
        description: "Paime",
      },
      {
        id: "25.524",
        name: "Pandi",
        description: "Pandi",
      },
      {
        id: "25.53",
        name: "Paratebueno",
        description: "Paratebueno",
      },
      {
        id: "25.535",
        name: "Pasca",
        description: "Pasca",
      },
      {
        id: "25.572",
        name: "Puerto Salgar",
        description: "Puerto Salgar",
      },
      {
        id: "25.58",
        name: "Pulí",
        description: "Pulí",
      },
      {
        id: "25.592",
        name: "Quebradanegra",
        description: "Quebradanegra",
      },
      {
        id: "25.594",
        name: "Quetame",
        description: "Quetame",
      },
      {
        id: "25.596",
        name: "Quipile",
        description: "Quipile",
      },
      {
        id: "25.599",
        name: "Apulo",
        description: "Apulo",
      },
      {
        id: "25.612",
        name: "Ricaurte",
        description: "Ricaurte",
      },
      {
        id: "25.649",
        name: "San Bernardo",
        description: "San Bernardo",
      },
      {
        id: "25.653",
        name: "San Cayetano",
        description: "San Cayetano",
      },
      {
        id: "25.658",
        name: "San Francisco",
        description: "San Francisco",
      },
      {
        id: "25.736",
        name: "Sesquilé",
        description: "Sesquilé",
      },
      {
        id: "25.74",
        name: "Sibaté",
        description: "Sibaté",
      },
      {
        id: "25.743",
        name: "Silvania",
        description: "Silvania",
      },
      {
        id: "25.745",
        name: "Simijaca",
        description: "Simijaca",
      },
      {
        id: "25.754",
        name: "Soacha",
        description: "Soacha",
      },
      {
        id: "25.769",
        name: "Subachoque",
        description: "Subachoque",
      },
      {
        id: "25.772",
        name: "Suesca",
        description: "Suesca",
      },
      {
        id: "25.777",
        name: "Supatá",
        description: "Supatá",
      },
      {
        id: "25.779",
        name: "Susa",
        description: "Susa",
      },
      {
        id: "25.781",
        name: "Sutatausa",
        description: "Sutatausa",
      },
      {
        id: "25.785",
        name: "Tabio",
        description: "Tabio",
      },
      {
        id: "25.793",
        name: "Tausa",
        description: "Tausa",
      },
      {
        id: "25.797",
        name: "Tena",
        description: "Tena",
      },
      {
        id: "25.799",
        name: "Tenjo",
        description: "Tenjo",
      },
      {
        id: "25.805",
        name: "Tibacuy",
        description: "Tibacuy",
      },
      {
        id: "25.807",
        name: "Tibirita",
        description: "Tibirita",
      },
      {
        id: "25.815",
        name: "Tocaima",
        description: "Tocaima",
      },
      {
        id: "25.817",
        name: "Tocancipá",
        description: "Tocancipá",
      },
      {
        id: "25.823",
        name: "Topaipí",
        description: "Topaipí",
      },
      {
        id: "25.839",
        name: "Ubalá",
        description: "Ubalá",
      },
      {
        id: "25.841",
        name: "Ubaque",
        description: "Ubaque",
      },
      {
        id: "25.845",
        name: "Une",
        description: "Une",
      },
      {
        id: "25.851",
        name: "Útica",
        description: "Útica",
      },
      {
        id: "25.867",
        name: "Vianí",
        description: "Vianí",
      },
      {
        id: "25.871",
        name: "Villagómez",
        description: "Villagómez",
      },
      {
        id: "25.873",
        name: "Villapinzón",
        description: "Villapinzón",
      },
      {
        id: "25.875",
        name: "Villeta",
        description: "Villeta",
      },
      {
        id: "25.878",
        name: "Viotá",
        description: "Viotá",
      },
      {
        id: "25.898",
        name: "Zipacón",
        description: "Zipacón",
      },
      {
        id: "25.662",
        name: "San Juan de Río Seco",
        description: "San Juan de Río Seco",
      },
      {
        id: "25.843",
        name: "Villa de San Diego de Ubate",
        description: "Villa de San Diego de Ubate",
      },
      {
        id: "25.328",
        name: "Guayabal de Siquima",
        description: "Guayabal de Siquima",
      },
      {
        id: "25.645",
        name: "San Antonio del Tequendama",
        description: "San Antonio del Tequendama",
      },
      {
        id: "25.001",
        name: "Agua de Dios",
        description: "Agua de Dios",
      },
      {
        id: "25.154",
        name: "Carmen de Carupa",
        description: "Carmen de Carupa",
      },
      {
        id: "25.862",
        name: "Vergara",
        description: "Vergara",
      },
    ],
  },
  {
    id: "41",
    name: "Huila",
    description: "Huila",
    municipios: [
      {
        id: "41.001",
        name: "Neiva",
        description: "Neiva",
      },
      {
        id: "41.006",
        name: "Acevedo",
        description: "Acevedo",
      },
      {
        id: "41.013",
        name: "Agrado",
        description: "Agrado",
      },
      {
        id: "41.016",
        name: "Aipe",
        description: "Aipe",
      },
      {
        id: "41.02",
        name: "Algeciras",
        description: "Algeciras",
      },
      {
        id: "41.026",
        name: "Altamira",
        description: "Altamira",
      },
      {
        id: "41.078",
        name: "Baraya",
        description: "Baraya",
      },
      {
        id: "41.132",
        name: "Campoalegre",
        description: "Campoalegre",
      },
      {
        id: "41.206",
        name: "Colombia",
        description: "Colombia",
      },
      {
        id: "41.244",
        name: "Elías",
        description: "Elías",
      },
      {
        id: "41.298",
        name: "Garzón",
        description: "Garzón",
      },
      {
        id: "41.306",
        name: "Gigante",
        description: "Gigante",
      },
      {
        id: "41.319",
        name: "Guadalupe",
        description: "Guadalupe",
      },
      {
        id: "41.349",
        name: "Hobo",
        description: "Hobo",
      },
      {
        id: "41.357",
        name: "Iquira",
        description: "Iquira",
      },
      {
        id: "41.359",
        name: "Isnos",
        description: "Isnos",
      },
      {
        id: "41.378",
        name: "La Argentina",
        description: "La Argentina",
      },
      {
        id: "41.396",
        name: "La Plata",
        description: "La Plata",
      },
      {
        id: "41.483",
        name: "Nátaga",
        description: "Nátaga",
      },
      {
        id: "41.503",
        name: "Oporapa",
        description: "Oporapa",
      },
      {
        id: "41.518",
        name: "Paicol",
        description: "Paicol",
      },
      {
        id: "41.524",
        name: "Palermo",
        description: "Palermo",
      },
      {
        id: "41.53",
        name: "Palestina",
        description: "Palestina",
      },
      {
        id: "41.548",
        name: "Pital",
        description: "Pital",
      },
      {
        id: "41.551",
        name: "Pitalito",
        description: "Pitalito",
      },
      {
        id: "41.615",
        name: "Rivera",
        description: "Rivera",
      },
      {
        id: "41.66",
        name: "Saladoblanco",
        description: "Saladoblanco",
      },
      {
        id: "41.676",
        name: "Santa María",
        description: "Santa María",
      },
      {
        id: "41.77",
        name: "Suaza",
        description: "Suaza",
      },
      {
        id: "41.791",
        name: "Tarqui",
        description: "Tarqui",
      },
      {
        id: "41.797",
        name: "Tesalia",
        description: "Tesalia",
      },
      {
        id: "41.799",
        name: "Tello",
        description: "Tello",
      },
      {
        id: "41.801",
        name: "Teruel",
        description: "Teruel",
      },
      {
        id: "41.807",
        name: "Timaná",
        description: "Timaná",
      },
      {
        id: "41.872",
        name: "Villavieja",
        description: "Villavieja",
      },
      {
        id: "41.885",
        name: "Yaguará",
        description: "Yaguará",
      },
      {
        id: "41.668",
        name: "San Agustín",
        description: "San Agustín",
      },
    ],
  },
  {
    id: "44",
    name: "La Guajira",
    description: "La Guajira",
    municipios: [
      {
        id: "44.001",
        name: "Riohacha",
        description: "Riohacha",
      },
      {
        id: "44.035",
        name: "Albania",
        description: "Albania",
      },
      {
        id: "44.078",
        name: "Barrancas",
        description: "Barrancas",
      },
      {
        id: "44.09",
        name: "Dibula",
        description: "Dibula",
      },
      {
        id: "44.098",
        name: "Distracción",
        description: "Distracción",
      },
      {
        id: "44.11",
        name: "El Molino",
        description: "El Molino",
      },
      {
        id: "44.279",
        name: "Fonseca",
        description: "Fonseca",
      },
      {
        id: "44.378",
        name: "Hatonuevo",
        description: "Hatonuevo",
      },
      {
        id: "44.43",
        name: "Maicao",
        description: "Maicao",
      },
      {
        id: "44.56",
        name: "Manaure",
        description: "Manaure",
      },
      {
        id: "44.847",
        name: "Uribia",
        description: "Uribia",
      },
      {
        id: "44.855",
        name: "Urumita",
        description: "Urumita",
      },
      {
        id: "44.874",
        name: "Villanueva",
        description: "Villanueva",
      },
      {
        id: "44.42",
        name: "La Jagua del Pilar",
        description: "La Jagua del Pilar",
      },
      {
        id: "44.65",
        name: "San Juan del Cesar",
        description: "San Juan del Cesar",
      },
    ],
  },
  {
    id: "47",
    name: "Magdalena",
    description: "Magdalena",
    municipios: [
      {
        id: "47.001",
        name: "Santa Marta",
        description: "Santa Marta",
      },
      {
        id: "47.03",
        name: "Algarrobo",
        description: "Algarrobo",
      },
      {
        id: "47.053",
        name: "Aracataca",
        description: "Aracataca",
      },
      {
        id: "47.058",
        name: "Ariguaní",
        description: "Ariguaní",
      },
      {
        id: "47.161",
        name: "Cerro San Antonio",
        description: "Cerro San Antonio",
      },
      {
        id: "47.17",
        name: "Chivolo",
        description: "Chivolo",
      },
      {
        id: "47.205",
        name: "Concordia",
        description: "Concordia",
      },
      {
        id: "47.245",
        name: "El Banco",
        description: "El Banco",
      },
      {
        id: "47.258",
        name: "El Piñon",
        description: "El Piñon",
      },
      {
        id: "47.268",
        name: "El Retén",
        description: "El Retén",
      },
      {
        id: "47.288",
        name: "Fundación",
        description: "Fundación",
      },
      {
        id: "47.318",
        name: "Guamal",
        description: "Guamal",
      },
      {
        id: "47.46",
        name: "Nueva Granada",
        description: "Nueva Granada",
      },
      {
        id: "47.541",
        name: "Pedraza",
        description: "Pedraza",
      },
      {
        id: "47.551",
        name: "Pivijay",
        description: "Pivijay",
      },
      {
        id: "47.555",
        name: "Plato",
        description: "Plato",
      },
      {
        id: "47.605",
        name: "Remolino",
        description: "Remolino",
      },
      {
        id: "47.675",
        name: "Salamina",
        description: "Salamina",
      },
      {
        id: "47.703",
        name: "San Zenón",
        description: "San Zenón",
      },
      {
        id: "47.707",
        name: "Santa Ana",
        description: "Santa Ana",
      },
      {
        id: "47.745",
        name: "Sitionuevo",
        description: "Sitionuevo",
      },
      {
        id: "47.798",
        name: "Tenerife",
        description: "Tenerife",
      },
      {
        id: "47.96",
        name: "Zapayán",
        description: "Zapayán",
      },
      {
        id: "47.98",
        name: "Zona Bananera",
        description: "Zona Bananera",
      },
      {
        id: "47.692",
        name: "San Sebastián de Buenavista",
        description: "San Sebastián de Buenavista",
      },
      {
        id: "47.66",
        name: "Sabanas de San Angel",
        description: "Sabanas de San Angel",
      },
      {
        id: "47.545",
        name: "Pijiño del Carmen",
        description: "Pijiño del Carmen",
      },
    ],
  },
  {
    id: "63",
    name: "Quindío",
    description: "Quindío",
    municipios: [
      {
        id: "63.001",
        name: "Armenia",
        description: "Armenia",
      },
      {
        id: "63.111",
        name: "Buenavista",
        description: "Buenavista",
      },
      {
        id: "63.19",
        name: "Circasia",
        description: "Circasia",
      },
      {
        id: "63.212",
        name: "Córdoba",
        description: "Córdoba",
      },
      {
        id: "63.272",
        name: "Filandia",
        description: "Filandia",
      },
      {
        id: "63.401",
        name: "La Tebaida",
        description: "La Tebaida",
      },
      {
        id: "63.47",
        name: "Montenegro",
        description: "Montenegro",
      },
      {
        id: "63.548",
        name: "Pijao",
        description: "Pijao",
      },
      {
        id: "63.594",
        name: "Quimbaya",
        description: "Quimbaya",
      },
      {
        id: "63.69",
        name: "Salento",
        description: "Salento",
      },
    ],
  },
  {
    id: "66",
    name: "Risaralda",
    description: "Risaralda",
    municipios: [
      {
        id: "66.001",
        name: "Pereira",
        description: "Pereira",
      },
      {
        id: "66.045",
        name: "Apía",
        description: "Apía",
      },
      {
        id: "66.075",
        name: "Balboa",
        description: "Balboa",
      },
      {
        id: "66.17",
        name: "Dosquebradas",
        description: "Dosquebradas",
      },
      {
        id: "66.318",
        name: "Guática",
        description: "Guática",
      },
      {
        id: "66.383",
        name: "La Celia",
        description: "La Celia",
      },
      {
        id: "66.4",
        name: "La Virginia",
        description: "La Virginia",
      },
      {
        id: "66.44",
        name: "Marsella",
        description: "Marsella",
      },
      {
        id: "66.456",
        name: "Mistrató",
        description: "Mistrató",
      },
      {
        id: "66.572",
        name: "Pueblo Rico",
        description: "Pueblo Rico",
      },
      {
        id: "66.594",
        name: "Quinchía",
        description: "Quinchía",
      },
      {
        id: "66.687",
        name: "Santuario",
        description: "Santuario",
      },
      {
        id: "66.682",
        name: "Santa Rosa de Cabal",
        description: "Santa Rosa de Cabal",
      },
      {
        id: "66.088",
        name: "Belén de Umbría",
        description: "Belén de Umbría",
      },
    ],
  },
  {
    id: "70",
    name: "Sucre",
    description: "Sucre",
    municipios: [
      {
        id: "70.001",
        name: "Sincelejo",
        description: "Sincelejo",
      },
      {
        id: "70.11",
        name: "Buenavista",
        description: "Buenavista",
      },
      {
        id: "70.124",
        name: "Caimito",
        description: "Caimito",
      },
      {
        id: "70.204",
        name: "Coloso",
        description: "Coloso",
      },
      {
        id: "70.221",
        name: "Coveñas",
        description: "Coveñas",
      },
      {
        id: "70.23",
        name: "Chalán",
        description: "Chalán",
      },
      {
        id: "70.233",
        name: "El Roble",
        description: "El Roble",
      },
      {
        id: "70.235",
        name: "Galeras",
        description: "Galeras",
      },
      {
        id: "70.265",
        name: "Guaranda",
        description: "Guaranda",
      },
      {
        id: "70.4",
        name: "La Unión",
        description: "La Unión",
      },
      {
        id: "70.418",
        name: "Los Palmitos",
        description: "Los Palmitos",
      },
      {
        id: "70.429",
        name: "Majagual",
        description: "Majagual",
      },
      {
        id: "70.473",
        name: "Morroa",
        description: "Morroa",
      },
      {
        id: "70.508",
        name: "Ovejas",
        description: "Ovejas",
      },
      {
        id: "70.523",
        name: "Palmito",
        description: "Palmito",
      },
      {
        id: "70.678",
        name: "San Benito Abad",
        description: "San Benito Abad",
      },
      {
        id: "70.708",
        name: "San Marcos",
        description: "San Marcos",
      },
      {
        id: "70.713",
        name: "San Onofre",
        description: "San Onofre",
      },
      {
        id: "70.717",
        name: "San Pedro",
        description: "San Pedro",
      },
      {
        id: "70.771",
        name: "Sucre",
        description: "Sucre",
      },
      {
        id: "70.823",
        name: "Tolú Viejo",
        description: "Tolú Viejo",
      },
      {
        id: "70.742",
        name: "San Luis de Sincé",
        description: "San Luis de Sincé",
      },
      {
        id: "70.702",
        name: "San Juan de Betulia",
        description: "San Juan de Betulia",
      },
      {
        id: "70.82",
        name: "Santiago de Tolú",
        description: "Santiago de Tolú",
      },
    ],
  },
  {
    id: "73",
    name: "Tolima",
    description: "Tolima",
    municipios: [
      {
        id: "73.024",
        name: "Alpujarra",
        description: "Alpujarra",
      },
      {
        id: "73.026",
        name: "Alvarado",
        description: "Alvarado",
      },
      {
        id: "73.03",
        name: "Ambalema",
        description: "Ambalema",
      },
      {
        id: "73.055",
        name: "Armero",
        description: "Armero",
      },
      {
        id: "73.067",
        name: "Ataco",
        description: "Ataco",
      },
      {
        id: "73.124",
        name: "Cajamarca",
        description: "Cajamarca",
      },
      {
        id: "73.168",
        name: "Chaparral",
        description: "Chaparral",
      },
      {
        id: "73.2",
        name: "Coello",
        description: "Coello",
      },
      {
        id: "73.217",
        name: "Coyaima",
        description: "Coyaima",
      },
      {
        id: "73.226",
        name: "Cunday",
        description: "Cunday",
      },
      {
        id: "73.236",
        name: "Dolores",
        description: "Dolores",
      },
      {
        id: "73.268",
        name: "Espinal",
        description: "Espinal",
      },
      {
        id: "73.27",
        name: "Falan",
        description: "Falan",
      },
      {
        id: "73.275",
        name: "Flandes",
        description: "Flandes",
      },
      {
        id: "73.283",
        name: "Fresno",
        description: "Fresno",
      },
      {
        id: "73.319",
        name: "Guamo",
        description: "Guamo",
      },
      {
        id: "73.347",
        name: "Herveo",
        description: "Herveo",
      },
      {
        id: "73.349",
        name: "Honda",
        description: "Honda",
      },
      {
        id: "73.352",
        name: "Icononzo",
        description: "Icononzo",
      },
      {
        id: "73.443",
        name: "Mariquita",
        description: "Mariquita",
      },
      {
        id: "73.449",
        name: "Melgar",
        description: "Melgar",
      },
      {
        id: "73.461",
        name: "Murillo",
        description: "Murillo",
      },
      {
        id: "73.483",
        name: "Natagaima",
        description: "Natagaima",
      },
      {
        id: "73.504",
        name: "Ortega",
        description: "Ortega",
      },
      {
        id: "73.52",
        name: "Palocabildo",
        description: "Palocabildo",
      },
      {
        id: "73.547",
        name: "Piedras",
        description: "Piedras",
      },
      {
        id: "73.555",
        name: "Planadas",
        description: "Planadas",
      },
      {
        id: "73.563",
        name: "Prado",
        description: "Prado",
      },
      {
        id: "73.585",
        name: "Purificación",
        description: "Purificación",
      },
      {
        id: "73.616",
        name: "Rio Blanco",
        description: "Rio Blanco",
      },
      {
        id: "73.622",
        name: "Roncesvalles",
        description: "Roncesvalles",
      },
      {
        id: "73.624",
        name: "Rovira",
        description: "Rovira",
      },
      {
        id: "73.671",
        name: "Saldaña",
        description: "Saldaña",
      },
      {
        id: "73.686",
        name: "Santa Isabel",
        description: "Santa Isabel",
      },
      {
        id: "73.861",
        name: "Venadillo",
        description: "Venadillo",
      },
      {
        id: "73.87",
        name: "Villahermosa",
        description: "Villahermosa",
      },
      {
        id: "73.873",
        name: "Villarrica",
        description: "Villarrica",
      },
      {
        id: "73.854",
        name: "Valle de San Juan",
        description: "Valle de San Juan",
      },
      {
        id: "73.148",
        name: "Carmen de Apicala",
        description: "Carmen de Apicala",
      },
      {
        id: "73.678",
        name: "San Luis",
        description: "San Luis",
      },
      {
        id: "73.675",
        name: "San Antonio",
        description: "San Antonio",
      },
    ],
  },
  {
    id: "81",
    name: "Arauca",
    description: "Arauca",
    municipios: [
      {
        id: "81.065",
        name: "Arauquita",
        description: "Arauquita",
      },
      {
        id: "81.22",
        name: "Cravo Norte",
        description: "Cravo Norte",
      },
      {
        id: "81.3",
        name: "Fortul",
        description: "Fortul",
      },
      {
        id: "81.591",
        name: "Puerto Rondón",
        description: "Puerto Rondón",
      },
      {
        id: "81.736",
        name: "Saravena",
        description: "Saravena",
      },
      {
        id: "81.794",
        name: "Tame",
        description: "Tame",
      },
      {
        id: "81.001",
        name: "Arauca",
        description: "Arauca",
      },
    ],
  },
  {
    id: "85",
    name: "Casanare",
    description: "Casanare",
    municipios: [
      {
        id: "85.001",
        name: "Yopal",
        description: "Yopal",
      },
      {
        id: "85.01",
        name: "Aguazul",
        description: "Aguazul",
      },
      {
        id: "85.015",
        name: "Chámeza",
        description: "Chámeza",
      },
      {
        id: "85.125",
        name: "Hato Corozal",
        description: "Hato Corozal",
      },
      {
        id: "85.136",
        name: "La Salina",
        description: "La Salina",
      },
      {
        id: "85.162",
        name: "Monterrey",
        description: "Monterrey",
      },
      {
        id: "85.263",
        name: "Pore",
        description: "Pore",
      },
      {
        id: "85.279",
        name: "Recetor",
        description: "Recetor",
      },
      {
        id: "85.3",
        name: "Sabanalarga",
        description: "Sabanalarga",
      },
      {
        id: "85.315",
        name: "Sácama",
        description: "Sácama",
      },
      {
        id: "85.41",
        name: "Tauramena",
        description: "Tauramena",
      },
      {
        id: "85.43",
        name: "Trinidad",
        description: "Trinidad",
      },
      {
        id: "85.44",
        name: "Villanueva",
        description: "Villanueva",
      },
      {
        id: "85.325",
        name: "San Luis de Gaceno",
        description: "San Luis de Gaceno",
      },
      {
        id: "85.25",
        name: "Paz de Ariporo",
        description: "Paz de Ariporo",
      },
    ],
  },
  {
    id: "86",
    name: "Putumayo",
    description: "Putumayo",
    municipios: [
      {
        id: "86.001",
        name: "Mocoa",
        description: "Mocoa",
      },
      {
        id: "86.219",
        name: "Colón",
        description: "Colón",
      },
      {
        id: "86.32",
        name: "Orito",
        description: "Orito",
      },
      {
        id: "86.569",
        name: "Puerto Caicedo",
        description: "Puerto Caicedo",
      },
      {
        id: "86.571",
        name: "Puerto Guzmán",
        description: "Puerto Guzmán",
      },
      {
        id: "86.573",
        name: "Leguízamo",
        description: "Leguízamo",
      },
      {
        id: "86.749",
        name: "Sibundoy",
        description: "Sibundoy",
      },
      {
        id: "86.755",
        name: "San Francisco",
        description: "San Francisco",
      },
      {
        id: "86.757",
        name: "San Miguel",
        description: "San Miguel",
      },
      {
        id: "86.76",
        name: "Santiago",
        description: "Santiago",
      },
      {
        id: "86.865",
        name: "Valle de Guamez",
        description: "Valle de Guamez",
      },
    ],
  },
  {
    id: "91",
    name: "Amazonas",
    description: "Amazonas",
    municipios: [
      {
        id: "91.001",
        name: "Leticia",
        description: "Leticia",
      },
      {
        id: "91.263",
        name: "El Encanto",
        description: "El Encanto",
      },
      {
        id: "91.405",
        name: "La Chorrera",
        description: "La Chorrera",
      },
      {
        id: "91.407",
        name: "La Pedrera",
        description: "La Pedrera",
      },
      {
        id: "91.43",
        name: "La Victoria",
        description: "La Victoria",
      },
      {
        id: "91.536",
        name: "Puerto Arica",
        description: "Puerto Arica",
      },
      {
        id: "91.54",
        name: "Puerto Nariño",
        description: "Puerto Nariño",
      },
      {
        id: "91.669",
        name: "Puerto Santander",
        description: "Puerto Santander",
      },
      {
        id: "91.798",
        name: "Tarapacá",
        description: "Tarapacá",
      },
      {
        id: "91.53",
        name: "Puerto Alegría",
        description: "Puerto Alegría",
      },
    ],
  },
  {
    id: "94",
    name: "Guainía",
    description: "Guainía",
    municipios: [
      {
        id: "94.001",
        name: "Inírida",
        description: "Inírida",
      },
      {
        id: "94.343",
        name: "Barranco Minas",
        description: "Barranco Minas",
      },
      {
        id: "94.663",
        name: "Mapiripana",
        description: "Mapiripana",
      },
      {
        id: "94.883",
        name: "San Felipe",
        description: "San Felipe",
      },
      {
        id: "94.884",
        name: "Puerto Colombia",
        description: "Puerto Colombia",
      },
      {
        id: "94.885",
        name: "La Guadalupe",
        description: "La Guadalupe",
      },
      {
        id: "94.886",
        name: "Cacahual",
        description: "Cacahual",
      },
      {
        id: "94.887",
        name: "Pana Pana",
        description: "Pana Pana",
      },
      {
        id: "94.888",
        name: "Morichal",
        description: "Morichal",
      },
    ],
  },
  {
    id: "97",
    name: "Vaupés",
    description: "Vaupés",
    municipios: [
      {
        id: "97.001",
        name: "Mitú",
        description: "Mitú",
      },
      {
        id: "97.161",
        name: "Carurú",
        description: "Carurú",
      },
      {
        id: "97.666",
        name: "Taraira",
        description: "Taraira",
      },
      {
        id: "97.777",
        name: "Papunahua",
        description: "Papunahua",
      },
      {
        id: "97.889",
        name: "Yavaraté",
        description: "Yavaraté",
      },
      {
        id: "97.511",
        name: "Pacoa",
        description: "Pacoa",
      },
    ],
  },
  {
    id: "99",
    name: "Vichada",
    description: "Vichada",
    municipios: [
      {
        id: "99.001",
        name: "Puerto Carreño",
        description: "Puerto Carreño",
      },
      {
        id: "99.524",
        name: "La Primavera",
        description: "La Primavera",
      },
      {
        id: "99.624",
        name: "Santa Rosalía",
        description: "Santa Rosalía",
      },
      {
        id: "99.773",
        name: "Cumaribo",
        description: "Cumaribo",
      },
    ],
  },
  {
    id: "95",
    name: "Guaviare",
    description: "Guaviare",
    municipios: [
      {
        id: "95.015",
        name: "Calamar",
        description: "Calamar",
      },
      {
        id: "95.001",
        name: "San José del Guaviare",
        description: "San José del Guaviare",
      },
      {
        id: "95.2",
        name: "Miraflores",
        description: "Miraflores",
      },
      {
        id: "95.025",
        name: "El Retorno",
        description: "El Retorno",
      },
    ],
  },
  {
    id: "88",
    name: "Archipiélago de San Andrés, Providencia y Santa Catalina",
    description: "Archipiélago de San Andrés, Providencia y Santa Catalina",
    municipios: [
      {
        id: "88.564",
        name: "Providencia",
        description: "Providencia",
      },
      {
        id: "88.001",
        name: "San Andrés",
        description: "San Andrés",
      },
    ],
  },
  {
    id: "11",
    name: "Bogotá D.C.",
    description: "Bogotá D.C.",
    municipios: [
      {
        id: "11.001",
        name: "Bogotá D.C.",
        description: "Bogotá D.C.",
      },
    ],
  },
  {
    id: "54",
    name: "Norte de Santander",
    description: "Norte de Santander",
    municipios: [
      {
        id: "54.743",
        name: "Silos",
        description: "Silos",
      },
      {
        id: "54.125",
        name: "Cácota",
        description: "Cácota",
      },
      {
        id: "54.82",
        name: "Toledo",
        description: "Toledo",
      },
      {
        id: "54.48",
        name: "Mutiscua",
        description: "Mutiscua",
      },
      {
        id: "54.261",
        name: "El Zulia",
        description: "El Zulia",
      },
      {
        id: "54.66",
        name: "Salazar",
        description: "Salazar",
      },
      {
        id: "54.223",
        name: "Cucutilla",
        description: "Cucutilla",
      },
      {
        id: "54.553",
        name: "Puerto Santander",
        description: "Puerto Santander",
      },
      {
        id: "54.313",
        name: "Gramalote",
        description: "Gramalote",
      },
      {
        id: "54.25",
        name: "El Tarra",
        description: "El Tarra",
      },
      {
        id: "54.8",
        name: "Teorama",
        description: "Teorama",
      },
      {
        id: "54.051",
        name: "Arboledas",
        description: "Arboledas",
      },
    ],
  },
  {
    id: "76",
    name: "Valle del Cauca",
    description: "Valle del Cauca",
    municipios: [
      {
        id: "76.25",
        name: "El Dovio",
        description: "El Dovio",
      },
      {
        id: "76.622",
        name: "Roldanillo",
        description: "Roldanillo",
      },
      {
        id: "76.054",
        name: "Argelia",
        description: "Argelia",
      },
      {
        id: "76.736",
        name: "Sevilla",
        description: "Sevilla",
      },
      {
        id: "76.895",
        name: "Zarzal",
        description: "Zarzal",
      },
      {
        id: "76.248",
        name: "El Cerrito",
        description: "El Cerrito",
      },
      {
        id: "76.147",
        name: "Cartago",
        description: "Cartago",
      },
      {
        id: "76.122",
        name: "Caicedonia",
        description: "Caicedonia",
      },
      {
        id: "76.246",
        name: "El Cairo",
        description: "El Cairo",
      },
      {
        id: "76.4",
        name: "La Unión",
        description: "La Unión",
      },
      {
        id: "76.606",
        name: "Restrepo",
        description: "Restrepo",
      },
      {
        id: "76.233",
        name: "Dagua",
        description: "Dagua",
      },
      {
        id: "76.318",
        name: "Guacarí",
        description: "Guacarí",
      },
    ],
  },
];
