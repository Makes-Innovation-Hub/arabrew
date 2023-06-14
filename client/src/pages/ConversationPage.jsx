import { Link } from "react-router-dom";
import Header from "../components/Header";
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
import { useGetUserChatsListQuery } from "../features/userDataApi";
import { useSelector } from "react-redux";

const ConversationPage = () => {
  const username = useSelector((state) => state.userRegister.name);
  const { data, error, isLoading } = useGetUserChatsListQuery(username);
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    return <div>Error occurred while fetching chats.</div>;
  }
  const chats = data;
  console.log(data, "data");

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
        {chats.length !== 0 ? (
          <ConversationPageStyle>
            <div>Conversation</div>
            <ChatsDisplay>
              {chats.map((chat, i) => {
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
