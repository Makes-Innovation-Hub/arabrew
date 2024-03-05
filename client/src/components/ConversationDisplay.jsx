import React, { Component } from "react";
import { DisplayChatsStyle, ProfileChat, ContentChat } from "../styles";
import { Link } from "react-router-dom";

export const ConversationDisplay = ({
  profile,
  nameCon,
  contentCon,
  userId,
}) => {
  return (
    <DisplayChatsStyle>
      <Link to={`/profiled?type=hobbies&userId=${userId}`}>
        <ProfileChat profile={profile} />
      </Link>
      <ContentChat>
        <p>{nameCon}</p>
        <p>{contentCon}</p>
      </ContentChat>
    </DisplayChatsStyle>
  );
};

export default ConversationDisplay;
