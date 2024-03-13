import React, { Component } from "react";
import { DisplayChatsStyle, ProfileChat, ContentChat } from "../styles";
import { Link } from "react-router-dom";

export const ConversationDisplay = ({
  profile,
  nameCon,
  contentCon,
  userId,
  chatId,
}) => {
  console.log("chat id", chatId);
  return (
    <Link
      to={`/chat-page/${chatId}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <DisplayChatsStyle>
        <ProfileChat profile={profile} />
        <ContentChat>
          <p>{nameCon}</p>
          <p>{contentCon}</p>
        </ContentChat>
      </DisplayChatsStyle>
    </Link>
  );
};

export default ConversationDisplay;
