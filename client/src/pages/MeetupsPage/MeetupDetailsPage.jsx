import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import {
  useGetMeetupByIdQuery,
  useAttendMeetupMutation,
} from "../../features/meetupApi";
import { ArrowLeft } from "../../assets";
import { UpcomingStyledPage, StyledMargin } from "../../styles";
import MeetupDetailsDisplay from "./MeetupDetailsPageStyle";

const MeetupDetailsPage = () => {
  const { meetupId } = useParams();
  const { data, error, isLoading } = useGetMeetupByIdQuery(meetupId);
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const [isAttending, setIsAttending] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [attendMeetup] = useAttendMeetupMutation();
  useEffect(() => {
    setIsAttending(
      data?.data?.attendees.some((user) => user.id === storedUser?.id)
    );
    setIsOwner(data?.data?.owner.id === storedUser?.id);
  }, [data, meetupId, storedUser, setIsAttending]);

  const handleAttendButtonClick = async () => {
    try {
      const response = await attendMeetup({
        meetupId,
        isAttending: !isAttending,
      });

      if (response.error) {
        console.error("Error updating attendance:", response.error);
        console.error("Error data:", response.error.data);
        console.error("Original status:", response.error.originalStatus);
        return;
      }
      setIsAttending(!isAttending);
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error occurred while fetching meetup details.</div>;
  }

  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/UpcomingMeetupPage">
              <ArrowLeft />
            </Link>
          }
          title="Meetup Page"
        />
      </StyledMargin>
      <UpcomingStyledPage>
        {data && data.data && (
          <MeetupDetailsDisplay
            key={data.data._id}
            title={data.data.title}
            date={data.data.date}
            time={data.data.time}
            location={data.data.location}
            price={data.data.price}
            description={data.data.description}
            isAttending={isAttending}
            attendees={data.data.attendees}
            onAttendClick={handleAttendButtonClick}
            meetupId={meetupId}
            isOwner={isOwner}
          />
        )}
      </UpcomingStyledPage>
    </div>
  );
};

export default MeetupDetailsPage;
