import React from "react";
import { StyledMargin } from "../../styles";
import { Header } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "../../assets";
import {
  Center,
  StyledMyJobPage,
  Title,
} from "../jobs/myPostedJobspage/StyledMyJobPage";
import {
  AttendeesSection,
  MyMeetupDescriptionSection,
  MyMeetupH1,
  MyMeetupImage,
  MyMeetupText,
  MyMeetupTitle,
  StyledMyMeetingContainer,
  StyledRow,
} from "./StyledSpecificMeetup";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { RiPriceTag2Line } from "react-icons/ri";
import { useGetMeetupByIdQuery } from "../../features/meetupApi";

function SpecificMeetup() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetMeetupByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error fetching meeting details</div>;
  }

  const { title, date, time, location, description, price, attendees } =
    data.data;

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

  const handleBack = () => {
    window.history.back();
  };

  const handleAttendeesClick = (meetupId) => {
    // Navigate to the attendees page
    navigate(`/Attendeespage/${meetupId}`);
  };

  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <div onClick={handleBack}>
              <ArrowLeft />
            </div>
          }
          title={"Meetup Page"}
        />
      </StyledMargin>
      <StyledMyJobPage>
        <MyMeetupTitle>{title}</MyMeetupTitle>

        <StyledMargin direction="vertical" margin="4rem" />

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
        <MyMeetupH1 onClick={() => handleAttendeesClick(data?.data?.id)}>
          Attendees
        </MyMeetupH1>

        <StyledMargin direction="vertical" margin="1.8rem" />
        {attendees.length > 0 ? (
          <AttendeesSection>
            {attendees.map((attendee, index) => (
              <Link to={`/profiled?type=hobbies&userId=${attendee.id}`}>
                <MyMeetupImage
                  key={index}
                  src={attendee.avatar}
                  alt={attendee.name}
                />
              </Link>
            ))}
          </AttendeesSection>
        ) : (
          <div>No attendees yet</div>
        )}
      </StyledMyJobPage>
    </div>
  );
  //<MyMeetupImage src='https://s3-alpha-sig.figma.com/img/64d9/8869/c74d361618fe50c4acd83255cee94bde?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoAynPkVjlWjoDRKRiO7fORemUY7uwfg3e~hhD8p75jL0T4FO9ER5GwEnMd-Fq3hpbLzumMJQhF1xBjlFccEaRQ39vSgqxMVy2bFsSJ6FAJel6GQD2cFhU90pg49BnIDETuEinU4vOT-PGCRDF4dwL3vmmFX6HvoEu7ucv6SXNfVV6OAhJfpK0cAYiO2JD6pYjdhe9JXtdhLEFzwLrsa4QYin90Zq3FEDIxOUvgoLJ1Nqiuh63uoqB4lSC-xXV5GbzTWLrUpV9~qg6ZfF8dyhww3g5fseki0WGlAVKE8dK73wmWoXOCwRGg6KHd-UYaIdDHJZXSF-ERWZyK6WRZLOw__'/>
}

export default SpecificMeetup;
