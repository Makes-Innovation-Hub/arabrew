import styled from "styled-components";

export const InputAreaContainer = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
  }
`;

export const RecommendedButton = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #50924e;
    border: none;
    width: 3rem;
    height: 3rem;
    border-radius: 6249.938rem;
    /* flex: 0.4; */
  }
`;

export const InputComponent = styled.input`
  border-radius: 43px;
  background-color: #ecf0f0;
  border: none;
  width: 1.438rem;
  height: 3rem;
  text-indent: 1rem;
  flex-grow: 1.5;
  margin: 0.3rem 0.5rem;
  /* flex: 2 2 10%; */
`;

export const InputWrapper = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    width: 100%;
    background-color: #ffffff;
    flex-grow: 0.1;
    display: flex;
    align-items: center;
  }
`;
