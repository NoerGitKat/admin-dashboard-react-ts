import { createSlice } from "@reduxjs/toolkit";
import { TGlobalState } from "../types";
import { ETheme } from "../types/enums";

const initialState: TGlobalState = {
  theme: ETheme.Dark,
  isSidebarOpened: false,
  userId: "63701cc1f03239b7f700000e",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === ETheme.Light ? ETheme.Dark : ETheme.Light;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpened = !state.isSidebarOpened;
    },
  },
});

export const { setTheme, toggleSidebar } = globalSlice.actions;

export default globalSlice.reducer;
