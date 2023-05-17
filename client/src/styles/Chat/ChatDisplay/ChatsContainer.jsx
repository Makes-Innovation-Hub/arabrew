import styled from "styled-components";

export const ChatsContainer = styled.div`
  @media (min-width: 350px) and (max-width: 700px) {
    overflow-y: scroll;
    background-color: #fafafa;
    border-radius: 2.5rem 2.5rem 0 0;
    display: flex;
    flex-direction: column;
    flex: 1 2 20%;
  }
`;
