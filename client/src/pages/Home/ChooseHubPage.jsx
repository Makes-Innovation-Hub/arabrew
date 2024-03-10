import React, { useState } from "react";
import {
  BriefcaseIcon,
  Hamburger,
  LaughEmoji,
  SmallGlass,
  UsersIcon,
} from "../../assets";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import {
  MainButton,
  PageTitle24,
  StyledMargin,
  StyledPage,
} from "../../styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ChooseHubPage() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [isSideBar, setIsSideBar] = useState(false);

  return (
    <div>
      {isSideBar && (
        <div>
          <SideBar openSideBar={setIsSideBar} />
        </div>
      )}
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <div
              onClick={() => {
                setIsSideBar(true);
              }}
            >
              <Hamburger />
            </div>
          }
          title={<SmallGlass />}
        />
      </StyledMargin>
      <StyledPage>
        <PageTitle24>{t("choose_your_hub")}</PageTitle24>
        <MainButton
          onClick={() => {
            navigate("/work");
          }}
        >
          {t("work")} - Work <BriefcaseIcon />{" "}
        </MainButton>
        <MainButton
          onClick={() => {
            navigate("/conversation");
          }}
        >
          {t("hobbies")} - Hobbies <LaughEmoji />{" "}
        </MainButton>
        <MainButton
          onClick={() => {
            navigate("/MeetupsHomePage");
          }}
        >
          {t("meetup")} - Meetup <UsersIcon />{" "}
        </MainButton>
      </StyledPage>
    </div>
  );
}
