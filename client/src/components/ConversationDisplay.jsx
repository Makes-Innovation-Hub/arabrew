import React, { Component } from "react";
import { DisplayChatsStyle, ProfileChat, ContentChat } from "../styles";
import { Link } from "react-router-dom";

export const ConversationDisplay = ({ chat }) => {
  return (
    <Link
      to={`/chat-page/${chat.chatId}?hub=${chat.chatHub}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <DisplayChatsStyle>
        <ProfileChat profile={chat.avatar} />
        <ContentChat>
          <p>{chat.name}</p>
          <p>{chat.lastMessageContent}</p>
        </ContentChat>
      </DisplayChatsStyle>
    </Link>
  );
};

export default ConversationDisplay;
