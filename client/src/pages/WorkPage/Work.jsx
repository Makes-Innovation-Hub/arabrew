import { useState } from "react";
import Header from "../../components/Header";
import { Hamburger, SmallGlass } from "../../assets";

import SideBar from "../../components/SideBar";
import {
  StyledMargin,
  StyledPage,
  ChooseHubTitle,
  ChooseHubButton,
} from "../../styles";
import { useNavigate } from "react-router-dom";

export default function WorkPage() {
  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);

  return (
    <div>
      {isSideBar && <SideBar openSideBar={setIsSideBar} />}
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <div onClick={() => setIsSideBar(true)}>
              <Hamburger />
            </div>
          }
          title={<SmallGlass />}
        />
      </StyledMargin>
      <StyledPage>
        <ChooseHubTitle>Arabrew - Work</ChooseHubTitle>
        <ChooseHubButton onClick={() => navigate("/conversation")}>
          Chat
        </ChooseHubButton>
        <ChooseHubButton onClick={() => navigate("/job-board")}>
          Job Board
        </ChooseHubButton>
        <ChooseHubButton onClick={() => navigate("/post-job")}>
          Post A Job
        </ChooseHubButton>
        <ChooseHubButton onClick={() => navigate("/my-jobs")}>
          My Job Posts
        </ChooseHubButton>
      </StyledPage>
    </div>
  );
}
