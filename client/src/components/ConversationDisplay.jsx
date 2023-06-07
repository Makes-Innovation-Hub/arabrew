import React, { Component } from "react";
import { DisplayChatsStyle, ProfileChat, ContentChat } from "../styles";

export const ConversationDisplay = ({ profile, nameCon, contentCon }) => {
  return (
    <DisplayChatsStyle>
      <ProfileChat profile={profile} />
      <ContentChat>
        <p>{nameCon}</p>
        <p>{contentCon}</p>
      </ContentChat>
    </DisplayChatsStyle>
  );
};

export default ConversationDisplay;
