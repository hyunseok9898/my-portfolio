import { motion } from "framer-motion";
import styled from "styled-components";
import { showHide, showHideChild } from "./Home";
import TitleForm from "../components/Title";

const Container = styled.section`
  padding: 5.75rem 6.25rem 0;
  @media ${props => props.theme.mobile} {
    padding: 5.75rem 20px 0;
  }
`

const ContactMe = styled(motion.div)`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 8.125rem;
  .text {
    line-height: 25px;
    letter-spacing: 2px;
    }
`



const Contact = () => {
  return (
    <Container>
      <motion.div variants={showHide} initial='start' animate='end'>
        <ContactMe variants={showHideChild}>
          <TitleForm titleName='Contact Me'/>
        </ContactMe>
        <ContactMe variants={showHideChild}>
          <TitleForm titleName='- mail'/>
          <div className="text">
            <ul style={{ listStyle: "circle", paddingLeft:"20px"}}>
              <li>tlgjawl153@gmail.com</li>
            </ul>
          </div>
        </ContactMe>
         <ContactMe variants={showHideChild}>
          <TitleForm titleName='- phone'/>
          <div className="text">
            <ul style={{ listStyle: "circle", paddingLeft:"20px"}}>
              <li>010-4473-7724</li>
            </ul>
          </div>
        </ContactMe>
      </motion.div>
    </Container>
  )
};

export default Contact;