import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { OpenMobileMenu } from "../etc/atom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

interface OpenMenu {
  open: boolean;
}

const Wrapper = styled.div<OpenMenu>`
  position: relative;
`;

const Menu = styled.div<OpenMenu>`
  @media ${(props) => props.theme.desktop} {
    display: none;
  }

  @media ${(props) => props.theme.mobile} {
    display: block;
    position: fixed;
    transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    top: 0;
    right: 0;
    height: 100%;
    z-index: 998;
    width: 280px;
    background-color: ${(props) => props.theme.bgColor};
    border-left: 1px solid ${(props) => props.theme.border};
    transform: translateX(${(props) => (props.open ? "0" : "100%")});
    padding: 5rem 2rem 2rem;
    opacity: ${(props) => (props.open ? "1" : "0")};

    .menuList {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      li a {
        display: block;
        padding: 0.75rem 0;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${(props) => props.theme.subtle};
        border-bottom: 1px solid ${(props) => props.theme.border};
        transition: color 0.25s ease;

        &:hover {
          color: ${(props) => props.theme.accent};
        }
      }
    }

    .etc {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .social {
        display: flex;
        gap: 0.75rem;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 1px solid ${(props) => props.theme.border};
          color: ${(props) => props.theme.subtle};
          font-size: 0.875rem;
          transition: all 0.25s ease;

          &:hover {
            border-color: ${(props) => props.theme.accent};
            color: ${(props) => props.theme.accent};
          }
        }
      }

      .copyright {
        font-size: 0.7rem;
        letter-spacing: 0.05em;
        color: ${(props) => props.theme.subtle};
      }
    }
  }
`;

const Overlay = styled.div<OpenMenu>`
  @media ${(props) => props.theme.desktop} {
    display: none;
  }

  @media ${(props) => props.theme.mobile} {
    transition: all 0.45s ease;
    width: 100%;
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? "1" : "0")};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 997;
  }
`;

function SideMenu() {
  const [open, setOpen] = useRecoilState(OpenMobileMenu);

  return (
    <Wrapper open={open}>
      <Overlay open={open} onClick={() => setOpen((prev) => !prev)} />
      <Menu open={open}>
        <ul className="menuList">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/About" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/Project" onClick={() => setOpen(false)}>Project</Link></li>
          <li><Link to="/Contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
        <div className="etc">
          <div className="social">
            <a
              href="https://github.com/hyunseok9898"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
          </div>
          <div className="copyright">© 2025 Hong HyunSeok</div>
        </div>
      </Menu>
    </Wrapper>
  );
}

export default SideMenu;
