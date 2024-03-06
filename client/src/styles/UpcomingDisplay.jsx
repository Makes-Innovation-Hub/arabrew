import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MeetupWrapper = styled.div`
  margin-bottom: 20px;
  padding: 2px 0px;
  /* margin-left: 10px; */
  border-bottom: 1px solid var(--gray-200, #e2e8f0);
  width: 100%;
`;

const Title = styled.h3`
  color: #161616;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 5px;
`;

const InfoText = styled.p`
  color: #3d4260;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  line-height: 150%;
`;
const InfoattendeesText = styled.p`
  color: #3d4260a9;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  line-height: 150%;
`;

export const UpcomingDisplay = ({
  title,
  date,
  time,
  location,
  attendeesCount,
  timezone,
  meetupId,
}) => {
  const navigate = useNavigate();
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  // Adjust the time based on the provided timezone
  const adjustedTime = `${formattedDate} ${time} ${timezone || "PM"}`;

  return (
    <MeetupWrapper onClick={() => navigate(`/SpecificMeetupPage/${meetupId}`)}>
      <Title>{title}</Title>
      <InfoText fontWeight={500}>{adjustedTime}</InfoText>
      <InfoText>{location}</InfoText>
      <InfoattendeesText>{attendeesCount} attendees</InfoattendeesText>
    </MeetupWrapper>
  );
};
