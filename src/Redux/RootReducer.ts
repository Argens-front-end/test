import { combineReducers } from "redux";
import AppReducer from "./PhotoRedux/reducer"

export const RootReducer = combineReducers({
  App: AppReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
