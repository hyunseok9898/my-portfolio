import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import TitleForm from "../components/Title";
import { useEffect, useState } from "react";
import { getProjects } from "../firebase/projects";
import { useSetRecoilState } from "recoil";
import { ModalText } from "../etc/atom";
import { Loading } from "../components/Loading";
import { Project } from "../firebase/types";

const Container = styled.section`
  padding: 6rem 3.5rem 3rem;

  @media ${(props) => props.theme.mobile} {
    padding: 6rem 1.25rem 3rem;
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button<{ active: boolean }>`
  background: ${(props) =>
    props.active ? props.theme.textColor : "transparent"};
  color: ${(props) =>
    props.active ? props.theme.bgColor : props.theme.subtle};
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.textColor : props.theme.border};
  padding: 0.375rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: all 0.25s ease;
  border-radius: 2px;

  &:hover {
    border-color: ${(props) => props.theme.accent};
    color: ${(props) => (props.active ? props.theme.bgColor : props.theme.accent)};
  }
`;

const ContentBox = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 1fr;
    gap: 0.875rem;
  }
`;

const ProjectBox = styled(motion.div)`
  cursor: pointer;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  background-color: ${(props) => props.theme.border};

  img.imgBox {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .title-block {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.25rem 1.25rem 1rem;
    transform: translateY(8px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    h3 {
      font-family: "Open Sans", sans-serif;
      font-size: 1.25rem;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.01em;
      margin-bottom: 0.25rem;
    }

    .view-label {
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: ${(props) => props.theme.accent};
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::after {
        content: "";
        display: block;
        width: 1.5rem;
        height: 1px;
        background-color: ${(props) => props.theme.accent};
        transition: width 0.3s ease;
      }
    }
  }

  &:hover {
    img.imgBox {
      transform: scale(1.06);
    }

    .overlay {
      opacity: 1;
    }

    .title-block {
      opacity: 1;
      transform: translateY(0);
    }

    .title-block .view-label::after {
      width: 2.5rem;
    }
  }

  @media ${(props) => props.theme.mobile} {
    aspect-ratio: 16 / 9;

    .overlay {
      opacity: 1;
    }

    .title-block {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export interface ProjectProps {
  id: string;
  name: string;
  state: string;
  skill: string[];
  gitLink: string;
  gitCode: string;
  img: string;
  text: string;
  category: string;
}

const FILTERS = ["All", "JS", "REACT", "NEXT"];

const Projects = () => {
  const setId = useSetRecoilState(ModalText);
  const [DB, setDB] = useState<Project[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getProjects().then(setDB);
  }, []);

  const filteredProjects =
    category === "All"
      ? DB
      : DB.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <Container>
      <TitleForm titleName="Projects" />
      <FilterBar>
        {FILTERS.map((f) => (
          <FilterBtn
            key={f}
            active={category === f}
            onClick={() => setCategory(f)}
          >
            {f}
          </FilterBtn>
        ))}
      </FilterBar>

      {DB.length > 0 ? (
        <ContentBox key={category}>
          <AnimatePresence>
            {filteredProjects.map((element, idx) => (
              <ProjectBox
                key={element.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => setId(element.id)}
              >
                <img
                  className="imgBox"
                  src={`/img/${element.img}.png`}
                  alt={element.name}
                />
                <div className="overlay" />
                <div className="title-block">
                  <h3>{element.name}</h3>
                  <div className="view-label">View Details</div>
                </div>
              </ProjectBox>
            ))}
          </AnimatePresence>
        </ContentBox>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Projects;
