import Friend from "../Friend.jsx";
const FriendsList = ({ friendsArr, userName, originLang }) => {
  return friendsArr.map((user) => {
    const { name: friend, avatar, subId, userDetails } = user;
    const { nationality, interests, nativeLanguage: targetLang } = userDetails;
    return (
      <Friend
        key={subId}
        name={friend}
        img={avatar}
        flag={nationality}
        hobbies={interests}
        userDetails={userDetails}
        chatPage={`/chat-page/${userName}/${friend}/${originLang}/${targetLang}`}
      />
    );
  });
};

export default FriendsList;
