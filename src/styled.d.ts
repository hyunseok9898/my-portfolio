import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    layout: string;
    accent: string;
    accentLight: string;
    subtle: string;
    border: string;
    desktop: string;
    mobile: string;
    tablet: string;
  }
}
