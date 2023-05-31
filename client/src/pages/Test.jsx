import { useEffect } from "react";
import { useGetLoggedUserQuery } from "../features/userDataApi.js";
import { useDispatch } from "react-redux";
import { addAllDetails } from "../features/userRegister/userRegisterSlice";

const Test = () => {
  const isConnectedUser = true;
  const subId = "201";
  const { data, isLoading, isError, isSuccess } = useGetLoggedUserQuery(subId);
  const dispatch = useDispatch();

  const fillStore = async () => {
    if (await data) {
      dispatch(
        addAllDetails({ ...data.data, isConnectedUser: isConnectedUser })
      );
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

export default Test;
