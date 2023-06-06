import { Link } from "react-router-dom";
import { Header } from "../components";
import { ArrowLeft } from "../assets";
import { StyledPage } from "../styles";

const Bio = () => {
  return (
    <div>
      <Header
        leftIcon={
          <Link to="/occupation">
            <ArrowLeft />
          </Link>
        }
        title={"Add Bio"}
      />
      <StyledPage></StyledPage>
    </div>
  );
};
export default Bio;
