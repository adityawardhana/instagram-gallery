export const space = [
  0,
  2,
  4,
  8,
  10,
  12,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  72,
  80,
];

export const pallete = {
  cyan50: "#EDFEF5",
  cyan100: "#D1FCF2",
  cyan200: "#A4FAEC",
  cyan300: "#74F1E8",
  cyan400: "#50E2E3",
  cyan500: "#1DC2D2",
  cyan600: "#1599B4",
  cyan700: "#0E7497",
  cyan800: "#095479",
  cyan900: "#053D64",

  green50: "#F4FEEF",
  green100: "#DAFBD6",
  green200: "#AFF7B0",
  green300: "#83E78D",
  green400: "#5FCF75",
  green500: "#31b057",
  green600: "#239751",
  green700: "#187E4B",
  green800: "#0F6642",
  green900: "#09543D",

  yellow50: "#FEFCED",
  yellow100: "#FEF5D2",
  yellow200: "#FEE9A5",
  yellow300: "#FDD978",
  yellow400: "#FCC957",
  yellow500: "#fbb020",
  yellow600: "#D78F17",
  yellow700: "#B47010",
  yellow800: "#91540A",
  yellow900: "#784106",

  red50: "#FEF7ED",
  red100: "#FCE3D1",
  red200: "#FAC0A4",
  red300: "#F19474",
  red400: "#E36950",
  red500: "#d22d1d",
  red600: "#B41615",
  red700: "#970E18",
  red800: "#79091A",
  red900: "#64051C",

  black50: "#F7FAF8",
  black100: "#F4F5F8",
  black200: "#EAECF1",
  black300: "#CDD0D7",
  black400: "#A6A8AF",
  black500: "#72747b",
  black600: "#536769",
  black700: "#395358",
  black800: "#243E47",
  black900: "#152E3B",

  white: "#FFFFFF",
};

export const colorBrand = {
  primary: pallete.black800,
  secondary: pallete.cyan500,
  success: pallete.green500,
  error: pallete.red500,
  warning: pallete.yellow500,
  info: pallete.black500,
};

export const color = {
  ...colorBrand,
  ...pallete,
};

export const body = {
  background: color.white,
  color: color.black800,
  fontSize: "14px",
};

export const border = {
  radius: "8px",
  color: color.black200,
  borderWidth: "1px",
  base: "1px solid" + color.black200,
  primary: "1px solid" + color.primary,
};


export const icon = {
  size: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
};

export const zindex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalbg: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export const shadow = [
  "none",
  "0 1px 4px 0 rgba(112, 114, 125, 0.2)",
  "0 1px 4px 0 rgba(112, 114, 125, 0.4)",
  "0 2px 8px 0 rgba(112, 114, 125, 0.4)",
];

export const text = {
  type: {
    H28: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    H24: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "28px",
    },
    H20: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    H16: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    H14: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "18px",
    },
    H12: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
    B16: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    B14: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "18px",
    },
    B12: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    B10: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "12px",
    },
    P16: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22px",
    },
    P14: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    P12: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
    },
  },
};

