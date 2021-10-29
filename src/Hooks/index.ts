import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "../Redux/RootReducer";

import * as AppActions from "../Redux/PhotoRedux/actions";
import { bindActionCreators } from "redux";

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AppActions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
