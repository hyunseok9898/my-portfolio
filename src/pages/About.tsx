import { motion } from "framer-motion";
import styled from "styled-components";
import TitleForm from "../components/Title";
import { showHide, showHideChild } from "./Home";
import { useRecoilValue } from "recoil";
import { DarkModeValue } from "../etc/atom";

const Container = styled.section`
  padding: 6rem 5rem 3rem;

  @media ${(props) => props.theme.mobile} {
    padding: 6rem 1.5rem 3rem;
  }
`;

const Section = styled(motion.div)`
  margin-bottom: 3rem;
  color: ${(props) => props.theme.textColor};

  &:last-child {
    margin-bottom: 0;
  }

  .intro-text {
    font-size: 1rem;
    line-height: 1.85;
    color: ${(props) => props.theme.subtle};
    letter-spacing: 0.015em;
    max-width: 480px;
  }
`;

const InfoList = styled.ul`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  li {
    font-size: 0.9rem;
    color: ${(props) => props.theme.subtle};
    line-height: 1.7;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.accent};
      margin-top: 0.55rem;
      flex-shrink: 0;
    }
  }
`;

const StackSection = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StackGroup = styled.div`
  .group-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${(props) => props.theme.accent};
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: ${(props) => props.theme.border};
    }
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

/* monochrome: 흑백 로고 — 다크모드에서 invert 처리 */
const TechBadge = styled.div<{ monochrome?: boolean; isDark?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.25s ease;

  &:hover {
    border-color: ${(props) => props.theme.accent};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.theme.border};
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    border-radius: 2px;
    /* 흑백 로고는 다크모드에서 반전하여 잘 보이도록 */
    filter: ${(props) =>
      props.monochrome && props.isDark ? "invert(1) brightness(1.8)" : "none"};
    transition: filter 0.3s ease;
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${(props) => props.theme.subtle};
    white-space: nowrap;
  }
`;

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLEICONS = "https://cdn.simpleicons.org";

interface Tech {
  name: string;
  src: string;
  monochrome?: boolean;
}

/* ── Language: 사용 빈도 높은 순 ── */
const LANG_STACK: Tech[] = [
  { name: "TypeScript", src: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "JavaScript", src: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "HTML5", src: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS3", src: `${DEVICON}/css3/css3-original.svg` },
];

/* ── Frontend: 사용 빈도 높은 순 ── */
const FRONTEND_STACK: Tech[] = [
  { name: "React", src: `${DEVICON}/react/react-original.svg` },
  {
    name: "Next.js",
    src: `${DEVICON}/nextjs/nextjs-original.svg`,
    monochrome: true,
  },
  { name: "Tailwind CSS", src: `${SIMPLEICONS}/tailwindcss/06B6D4` },
  { name: "TanStack Query", src: `${SIMPLEICONS}/reactquery/FF4154` },
  {
    name: "Zustand",
    src: "https://raw.githubusercontent.com/pmndrs/zustand/HEAD/docs/bear.jpg",
  },
  { name: "Axios", src: "/img/axios.png" },
  { name: "Framer Motion", src: "/img/framer-motion.png" },
  { name: "Recoil", src: "/img/recoil.jpg" },
  { name: "SWR", src: "/img/SWR.png" },
  { name: "Styled Comp.", src: "/img/styled-component.png" },
  {
    name: "Socket.io",
    src: `${DEVICON}/socketio/socketio-original.svg`,
    monochrome: true,
  },
];

/* ── Backend & DB: 사용 빈도 높은 순 ── */
const BACKEND_STACK: Tech[] = [
  { name: "Docker", src: `${DEVICON}/docker/docker-original.svg` },
  {
    name: "AWS",
    src: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  { name: "NestJS", src: `${SIMPLEICONS}/nestjs/E0234E` },
  { name: "Spring Boot", src: `${DEVICON}/spring/spring-original.svg` },
  { name: "MySQL", src: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "Supabase", src: "/img/supabase.jpg" },
  { name: "Firebase", src: `${DEVICON}/firebase/firebase-plain.svg` },
  {
    name: "GitHub",
    src: `${DEVICON}/github/github-original.svg`,
    monochrome: true,
  },
];

const About = () => {
  const isDark = useRecoilValue(DarkModeValue);

  return (
    <Container>
      <motion.div variants={showHide} initial="start" animate="end">
        <Section variants={showHideChild}>
          <TitleForm titleName="About Me" />
          <p className="intro-text">
            안녕하세요, 함께 배우고 성장하는 프론트엔드 개발자를 꿈꾸는
            홍현석입니다. 감사합니다.
          </p>
        </Section>

        <Section variants={showHideChild}>
          <TitleForm titleName="Education" />
          <InfoList>
            <li>
              2023.04 ~ 2023.10 — 그린컴퓨터아카데미, 프론트엔드 개발자 양성과정
              수료
            </li>
            <li>2017.03 ~ 2023.02 — 국립한밭대학교, 환경공학과 졸업</li>
          </InfoList>
        </Section>

        <Section variants={showHideChild}>
          <TitleForm titleName="Certificate" />
          <InfoList>
            <li>정보처리기사 (2024)</li>
            <li>SQLD (2024)</li>
            <li>웹디자인기능사 (2024)</li>
          </InfoList>
        </Section>

        <Section variants={showHideChild}>
          <TitleForm titleName="Tech Stack" />
          <StackSection>
            <StackGroup>
              <div className="group-label">Language</div>
              <TechGrid>
                {LANG_STACK.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    monochrome={tech.monochrome}
                    isDark={isDark}
                  >
                    <img src={tech.src} alt={tech.name} />
                    <span>{tech.name}</span>
                  </TechBadge>
                ))}
              </TechGrid>
            </StackGroup>

            <StackGroup>
              <div className="group-label">Frontend</div>
              <TechGrid>
                {FRONTEND_STACK.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    monochrome={tech.monochrome}
                    isDark={isDark}
                  >
                    <img src={tech.src} alt={tech.name} />
                    <span>{tech.name}</span>
                  </TechBadge>
                ))}
              </TechGrid>
            </StackGroup>

            <StackGroup>
              <div className="group-label">Backend &amp; DB</div>
              <TechGrid>
                {BACKEND_STACK.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    monochrome={tech.monochrome}
                    isDark={isDark}
                  >
                    <img src={tech.src} alt={tech.name} />
                    <span>{tech.name}</span>
                  </TechBadge>
                ))}
              </TechGrid>
            </StackGroup>
          </StackSection>
        </Section>
      </motion.div>
    </Container>
  );
};

export default About;
