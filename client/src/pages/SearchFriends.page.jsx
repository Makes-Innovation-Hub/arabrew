import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../features/userDataApi.js";

const SearchFriends = () => {
  const navigate = useNavigate();
  //! hardcoded until benny finish the LOGGEDUSER slice in the store
  //! then we replace them with useSelector
  const userObj = {
    subId: "54584682",
    interests: ["Yoga", "Reading", "Hiking", "Traveling", "Cooking"],
    name: "Taufiq Zayyad",
  };
  //! ***************************************************************************

  const { data, error, isError, isLoading, isSuccess } =
    useGetUsersQuery(userObj);
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }

    if (isError) {
      console.log(error);
    }
  }, [isError, isSuccess]);

  if (isLoading) return <h1>is Loading...</h1>;

  return (
    <div>
      {userObj.interests.map((interest) => (
        <button key={interest}>{interest}</button>
      ))}
      <br />
      <br />
      {isSuccess &&
        data.map((user) => {
          const { avatar, name, userDetails, subId } = user;
          const { nationality, interests } = userDetails;
          const roomId = [name.split(" "), userObj.name.split(" ")];
          return (
            <div key={subId}>
              <div style={{ border: "solid red 3px", width: "fit-content" }}>
                <h2> replace with {"<img src={avatar}>"}</h2>
                <h2>{name.split(" ")[0]}</h2>
                <h3>{nationality}</h3>
                {interests.map((interest) => (
                  <h6
                    style={{
                      backgroundColor: "green",
                      margin: "5px",
                      width: "fit-content",
                      padding: "2px 4px",
                      borderRadius: "40px",
                    }}
                    key={interest}
                  >
                    {interest}
                  </h6>
                ))}
                <button
                  style={{ background: "grey", fontSize: "2.5rem" }}
                  onClick={() => navigate(`/chatPage/${roomId}`)}
                >
                  💬
                </button>
              </div>
              <br />
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default SearchFriends;
