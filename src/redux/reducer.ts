import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { themes } from "../utils/constants/constants";
import { ThemePropTypes } from "../utils/types/types";

const initialState: ThemePropTypes = themes.darkPalette;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemePropTypes>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
