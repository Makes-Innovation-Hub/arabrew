import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  StyledPage,
  StyledMargin,
  NoConversationStyle,
  ContentConversationPage,
  ConversationPageStyle,
  ChatsDisplay,
  ButtonForChats,
  BlockDiv,
  ButtonConversation,
} from "../styles";
import { SmallGlass, Hamburger } from "../assets";
import ConversationDisplay from "../components/ConversationDisplay";
const ConversationPage = ({ prevConversation }) => {
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
        {prevConversation.length !== 0 ? (
          <ConversationPageStyle>
            <div>Conversation</div>
            <ChatsDisplay>
              {prevConversation.map((chat, i) => {
                return (
                  <ConversationDisplay
                    key={i}
                    nameCon={chat.name}
                    contentCon={chat.lastCon}
                    profile={chat.profile}
                  />
                );
              })}
            </ChatsDisplay>
            <BlockDiv />
            <ButtonForChats>Search for friends to chat</ButtonForChats>
          </ConversationPageStyle>
        ) : (
          <ConversationPageStyle>
            <NoConversationStyle>No Conversation</NoConversationStyle>
            <ContentConversationPage>
              Add some friends and start chatting with them, Your conversations
              will show up here.
            </ContentConversationPage>
            <ButtonForChats>Search for friends to chat</ButtonForChats>
          </ConversationPageStyle>
        )}
      </StyledPage>
    </div>
  );
};
export default ConversationPage;
