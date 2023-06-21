import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  Flex,
  StyledPage,
  StyledMargin,
  StyledButton,
  StyledLanguageButton,
  StyledPageTitle,
  StyledHiddenButton,
} from "../styles";
import { ArrowLeft, LanguageIcon } from "../assets";
import { addDetail } from "../features/userRegister/userRegisterSlice.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const LangSelection = () => {
  const [language, setLanguage] = useState({
    value: "",
    field: "nativeLanguage",
  });

  const { logout } = useAuth0();

  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <StyledHiddenButton
              onClick={() =>
                logout({ returnTo: window.location.origin + "/home" })
              }
            >
              <ArrowLeft />
            </StyledHiddenButton>
          }
          title={t("headerTitle1")}
        />
      </StyledMargin>
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>{t("pageTitle1")}</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="9.25rem" />
        <Flex>
          <LanguageIcon letter="ع" />
          <StyledMargin direction="horizontal" margin="0.9rem" />
          <StyledLanguageButton
            bg={language.value === "AR" ? "#50924E" : "#FFFFFF"}
            color={language.value === "AR" ? "#FFFFFF" : "#000000"}
            onClick={() => setLanguage({ ...language, value: "AR" })}
          >
            {t("language1")}
          </StyledLanguageButton>
        </Flex>
        <StyledMargin direction="vertical" margin="3rem" />
        <Flex>
          <LanguageIcon letter="ע" />
          <StyledMargin direction="horizontal" margin="0.9rem" />
          <StyledLanguageButton
            bg={language.value === "HE" ? "#50924E" : "#FFFFFF"}
            color={language.value === "HE" ? "#FFFFFF" : "#000000"}
            onClick={() => setLanguage({ ...language, value: "HE" })}
          >
            {t("language2")}
          </StyledLanguageButton>
        </Flex>
        <StyledButton
          to={language.value ? "/interests" : null}
          onClick={() => {
            if (!language.value) {
              return;
            }
            dispatch(addDetail(language));
            setLanguage({ ...language, value: "" });
          }}
          bg={language.value ? "#50924E" : "#d7ddd6"}
          hoverBg={language.value ? "#396d37" : "#d7ddd6"}
          text={t("button2")}
        ></StyledButton>
      </StyledPage>
    </div>
  );
};
export default LangSelection;
