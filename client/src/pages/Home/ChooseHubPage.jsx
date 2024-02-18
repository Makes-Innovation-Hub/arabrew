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
  ChooseHubButton,
  ChooseHubTitle,
  StyledMargin,
  StyledPage,
} from "../../styles";
import { useNavigate } from "react-router-dom";

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
        <ChooseHubTitle>Choose your hub</ChooseHubTitle>
        <ChooseHubButton
          onClick={() => {
            navigate("/conversation");
          }}
        >
          Arabrew - Work <BriefcaseIcon />{" "}
        </ChooseHubButton>
        <ChooseHubButton
          onClick={() => {
            navigate("/conversation");
          }}
        >
          Arabrew - Hobbies <LaughEmoji />{" "}
        </ChooseHubButton>
        <ChooseHubButton
          onClick={() => {
            navigate("/MeetupsHomePage");
          }}
        >
          Arabrew - Meetup <UsersIcon />{" "}
        </ChooseHubButton>
      </StyledPage>
    </div>
  );
}
