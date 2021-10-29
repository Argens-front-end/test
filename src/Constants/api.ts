import configs from "../Configs";
const { apiHost } = configs;

export const API_PHOTOS = apiHost + "/photos";
export const API_ALBUMS = apiHost + "/albums";
export const API_PHOTO = (id: number) => API_PHOTOS + "/" + id;
