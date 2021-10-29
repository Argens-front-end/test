import { IAlbum, IPhoto } from "../../Types";

export interface PhotoStore {
  photos: IPhoto[];
  albums: IAlbum[];
  errors: any[];
  loading: boolean;
  openModal: boolean;
  activePhoto?: IPhoto;
  page: number;
  albumId: string | undefined;
}

export enum AppActionTypes {
  FETCH_ALBUMS = "FETCH_ALBUMS",
  FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS",
  FETCH_PHOTOS = "FETCH_PHOTOS",
  FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
  ERROR = "ERROR",
  OPEN_MODAL_PHOTO = "OPEN_MODAL_PHOTO",
  CLOSE_MODAL_PHOTO = "CLOSE_MODAL_PHOTO",
  ON_CHANGE_PAGE = "ON_CHANGE_PAGE",
  ON_CHANGE_ALBUM_ID = "ON_CHANGE_ALBUM_ID",
}

export type AppAction =
  | fetchAlbumsAction
  | fetchAlbumsSuccessAction
  | fetchPhotosAction
  | fetchPhotosSuccessAction
  | errorAction
  | openModalAction
  | closeModalAction
  | onChangePageAction
  | onChangeAlbumId;

interface fetchAlbumsAction {
  type: AppActionTypes.FETCH_ALBUMS;
}

interface fetchAlbumsSuccessAction {
  type: AppActionTypes.FETCH_ALBUMS_SUCCESS;
  payload: IAlbum[];
}

interface fetchPhotosAction {
  type: AppActionTypes.FETCH_PHOTOS;
}

interface fetchPhotosSuccessAction {
  type: AppActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: IPhoto[];
}

interface errorAction {
  type: AppActionTypes.ERROR;
  payload: any;
}

interface openModalAction {
  type: AppActionTypes.OPEN_MODAL_PHOTO;
  payload: IPhoto;
}

interface closeModalAction {
  type: AppActionTypes.CLOSE_MODAL_PHOTO;
}

interface onChangePageAction {
  type: AppActionTypes.ON_CHANGE_PAGE;
  payload: number;
}

interface onChangeAlbumId {
  type: AppActionTypes.ON_CHANGE_ALBUM_ID;
  payload: string;
}
