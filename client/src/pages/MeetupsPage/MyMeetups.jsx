import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import {
  UpcomingStyledPage,
  StyledMargin,
  MeetupListStyle,
  UpcomingDisplay,
  CenteredText,
} from "../../styles";
import { SmallGlass, ArrowLeft } from "../../assets";
import {
  useGetAllMeetupsQuery,
  useGetMyMeetupsQuery,
} from "../../features/meetupApi";

function MyMeetups() {
  const [isSideBar, setIsSideBar] = useState(false);
  const { data, error, isLoading } = useGetMyMeetupsQuery();
  const navigation = useNavigate();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  // if (error) {
  //   console.log(error);
  //   return <div>Error occurred while fetching meetups.</div>;
  // }

  const handleNavigation = (meetupId) => {
    navigation(`/myMeetupPage/${meetupId}`);
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
        <CenteredText>My Meetups Posts</CenteredText>

        {Array.isArray(data?.data) && data?.data.length !== 0 ? (
          <MeetupListStyle>
            {/* <div> */}
            {data?.data?.map((meetup, i) => (
              <UpcomingDisplay
                meetupId={meetup.id}
                key={meetup.id}
                title={meetup.title}
                date={meetup.date}
                time={meetup.time}
                location={meetup.location}
                attendeesCount={meetup.attendees.length}
                ownerId={meetup.owner}
              />
            ))}
            {/* </div> */}
          </MeetupListStyle>
        ) : (
          <CenteredText>
            <div>No Meetups Posted</div>
          </CenteredText>
        )}
        {/* {error && <CenteredText>No Meetups Posted</CenteredText>}  */}
      </UpcomingStyledPage>
    </div>
  );
}

export default MyMeetups;
