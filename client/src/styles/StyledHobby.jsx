import styled from "styled-components";

export const StyledHobby = styled.button`
  font-size: 1.2rem;
  background: #edf2f7;
  padding: 0.6rem 1.2rem;
  margin: 0.3rem 0.3rem;
  border: ${({ border }) => border || "none"};
  border-radius: 2.4rem;
`;
