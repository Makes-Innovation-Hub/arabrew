import { useState } from "react";
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
import thisProfile from "../assets/photo.webp";
import Eng from "../assets/Eng.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
export default function SideBar({ openSideBar }) {
  const [lenOptions, setLenOptions] = useState(false);
  const [whichLang, setWhichLang] = useState(0);
  let langArr = [
    [Eng, "English (US)"],
    [Eng, "עברית"],
    [Eng, "عربيه"],
  ];

  let fectivicProfile = {
    name: "Mika",
    profile: thisProfile,
  };

  const { logout } = useAuth0();

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
          <ProfileChat profile={fectivicProfile.profile} />{" "}
          {fectivicProfile.name}
        </DisplayMe>
        <UlSideBar>
          <LinkSideBar href="/">
            <LiSideBar>
              <HomeIcon />
              {t("home")}
            </LiSideBar>
          </LinkSideBar>
          <LinkSideBar href="/profile">
            <LiSideBar>
              <ProfileIcon />
              {t("profile")}
            </LiSideBar>
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
              onClick={() =>
                logout({ returnTo: window.location.origin + "/home" })
              }
            >
              {t("log_out")}
            </StyledHiddenButton>
          </LiSideBar>
        </UlSideBar>
      </StyledSideBar>
    </>
  );
}
