import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  StyledPage,
  StyledMargin,
  NoConversationStyle,
  ContentConversationPage,
  ConversationPageStyle,
  ButtonConversation,
} from "../styles";
import { SmallGlass, Hamburger } from "../assets";
const ConversationPage = () => {
  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/">
              <Hamburger />
            </Link>
          }
          title={<SmallGlass />}
        />
      </StyledMargin>
      <StyledPage>
        <ConversationPageStyle>
          <NoConversationStyle>No Conversation</NoConversationStyle>
          <ContentConversationPage>
            Add some friends and start chatting with them, Your conversations
            will show up here.
          </ContentConversationPage>
          <ButtonConversation>Search for friends to chat</ButtonConversation>
        </ConversationPageStyle>
      </StyledPage>
    </div>
  );
};
export default ConversationPage;
