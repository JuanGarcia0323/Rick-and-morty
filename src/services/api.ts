import axios from "axios";
import { IPagination, ICharacter, IRequestInfo } from "@interfaces";

const BASE_URL = import.meta.env.VITE_API;
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getCharacters = async ({ pageParam = 1 }: IPagination) => {
  return (
    await axiosInstance.get<IRequestInfo<ICharacter[]>>(
      `character/?page=${pageParam}`
    )
  ).data;
};
