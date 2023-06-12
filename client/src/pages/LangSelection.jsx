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
} from "../styles";
import { ArrowLeft, LanguageIcon } from "../assets";
import { addDetail } from "../features/userRegister/userRegisterSlice.jsx";
const LangSelection = () => {
  const [language, setLanguage] = useState({
    value: "",
    field: "nativeLanguage",
  });

  const dispatch = useDispatch();
  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <Link to="/intro">
              <ArrowLeft />
            </Link>
          }
          title={"Add Language"}
        />
      </StyledMargin>
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>Choose your Language</StyledPageTitle>
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
            Arabic
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
            Hebrew
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
          text={"Save & Next"}
        ></StyledButton>
      </StyledPage>
    </div>
  );
};
export default LangSelection;
