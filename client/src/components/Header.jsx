import { StyledHeader } from "../styles/StyledHeader";
import { StyledHeaderTitle } from "../styles/StyledHeaderTitle";
import { StyledFlex } from "../styles/StyledLayout";

export default function Header({ leftIcon, midIcon, rightIcon, title }) {
  return (
      <StyledFlex>
        {/* // <StyledHeader> */}
        <div>{leftIcon}</div>
        <div>
          {midIcon ? midIcon : <StyledHeaderTitle>{title}</StyledHeaderTitle>}
        </div>
        <div>{rightIcon}</div>
        {/* // </StyledHeader> */}
         </StyledFlex>
  );
}
