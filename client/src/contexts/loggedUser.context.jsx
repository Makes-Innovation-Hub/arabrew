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

const UserProvider = ({ children }) => {
  let storedUser = localStorage.getItem("loggedUser");
  if (storedUser) {
    console.log("storedUser", storedUser);
    storedUser = JSON.parse(storedUser);
  }
  const [userData, setUserData] = useState(storedUser || initialState);

  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({ ...userData, ...newData })
    );
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
