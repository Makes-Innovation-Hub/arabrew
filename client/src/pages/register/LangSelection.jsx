import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import {
  Flex,
  StyledPage,
  StyledMargin,
  StyledButton,
  StyledLanguageButton,
  StyledPageTitle,
} from "../../styles";
import { ArrowLeft, LanguageIcon } from "../../assets";
import { addDetail } from "../../features/userRegister/userRegisterSlice.jsx";

const LangSelection = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.userRegister);
  const [language, setLanguage] = useState({
    field: "lang",
    value: lang.length > 0 ? lang : [],
  });
  const { value } = language;
  const handleClick = () => {
    if (!value) {
      return;
    }
    dispatch(addDetail(language));
    setLanguage({ ...language, value: "" });
  };

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
            bg={value === "AR" ? "#50924E" : "#FFFFFF"}
            color={value === "AR" ? "#FFFFFF" : "#000000"}
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
            bg={value === "HE" ? "#50924E" : "#FFFFFF"}
            color={value === "HE" ? "#FFFFFF" : "#000000"}
            onClick={() => setLanguage({ ...language, value: "HE" })}
          >
            Hebrew
          </StyledLanguageButton>
        </Flex>
        <StyledButton
          to={value ? "/interests" : null}
          onClick={handleClick}
          bg={value ? "#50924E" : "#d7ddd6"}
          hoverBg={value ? "#396d37" : "#d7ddd6"}
          text={"Save & Next"}
        ></StyledButton>
      </StyledPage>
    </div>
  );
};
export default LangSelection;
