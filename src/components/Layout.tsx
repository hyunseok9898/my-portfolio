import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideMenu from "./SideMenu";

const Container = styled.main`
  position: absolute;
  top: 72px;
  bottom: 72px;
  left: 70px;
  right: 70px;
  overflow: hidden;

  & > div {
    height: 100%;
    display: flex;
  }

  @media ${(props) => props.theme.mobile} {
    position: static;
  }
`;

const Picture = styled.div`
  width: 40%;
  position: relative;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    filter: brightness(0.82) saturate(0.9);
    transition: transform 8s ease;

    &:hover {
      transform: scale(1.04);
    }
  }

  /* 오른쪽 콘텐츠 영역으로 자연스럽게 페이드 */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.08) 0%,
      transparent 50%,
      ${(props) => props.theme.layout} 100%
    );
    pointer-events: none;
  }

  /* 아래쪽 미묘한 비네팅 */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.18) 0%,
      transparent 40%
    );
    pointer-events: none;
    z-index: 1;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Contents = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.layout};
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    min-height: 100vh;
  }
`;

function Layout() {
  return (
    <Container>
      <div>
        <Picture>
          <img src={"/img/하늘.jpg"} alt="background" />
        </Picture>
        <Contents>
          <Outlet />
          <SideMenu />
        </Contents>
      </div>
    </Container>
  );
}

export default Layout;
