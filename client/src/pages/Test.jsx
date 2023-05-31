import { useEffect } from "react";
import { useGetLoggedUserQuery } from "../features/userDataApi.js";
import { useDispatch } from "react-redux";
import { addAllDetails } from "../features/userRegister/userRegisterSlice";

const Test = () => {
  const hardCodedSubId = "201";
  const { data, isLoading, isError, isSuccess } =
    useGetLoggedUserQuery(hardCodedSubId);
  const dispatch = useDispatch();

  const fillStore = async () => {
    if (await data) {
      console.log("data", data);
      dispatch(addAllDetails(data.data));
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

  return <div>{JSON.stringify(data?.data)}</div>;
};

export default Test;
