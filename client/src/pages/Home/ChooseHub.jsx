import { BriefcaseIcon, Hamburger, LaughEmoji, SmallGlass, UsersIcon } from "../../assets";
import Header from "../../components/Header";
import {
  ChooseHubButton,
  ChooseHubTitle,
  StyledMargin,
  StyledPage,
} from "../../styles";

export default function ChooseHub() {
  return (
    <div>
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
        <ChooseHubButton>Arabrew - Work <BriefcaseIcon/> </ChooseHubButton>
        <ChooseHubButton>Arabrew - Hobbies <LaughEmoji/> </ChooseHubButton>
        <ChooseHubButton>Arabrew - Meetup  <UsersIcon/> </ChooseHubButton>
      </StyledPage>
    </div>
  );
}
