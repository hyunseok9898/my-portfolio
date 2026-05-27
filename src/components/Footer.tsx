import styled from "styled-components";
import { FiGithub } from "react-icons/fi";

const FooterBar = styled.footer`
  height: 72px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.bgColor}e6;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: ${(props) => props.theme.subtle};
  position: fixed;
  padding: 0 70px;
  border-top: 1px solid ${(props) => props.theme.border};
  transition: background-color 0.4s ease;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  .copyright {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    color: ${(props) => props.theme.subtle};
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 1rem;

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
        transform: translateY(-2px);
      }
    }
  }
`;

function Footer() {
  return (
    <FooterBar>
      <Wrapper>
        <div className="copyright">
          © 2026 Hong HyunSeok. All rights reserved.
        </div>
        <div className="social-links">
          <a
            href="https://github.com/hyunseok9898"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </div>
      </Wrapper>
    </FooterBar>
  );
}

export default Footer;
