import { useSelector } from "react-redux";
import { useSendUserDataMutation } from "../features/userDataApi";

const Bio = () => {
  const userData = useSelector((state) => state.userData);

  const [sendUserData] = useSendUserDataMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendUserData(userData).unwrap();
    } catch (error) {
      throw new Error("Sending userData to server via rtk query failure");
    }
  };

  return (
    <>
      <div>Bio</div>
      <button onClick={handleSubmit}></button>
    </>
  );
};

export default Bio;
