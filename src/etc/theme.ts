import { DefaultTheme } from "styled-components";
const size = {
  mobile: "767px",
  tablet: "1023px",
  desktop: "1024px",
};
export const LightTheme: DefaultTheme = {
  bgColor: "#fff",
  textColor: "#333",
  layout: "#F6FBFF",
  mobile: `(max-width:${size.mobile})`,
  tablet: `(min-width:768px) and (max-width:${size.tablet})`,
  desktop: `(min-width:${size.desktop})`,
};
export const DarkTheme: DefaultTheme = {
  bgColor: "#333",
  layout: "#333",
  textColor: "#fff",
  mobile: `(max-width:${size.mobile})`,
  tablet: `(min-width:768px) and (max-width:${size.tablet})`,
  desktop: `(min-width:${size.desktop})`,
};

