import { useContext, useState } from "react";
import {
  ModalSideBar,
  StyledSideBar,
  GoBack,
  DisplayMe,
  ProfileChat,
  FlagForLang,
  UlSideBar,
  LiSideBar,
  LinkSideBar,
  StyledHiddenButton,
} from "../styles";
import {
  BlackArrowLeft,
  ArrowDown,
  HomeIcon,
  ProfileIcon,
} from "../assets/index.jsx";
import Eng from "../assets/Eng.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLanguage } from "../features/appLanguage/appLanguageSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { cleanUser } from "../features/userRegister/userRegisterSlice";
import { UserContext } from "../contexts/loggedUser.context";
import { Link, useNavigate } from "react-router-dom";
export default function SideBar({ openSideBar }) {
  const [lenOptions, setLenOptions] = useState(false);
  const [whichLang, setWhichLang] = useState(0);
  let langArr = [
    [Eng, "English (US)"],
    [Eng, "עברית"],
    [Eng, "عربيه"],
  ];
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData: loggedUser } = useContext(UserContext);

  const { t } = useTranslation();

  return (
    <>
      <ModalSideBar
        onClick={() => {
          openSideBar(false);
        }}
      />
      <StyledSideBar>
        <GoBack
          onClick={() => {
            openSideBar(false);
          }}
        >
          <BlackArrowLeft />
        </GoBack>
        <DisplayMe>
          <ProfileChat profile={loggedUser.avatar} /> {loggedUser.name}
        </DisplayMe>
        <UlSideBar>
          <LinkSideBar href="/">
            <LiSideBar>
              <HomeIcon />
              {t("home")}
            </LiSideBar>
          </LinkSideBar>
          <LinkSideBar>
            <Link
              onClick={() => {
                navigate("/profile", { state: loggedUser });
              }}
            >
              <LiSideBar>
                <ProfileIcon />
                {t("profile")}
              </LiSideBar>
            </Link>
          </LinkSideBar>

          <LiSideBar
            href=""
            onClick={() => {
              lenOptions ? setLenOptions(false) : setLenOptions(true);
            }}
          >
            {" "}
            <FlagForLang flag={langArr[whichLang][0]} /> {langArr[whichLang][1]}{" "}
            {lenOptions && <ArrowDown />}
          </LiSideBar>
          {lenOptions && (
            <div>
              {langArr.map((len, i) => {
                return (
                  i !== whichLang && (
                    <LiSideBar
                      key={i}
                      href=""
                      onClick={() => {
                        lenOptions ? setLenOptions(false) : setLenOptions(true);
                        setWhichLang(i);
                        dispatch(setLanguage(langArr[whichLang][1]));
                      }}
                    >
                      <FlagForLang flag={len[0]} /> {len[1]}{" "}
                    </LiSideBar>
                  )
                );
              })}
            </div>
          )}
          <LiSideBar>
            <StyledHiddenButton
              onClick={() => {
                dispatch(cleanUser());
                logout({ returnTo: "http://localhost:5173/" });
              }}
            >
              {t("logOut")}
            </StyledHiddenButton>
          </LiSideBar>
        </UlSideBar>
      </StyledSideBar>
    </>
  );
}
