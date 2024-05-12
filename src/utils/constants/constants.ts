import { ThemeTypes } from "../types/types";

const themes: ThemeTypes = {
  lightPalette: {
    primary_color: {
      bg: "bg-blue-500",
      text: "text-blue-500",
      border: "border-blue-500",
    },
    background: "bg-slate-200",
    sidebar_bg:
      "border-[3px] border-slate-100 bg-gradient-to-t from-slate-100 to-slate-100",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#0000ff20] to-blue-500",
    indicator_color: "bg-",
  },

  green: {
    primary_color: {
      bg: "bg-[#38b000]",
      text: "text-[#38b000]",
      border: "border-[#38b000]",
    },
    background: "bg-[#38b00030]",
    sidebar_bg: "border-[3px] border-slate-50 bg-slate-50",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#38b00020] to-[#38b000]",
    indicator_color: "bg-",
  },

  nightPalette: {
    primary_color: {
      bg: "bg-slate-600",
      text: "text-slate-600",
      border: "border-slate-600",
    },
    background: "bg-[#232323]",
    sidebar_bg:
      "border-[3px] border-[#111111] bg-gradient-to-t from-[#111111] to-[#111111]",

    text_color: "text-slate-100",
    border_color: "border-slate-900",
    profile_ring: "bg-gradient-to-t from-[#ffffff20] to-slate-200",
    indicator_color: "bg-",
  },
  darkBlue: {
    primary_color: {
      bg: "bg-blue-600",
      text: "text-blue-600",
      border: "border-blue-500",
    },
    background: "bg-slate-700",
    sidebar_bg:
      "border-[3px] border-[#0000ff10] bg-gradient-to-t from-[#08182E] to-[#091A32]",

    text_color: "text-slate-100",
    border_color: "border-slate-900",
    profile_ring: "bg-gradient-to-t from-[#0000ff50] to-blue-600",
    indicator_color: "bg-",
  },

  aqua: {
    primary_color: {
      bg: "bg-[#00C5FF]",
      text: "text-[#00C5FF]",
      border: "border-[#00C5FF]",
    },
    background: "bg-[#00C5FF30]",
    sidebar_bg: "border-[3px] border-slate-50 bg-slate-50",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#00C5FF20] to-[#00C5FF]",
    indicator_color: "bg-",
  },

  turquoise: {
    primary_color: {
      bg: "bg-[#02c39a]",
      text: "text-[#02c39a]",
      border: "border-[#02c39a]",
    },
    background: "bg-[#02c39a30]",
    sidebar_bg: "border-[3px] border-slate-50 bg-slate-50",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#02c39a20] to-[#02c39a]",
    indicator_color: "bg-",
  },

  coralPink: {
    primary_color: {
      bg: "bg-[#ff4d6d]",
      text: "text-[#ff4d6d]",
      border: "border-[#ff4d6d]",
    },
    background: "bg-[#ff4d6d30]",
    sidebar_bg:
      "border-[3px] border-slate-50 bg-gradient-to-t from-slate-100 to-slate-50 bg-blur-md",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#ff4d6d20] to-[#ff4d6d]",
    indicator_color: "bg-",
  },
  orange: {
    primary_color: {
      bg: "bg-[#fb5607]",
      text: "text-[#fb5607]",
      border: "border-[#fb5607]",
    },
    background: "bg-[#fb560730]",
    sidebar_bg:
      "border-[3px] border-slate-50 bg-gradient-to-t from-slate-100 to-slate-50 bg-blur-md",

    text_color: "text-slate-700",
    border_color: "border-slate-300",
    profile_ring: "bg-gradient-to-t from-[#fb560720] to-[#fb5607]",
    indicator_color: "bg-",
  },
  violet: {
    primary_color: {
      bg: "bg-[#5a189a]",
      text: "text-[#5a189a]",
      border: "border-[#5a189a]",
    },
    background: "bg-[#10002b99]",
    sidebar_bg:
      "border-[3px] border-[#5a189a10] bg-gradient-to-t from-[#10002b] to-[#10002b] bg-blur-md",

    text_color: "text-slate-200",
    border_color: "border-slate-700",
    profile_ring: "bg-gradient-to-t from-[#5a189a20] to-[#5a189a]",
    indicator_color: "bg-",
  },
  glass: {
    primary_color: {
      bg: "bg-[#5a189a]",
      text: "text-[#5a189a]",
      border: "border-[#5a189a]",
    },
    background: "bg-gradient-to-t from-blue-200 from-5% via-20% via-blue-300 to-blue-100",
    sidebar_bg:
      "border-[3px] border-opacity-0 from-slate-300 via-blue-300 to-slate-300 to-70% bg-opacity-10 border-[3px] border-[#ffffff80]",

    text_color: "text-slate-800",
    border_color: "border-slate-400",
    profile_ring: "bg-gradient-to-t from-slate-300 via-blue-300 to-slate-300",
    indicator_color: "bg-",
  },
};

export { themes };
