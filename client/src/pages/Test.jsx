import { useEffect } from "react";
import { useGetLoggedUserQuery } from "../features/userDataApi.js";
const Test = () => {
  const { isSuccess, data } = useGetLoggedUserQuery({
    refetchOnMountOrArgChange: true,
  });
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);

  return <div>Test</div>;
};

export default Test;
