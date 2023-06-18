import Friend from "../Friend.jsx";
const FriendsList = ({ friendsArr, userName }) => {
  return friendsArr.map((user) => {
    const { name: friend, avatar, subId, userDetails } = user;
    const { nationality, interests } = userDetails;
    return (
      <Friend
        key={subId}
        name={friend}
        img={avatar}
        flag={nationality}
        hobbies={interests}
        chatPage={`/chat-page/${userName}/${friend}`}
      />
    );
  });
};

export default FriendsList;
