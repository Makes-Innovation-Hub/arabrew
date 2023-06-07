import styled from "styled-components";
export const GoBack = styled.div`
  display: flex;
  width: 1rem;
  margin-left: 22rem;
  z-index: 300;
  ${(props) => props.id && `id: ${props.id};`}
`;
export default GoBack;
