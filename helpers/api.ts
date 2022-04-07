import axios from 'axios';
import { IGetAnimeByIdResponse } from '../interfaces/getAnimeByIdResponse.interface';
import { ISeasonNowResponse } from '../interfaces/seasonNowResponse.interface';

export const API_BASE_URL = 'https://api.jikan.moe/v4/';

export const getAnimeById = async (id: number | string) => {
  const {
    data: { data },
  } = await axios.get<IGetAnimeByIdResponse>(`https://api.jikan.moe/v4/anime/${id}`);
  return data;
};

export const getCurrentSeasonAnime = async () => {
  const {
    data: { data },
  } = await axios.get<ISeasonNowResponse>(`${API_BASE_URL}seasons/now`);
  return data;
};
