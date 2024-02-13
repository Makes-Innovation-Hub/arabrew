import styled from "styled-components";
export const ProfileChat = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${({ profile }) =>
    `url(${profile}) no-repeat center center/cover`};
  border-radius: 630rem;
  margin: 0 1rem;
`;
