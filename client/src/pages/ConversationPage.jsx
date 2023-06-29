import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
  StyledPage,
  StyledMargin,
  NoConversationStyle,
  ContentConversationPage,
  ConversationPageStyle,
  ChatsDisplay,
  ButtonForChats,
  BlockDiv,
} from "../styles";
import { SmallGlass, Hamburger } from "../assets";
import ConversationDisplay from "../components/ConversationDisplay";
import { useGetUserChatsListQuery } from "../features/userDataApi";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/loggedUser.context";

const ConversationPage = () => {
  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);
  const username = useSelector((state) => state.userRegister.name);
  const loggedUser = useSelector((state) => state.userRegister);
  // const { userData: loggedUser } = useContext(UserContext);
  const { data: chats, error, isLoading } = useGetUserChatsListQuery(username);
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    return <div>Error occurred while fetching chats.</div>;
  }
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
                    contentCon={
                      chat?.lastCon
                        ? chat.lastCon[
                            `content_${loggedUser.userDetails.nativeLanguage}`
                          ]
                        : ""
                    }
                    profile={chat.profile}
                  />
                );
              })}
            </ChatsDisplay>
            <BlockDiv />
            <ButtonForChats
              onClick={() => {
                navigate("/search-friends");
              }}
            >
              Search for friends to chat
            </ButtonForChats>
          </ConversationPageStyle>
        ) : (
          <ConversationPageStyle>
            <NoConversationStyle>No Conversation</NoConversationStyle>
            <ContentConversationPage>
              Add some friends and start chatting with them, Your conversations
              will show up here.
            </ContentConversationPage>
            <ButtonForChats
              onClick={() => {
                navigate("/search-friends");
              }}
            >
              Search for friends to chat
            </ButtonForChats>
          </ConversationPageStyle>
        )}
      </StyledPage>
    </div>
  );
};
export default ConversationPage;
