import { LatLngTuple } from "leaflet";

export interface Company {
  name: string;
  description: string;
  email: string;
  tel: string;
  nit: string;
  address: LatLngTuple;
}
