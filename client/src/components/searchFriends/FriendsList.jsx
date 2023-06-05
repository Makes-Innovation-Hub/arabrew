import React from "react";
import Friend from "../Friend.jsx";
const FriendsList = ({ friendsArr }) => {
  return friendsArr.map((user) => {
    const { name, avatar, subId, userDetails } = user;
    const { nationality, interests } = userDetails;
    return (
      <Friend
        key={subId}
        name={name}
        img={avatar}
        flag={nationality}
        hobbies={interests}
      />
    );
  });
};

export default FriendsList;
