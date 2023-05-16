import styled from "styled-components";

export const BackLayout = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    background-color: #50924e;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const HeaderWrapper = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 0 0.5rem 1.2rem;
    margin: 1rem 0;
  }
`;

export const Container = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    background-color: #fafafa;
    border-radius: 2.5rem 2.5rem 0 0;
    /* display: flex; */
    /* flex-direction: column; */
    flex: 1 2 20%;
  }
`;
