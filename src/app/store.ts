import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import antelopesReducer from "../features/antelopes/antelopesSlice";

export const store = configureStore({
  reducer: {
    antelopes: antelopesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
