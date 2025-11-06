import { atom } from "recoil";

export const DarkModeValue = atom<boolean>({
  key: "DarkMode",
  default: false,
});
export const OpenMobileMenu = atom<boolean>({
  key: "OpenMobileMenu",
  default: false,
});
export const ModalText = atom({
  key: "ModalText",
  default: "",
});
