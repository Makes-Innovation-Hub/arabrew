import { useState } from "react";
import { Hamburger, SmallGlass } from "../../assets";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import {
  MainButton,
  PageTitle24,
  StyledMargin,
  StyledPage,
} from "../../styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MeetupsHomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);

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
            <div
              onClick={() => {
                setIsSideBar(true);
              }}
            >
              <Hamburger />
            </div>
          }
          title={<SmallGlass />}
        />
      </StyledMargin>
      <StyledPage>
        <PageTitle24>{t("meetups_title")}</PageTitle24>
        <MainButton
          onClick={() => {
            navigate("/UpcomingMeetupPage");
          }}
        >
          {t("upcoming_meetups")}
        </MainButton>
        <MainButton onClick={() => navigate("/MeetupForm")}>
          {t("post_meetup")}
        </MainButton>
        <MainButton onClick={() => navigate("/My-meetups-page")}>
          {t("my_meetup_posts")}
        </MainButton>
      </StyledPage>
    </div>
  );
}
