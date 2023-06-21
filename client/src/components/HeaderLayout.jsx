import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { StyledHeader } from "../styles/StyledHeader";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addAllDetailsConnectedUser,
  addAuth0Details,
  mergeDetails,
} from "../features/userRegister/userRegisterSlice";
import { useLazyGetLoggedUserQuery } from "../features/userDataApi";
export default function HeaderLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [trigger, result, lastPromiseInfo] = useLazyGetLoggedUserQuery();

  useEffect(() => {
    async function handleNav() {
      if (!isAuthenticated && !isLoading) {
        loginWithRedirect();
      } else {
        if (location.pathname === "/" && user) {
          const subId = user.sub.split("|")[1];
          const fetchedUserData = await trigger(subId);
          const userData = fetchedUserData.data.data;
          dispatch(addAllDetailsConnectedUser(userData));
          if (result.data && result.data.success) {
            navigate("/conversation");
          } else if (
            location.pathname === "/" &&
            result &&
            !result.data?.success
          ) {
            navigate("/lang");
          }
        }
      }
    }
    handleNav();
  }, [isLoading, result]);
  return (
    <div>
      <StyledHeader />
      <Outlet />
    </div>
  );
}
