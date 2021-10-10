import axios from "axios";

export const getGalleries = (params: string) => {
  return axios.get(`/artworks?${params}`);
};

export const searchGalleries = (query: string) => {
  return axios.get(`/artworks/search?q=${query}&fields=id,title,image_id,thumbnail`);
};

export const getGalleryById = (id: number | string) => {
  return axios.get(`/artworks/${id}`);
};
