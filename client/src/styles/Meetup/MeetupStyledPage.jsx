import styled from "styled-components";

export const MeetupFormWrapper = styled.div`
  margin: 20px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

export const MeetupInput = styled.input`
  width: 100%;

  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const MeetupTextArea = styled.textarea`
  width: 100%;
  height: 229px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const MeetupButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: #50924e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;