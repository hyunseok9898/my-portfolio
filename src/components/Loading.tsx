import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

const Bars = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 2rem;

  span {
    display: block;
    width: 3px;
    height: 100%;
    background-color: ${(props) => props.theme.accent};
    border-radius: 2px;
    animation: ${pulse} 1.2s ease-in-out infinite;

    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.45s; }
    &:nth-child(5) { animation-delay: 0.6s; }
  }
`;

const LoadingText = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(props) => props.theme.subtle};
`;

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Bars>
        <span /><span /><span /><span /><span />
      </Bars>
      <LoadingText>Loading</LoadingText>
    </LoadingWrapper>
  );
};
