import { useState } from "react";
import {
  BriefcaseIcon,
  Hamburger,
  LaughEmoji,
  SmallGlass,
  UsersIcon,
} from "../../assets";
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

export default function ChooseHubPage() {
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
        <PageTitle24>Choose your hub</PageTitle24>
        <MainButton
          onClick={() => {
            navigate(Constants.PATHS.WORK);
          }}
        >
          Arabrew - Work <BriefcaseIcon />
        </MainButton>
        <MainButton
          onClick={() => {
            navigate(Constants.PATHS.CONVERSATION);
          }}
        >
          Arabrew - Hobbies <LaughEmoji />
        </MainButton>
        <MainButton
          onClick={() => {
            navigate(Constants.PATHS.MEETUPS_HOMEPAGE);
          }}
        >
          Arabrew - Meetup <UsersIcon />
        </MainButton>
      </StyledPage>
    </div>
  );
}
