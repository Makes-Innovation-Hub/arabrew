import styled from "styled-components";

export const Flex = styled.div`
  flex-direction: ${({direction}) => direction || "row"};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`