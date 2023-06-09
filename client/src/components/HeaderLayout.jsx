import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { StyledHeader } from "../styles/StyledHeader";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllDetailsConnectedUser,
  addAuth0Details,
  mergeDetails,
} from "../features/userRegister/userRegisterSlice";
import { UserContext } from "../contexts/loggedUser.context.jsx";
import { useLazyGetLoggedUserQuery } from "../features/userDataApi";

export default function HeaderLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, error, loginWithRedirect } =
    useAuth0();
  const [trigger, result, lastPromiseInfo] = useLazyGetLoggedUserQuery();

  // context
  const { userData, updateUserData, getEmptyUserObj } = useContext(UserContext);

  useEffect(() => {
    async function handleNav() {
      if (error) {
        console.log("error", error);
      }
      if (!isAuthenticated && !isLoading) {
        loginWithRedirect();
      } else {
        if (location.pathname === "/" && user) {
          const subId = user.sub.split("|")[1];
          const fetchedUserData = await trigger(subId);

          if (Object.keys(fetchedUserData.data.data).length > 0) {
            const userData = fetchedUserData.data.data;
            if (userData) {
              //clear exsiting data
              updateUserData(getEmptyUserObj());
              // fill with new data
              updateUserData(userData);
              dispatch(addAllDetailsConnectedUser(userData));
            }
          }
          if (result.data && result.data.success) {
            navigate("/conversation");
          } else if (
            location.pathname === "/" &&
            result &&
            !result.data?.success
          ) {
            const subId = user.sub.split("|")[1];
            const { name, picture } = user;
            updateUserData({ name, avatar: picture, subId });
            dispatch(addAuth0Details({ name, avatar: picture, subId }));
            navigate("/lang");
          }
        }
      }
    }
    handleNav();
  }, [isLoading, result, error]);

  return (
    <div>
      <StyledHeader />
      <Outlet />
    </div>
  );
}
