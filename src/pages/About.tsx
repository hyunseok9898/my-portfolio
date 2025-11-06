import { motion } from "framer-motion";
import styled from "styled-components";
import TitleForm from "../components/Title";
import { showHide, showHideChild } from "./Home";

const Container = styled.section`
  padding: 5.75rem 6.25rem 0;
  @media ${props => props.theme.mobile} {
    padding: 5.75rem 20px 0;
  }
`
const AboutMe = styled(motion.div)`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 3.125rem;
  .text {
    line-height: 25px;
    letter-spacing: 1px;
    & > ul > li {
      white-space: nowrap;   
    }
  }
  &:last-child {
    margin-bottom: 0;
  }  
`

const TechList = styled.div`
  display: grid;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  grid-template-columns: 100px 100px 100px;
  gap: 10px;
  padding-left: 1.375rem;
  @media ${props => props.theme.mobile} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`

const TechImage = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  margin-right: 15px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
   img {
    width: 100%;
    height: 100%;
  }
`

const Subheading = styled.h3`
  text-transform: capitalize;
  letter-spacing: 3px;
  font-weight: 600;
  padding-left: 10px;
  @media ${props => props.theme.mobile} {
    letter-spacing: 1px;
  }
`

const About = () => {
  return (
    <Container>
      <motion.div variants={showHide} initial='start' animate='end'>
        <AboutMe variants={showHideChild}>
          <TitleForm titleName='about me' />
          <div className="text">안녕하세요, 함께 배우고 성장하는 프론트엔드 개발자를 꿈꾸는 홍현석입니다. 감사합니다.</div>
        </AboutMe>
        <AboutMe variants={showHideChild}>
          <TitleForm titleName='- education' />
          <div className='text'>
            <ul style={{ listStyle: "circle", paddingLeft: "20px" }}>
              <li>2023.04 ~ 2023.10 그린컴퓨터아카데미 - 프론트엔드 개발자 양성 과정 수료</li>
              <li>2017.03 ~ 2023.02 국립한밭대학(환경공학과)</li>
            </ul>
          </div>
        </AboutMe>
        <AboutMe  variants={showHideChild}>
          <TitleForm titleName='- certificate' />
          <div className='text'>
            <ul style={{ listStyle: "circle", paddingLeft: "20px" }}>
              <li>정보 처리 기사 (2024)</li>
              <li>SQLD (2024)</li>
              <li>웹 디자인 기능사 (2024)</li>
            </ul>
          </div>
        </AboutMe>
         <AboutMe  variants={showHideChild}>
          <TitleForm titleName='Front end' />
          <div className='stacks'>
            <div>
              <Subheading>- Language</Subheading>
              <TechList style={{ gridTemplateColumns: "repeat(4, 100px)" }}>
                <TechImage>
                  <img src={require("../img/html.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/css.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/js.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/typescript.png")} alt='' />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- FrontEnd</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/react.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/axios.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/nextjs.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/SWR.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/recoil.jpg")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/socket.io.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/react-query.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/framer-motion.png")} alt='' />
                </TechImage>
                  <TechImage>
                  <img src={require("../img/styled-component.png")} alt='' />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- BackEnd</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/Spring-Boot.jpg")} alt='' />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- DataBase</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/fb.png")} alt='' />
                </TechImage>
                <TechImage>
                  <img src={require("../img/MySQL.jpg")} alt='' />
                </TechImage>
              </TechList>
            </div>
            <div>
              <Subheading>- ETC</Subheading>
              <TechList>
                <TechImage>
                  <img src={require("../img/github.png")} alt='' />
                </TechImage>
              </TechList>
            </div>
          </div>
        </AboutMe>
      </motion.div>
    </Container>
  )
};

export default About;