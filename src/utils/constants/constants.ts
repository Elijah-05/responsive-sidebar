import { ThemeTypes } from "../types/types";

const themes: ThemeTypes = {
  lightPalette: {
    primary_color: {
      bg: "bg-green-500",
      text: "text-green-500",
      border: "border-green-500",
    },
    background: "bg-slate-300",
    sidebar_bg: "bg-slate-100",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#00ff0050] to-green-500",
    indicator_color: "bg-",
  },

  darkPalette: {
    primary_color: {
      bg: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-500",
    },
    background: "bg-slate-700",
    sidebar_bg: "bg-gradient-to-t from-[#08182E] to-[#091A32]",

    text_color: "text-slate-100",
    border_color: "border-blue-900",
    profile_ring: "bg-gradient-to-t from-[#0000ff50] to-blue-600",
    indicator_color: "bg-",
  },

  transparentPalette: {
    primary_color: {
      bg: "bg-green-500",
      text: "text-green-500",
      border: "border-green-500",
    },
    background: "bg-slate-700",
    sidebar_bg: "bg-gradient-to-t from-[#08182E] to-[#091A32]",

    text_color: "text-white",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient from-transparent to-blue-600",
    indicator_color: "bg-",
  },

  aqua: {
    primary_color: {
      bg: "bg-[#00C5FF]",
      text: "text-[#00C5FF]",
      border: "border-[#00C5FF]",
    },
    background: "bg-slate-700",
    sidebar_bg: "bg-gradient-to-t from-[#322214] to-[#322214]",

    text_color: "text-white",
    border_color: "border-slate-700",
    profile_ring: "bg-gradient-to-t from-[#00ff0050] to-[#00C5FF]",
    indicator_color: "bg-",
  },

  glass: {
    primary_color: {
      bg: "bg-[#D02FA4]",
      text: "text-[#D02FA4]",
      border: "border-[#D02FA4]",
    },
    background: "bg-slate-200",
    sidebar_bg:
      "bg-gradient-to-t from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.3)] bg-blur-md",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#D02FA470] to-[#D02FA4]",
    indicator_color: "bg-",
  },

  // lightPalette: {
  //   main_bg: "bg-slate-300",
  //   sidebar_bg: "bg-slate-100",
  //   active_list_bg: "bg-slate-600",
  //   hover_list_bg: "group-hover:bg-[]",

  //   profile_ring:
  //     "bg-gradient-to-tr from-40% from-[rgba(250,250,250,0.3)] to-white",

  //   active_color_bg: "bg-",
  //   active_text_color: "text-slate-50",
  //   inactive_color_bg: "bg-slate-500",
  //   inactive_text_color: "text-slate-500",

  //   light_text: "text-slate-800",
  //   fade_text: "text-[]",
  // },

  // darkPalette: {
  //   main_bg: "bg-slate-700",
  //   sidebar_bg: "bg-gradient-to-t from-[#08182E] to-[#091A32]",
  //   active_list_bg: "bg-blue-600",
  //   hover_list_bg: "group-hover:bg-[]",

  //   profile_ring:
  //     "bg-gradient-to-tr from-40% from-[rgba(250,250,250,0.3)] to-white",

  //   active_color_bg: "bg-",
  //   active_text_color: "text-white",
  //   inactive_color_bg: "bg-slate-50",
  //   inactive_text_color: "text-slate-50",

  //   light_text: "text-slate-50",
  //   fade_text: "text-[]",
  // },
};

export { themes };
