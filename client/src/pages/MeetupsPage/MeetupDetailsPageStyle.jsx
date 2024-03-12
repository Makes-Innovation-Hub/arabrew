import React from "react";
import {
  MeetupWrapper,
  Title,
  InfoText,
  HeaderText,
  AttendeesHeaderText,
  AttendeesAvatarIcon,
  AttendButton,
} from "../../styles/MeetupDetailsStyle/MeetupDetailsStyle";
import {
  TimeIcon,
  LocationIcon,
  CostIcon,
} from "../../styles/MeetupDetailsIcons/Icons";

export const MeetupDetailsDisplay = ({
  title,
  date,
  time,
  location,
  price,
  description,
  timezone,
  isAttending,
  attendees,
  onAttendClick,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  // Adjust the time based on the provided timezone
  const adjustedTime = `${formattedDate} ${time} ${timezone || "PM"}`;

  return (
    <MeetupWrapper>
      <Title>{title}</Title>
      <InfoText fontWeight={500}>
        <TimeIcon /> {adjustedTime}
      </InfoText>
      <InfoText>
        <LocationIcon /> {location}
      </InfoText>
      <InfoText>
        <CostIcon /> {price}
      </InfoText>
      <HeaderText>About</HeaderText>
      <InfoText>{description}</InfoText>
      <AttendeesHeaderText>Attendees</AttendeesHeaderText>
      <AttendeesAvatarIcon>
        {attendees.map((attendee) => (
          <img key={attendee.id} src={attendee.avatar} alt={attendee.name} />
        ))}
      </AttendeesAvatarIcon>

      <AttendButton isAttending={isAttending} onClick={onAttendClick}>
        {isAttending ? "Cancel Attend" : "Attend"}
      </AttendButton>
    </MeetupWrapper>
  );
};
