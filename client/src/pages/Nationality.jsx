import { Link } from "react-router-dom";
import { Header } from "../components";
import { ArrowLeft } from "../assets";
import { StyledPage, StyledButton } from "../styles";

const Nationality = () => {
  return (
    <div>
      <Header
        leftIcon={
          <Link to="/age">
            <ArrowLeft />
          </Link>
        }
        title={"Add Nationality"}
      />
      <StyledPage>
        <StyledButton to={"/location"} text={"Save & Next"}></StyledButton>
      </StyledPage>
    </div>
  );
};
export default Nationality;
