import { MUNICIPIOS } from "./constant";

export const getCitiesByDepartment = (id: string) => {
  return MUNICIPIOS.find((d) => d.id === id)?.municipios || [];
};
