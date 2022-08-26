import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { baseApi } from "./base.api";
import authReducer from "./auth/authSlice";
import operationsReducer from "./operations/operationsSlice"
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    operations: operationsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
