import { DefaultTheme } from "styled-components";

const size = {
  mobile: "767px",
  tablet: "1023px",
  desktop: "1024px",
};

export const LightTheme: DefaultTheme = {
  bgColor: "#FAFAF8",
  textColor: "#1C1C1E",
  layout: "#F4F2EE",
  accent: "#C9A96E",
  accentLight: "#E8D5B0",
  subtle: "#8C8A85",
  border: "rgba(28,28,30,0.10)",
  mobile: `(max-width:${size.mobile})`,
  tablet: `(min-width:768px) and (max-width:${size.tablet})`,
  desktop: `(min-width:${size.desktop})`,
};

export const DarkTheme: DefaultTheme = {
  bgColor: "#111110",
  layout: "#1A1918",
  textColor: "#E8E5DF",
  accent: "#C9A96E",
  accentLight: "#4A3A22",
  subtle: "#6E6B65",
  border: "rgba(232,229,223,0.10)",
  mobile: `(max-width:${size.mobile})`,
  tablet: `(min-width:768px) and (max-width:${size.tablet})`,
  desktop: `(min-width:${size.desktop})`,
};
