import { ModalSideBar, StyledSideBar } from "../styles";
import { BlackArrowLeft } from "../assets/index.jsx";

export default function SideBar() {
  return (
    <ModalSideBar>
      <StyledSideBar>
        <div>
          <BlackArrowLeft />
        </div>
      </StyledSideBar>
    </ModalSideBar>
  );
}
