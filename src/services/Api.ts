import Axios from "axios";

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function getData<T>(url: string): Promise<T> {
  const response = await Axios.get<T>(url);

  return response.data;
}
