export interface Shipping {
  packages: Package[];
  description: string;
  contentValue: number;
  codValue?: number;
  includeGuideCost?: boolean;
  codPaymentMethod?: string;
  origin: Origin;
  destination: Destination;
}

interface Package {
  weight: number;
  height: number;
  width: number;
  length: number;
}

interface Origin {
  daneCode: string;
  address: string;
}

interface Destination {
  daneCode: string;
  address: string;
}
