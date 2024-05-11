import { ThemeTypes } from "../types/types";

const themes: ThemeTypes = {
  lightPalette: {
    main_bg: "bg-slate-300",
    sidebar_bg: "bg-slate-100",
    active_list_bg: "bg-green-500",
    hover_list_bg: "group-hover:bg-[]",

    profile_ring:
      "bg-gradient-to-tr from-40% from-[rgba(250,250,250,0.3)] to-white",

    active_color_bg: "bg-",
    active_text_color: "text-slate-50",
    inactive_color_bg: "bg-slate-500",
    inactive_text_color: "text-slate-500",

    light_text: "text-slate-800",
    fade_text: "text-[]",
  },

  darkPalette: {
    main_bg: "bg-slate-700",
    sidebar_bg: "bg-gradient-to-t from-[#08182E] to-[#091A32]",
    active_list_bg: "bg-blue-600",
    hover_list_bg: "group-hover:bg-[]",

    profile_ring:
      "bg-gradient-to-tr from-40% from-[rgba(250,250,250,0.3)] to-white",

    active_color_bg: "bg-",
    active_text_color: "text-white",
    inactive_color_bg: "bg-slate-50",
    inactive_text_color: "text-slate-50",

    light_text: "text-slate-50",
    fade_text: "text-[]",
  },

  transparentPalette: {
    main_bg: "bg-[#D4DCE4]",
    sidebar_bg: "bg-[#EEF1F6]",
    active_list_bg: "bg-[]",
    hover_list_bg: "group-hover:bg-[]",

    profile_ring:
      "bg-gradient-to-tr from-40% from-[rgba(250,250,250,0.3)] to-white",

    active_color_bg: "bg-",
    active_text_color: "text-",
    inactive_color_bg: "bg-",
    inactive_text_color: "text-",

    light_text: "text-[]",
    fade_text: "text-[]",
  },
};

export { themes };
