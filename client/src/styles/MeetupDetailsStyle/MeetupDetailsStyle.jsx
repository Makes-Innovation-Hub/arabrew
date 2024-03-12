import styled from "styled-components";

export const MeetupWrapper = styled.div`
  padding: 15px 0px;
  margin-bottom: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  /* gap: 70px; */
  justify-content: space-between;
  cursor: pointer;
`;

export const Title = styled.h3`
  color: #161616;
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 35px;
  margin-left: 5px;
`;

export const HeaderText = styled.h2`
  color: #161616;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const InfoText = styled.p`
  color: #3d4260;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  line-height: 150%;
  margin-bottom: 20px;
  padding: 2px 0px;
  border-bottom: 1px solid var(--gray-200, #e2e8f0);
  width: 245px;
  height: 31px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;
export const AboutmeText = styled.p`
  color: #3d4260;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  line-height: 150%;
  margin-bottom: 20px;
  padding: 2px 0px;
  border-bottom: 1px solid var(--gray-200, #e2e8f0);
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

export const AttendeesHeaderText = styled.h2`
  color: #161616;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
`;
export const AttendeesAvatarIcon = styled.div`
  display: flex;
  flex-direction: row-reverse; /* Align icons from left to right */
  justify-content: flex-end; /* Align icons to the right */
  align-items: center;
  padding: 0;
  gap: 10px;
  isolation: isolate;
  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;

export const AttendButton = styled.button`
  background-color: ${({ isAttending }) =>
    isAttending ? "#ff0000" : "#50924e"};
  color: white;
  font-family: ABeeZee;
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  width: 80%;
  margin: 8px;
  padding: 16px 8px 16px 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 80px 20px;
  cursor: pointer;
`;
export const UpdateButton = styled.button`
  background-color: ${({ bg }) => bg || "#50924E"};
  color: white;
  font-family: ABeeZee;
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  width: 80%;
  padding: 16px 8px 16px 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 0px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#396d37"};
  }
`;
export const AttendeesPageStyle = styled.div`
  display: flex;
  justify-content: start; /* Align icons to the right */
  align-items: center;
  gap: 10px;
`;
export const AttendeesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start; /* Align icons to the right */
  align-items: self-start;
  gap: 20px;
`;
export const AttendeesPageName = styled.h1`
  color: #161616;
  font-family: poppins;
  font-size: 15px;
  font-weight: 500px;
  line-height: 18px;
`;
export const ButtonSectionContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change to column */
  justify-content: flex-start; /* Align buttons to the top */
  align-items: flex-start; /* Align buttons to the left */
  gap: 0; /* Remove the gap between buttons */
`;
