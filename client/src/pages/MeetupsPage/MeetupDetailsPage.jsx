import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import { ArrowLeft } from "../../assets";
import { UpcomingStyledPage, StyledMargin } from "../../styles";
import MeetupDetailsDisplay from "./MeetupDetailsPageStyle.jsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  useGetMeetupByIdQuery,
  useAttendMeetupMutation,
  useDeleteMeetupMutation,
} from "../../features/meetupApi";
import { OtherPageButton } from "../jobs/myPostedJobspage/StyledMyJobPage.jsx";

const MeetupDetailsPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { meetupId } = useParams();
  const { data, error, isLoading } = useGetMeetupByIdQuery(meetupId);
  const storedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const [isAttending, setIsAttending] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [attendMeetup] = useAttendMeetupMutation();
  const [deleteMeetup] = useDeleteMeetupMutation();

  useEffect(() => {
    setIsAttending(
      data?.data?.attendees.some((user) => user.id === storedUser?.id)
    );
    setIsOwner(data?.data?.owner?.id === storedUser?.id);
  }, [data, meetupId, storedUser, setIsAttending]);

  const handleAttendButtonClick = async () => {
    // Toggle attendance status
    try {
      await attendMeetup({ meetupId, isAttending: !isAttending });
      setIsAttending(!isAttending);
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
  };

  const handleDeleteButtonClick = async () => {
    try {
      await deleteMeetup({ meetupId });
      navigate("/My-meetups-page");
    } catch (error) {
      console.error("Error deleting meetup:", error);
    }
  };

  if (isLoading) {
    return <div>{t("loading")}</div>;
  }

  if (error) {
    console.error(error);
    return <div>{t("error_fetching_meetup_details")}</div>;
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
          title={t("meetup_page")}
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
        {isOwner && (
          <OtherPageButton onClick={handleDeleteButtonClick}>
            {t("delete_meetup_button")}
          </OtherPageButton>
        )}
      </UpcomingStyledPage>
    </div>
  );
};

export default MeetupDetailsPage;
