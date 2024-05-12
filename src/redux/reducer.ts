import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { themes } from "../utils/constants/constants";
import { ThemePropTypes } from "../utils/types/types";

interface ThemeStateType {
  isDark: boolean;
  theme: ThemePropTypes;
}

const initialState: ThemeStateType = {
  isDark: false,
  theme: themes.nightPalette,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeStateType>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
