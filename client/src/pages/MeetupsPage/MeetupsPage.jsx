import { useState } from "react";
import { Hamburger, SmallGlass } from "../../assets";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import {
  MeetupsButton,
  MeetupsTitle,
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
        <MeetupsTitle>Arabrew - Meetups</MeetupsTitle>
        <MeetupsButton
          onClick={() => {
            navigate("/UpcomingMeetupPage");
          }}
        >
          {" "}
          Upcoming Meetups
        </MeetupsButton>
        <MeetupsButton onClick={() => navigate("/MeetupForm")}>
          Post A Meetup
        </MeetupsButton>
        <MeetupsButton>My Meetups posts</MeetupsButton>
      </StyledPage>
    </div>
  );
}
