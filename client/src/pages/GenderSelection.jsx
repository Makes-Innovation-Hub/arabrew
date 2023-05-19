import { useDispatch } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import {Flex, StyledPage, StyledMargin, StyledButton, StyledLanguageButton, StyledPageTitle } from "../styles"
import { ArrowLeft, MaleIcon } from "../assets"
import { addUserDataField } from "../features/userDataSlice"


const GenderSelection = () => {
      const [gender, setGender] = useState({
      value: "",
      dataField: "Gender"
    })

    const dispatch = useDispatch()
  return (
    <div>
       <StyledMargin direction="vertical" margin="5%">
      <Header leftIcon={<Link to="/location"><ArrowLeft/></Link>} title={"Add Gender"} />
      </StyledMargin>
      <StyledPage>
         <StyledMargin direction="vertical" margin="1.75rem"/>
            <StyledMargin direction="horizontal" margin="35rem">
            <StyledPageTitle>Add your Gender</StyledPageTitle>
            </StyledMargin>
            <StyledMargin direction="vertical" margin="9.25rem"/>
            <Flex>
              <MaleIcon/>
              <StyledMargin direction="horizontal" margin="0.9rem"/>
            <StyledLanguageButton bg={gender.value === "Male" ? "#50924E" : "#FFFFFF"} color={gender.value === "Male" ? "#FFFFFF" : "#000000"} onClick={() => setGender({...language, value: "Male"})}>Male</StyledLanguageButton>
            </Flex>
      </StyledPage>
    </div>
  )
}
export default GenderSelection