import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { RiPriceTag2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import {
  MeetupWrapper,
  Title,
  InfoText,
  HeaderText,
  AttendeesHeaderText,
  AttendeesAvatarIcon,
  AttendButton,
  AboutmeText,
  UpdateButton,
  ButtonSectionContainer,
  TitleContainer,
} from "../../styles/MeetupDetailsStyle/MeetupDetailsStyle";
import {
  MyMeetupDescriptionSection,
  MyMeetupH1,
  MyMeetupText,
  StyledRow,
} from "./StyledSpecificMeetup";
import { StyledMargin } from "../../styles";
import { OtherPageButton } from "../jobs/myPostedJobspage/StyledMyJobPage";
import { GrUpdate } from "react-icons/gr";
import { useUpdateMeetupMutation } from "../../features/meetupApi";
import { PiNotePencilBold } from "react-icons/pi";

const MeetupDetailsDisplay = ({
  title,
  date,
  time,
  location,
  price,
  description,
  isAttending,
  attendees,
  onAttendClick,
  meetupId,
  isOwner,
}) => {
  const navigate = useNavigate();

  const handleUpdateMeetup = async () => {
    navigate(`/MeetupForm?MeetupId=${meetupId}`);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  const handleAttendeesClick = (meetupId) => {
    // Navigate to the attendees page
    navigate(`/Attendeespage/${meetupId}`);
  };

  return (
    <MeetupWrapper>
      <TitleContainer>
        <Title>{title}</Title>
        {isOwner && <PiNotePencilBold size={22} onClick={handleUpdateMeetup} />}
      </TitleContainer>

      <StyledRow>
        <IoCalendarNumberOutline />
        <MyMeetupText>
          {formatDate(date)}, {time}
        </MyMeetupText>
      </StyledRow>

      <StyledMargin direction="vertical" margin="1.8rem" />

      <StyledRow>
        <CiLocationOn size={18} />
        <MyMeetupText>{location}</MyMeetupText>
      </StyledRow>

      <StyledMargin direction="vertical" margin="1.8rem" />

      <StyledRow>
        <RiPriceTag2Line />
        <MyMeetupText>{price}</MyMeetupText>
      </StyledRow>

      <StyledMargin direction="vertical" margin="4rem" />
      <MyMeetupH1>About</MyMeetupH1>

      <MyMeetupDescriptionSection>
        {description}
        <StyledMargin direction="vertical" margin="1.8rem" />
      </MyMeetupDescriptionSection>

      <StyledMargin direction="vertical" margin="4rem" />
      <AttendeesHeaderText onClick={() => handleAttendeesClick(meetupId)}>
        Attendees
      </AttendeesHeaderText>

      <AttendeesAvatarIcon>
        {attendees.map((attendee) => (
          <Link
            key={attendee.id}
            to={`/profiled?type=hobbies&userId=${attendee.id}`}
          >
            <img key={attendee.id} src={attendee.avatar} alt={attendee.name} />
          </Link>
        ))}
      </AttendeesAvatarIcon>
      <StyledMargin direction="vertical" margin="6rem" />

      <ButtonSectionContainer>
        {!isOwner && (
          <AttendButton isAttending={isAttending} onClick={onAttendClick}>
            {isAttending ? "Cancel Attend" : "Attend"}
          </AttendButton>
        )}
        {/* {isOwner && (
          < UpdateButton onClick={handleUpdateMeetup}>
            <GrUpdate />Update
          </ UpdateButton>
        )} */}
      </ButtonSectionContainer>
    </MeetupWrapper>
  );
};

export default MeetupDetailsDisplay;
