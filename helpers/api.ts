import axios from 'axios';
import { IGetAnimeByIdResponse } from '../interfaces/getAnimeByIdResponse.interface';
import { ISeasonNowResponse } from '../interfaces/seasonNowResponse.interface';

export const API_BASE_URL = 'https://api.jikan.moe/v4';

axios.defaults.baseURL = API_BASE_URL;

export const getAnimeById = async (id: number | string) => {
  const {
    data: { data },
  } = await axios.get<IGetAnimeByIdResponse>(`/anime/${id}`);
  return data;
};

export const getCurrentSeasonAnimes = async () => {
  const {
    data: { data },
  } = await axios.get<ISeasonNowResponse>(`/seasons/now`);
  return data;
};
