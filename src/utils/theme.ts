import { css } from "styled-components";

const getThemeColor = (colors: any, value: any) => {
  return Object.keys(colors).indexOf(value) > -1 ? colors[value] : value;
};

const getBorder = (colors: any, value: any) => {
  if (value) {
    if (value === "none") return value;
    const props = value.split(" ");
    return props[2]
      ? `${props[0]} ${props[1]} ${getThemeColor(colors, props[2])}`
      : `${props[0]} ${props[1]}`;
  }
};

const getShadow = (shadows: any, value: any) => {
  if (value) {
    return shadows[value] || value;
  }
};

export const typography = (props: any) => ({
  fontFamily: props.fontFamily,
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
  textAlign: props.textAlign,
  fontStyle: props.fontStyle,
  wordBreak: props.wordBreak,
  textDecoration: props.textDecoration
});

export const sizing = (props: any) => ({
  width: props.width,
  height: props.height,
  maxWidth: props.maxWidth,
  minWidth: props.minWidth,
  maxHeight: props.maxHeight,
  minHeight: props.minHeight,
});

export const spacing = (props: any) => ({
  padding: props.p,
  paddingTop: props.pt || props.py,
  paddingRight: props.pr || props.px,
  paddingBottom: props.pb || props.py,
  paddingLeft: props.pl || props.px,
  margin: props.m,
  marginTop: props.mt || props.my,
  marginRight: props.mr || props.mx,
  marginBottom: props.mb || props.my,
  marginLeft: props.ml || props.mx,
});

export const color = (props: any) => ({
  color:
    Object.keys(props.theme.color).indexOf(props.color) > -1
      ? props.theme.color[props.color]
      : props.color,
  backgroundColor:
    Object.keys(props.theme.color).indexOf(props.bg) > -1
      ? props.theme.color[props.bg]
      : props.bg,
});

export const position = (props: any) => ({
  position: props.position,
  zIndex: props.zIndex,
  top: props.top,
  right: props.right,
  bottom: props.bottom,
  left: props.left,
  transform: props.transform,
});

export const border = (props: any) => ({
  border: getBorder(props.theme.color, props.border),
  borderWidth: props.borderWidth,
  borderStyle: props.borderStyle,
  borderColor: getThemeColor(props.theme.color, props.borderColor),
  borderRadius: props.borderRadius,
  borderTop: getBorder(props.theme.color, props.borderTop),
  borderTopWidth: props.borderTopWidth,
  borderTopStyle: props.borderTopStyle,
  borderTopColor: getThemeColor(props.theme.color, props.borderTopColor),
  borderTopLeftRadius: props.borderTopLeftRadius,
  borderTopRightRadius: props.borderTopRightRadius,
  borderRight: getBorder(props.theme.color, props.borderRight),
  borderRightWidth: props.borderRightWidth,
  borderRightStyle: props.borderRightStyle,
  borderRightColor: getThemeColor(props.theme.color, props.borderRightColor),
  borderBottom: getBorder(props.theme.color, props.borderBottom),
  borderBottomWidth: props.borderBottomWidth,
  borderBottomStyle: props.borderBottomStyle,
  borderBottomColor: getThemeColor(props.theme.color, props.borderBottomColor),
  borderBottomLeftRadius: props.borderBottomLeftRadius,
  borderBottomRightRadius: props.borderBottomRightRadius,
  borderLeft: getBorder(props.theme.color, props.borderLeft),
  borderLeftWidth: props.borderLeftWidth,
  borderLeftStyle: props.borderLeftStyle,
  borderLeftColor: getThemeColor(props.theme.color, props.borderLeftColor),
  borderX: props.borderX,
  borderY: props.borderY,
});

export const display = (props: any) => ({
  display: props.display,
  visibility: props.visibility,
  overflow: props.overflow,
});

export const shadow = (props: any) => ({
  boxShadow: getShadow(props.theme.shadow, props.boxShadow),
});

export const flexbox = (props: any) => ({
  display:
    props.alignItems?.length > 0 ||
    props.alignContent?.length > 0 ||
    props.justifyItems?.length > 0 ||
    props.justifyContent?.length > 0 ||
    props.flexFlow?.length > 0 ||
    props.flexWrap?.length > 0 ||
    props.flexDirection?.length > 0
      ? "flex"
      : props.display,
  alignItems: props.alignItems,
  alignContent: props.alignContent,
  justifyItems: props.justifyItems,
  justifyContent: props.justifyContent,
  flexFlow: props.flexFlow,
  flexWrap: props.flexWrap,
  flexDirection: props.flexDirection,
  flex: props.flex,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  flexBasis: props.flexBasis,
  justifySelf: props.justifySelf,
  alignSelf: props.alignSelf,
  order: props.order,
});

export const clamp = (props: any) =>
  props.clamp &&
  css`
    display: -webkit-box;
    -webkit-line-clamp: ${props.clamp};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;

