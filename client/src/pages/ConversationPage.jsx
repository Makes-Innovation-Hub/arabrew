import { useNavigate,Link } from "react-router-dom";
import Header from "../components/Header";
import App from "../App";
import {
  Flex,
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
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/search-friends');
  };
  const handleChatClick = () => {
    navigate('/chat-page/:${prevConversation[0].myName}/:${chat.name}');
  };
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
        {prevConversation[1].length !== 0 ? (
          <ConversationPageStyle>
            <div>Conversation</div>
            <ChatsDisplay onClick={handleChatClick} >
              {prevConversation[1].map((chat, i) => {
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
            <ButtonForChats onClick={handleButtonClick}>Search for friends to chat</ButtonForChats>
          </ConversationPageStyle>
        ) : (
          <ConversationPageStyle>
            <NoConversationStyle>No Conversation</NoConversationStyle>
            <ContentConversationPage>
              Add some friends and start chatting with them, Your conversations
              will show up here.
            </ContentConversationPage>
            <ButtonForChats onClick={handleButtonClick} >Search for friends to chat</ButtonForChats>
          </ConversationPageStyle>
        )}
      </StyledPage>
    </div>
  );
};
export default ConversationPage;