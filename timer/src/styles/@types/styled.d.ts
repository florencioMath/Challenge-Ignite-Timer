import { defaultTheme } from './../themes/default'
import 'styled-components'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
