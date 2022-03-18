import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authentication from "./authentication";
import { api as authApi } from "../services/authentication";
import { rememberReducer, rememberEnhancer } from "redux-remember";

const rootReducers = combineReducers({
  authentication,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rememberReducer((state, action) => {
    return rootReducers(state, action);
  }),
  middleware: (getDefault) =>
    getDefault({ immutableCheck: false, serializableCheck: false }).concat([
      authApi.middleware,
    ]),
  enhancers: [rememberEnhancer(window.localStorage, ["authentication"])],
});

export type S = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
