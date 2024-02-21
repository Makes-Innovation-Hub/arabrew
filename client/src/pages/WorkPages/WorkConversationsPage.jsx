import { useState } from "react";
import Hamburger from "../../assets/Hamburger.jsx";
import SmallGlass from "../../assets/SmallGlass.jsx";
import { Header } from "../../components/index.js";
import SideBar from "../../components/SideBar.jsx";
import { StyledMargin } from "../../styles/StyledMargin.jsx";
import { useNavigate } from "react-router-dom";

const WorkConversationsPage = () => {
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
    </div>
  );
};

export default WorkConversationsPage;
