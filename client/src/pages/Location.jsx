import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";
import {
  StyledPage,
  StyledMargin,
  StyledButton,
  StyledPageTitle,
  StyledInput,
} from "../styles";
import { ArrowLeft } from "../assets";
import { addDetail } from "../features/userRegister/userRegisterSlice";

const Location = () => {
  const [location, setLocation] = useState({
    value: "",
    field: "address",
  });

  const dispatch = useDispatch();
  const { value } = location;

  return (
    <div>
      <Header
        leftIcon={
          <Link to="/nationalityPage">
            <ArrowLeft />
          </Link>
        }
        title={"Add Location"}
      />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>Add your Location</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="9.25rem" />
        <StyledInput
          type="text"
          value={value}
          onChange={(e) => setLocation({ ...location, value: e.target.value })}
          placeholder="Add Location"
          borderColor="#1E75E5"
        />
        <StyledButton
          to={value ? "/gender" : null}
          onClick={() => {
            if (!value) {
              return;
            }
            dispatch(addDetail(location));
            setLocation({ ...location, value: "" });
          }}
          bg={value ? "#50924E" : "#d7ddd6"}
          hoverBg={value ? "#396d37" : "#d7ddd6"}
          text={"Save & Next"}
        ></StyledButton>
      </StyledPage>
    </div>
  );
};
export default Location;
