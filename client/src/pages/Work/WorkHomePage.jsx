import { useState } from "react";
import Header from "../../components/Header";
import { Hamburger, SmallGlass } from "../../assets";

import SideBar from "../../components/SideBar";
import {
  StyledMargin,
  StyledPage,
  PageTitle24,
  MainButton,
} from "../../styles";
import { useNavigate } from "react-router-dom";

export default function WorkHomePage() {
  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);

  return (
    // same style as the other pages-Get
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
        <PageTitle24>Arabrew - Work</PageTitle24>
        <MainButton onClick={() => navigate("/work-conversation")}>
          Chat
        </MainButton>
        <MainButton onClick={() => navigate("/job-board")}>
          Job Board
        </MainButton>
        <MainButton onClick={() => navigate("/postJob")}>Post A Job</MainButton>
        <MainButton onClick={() => navigate("/myJobsPosted")}>
          My Job Posts
        </MainButton>
      </StyledPage>
    </div>
  );
}
