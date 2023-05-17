import styled from "styled-components";

export const Flex = styled.div`
  flex-direction: ${({ direction }) => direction};
  display: flex;
  justify-content: center;
  align-items: center;
`;
