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
} from "../styles";
import {
  BlackArrowLeft,
  ArrowDown,
  HomeIcon,
  ProfileIcon,
} from "../assets/index.jsx";
import thisProfile from "../assets/photo.webp";
import Eng from "../assets/Eng.png";
export default function SideBar({ a }) {
  const [lenOptions, setLenOptions] = useState(false);
  const [whichLang, setWhichLang] = useState(0);
  let langArr = [
    [Eng, "English (US)"],
    [Eng, "עברית"],
    [Eng, "عربيه"],
  ];
  return (
    <ModalSideBar
      id={"black"}
      onClick={(e) => {
        if (e.target.id === "black") a(false);
        else if (e.target.id === "arrow") a(false);
        // || e.target.id === "arrow" && a(false);
        console.log("black:", e.target.id);
      }}
    >
      <StyledSideBar id={"white"}>
        <GoBack id={"arrow"}>
          <BlackArrowLeft />
        </GoBack>
        <DisplayMe>
          <ProfileChat profile={thisProfile} /> Mika
        </DisplayMe>
        <UlSideBar>
          <LinkSideBar href="/">
            <LiSideBar>
              <HomeIcon />
              Home
            </LiSideBar>
          </LinkSideBar>
          <LinkSideBar href="/profile">
            <LiSideBar>
              <ProfileIcon />
              Profile
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
        </UlSideBar>
      </StyledSideBar>
    </ModalSideBar>
  );
}