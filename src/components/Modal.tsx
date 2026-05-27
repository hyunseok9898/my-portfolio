import styled from "styled-components";
import { useRecoilState } from "recoil";
import { motion, AnimatePresence } from "framer-motion";
import { ModalText } from "../etc/atom";
import { useEffect, useState } from "react";
import { getProjects } from "../firebase/projects";
import { FiX, FiExternalLink, FiGithub } from "react-icons/fi";
import { Project } from "../firebase/types";

/* Overlay가 flex 컨테이너 역할을 하여 모달을 정확히 가운데 정렬 */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 11110;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media ${(props) => props.theme.mobile} {
    padding: 0;
    align-items: flex-start;
  }
`;

/* framer-motion transform 충돌 없이 순수하게 relative 흐름 */
const Container = styled(motion.div)`
  position: relative;
  z-index: 11111;
  width: min(860px, 92vw);
  max-height: 88vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    max-height: 100dvh;
    border-radius: 0;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  aspect-ratio: 16 / 8;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      ${(props) => props.theme.bgColor} 100%
    );
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.bgColor}cc;
  backdrop-filter: blur(8px);
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    border-color: ${(props) => props.theme.textColor};
  }
`;

const Body = styled.div`
  padding: 1.5rem 2rem 2rem;

  @media ${(props) => props.theme.mobile} {
    padding: 1.25rem;
  }
`;

const ProjectTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0.375rem;
  line-height: 1.2;
`;

const StatusBadge = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme.accent};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 2px;
  padding: 0.2rem 0.6rem;
  margin-bottom: 1.5rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.border};
  margin: 1.25rem 0;
`;

const InfoRow = styled.div`
  margin-bottom: 1.5rem;

  .info-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${(props) => props.theme.accent};
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.8;
    color: ${(props) => props.theme.subtle};
    white-space: pre-line;
  }
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  span {
    font-size: 0.75rem;
    padding: 0.3rem 0.75rem;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 2px;
    color: ${(props) => props.theme.subtle};
    background-color: ${(props) => props.theme.layout};
  }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.25rem;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    border: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.textColor};
    border-radius: 2px;
    transition: all 0.25s ease;

    &:hover {
      background-color: ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.bgColor};
      border-color: ${(props) => props.theme.textColor};
    }

    svg {
      font-size: 0.875rem;
    }
  }
`;

const overlayVariant = {
  init: { opacity: 0 },
  start: { opacity: 1 },
  end: { opacity: 0 },
};

const containerVariant = {
  init: { opacity: 0, y: 30, scale: 0.97 },
  start: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
  end: { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.25 } },
};

function Modal() {
  const [id, setId] = useRecoilState(ModalText);
  const [DB, setDB] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setDB);
  }, []);

  const hidden = () => setId("");

  const project = DB.find((ele) => ele.id === id);

  return (
    <AnimatePresence>
      {id && project && (
        /* Overlay가 flex 컨테이너: 내부 Container를 정확히 중앙에 배치 */
        <Overlay
          key="overlay"
          onClick={hidden}
          variants={overlayVariant}
          initial="init"
          animate="start"
          exit="end"
        >
          <Container
            key="modal"
            variants={containerVariant}
            initial="init"
            animate="start"
            exit="end"
            /* 클릭 이벤트가 Overlay로 버블링되어 모달이 닫히는 것 방지 */
            onClick={(e) => e.stopPropagation()}
          >
            <CloseBtn onClick={hidden}>
              <FiX />
            </CloseBtn>

            <ImageSection>
              <img src={`/img/${project.img}.png`} alt={project.name} />
            </ImageSection>

            <Body>
              <ProjectTitle>{project.name}</ProjectTitle>
              {project.state && <StatusBadge>{project.state}</StatusBadge>}

              <InfoRow>
                <div className="info-label">Description</div>
                <p>{project.text}</p>
              </InfoRow>

              <Divider />

              <InfoRow>
                <div className="info-label">Tech Stack</div>
                <SkillGrid>
                  {project.skill.map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </SkillGrid>
              </InfoRow>

              <Divider />

              <LinkRow>
                {project.gitLink && (
                  <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                    Live Site
                  </a>
                )}
                {project.gitCode && (
                  <a href={project.gitCode} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                    Source Code
                  </a>
                )}
              </LinkRow>
            </Body>
          </Container>
        </Overlay>
      )}
    </AnimatePresence>
  );
}

export default Modal;
