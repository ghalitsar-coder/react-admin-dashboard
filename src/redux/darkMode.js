import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
  name: "darkMode",
  initialState: {
    dark: false,
  },
  reducers: {
    makeDark: (state) => {
      const html = document.querySelector("html");
      html.classList.toggle("dark");
      state.dark = !state.dark;
    },
  },
});

export const { makeDark } = darkMode.actions;
export default darkMode.reducer;
