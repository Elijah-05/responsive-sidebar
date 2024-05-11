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
// export interface ThemePropTypes {
//   main_bg: string;
//   sidebar_bg: string;
//   active_list_bg: string;
//   hover_list_bg: string;

//   light_text: string;
//   fade_text: string;

//   profile_ring: string;
//   active_color_bg: string;
//   active_text_color: string;
//   inactive_color_bg: string;
//   inactive_text_color: string;
// }

export interface ThemeTypes {
  lightPalette: ThemePropTypes;
  darkPalette: ThemePropTypes;
  transparentPalette: ThemePropTypes;
  aqua: ThemePropTypes;
  glass: ThemePropTypes;
}
