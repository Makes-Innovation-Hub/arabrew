import { StyledHeader } from "../styles/StyledHeader";
import { StyledHeaderTitle } from "../styles/StyledHeaderTitle";

export default function Header({ leftIcon, midIcon, rightIcon, title }) {
  return (
    <div>
      <StyledHeader>
        <div>{leftIcon}</div>
        <div>
          {midIcon ? midIcon : <StyledHeaderTitle>{title}</StyledHeaderTitle>}
        </div>
        <div>{rightIcon}</div>
      </StyledHeader>
    </div>
  );
}
