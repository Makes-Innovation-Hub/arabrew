import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../features/userStatus/userStatusSlice.jsx";

export default function TempAuthPage() {
  const dispatch = useDispatch();

  const handleAuthentication = () => {
    dispatch(setAuthenticated(true));
  };

  return (
    <div>
      TempAuthPage<div></div>
      <button onClick={handleAuthentication}>click to be authenticated</button>
    </div>
  );
}
