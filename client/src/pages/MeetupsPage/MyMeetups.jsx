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
import * as Constants from "../../../constants/constants";
import { useTranslation } from "react-i18next";

function MyMeetups() {
  const { t } = useTranslation();
  const [isSideBar, setIsSideBar] = useState(false);
  const { data, error, isLoading } = useGetMyMeetupsQuery();
  const navigation = useNavigate();
  console.log(data);

  if (isLoading) return <div>{t("loading")}</div>;

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
            <Link to={Constants.PATHS.MEETUPS_HOMEPAGE}>
              <ArrowLeft />
            </Link>
          }
          title={t("meetups")}
        />
      </StyledMargin>
      <UpcomingStyledPage>
        <CenteredText>{t("my_meetups_posts")}</CenteredText>

        {Array.isArray(data?.data) && data?.data.length !== 0 ? (
          <MeetupListStyle>
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
          </MeetupListStyle>
        ) : (
          <CenteredText>{t("no_meetups_posted")}</CenteredText>
        )}
      </UpcomingStyledPage>
    </div>
  );
}

export default MyMeetups;
