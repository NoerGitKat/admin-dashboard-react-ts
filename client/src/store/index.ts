import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi, storeApi } from "./api";
import globalSlice from "./globalSlice";

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(authApi.middleware, storeApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {global: globalState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
