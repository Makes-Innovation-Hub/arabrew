import { useSelector } from "react-redux";
import { useSendUserDataMutation } from "../features/userDataApi";
import { Button } from "../components/styles/Button";

const Bio = () => {
  const userData = useSelector((state) => state.userData);
  const [sendUserData] = useSendUserDataMutation();

  const handleClick = async () => {
    sendUserData(userData);
  };

  return (
    <>
      <div>Bio</div>
      <Button onClick={handleClick}>Save & Next</Button>
    </>
  );
};

export default Bio;
