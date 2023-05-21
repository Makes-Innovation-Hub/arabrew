import styled from "styled-components";

export const Flex = styled.div`
  flex-direction: ${({ direction }) => direction};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
`;
