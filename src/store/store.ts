import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { orderInLineApi } from "./orderInLine/orderInLine.api";
import { authApi } from "./auth/auth.api";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    [orderInLineApi.reducerPath]: orderInLineApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      orderInLineApi.middleware,
      authApi.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
