import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { StyledHeader } from "../styles/StyledHeader";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAuth0Details } from "../features/userRegister/userRegisterSlice";
import { useLazyGetLoggedUserQuery } from "../features/userDataApi";
export default function HeaderLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [trigger, result, lastPromiseInfo] = useLazyGetLoggedUserQuery();

  useEffect(() => {
    if (result.status === "fulfilled") {
      if (result.data && result.data.success) {
        navigate("/conversation");
      } else if (location.pathname === "/" && result && !result.data?.success) {
        navigate("/lang");
      }
    }
  }, [result]);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    } else {
      if (location.pathname === "/" && user) {
        const subId = user.sub.split("|")[1];
        dispatch(
          addAuth0Details({
            subId,
            avatar: user.picture,
            name: user.name,
          })
        );
        trigger(subId);
      }
    }
  }, [isLoading]);
  return (
    <div>
      <StyledHeader />
      <Outlet />
    </div>
  );
}
