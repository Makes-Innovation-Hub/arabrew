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
    justify-content: space-between;
    padding: 1.2rem 2rem 1.2rem 1.5rem;
    margin: 1rem 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    background-color: #fafafa;
    border-radius: 2.5rem 2.5rem 0 0;
    flex: 1 2 20%;
  }
`;

export const TitleWrapper = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 50%;
  }
`;

export const PageTitle = styled.label`
  @media (min-width: 350px) and (max-width: 700px) {
    font-weight: 1000;
    color: #ffffff;
    font-size: 2rem;
  }
`;

// --------------------------------------------------------

// additional styles go here, do not change the above styles unless necessary