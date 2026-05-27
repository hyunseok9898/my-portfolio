import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(motion.div)`
  padding-left: 5rem;
  padding-right: 3rem;

  @media ${(props) => props.theme.mobile} {
    padding: 0 1.5rem;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    &::before {
      content: "";
      display: block;
      width: 2rem;
      height: 1px;
      background-color: ${(props) => props.theme.accent};
    }

    span {
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${(props) => props.theme.accent};
    }
  }

  .name {
    font-family: 'Open Sans', sans-serif;
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 1.5rem;

    .first {
      display: block;
      font-weight: 300;
      color: ${(props) => props.theme.subtle};
      font-size: 0.6em;
      letter-spacing: 0.02em;
      margin-bottom: 0.2rem;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.75rem;

    &::before {
      content: "";
      display: block;
      width: 3rem;
      height: 1px;
      background-color: ${(props) => props.theme.accent};
    }

    &::after {
      content: "";
      display: block;
      flex: 1;
      height: 1px;
      background-color: ${(props) => props.theme.border};
    }
  }

  .subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    color: ${(props) => props.theme.subtle};
    letter-spacing: 0.04em;
    line-height: 1.7;
  }

  .button {
    margin-top: 2.5rem;

    & > a {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: ${(props) => props.theme.bgColor};
      background-color: ${(props) => props.theme.textColor};
      padding: 0.95rem 2rem;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border: 1px solid ${(props) => props.theme.textColor};
      transition: all 0.35s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: ${(props) => props.theme.accent};
        transform: translateX(-100%);
        transition: transform 0.35s ease;
        z-index: 0;
      }

      span {
        position: relative;
        z-index: 1;
      }

      .arrow {
        position: relative;
        z-index: 1;
        width: 1.25rem;
        height: 1px;
        background-color: currentColor;
        transition: width 0.3s ease;

        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: -3px;
          width: 7px;
          height: 7px;
          border-top: 1px solid currentColor;
          border-right: 1px solid currentColor;
          transform: rotate(45deg);
        }
      }

      &:hover {
        border-color: ${(props) => props.theme.accent};
        color: #fff;

        &::before {
          transform: translateX(0);
        }

        .arrow {
          width: 1.75rem;
        }
      }
    }
  }
`;

export const showHide = {
  start: {
    opacity: 0,
    transition: { duration: 0, staggerChildren: 0.15 },
  },
  end: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

export const showHideChild = {
  start: { y: 30, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const Home = () => {
  return (
    <HomeContainer>
      <Wrapper variants={showHide} initial="start" animate="end">
        <motion.div variants={showHideChild} className="eyebrow">
          <span>Frontend Portfolio</span>
        </motion.div>

        <motion.h1 variants={showHideChild} className="name">
          <span className="first">Hong</span>
          HyunSeok
        </motion.h1>

        <motion.div variants={showHideChild} className="divider" />

        <motion.p variants={showHideChild} className="subtitle">
          함께 배우고 성장하는 프론트엔드 개발자입니다.
        </motion.p>

        <motion.div variants={showHideChild} className="button">
          <Link to="project">
            <span>View Projects</span>
            <div className="arrow" />
          </Link>
        </motion.div>
      </Wrapper>
    </HomeContainer>
  );
};

export default Home;
