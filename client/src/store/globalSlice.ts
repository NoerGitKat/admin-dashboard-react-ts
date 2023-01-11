import { createSlice } from "@reduxjs/toolkit";
import { TGlobalState } from "../types";
import { ETheme } from "../types/enums";

const initialState: TGlobalState = {
  theme: ETheme.Dark,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === ETheme.Light ? ETheme.Dark : ETheme.Light;
    },
  },
});

export const { setTheme } = globalSlice.actions;

export default globalSlice.reducer;
