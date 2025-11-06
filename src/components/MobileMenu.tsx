import { useRecoilState } from "recoil";
import styled from "styled-components";
import { OpenMobileMenu } from "../etc/atom";

const Menu = styled.div<{ isOpen: boolean }>`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display:none;

  & > span {
    display:block;
    width: 40px;
    height: 2px;
    margin-top: 19px;
    position: relative;
    background-color: ${(props) => props.theme.textColor};

    &::before {
      content: "";
      width: ${(props) => (props.isOpen ? "20px" : "40px")};
      height: 2px;
      background-color: ${(props) => props.theme.textColor};
      position: absolute;
      right: 0;
      top: 6px;
      transition: width 0.3s;
    }

    &::after {
      content: "";
      width: ${(props) => (props.isOpen ? "20px" : "40px")};
      height: 2px;
      background-color: ${(props) => props.theme.textColor};
      position: absolute;
      left: 0;
      bottom: 6px;
      transition: width 0.3s;
    }
  }
     @media ${props => props.theme.mobile} {
    display: block;
  }
`;

const MobileMenu = () => {
  const [open, setOpen] = useRecoilState(OpenMobileMenu);
  return (
    <Menu
      className="mMenu"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      isOpen={open}
    >
      <span></span>
    </Menu>
  );
};

export default MobileMenu;
