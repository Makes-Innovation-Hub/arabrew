import { useDispatch } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import { Flex } from "../styles/Flex"
import { StyledPage } from "../styles/StyledPage"
import ArrowLeft from "../assets/ArrowLeft"
import { StyledMargin } from "../styles/StyledMargin"
import StyledButton from "../styles/StyledButton"
import { StyledLanguageButton } from "../styles/StyledLanguageButton"
import LanguageIcon from "../assets/LanguageIcon"
import { StyledPageTitle } from "../styles/StyledPageTitle"
import { addUserDataField } from "../features/userDataSlice"

  const LangSelection = () => {
    const [language, setLanguage] = useState({
      value: "",
      dataField: "Language"
    })

    const dispatch = useDispatch()
    return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
      <Header leftIcon={<Link to="/intro"><ArrowLeft/></Link>} title={"Add Language"} />
      </StyledMargin>
        <StyledPage>
            <StyledMargin direction="vertical" margin="1.75rem"/>
            <StyledMargin direction="horizontal" margin="35rem">
            <StyledPageTitle>Choose your Language</StyledPageTitle>
            </StyledMargin>
            <StyledMargin direction="vertical" margin="9.25rem"/>
            <Flex>
              <LanguageIcon letter="ع"/>
              <StyledMargin direction="horizontal" margin="0.9rem"/>
            <StyledLanguageButton onClick={() => setLanguage({...language, value: "AR"})}>Arabic</StyledLanguageButton>
            </Flex>
            <StyledMargin direction="vertical" margin="3rem"/>
            <Flex>
              <LanguageIcon letter="ע"/>
              <StyledMargin direction="horizontal" margin="0.9rem"/>
            <StyledLanguageButton onClick={() => setLanguage({...language, value: "HE"})}>Hebrew</StyledLanguageButton>
            </Flex>
            <StyledButton to="/intro" onClick={() => {
              console.log(language)
              if(!language.value){
                return
              }
              dispatch(addUserDataField(language))
              setLanguage({...language, value: ""})
            }
            } children={"Save & Next"}></StyledButton>
        </StyledPage>

    </div>
    )
  }
  export default LangSelection

  