import { useState } from "react";
import Header from "../../components/Header";
import { Hamburger, SmallGlass, ArrowLeft } from "../../assets";
import { InstructionPrompt } from "../../styles/BioPage/InstructionPrompt.jsx";

import SideBar from "../../components/SideBar";
import { StyledMargin, StyledPage } from "../../styles";

import { useNavigate } from "react-router-dom";

export default function JobBoardPage() {
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
              <ArrowLeft />
            </div>
          }
          title={"Job Board"}
        />
      </StyledMargin>
      <StyledPage>
        <InstructionPrompt>Open Jobs</InstructionPrompt>
      </StyledPage>
    </div>
  );
}
