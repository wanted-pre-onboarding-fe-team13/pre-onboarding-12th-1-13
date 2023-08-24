import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      grey100: string;
      grey200: string;
      grey300: string;
      grey600: string;
      grey750: string;
      grey850: string;

      primary: string;
      primaryLight: string;

      fontPrimary: string;
      fontSecondary: string;
    };
  }
}
