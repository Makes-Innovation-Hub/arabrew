import { Link } from "react-router-dom";
import { Header } from "../components";
import { ArrowLeft } from "../assets";
import { StyledPage, StyledButton } from "../styles";

const Age = () => {
  return (
    <div>
      <Header
        leftIcon={
          <Link to="/interests">
            <ArrowLeft />
          </Link>
        }
        title={"Add Age"}
      />
      <StyledPage>
        <StyledButton to={"/interests"} text={"Save & Next"}></StyledButton>
      </StyledPage>
    </div>
  );
};
export default Age;
