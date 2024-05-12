export interface CollapsePropsType {
  isCollapsed: boolean;
  toggleSideBar: (state: boolean) => void;
}

export interface ThemePropTypes {
  primary_color: {
    bg: string;
    text: string;
    border: string;
  };
  background: string;
  sidebar_bg: string;

  text_color: string;
  border_color: string;
  profile_ring: string;
  indicator_color: string;
}

export interface ThemeTypes {
  lightPalette: ThemePropTypes;
  nightPalette: ThemePropTypes;
  darkBlue: ThemePropTypes;
  turquoise: ThemePropTypes;
  aqua: ThemePropTypes;
  green: ThemePropTypes;
  coralPink: ThemePropTypes;
  orange: ThemePropTypes;
  violet: ThemePropTypes;
  glass: ThemePropTypes;
}
