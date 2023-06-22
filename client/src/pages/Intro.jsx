import { useEffect, useState } from "react";
import { Glass, GoogleIcon, FacebookIcon } from "../assets";
import { useDispatch } from "react-redux";
import {
  Flex,
  StyledButton,
  StyledTitle,
  StyledSpan,
  StyledDiv,
  StyledMargin,
  StyledParagraph,
  StyledSocialButton,
} from "../styles";
import { addAuth0Details } from "../features/userRegister/userRegisterSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useGetLoggedUserQuery } from "../features/userDataApi";
import { skipToken } from "@reduxjs/toolkit/query/react";

const Intro = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
  } = useAuth0();

  const loginWithFacebook = () => loginWithPopup({ connection: "facebook" });
  const loginWithGoogle = () => loginWithPopup({ connection: "google-oauth2" });

  const { data: loggedUser, isSuccess } = useGetLoggedUserQuery(
    user ? user.sub : skipToken
  );

  useEffect(() => {
    if (!isLoading && user && isSuccess) {
      if (loggedUser?.success) {
        navigate("/conversation");
      } else {
        const { name, picture, sub } = user;
        dispatch(
          addAuth0Details({
            name: name,
            avatar: picture,
            subId: sub.split("|")[1],
          })
        );
        navigate("/lang");
      }
    }
  }, [navigate, isLoading, user, isSuccess, loggedUser]);

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <Flex direction="column" height="100vh">
      <Glass />
      <StyledMargin direction="vertical" margin="2rem" />
      <StyledTitle>AraBrew</StyledTitle>
      <StyledMargin direction="vertical" margin="2rem" />
      <StyledSpan>Hi!</StyledSpan>
      <StyledDiv>
        <StyledParagraph>
          Please answer some quick question so we can find you relevant people
          to chat with
        </StyledParagraph>
      </StyledDiv>
      <div>
        {!isAuthenticated && (
          <Flex direction="column">
            <StyledSocialButton onClick={loginWithFacebook}>
              <FacebookIcon />
              <StyledMargin direction="horizontal" margin="1rem" />
              Sign in with Facebook
            </StyledSocialButton>
            <StyledMargin direction="vertical" margin="2.5rem" />
            <StyledSocialButton onClick={loginWithGoogle}>
              <GoogleIcon />
              <StyledMargin direction="horizontal" margin="1rem" />
              Sign in with Google
            </StyledSocialButton>
          </Flex>
        )}

        {isAuthenticated && (
          <div>
            <p>Hello, {user.name}!</p>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          </div>
        )}
      </div>
      <StyledButton to={isAuthenticated && "/lang"} text={"Lets Do It"} />
    </Flex>
  );
};
export default Intro;
