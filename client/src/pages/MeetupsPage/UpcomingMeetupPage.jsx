import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import {
  UpcomingStyledPage,
  StyledMargin,
  MeetupListStyle,
  UpcomingDisplay,
  CenteredText,
} from "../../styles";
import { SmallGlass, ArrowLeft } from "../../assets";
import { useGetAllMeetupsQuery } from "../../features/meetupDataApi";

const UpcomingMeetupPage = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const { data, error, isLoading, refetch } = useGetAllMeetupsQuery();

  useEffect(() => {
    // Automatically refetch data every 10 seconds
    const intervalId = setInterval(() => {
      refetch();
    }, 10 * 1000);
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    console.log(error);
    return <div>Error occurred while fetching meetups.</div>;
  }

  const meetups = data?.data;

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

        {Array.isArray(meetups) && meetups.length !== 0 ? (
          <MeetupListStyle>
            <div>
              {meetups.map((meetup, i) => (
                <UpcomingDisplay
                  key={i}
                  title={meetup.title}
                  date={meetup.date}
                  time={meetup.time}
                  location={meetup.location}
                  attendeesCount={meetup.attendees.length}
                />
              ))}
            </div>
          </MeetupListStyle>
        ) : (
          <CenteredText>
            <div>No Upcoming</div>
          </CenteredText>
        )}
      </UpcomingStyledPage>
    </div>
  );
};

export default UpcomingMeetupPage;
