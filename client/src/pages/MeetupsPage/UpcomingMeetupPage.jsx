import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import {
  UpcomingStyledPage,
  StyledMargin,
  MeetupListStyle,
  UpcomingDisplay,
  CenteredText,
} from "../../styles";
import { ArrowLeft } from "../../assets";
import { useGetAllMeetupsQuery } from "../../features/meetupApi";

const UpcomingMeetupPage = () => {
  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);
  const { data, error, isLoading } = useGetAllMeetupsQuery();

  const handleMeetupClick = (meetupId) => {
    navigate(`/meetupDetailsPage/${meetupId}`);
  };

  return (
    <div>
      {isSideBar && (
        <div>
          <SideBar openSideBar={setIsSideBar} />
        </div>
      )}
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/meetupsHomePage">
              <ArrowLeft />
            </Link>
          }
          title="Meetups"
        />
      </StyledMargin>
      <UpcomingStyledPage>
        <CenteredText>Upcoming</CenteredText>

        {Array.isArray(data?.data) && data?.data.length !== 0 ? (
          <MeetupListStyle>
            {data?.data.map((meetup, i) => (
              <UpcomingDisplay
                key={i}
                onClick={() => handleMeetupClick(meetup.id)}
                style={{ cursor: "pointer" }}
                title={meetup.title}
                date={meetup.date}
                time={meetup.time}
                location={meetup.location}
                attendeesCount={meetup.attendees.length}
              />
            ))}
          </MeetupListStyle>
        ) : (
          <CenteredText>No Upcoming</CenteredText>
        )}
      </UpcomingStyledPage>
    </div>
  );
};

export default UpcomingMeetupPage;
