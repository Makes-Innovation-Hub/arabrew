import styled from "styled-components";

export const MyMeetupTitle = styled.h2`
  color: #161616;
  font-family: Poppins;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  /* margin-bottom: 20px; */
  margin-top: 20px;
`;
export const MyMeetupText = styled.p`
  color: #161616;
  font-family: Poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* margin-bottom: 20px; */
`;
export const MyMeetupH1 = styled.h2`
  color: #161616;
  font-family: Poppins;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  /* margin-bottom: 20px; */
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  max-width: 310px;
  height: 31px;
  /* position: absolute; */
  top: 130px;
  left: 37px;
  padding: 0px 0px 16px 0px;
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid var(--gray-200, #e2e8f0);
`;
export const StyledMyMeetingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const MyMeetupDescriptionSection = styled.div`
  margin-top: 5px;
  /* margin-left: 20px; */
  color: #3d4260;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  border-bottom: 1px solid var(--gray-200, #e2e8f0);
`;
export const AttendeesSection = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
`;
export const MyMeetupImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 9999px;
`;
