import axios from "axios";
import {
  IPagination,
  ICharacter,
  IRequestInfo,
  IEpisode,
  ILocation,
} from "@interfaces";

const BASE_URL = import.meta.env.VITE_API;
const axiosInstance = axios.create({ baseURL: BASE_URL });

const checkParams = (name: string, param?: string) => {
  return param ? `&${name}=${param}` : "";
};

export const getCharactersByPage = async ({
  pageParam = 1,
  gender,
  name,
  species,
  status,
  type,
}: IPagination) => {
  return (
    await axiosInstance.get<IRequestInfo<ICharacter[]>>(
      `character/?page=${pageParam}
      ${checkParams("gender", gender)}
      ${checkParams("name", name)}
      ${checkParams("species", species)}
      ${checkParams("status", status)}
      ${checkParams("type", type)}`
    )
  ).data;
};

export const getCharacter = async (id: number) => {
  return (await axiosInstance.get<ICharacter>(`character/${id}`)).data;
};

export const getLocation = async (id: number) => {
  return (await axiosInstance.get<ILocation>(`location/${id}`)).data;
};

export const getEpisode = async (id: number) => {
  return (await axiosInstance.get<IEpisode>(`episode/${id}`)).data;
};
