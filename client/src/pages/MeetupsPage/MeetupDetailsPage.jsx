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
import { MeetupDetailsDisplay } from "./MeetupDetailsPageStyle";
import * as Constants from "../../../constants/constants";

const MeetupDetailsPage = () => {
  const { meetupId } = useParams();
  const { data, error, isLoading } = useGetMeetupByIdQuery(meetupId);
  const [isAttending, setIsAttending] = useState(false);

  const [attendMeetup] = useAttendMeetupMutation();

  useEffect(() => {
    // Retrieve the stored attendance status from local storage
    const storedStatus = localStorage.getItem(`meetup_attendance_${meetupId}`);

    // Set initial state based on the stored status or the user's attendance status
    setIsAttending(
      storedStatus === "attended" ||
        (data && data.data && data.data.isAttending)
    );
  }, [data, meetupId]);

  const handleAttendButtonClick = async () => {
    try {
      // isAttending value
      const newIsAttending = !isAttending;

      // Call the mutation with the updated isAttending value and the user token in headers
      const response = await attendMeetup({
        meetupId,
        isAttending: newIsAttending,
      });
      console.log(response);

      // Check for success status in the response
      if (response.error) {
        console.error("Error updating attendance:", response.error);
        console.error("Error data:", response.error.data);
        console.error("Original status:", response.error.originalStatus);
        return;
      }

      // Log the attendance status
      console.log(
        `Attendance status: ${newIsAttending ? "Attended" : "Not Attended"}`
      );

      // Update the local state with the new isAttending value
      setIsAttending(newIsAttending);

      // Store the updated status in local storage
      localStorage.setItem(
        `meetup_attendance_${meetupId}`,
        newIsAttending ? "attended" : "cancelled"
      );
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
            <Link to={Constants.PATHS.UPCOMING_MEETUP_PAGE}>
              <ArrowLeft />
            </Link>
          }
          title="Meetup Page"
        />
      </StyledMargin>
      <UpcomingStyledPage>
        {data && data.data && (
          <MeetupDetailsDisplay
            title={data.data.title}
            date={data.data.date}
            time={data.data.time}
            location={data.data.location}
            price={data.data.price}
            description={data.data.description}
            isAttending={isAttending}
            attendees={data.data.attendees}
            onAttendClick={handleAttendButtonClick}
          />
        )}
      </UpcomingStyledPage>
    </div>
  );
};

export default MeetupDetailsPage;
