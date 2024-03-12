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
import * as Constants from "../../../constants/constants";

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
            navigate(Constants.PATHS.UPCOMING_MEETUP_PAGE);
          }}
        >
          Upcoming Meetups
        </MainButton>
        <MainButton onClick={() => navigate(Constants.PATHS.MEETUP_FORM)}>
          Post A Meetup
        </MainButton>
        <MainButton onClick={() => navigate(Constants.PATHS.MY_MEETUPS_PAGE)}>
          My Meetups posts
        </MainButton>
      </StyledPage>
    </div>
  );
}
