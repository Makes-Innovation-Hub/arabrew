import { Link } from "react-router-dom"
import Header from "../components/Header"
import { Layout, StyledLayout } from "../styles/StyledLayout"
import { ArrowLeft } from "../assets"

const Test = () => {
  return (
    <StyledLayout headerContent={<Header leftIcon={<Link><ArrowLeft/></Link>} title={'Add Something'} />}  />
  )
}
export default Test