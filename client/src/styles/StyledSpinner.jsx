import styled, { keyframes } from "styled-components";

export const SpinnerAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 20px;

  & > div {
    display: inline-block;
    margin: 0 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #50924e;
    animation: ${SpinnerAnimation} 0.8s ease-in-out infinite;
  }

  & > div:nth-child(2) {
    animation-delay: -0.4s;
  }

  & > div:nth-child(3) {
    animation-delay: -0.2s;
  }
`;

function StyledSpinner() {
  return (
    <SpinnerWrapper>
      <div></div>
      <div></div>
      <div></div>
    </SpinnerWrapper>
  );
}

export default StyledSpinner;
