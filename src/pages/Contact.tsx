import { motion } from "framer-motion";
import styled from "styled-components";
import { showHide, showHideChild } from "./Home";
import TitleForm from "../components/Title";
import { FiMail, FiPhone, FiGithub } from "react-icons/fi";

const Container = styled.section`
  padding: 6rem 5rem 3rem;

  @media ${(props) => props.theme.mobile} {
    padding: 6rem 1.5rem 3rem;
  }
`;

const Section = styled(motion.div)`
  margin-bottom: 3rem;
  color: ${(props) => props.theme.textColor};

  .intro-text {
    font-size: 0.9375rem;
    line-height: 1.85;
    color: ${(props) => props.theme.subtle};
    max-width: 420px;
    margin-top: 0.25rem;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;
  color: ${(props) => props.theme.textColor};
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  background-color: ${(props) => props.theme.bgColor};

  &:hover {
    border-color: ${(props) => props.theme.accent};
    transform: translateX(4px);
    box-shadow: -3px 0 0 ${(props) => props.theme.accent};
  }

  .icon-box {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.border};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.accent};
    font-size: 1rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  &:hover .icon-box {
    background-color: ${(props) => props.theme.accent};
    border-color: ${(props) => props.theme.accent};
    color: #fff;
  }

  .contact-info {
    .label {
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: ${(props) => props.theme.subtle};
      margin-bottom: 0.15rem;
    }

    .value {
      font-size: 0.9rem;
      font-weight: 500;
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <motion.div variants={showHide} initial="start" animate="end">
        <Section variants={showHideChild}>
          <TitleForm titleName="Contact Me" />
          <p className="intro-text">
            함께 성장할 멋진 기회를 기다리고 있습니다.
            <br />
            언제든 편하게 연락 주세요 🙂
          </p>
        </Section>

        <Section variants={showHideChild}>
          <TitleForm titleName="Get In Touch" />
          <ContactList>
            <ContactItem href="mailto:tlgjawl0130@naver.com">
              <div className="icon-box">
                <FiMail />
              </div>
              <div className="contact-info">
                <div className="label">Email</div>
                <div className="value">tlgjawl0130@naver.com</div>
              </div>
            </ContactItem>

            <ContactItem href="tel:010-4473-7724">
              <div className="icon-box">
                <FiPhone />
              </div>
              <div className="contact-info">
                <div className="label">Phone</div>
                <div className="value">010-4473-7724</div>
              </div>
            </ContactItem>

            <ContactItem
              href="https://github.com/hyunseok9898"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-box">
                <FiGithub />
              </div>
              <div className="contact-info">
                <div className="label">GitHub</div>
                <div className="value">github.com/hyunseok9898</div>
              </div>
            </ContactItem>
          </ContactList>
        </Section>
      </motion.div>
    </Container>
  );
};

export default Contact;
