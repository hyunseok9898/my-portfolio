import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import TitleForm from "../components/Title";
import { useEffect, useState } from "react";
import { fetchProject } from "../etc/firebase";
import { DocumentData } from "firebase/firestore";
import { useSetRecoilState } from "recoil";
import { ModalText } from "../etc/atom";
import { Loading } from "../components/Loading";

const Container = styled.section`
  padding: 5.75rem 3.25rem 0;
  .button {
    margin-top: 30px;
    padding-left: 20px;
    button {
      color: ${(props) => props.theme.textColor};
      background-color: transparent;
      border: none;
      font-size: 1rem;
      letter-spacing: 1px;
      margin-right: 10px;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Open Sans', sans-serif;
    }
  }
  @media ${(props) => props.theme.mobile} {
    padding: 5.75rem 20px 0;
  }
`;

const ContentBox = styled.div`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: scroll;
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ProjectBox = styled(motion.div)`
  cursor: pointer;
  height: 21.25rem;
  background-color: #3e3e3e;
  margin: 1.563rem;
  overflow: hidden;
  position: relative;

  .imgBox {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    color: #fff;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    text-transform: capitalize;
    width: 95%;
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    font-size: 1rem;
    left: 50%;
    border: 1px solid ${(props) => props.theme.bgColor};
    transform: translate(-50%, -20%);
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    filter: grayscale(100%);
  }

  &:hover .title {
    bottom: 3%;
    opacity: 1;
    visibility: visible;
  }

  @media ${(props) => props.theme.mobile} {
    height: 15.25rem;
    margin: 0.5rem;
    .title {
      height: 50px;
      line-height: 50px;
      bottom: 3%;
      opacity: 1;
      visibility: visible;
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

const Projects = () => {
  const setId = useSetRecoilState(ModalText);
  const [DB, setDB] = useState<ProjectProps[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchProject().then((data) => {
      const context = data.docs.map((doc: DocumentData) => ({
        ...doc.data(),
      }));
      setDB(context);
    });
  }, []);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.textContent?.trim() || "All");
  };

  // 🔹 선택된 카테고리에 맞는 프로젝트만 필터링
  const filteredProjects =
    category === "All"
      ? DB
      : DB.filter((item) => item.category.toLowerCase() === category.toLowerCase());

  return (
    <Container>
      <TitleForm titleName="Project" />
      <div className="button">
        <button onClick={onClick}>All</button>
        <button onClick={onClick}>JS</button>
        <button onClick={onClick}>REACT</button>
      </div>

      {DB.length > 0 ? (
        <ContentBox key={category}>
          {/* 🔹 AnimatePresence로 감싸기 */}
          <AnimatePresence>
            {filteredProjects.map((element) => (
              <ProjectBox
                key={element.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                onClick={() => setId(element.id)}
              >
                <img
                  className="imgBox"
                  src={require(`../img/${element.img}.png`)}
                  alt={element.img}
                />
                <h3 className="title">{element.name}</h3>
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
