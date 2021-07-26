import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Antelope } from "./constants";
import * as antelopesApi from "./antelopesApi";
import { RootState } from "../../app/store";

type AntelopesState = {
  status: "idle" | "loading" | "failed";
  antelopes: Antelope[];
};

const initialState: AntelopesState = {
  status: "idle",
  antelopes: [],
};

export const antelopesThunkActions = {
  fetch: createAsyncThunk("antelopes/fetch", async () => {
    const response = await antelopesApi.fetch();
    return {
      antelopes: response.data,
    };
  }),
};

const antelopesSlice = createSlice({
  name: "antelopes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(antelopesThunkActions.fetch.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(antelopesThunkActions.fetch.fulfilled, (state, action) => {
      state.status = "idle";
      state.antelopes = action.payload.antelopes;
    });
  },
});

export const selectAntelopes = (state: RootState) => state.antelopes;

export const antelopesActions = antelopesSlice.actions;

export default antelopesSlice.reducer;
