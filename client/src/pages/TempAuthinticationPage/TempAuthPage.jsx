import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../features/userStatus/userStatusSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function TempAuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hasOnBoarded = useSelector((state) => state.userStatus.hasOnBoarded);

  const handleAuthentication = () => {
    dispatch(setAuthenticated(true));

    if (hasOnBoarded) {
      navigate("/conversation");
    } else {
      navigate("/lang");
    }
  };

  return (
    <div>
      TempAuthPage<div></div>
      <button onClick={handleAuthentication}>click to be authenticated</button>
    </div>
  );
}
