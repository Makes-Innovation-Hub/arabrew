import { sendUserDataToServer } from "./api";
import { useSelector } from "react-redux";

const Bio = () => {
  const userData = useSelector((state) => state.userData);

  const handleSendData = () => {
    sendUserDataToServer(userData);
  };

  return (
    <>
      <div>Bio</div>
      <button onClick={handleSendData}></button>
    </>
  );
};

export default Bio;
