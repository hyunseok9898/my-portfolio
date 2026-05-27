import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";

const HeaderCon = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.bgColor}e6;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${(props) => props.theme.border};
  transition: background-color 0.4s ease;
`;

const Wrapper = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 93%;
  height: 72px;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.accent};
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.75;
    }

    span {
      color: ${(props) => props.theme.accent};
    }
  }

  .menu {
    ul {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    li a {
      display: inline-block;
      padding: 0.4rem 1.1rem;
      font-size: 0.8125rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${(props) => props.theme.subtle};
      position: relative;
      transition: color 0.3s ease;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 1px;
        background-color: ${(props) => props.theme.accent};
        transition: width 0.3s ease;
      }

      &:hover {
        color: ${(props) => props.theme.textColor};
      }

      &:hover::after {
        width: 60%;
      }

      &.active {
        color: ${(props) => props.theme.textColor};
        font-weight: 600;

        &::after {
          width: 60%;
          background-color: ${(props) => props.theme.accent};
        }
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    .menu {
      display: none;
    }
  }
`;

const Header = () => {
  const location = useLocation().pathname;
  return (
    <HeaderCon>
      <Wrapper>
        <div className="logo">
          <Link to="/">
            HS<span>.</span>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link
                to="/"
                className={location === "/" || location === "/home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={location === "/About" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Project"
                className={location === "/Project" ? "active" : ""}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={location === "/Contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <MobileMenu />
      </Wrapper>
    </HeaderCon>
  );
};

export default Header;
