// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
  ActionCreator,
  AnyAction,
  configureStore,
  Dispatch,
} from "@reduxjs/toolkit";
import rootReducer from "./index";
import { routerMiddleware } from "react-router-redux";
import { localStorageMiddleware } from "../middleware";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<AnyAction>;

export const history = require("history").createBrowserHistory();
const myRouterMiddleware = routerMiddleware(history);

export const store = configureStore({
  reducer: {
    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      myRouterMiddleware,
      localStorageMiddleware
    );
  },

  devTools: process.env.NODE_ENV !== "production",
});
