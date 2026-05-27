import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { DarkModeValue } from "../etc/atom";

const Container = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 123456;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.875rem;
  transition: border-color 0.3s ease, background-color 0.4s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

  &:hover {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.accent};
  }

  @media ${(props) => props.theme.mobile} {
    bottom: 1.25rem;
    right: 1.25rem;
  }
`;

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

function DarkMode() {
  const [dark, setDark] = useRecoilState(DarkModeValue);

  return (
    <Container
      onClick={() => setDark((prev) => !prev)}
      whileTap={{ scale: 0.9 }}
      title={dark ? "라이트 모드" : "다크 모드"}
    >
      <motion.div
        key={dark ? "sun" : "moon"}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </motion.div>
    </Container>
  );
}

export default DarkMode;
