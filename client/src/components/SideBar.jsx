import {
  ModalSideBar,
  StyledSideBar,
  GoBack,
  DisplayMe,
  ProfileChat,
  UlSideBar,
  LiSideBar,
  LinkSideBar,
} from "../styles";
import { BlackArrowLeft, HomeIcon, ProfileIcon } from "../assets/index.jsx";
import thisProfile from "../assets/photo.webp";
export default function SideBar() {
  return (
    <ModalSideBar>
      <StyledSideBar>
        <GoBack>
          <BlackArrowLeft />
        </GoBack>
        <DisplayMe>
          <ProfileChat profile={thisProfile} /> Mika
        </DisplayMe>
        <UlSideBar>
          <LinkSideBar href="/">
            <LiSideBar>
              <HomeIcon />
              Home{" "}
            </LiSideBar>
          </LinkSideBar>
          <LinkSideBar href="/profile">
            <LiSideBar>
              <ProfileIcon />
              Profile
            </LiSideBar>
          </LinkSideBar>

          <LiSideBar> English</LiSideBar>
        </UlSideBar>
      </StyledSideBar>
    </ModalSideBar>
  );
}
