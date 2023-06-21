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
  const [userData, setUserData] = useState(initialState);

  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
