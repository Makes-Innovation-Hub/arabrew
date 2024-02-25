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

export default function MeetupsHomePage() {
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
        <PageTitle24>Arabrew - Meetups</PageTitle24>
        <MainButton
          onClick={() => {
            navigate("/UpcomingMeetupPage");
          }}
        >
          Upcoming Meetups
        </MainButton>
        <MainButton onClick={() => navigate("/MeetupForm")}>
          Post A Meetup
        </MainButton>
        <MainButton>My Meetups posts</MainButton>
      </StyledPage>
    </div>
  );
}
