import defaultTheme from ".";

export type ThemeKeysProps = {} | string | number;
export type ThemeTypeProps = "default" | "dark";
export type ThemeObjectProps = typeof defaultTheme

export type ColorKeys = keyof typeof defaultTheme.color;
export type IconSizeKeys = keyof typeof defaultTheme.icon.size;
