import { useState } from "react";
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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ConversationPage = ({ prevConversation }) => {
  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);
  const { t } = useTranslation();
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
        {prevConversation.length !== 0 ? (
          <ConversationPageStyle>
            <div>{t("ConversationTitle")}</div>
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
            <ButtonForChats
              onClick={() => {
                navigate("/search-friends");
              }}
            >
              {t("searchFriendButton")}
            </ButtonForChats>
          </ConversationPageStyle>
        ) : (
          <ConversationPageStyle>
            <NoConversationStyle>{t("noConversationMsg")}</NoConversationStyle>
            <ContentConversationPage>
              {t("noConversationMsgDetails")}
            </ContentConversationPage>
            <ButtonForChats
              onClick={() => {
                navigate("/search-friends");
              }}
            >
              {t("searchFriendButton")}
            </ButtonForChats>
          </ConversationPageStyle>
        )}
      </StyledPage>
    </div>
  );
};
export default ConversationPage;
