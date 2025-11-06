import styled from "styled-components";
import { useRecoilState } from "recoil";
import { motion, AnimatePresence } from "framer-motion";
import { ModalText } from "../etc/atom";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ProjectProps } from "../pages/Project";
import { fetchProject } from "../etc/firebase";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsFillDice1Fill, BsFillDice2Fill, BsFillDice3Fill, BsFillDice4Fill } from "react-icons/bs";

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 11110;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Close = styled.div`
  position: fixed;
  cursor: pointer;
  top: -6px;
  right: -63px;
  color: ${props => props.theme.bgColor};
  font-size: 3.375rem;
  transition: 0.3s;
  cursor: pointer;
`;
const Container = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11111;
  @media ${props => props.theme.mobile} {
    padding: 0;
  }
`;
const Contents = styled(motion.div)`
  position: relative;
  width: 800px;
  overflow-y: scroll;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  box-shadow: 0 2px 3px rgba(255, 255, 255, 0.1), 0 10px 20px rgba(255, 255, 255, 0.06);
  display: block;
  padding: 1.25rem;
  & > div {
    width: 100%;
    b {
      vertical-align: middle;
      padding-right: 3px;
      svg {
        color: ${props => props.theme.textColor};
        font-size: 1rem;
      }
    }
    h3 {
      font-size: 1.75rem;
      margin-bottom: 1.875rem;
    }
    img {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    a {
      padding-left: 1.375rem;
      margin-top: 0.938rem;
      font-size: 0.875rem;
      cursor: pointer;
      color: dodgerblue;
    }
  }
  .text {
    padding-left: 0.938rem;
    padding-top: 0.938rem;
    & > div {
      margin-bottom: 1.875rem;
    }
  }
  .subtitle {
    padding-bottom: 5px;
  }
  .description {
    line-height: 1.6rem;
    padding-left: 1rem;
  }
  .skillList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin-top: 10px;
  }
  @media ${props => props.theme.mobile} {
    width: 100%;
    height: 100%;
    padding: 6px;
    & > div {
      width: 100%;
    }
    flex-direction: column-reverse;
    a {
      margin-top: 0.538rem;
    }
    .text {
      padding-left: 0;
      padding-top: 0;
      & > div {
        margin-bottom: 1.175rem;
      }
    }
  }
`;
const modalBackGround = {
  init: { opacity: 0, visibility: "hidden" },
  start: { opacity: 1, visibility: "visible" },
  end: { opacity: 0, visibility: "hidden" },
};

function Modal() {
  const [id, setId] = useRecoilState(ModalText);
  const [DB, setDB] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetchProject().then(data => {
      const context = data.docs.map((doc: DocumentData) => ({
        ...doc.data(),
      }));
      setDB(context);
    });
  }, []);

  const hidden = () => setId("");

  return (
    <AnimatePresence>
      {id && (
        <>
          <Overlay
            onClick={hidden}
            variants={modalBackGround}
            initial='init'
            animate='start'
            exit='end'
          />
          <Container variants={modalBackGround} initial='init' animate='start' exit='end'>
            {DB.filter(ele => ele.id === id).map(ele => (
              <Contents key={ele.id} layoutId={id}>
                <div className='image'>
                  <img src={require(`../img/${ele.img}.png`)} alt={ele.img} />
                </div>
                <div className='text'>
                  <h3>{ele.name}</h3>
                  <div>
                    <h5 className='subtitle'>
                      <b><BsFillDice1Fill /></b>Description
                    </h5>
                    <p className='description'>{ele.text}</p>
                  </div>
                  <div>
                    <h5 className='subtitle'>
                      <b><BsFillDice2Fill /></b>Use Skill
                    </h5>
                    <ul className='skillList'>
                      {ele.skill.map((s, i) => (
                        <li key={i}>- {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <b><BsFillDice3Fill /></b>Site
                    <a href={ele.gitLink}>{ele.gitLink}</a>
                  </div>
                  <div>
                    <b><BsFillDice4Fill /></b>GitHub
                    <a href={ele.gitCode}>{ele.gitCode}</a>
                  </div>
                </div>
              </Contents>
            ))}
            <Close onClick={hidden}><AiOutlineCloseSquare /></Close>
          </Container>
        </>
      )}
    </AnimatePresence>
  );
}
export default Modal;
