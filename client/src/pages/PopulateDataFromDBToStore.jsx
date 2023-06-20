import { useEffect } from "react";
import { useGetLoggedUserQuery } from "../features/userDataApi.js";
import { useDispatch } from "react-redux";
import { addAllDetailsChatUser } from "../features/chatUser/chatUserSlice.jsx";
import { addAllDetailsConnectedUser } from "../features/userRegister/userRegisterSlice.jsx";
const PopulateDataFromDBToStore = ({ subId, isConnectedUser }) => {
  const { data, isLoading, isError, isSuccess } = useGetLoggedUserQuery(subId);
  const dispatch = useDispatch();
  const fillStore = async () => {
    if (await data) {
      if (isConnectedUser) {
        dispatch(addAllDetailsConnectedUser(data.data));
      } else {
        dispatch(addAllDetailsChatUser(data.data));
      }
    }
  };
  useEffect(() => {
    isSuccess && data && fillStore();
  }, [data]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occurred while fetching user data.</div>;
  }
  return <div></div>;
};
export default PopulateDataFromDBToStore;
