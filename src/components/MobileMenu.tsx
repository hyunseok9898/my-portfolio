import { useRecoilState } from "recoil";
import styled from "styled-components";
import { OpenMobileMenu } from "../etc/atom";

const MenuBtn = styled.button<{ isOpen: boolean }>`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  background: none;
  border: none;
  padding: 0;

  span {
    display: block;
    height: 1.5px;
    background-color: ${(props) => props.theme.textColor};
    border-radius: 1px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      width: ${(props) => (props.isOpen ? "1.5rem" : "1.5rem")};
      transform: ${(props) =>
        props.isOpen ? "translateY(6.5px) rotate(45deg)" : "none"};
    }

    &:nth-child(2) {
      width: 1rem;
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
      transform: ${(props) => (props.isOpen ? "translateX(8px)" : "none")};
    }

    &:nth-child(3) {
      width: ${(props) => (props.isOpen ? "1.5rem" : "1.5rem")};
      transform: ${(props) =>
        props.isOpen ? "translateY(-6.5px) rotate(-45deg)" : "none"};
    }
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
  }
`;

const MobileMenu = () => {
  const [open, setOpen] = useRecoilState(OpenMobileMenu);
  return (
    <MenuBtn
      onClick={() => setOpen((prev) => !prev)}
      isOpen={open}
      aria-label="Toggle menu"
    >
      <span />
      <span />
      <span />
    </MenuBtn>
  );
};

export default MobileMenu;
