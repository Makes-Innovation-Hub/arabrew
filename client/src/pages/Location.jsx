import { useDispatch } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../components"
import { Flex, StyledPage, StyledMargin, StyledButton, StyledPageTitle } from "../styles"
import { ArrowLeft } from "../assets"
import { addUserDataField } from "../features/userDataSlice"



const Location = () => {
  return (
    <div>
      <Header leftIcon={<Link to="/gender"><ArrowLeft/></Link>} title={"Add Location"} />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem"/>
            <StyledMargin direction="horizontal" margin="35rem">
            <StyledPageTitle>Add your Location</StyledPageTitle>
            </StyledMargin>
            <StyledMargin direction="vertical" margin="9.25rem"/>
      </StyledPage>
    </div>
  )
}
export default Location