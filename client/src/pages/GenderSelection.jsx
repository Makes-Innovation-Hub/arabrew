import { useDispatch } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import {Flex, StyledPage, StyledMargin, StyledButton, StyledLanguageButton, StyledPageTitle } from "../styles"
import { ArrowLeft, MaleIcon, FemaleIcon } from "../assets"
import { addUserDataField } from "../features/userDataSlice"


const GenderSelection = () => {
      const [gender, setGender] = useState({
      value: "",
      dataField: "Gender"
    })

    const dispatch = useDispatch()
  return (
    <div>
      <Header leftIcon={<Link to="/location"><ArrowLeft/></Link>} title={"Add Gender"} />
      <StyledPage>
         <StyledMargin direction="vertical" margin="1.75rem"/>
            <StyledMargin direction="horizontal" margin="35rem">
            <StyledPageTitle>Add your Gender</StyledPageTitle>
            </StyledMargin>
            <StyledMargin direction="vertical" margin="9.25rem"/>
            <Flex>
              <MaleIcon/>
              <StyledMargin direction="horizontal" margin="0.9rem"/>
              <StyledLanguageButton bg={gender.value === "Male" ? "#50924E" : "#FFFFFF"} color={gender.value === "Male" ? "#FFFFFF" : "#000000"} onClick={() => setGender({...gender, value: "Male"})}>Male</StyledLanguageButton>
            </Flex>
            <StyledMargin direction="vertical" margin="3rem"/>
            <Flex>
              <MaleIcon/>
              <StyledMargin direction="horizontal" margin="0.9rem"/>
              <StyledLanguageButton bg={gender.value === "Female" ? "#50924E" : "#FFFFFF"} color={gender.value === "Female" ? "#FFFFFF" : "#000000"} onClick={() => setGender({...gender, value: "Female"})}>Female</StyledLanguageButton>
            </Flex>
            <StyledMargin direction="vertical" margin="3rem"/>
            <Flex>
            <MaleIcon/>
            <StyledMargin direction="horizontal" margin="0.9rem"/>
            <StyledLanguageButton bg={gender.value === "Other" ? "#50924E" : "#FFFFFF"} color={gender.value === "Other" ? "#FFFFFF" : "#000000"} onClick={() => setGender({...gender, value: "Other"})}>Other</StyledLanguageButton>
            </Flex>
            <StyledButton to={gender.value ? "/occupation" : null} onClick={() => {
              if(!gender.value){
                return
              }
              dispatch(addUserDataField(gender))
              setGender({...gender, value: ""})
            }
            } bg={gender.value ? "#50924E" : "#d7ddd6"} hoverBg={gender.value ? "#396d37" : "#d7ddd6"} children={"Save & Next"}></StyledButton>
      </StyledPage>
    </div>
  )
}
export default GenderSelection