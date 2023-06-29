import { createContext, useState } from "react";

const UserContext = createContext();

const initialState = {
  subId: "",
  name: "",
  avatar: "",
  userDetails: {
    nativeLanguage: "",
    interests: [],
    yearOfBirth: "",
    nationality: "",
    address: "",
    gender: "",
    occupation: "",
    bio: "",
  },
};

function getEmptyUserObj() {
  return Object.assign({}, initialState);
}

const UserProvider = ({ children }) => {
  let storedUser = sessionStorage.getItem("loggedUser");
  if (storedUser) {
    storedUser = JSON.parse(storedUser);
  }
  const [userData, setUserData] = useState(storedUser || initialState);

  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
    sessionStorage.setItem(
      "loggedUser",
      JSON.stringify({ ...userData, ...newData })
    );
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, getEmptyUserObj }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
