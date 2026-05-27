import { useRecoilValue } from "recoil";
import { DarkModeValue } from "../etc/atom";
import { styled } from "styled-components";

const TitleText = styled.div`
  overflow: hidden;
  margin-bottom: 1.25rem;

  span {
    display: inline-block;
    padding-bottom: 0.6rem;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor};

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 1.75rem;
      height: 1.5px;
      background-color: ${(props) => props.theme.accent};
      transition: width 0.3s ease;
    }
  }

  &:hover span::after {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    span {
      letter-spacing: 0.12em;
    }
  }
`;

interface titleText {
  titleName: string;
}

function TitleForm(props: titleText) {
  useRecoilValue(DarkModeValue);

  return (
    <TitleText>
      <span>{props.titleName}</span>
    </TitleText>
  );
}

export default TitleForm;
