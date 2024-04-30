import theme from './themes/default'

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}