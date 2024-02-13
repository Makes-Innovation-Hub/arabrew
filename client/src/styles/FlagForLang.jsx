import styled from "styled-components";
export const FlagForLang = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${({ flag }) => `url(${flag}) no-repeat center center/cover`};
  border-radius: 630rem;
  margin: 0 -0.5rem;
`;
