import { Dispatch } from "redux";
import { deletePhoto, fetchAlbums, fetchPhotos } from "../../Helpers/api";
import { IPhoto } from "../../Types";
import { AppAction, AppActionTypes } from "./types";

export const fetchAlbumsAction =
  () => async (dispatch: Dispatch<AppAction>) => {
    dispatch({ type: AppActionTypes.FETCH_ALBUMS });
    fetchAlbums().then((albums) => {
      dispatch({ type: AppActionTypes.FETCH_ALBUMS_SUCCESS, payload: albums });
    });
  };

export const fetchPhotosAction =
  (page: number, albumId?: string) => async (dispatch: Dispatch<AppAction>) => {
    dispatch({ type: AppActionTypes.FETCH_PHOTOS });
    fetchPhotos(page, albumId).then((photos) => {
      dispatch({ type: AppActionTypes.FETCH_PHOTOS_SUCCESS, payload: photos });
    });
  };

export const addErrorAction = (error: any): AppAction => {
  return {
    type: AppActionTypes.ERROR,
    payload: error,
  };
};

export const openModalAction = (photo: IPhoto): AppAction => {
  return {
    type: AppActionTypes.OPEN_MODAL_PHOTO,
    payload: photo,
  };
};

export const closeModalAction = (): AppAction => {
  return {
    type: AppActionTypes.CLOSE_MODAL_PHOTO,
  };
};

export const deletePhotoAction =
  (id: number) => async (dispatch: Dispatch<AppAction | any>) => {
    const statusdelete = await deletePhoto(id);
    if (statusdelete) {
      await dispatch(fetchPhotosAction(1));
      dispatch(closeModalAction());
    }
  };
