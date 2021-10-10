import { ThemeObjectProps } from './themes/types'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObjectProps {}
  // export interface DefaultTheme extends DarkTheme {}
}