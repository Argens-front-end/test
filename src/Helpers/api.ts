import axios from "axios";
import { API_ALBUMS, API_PHOTO, API_PHOTOS } from "../Constants/api";
import { IAlbum, IPhoto } from "../Types";

import Store from "../Redux/Store";
import { addErrorAction } from "../Redux/PhotoRedux/actions";
const dispatch = Store.dispatch;

export async function fetchPhotos(
  page: number,
  albumId?: string
): Promise<IPhoto[]> {
  return axios
    .get<IPhoto[]>(API_PHOTOS, { params: { _page: page, albumId } })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      dispatch(addErrorAction(e));
      return [];
    });
}

export async function fetchAlbums(): Promise<IAlbum[]> {
  return axios
    .get<IAlbum[]>(API_ALBUMS)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e);
      dispatch(addErrorAction(e));
      return [];
    });
}

export async function deletePhoto(id: number): Promise<boolean> {
  return axios
    .delete(API_PHOTO(id))
    .then((res) => {
      return true;
    })
    .catch((e) => {
      console.log(e);
      dispatch(addErrorAction(e));
      return false;
    });
}
