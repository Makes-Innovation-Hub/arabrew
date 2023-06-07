import { Link } from "react-router-dom";
import { Header } from "../components";
import { ArrowLeft } from "../assets";
import { StyledButton, StyledPage } from "../styles";

const Interests = () => {
  return (
    <div>
      <Header
        leftIcon={
          <Link to="/lang">
            <ArrowLeft />
          </Link>
        }
        title={"Add Interests"}
      />
      <StyledPage>
        <StyledButton to={"/lang"} text={"Save & Next"}></StyledButton>
      </StyledPage>
    </div>
  );
};
export default Interests;
