import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./slice/app.slice";
import userSlice from "./slice/user.slice";
export const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
export type { RootState };

type AppDispatch = typeof store.dispatch;
export type { AppDispatch };
