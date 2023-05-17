import { useSelector } from "react-redux";
// import { useLazySendUserDataMutation } from "../features/userDataApi";
import { useSendUserDataMutation } from "../features/userDataApi";
import { Button } from "../components/styles/Button";

const Bio = () => {
  const userData = useSelector((state) => state.userData);

  const [sendUserData] = useSendUserDataMutation();

  const handleClick = async () => {
    sendUserData(userData);
    console.log(userData);
  };

  // const userData = useSelector((state) => state.userData);
  // const [sendUserData] = useLazySendUserDataMutation();
  // const [trigger] = useLazySendUserDataMutation();

  // const handleClick = async () => {
  //   // await trigger(userData);
  //   sendUserData(userData);
  //   console.log(userData);
  // };

  // if (isError)   return <h1>{error}</h1>;
  // if (isLoading) return <h1>Loading...</h1>;
  // if (isSuccess) return <h1>Success!</h1>;

  return (
    <>
      <div>Bio</div>
      <Button onClick={handleClick}>Save & Next</Button>
    </>
  );
};

export default Bio;
