import styled from "styled-components";

export const StyledHeaderTitle = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.8;
  color: ${({ color }) => color || "#ffffff"};
  flex-grow: 1;
  flex-basis: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
