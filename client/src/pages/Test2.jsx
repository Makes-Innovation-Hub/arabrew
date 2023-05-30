import { useSelector } from "react-redux";

const Test2 = () => {
  const storeData = useSelector((state) => state.userRegister);

  return <div>{JSON.stringify(storeData)}</div>;
};

export default Test2;
