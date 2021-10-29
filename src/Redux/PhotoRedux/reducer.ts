import { AppAction, AppActionTypes, PhotoStore } from "./types";

const initialState: PhotoStore = {
  photos: [],
  albums: [],
  errors: [],
  loading: true,
  openModal: false,
  activePhoto: undefined,
  page: 1,
  albumId: undefined,
};

export default function AppReducer(
  state: PhotoStore = initialState,
  action: AppAction
): PhotoStore {
  switch (action.type) {
    case AppActionTypes.FETCH_ALBUMS:
      return state;

    case AppActionTypes.FETCH_ALBUMS_SUCCESS:
      return { ...state, albums: action.payload };

    case AppActionTypes.FETCH_PHOTOS:
      return { ...state, loading: true };

    case AppActionTypes.FETCH_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, loading: false };

    case AppActionTypes.ERROR:
      return { ...state, errors: [...state.errors, action.payload] };

    case AppActionTypes.OPEN_MODAL_PHOTO:
      return { ...state, activePhoto: action.payload, openModal: true };

    case AppActionTypes.CLOSE_MODAL_PHOTO:
      return { ...state, openModal: false, activePhoto: undefined };

    case AppActionTypes.ON_CHANGE_PAGE:
      return { ...state, page: action.payload };

    case AppActionTypes.ON_CHANGE_ALBUM_ID:
      return { ...state, albumId: action.payload };

    default:
      return state;
  }
}
