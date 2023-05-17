import { StyledHeader } from "../styles/StyledHeader";
export default function Header({ leftIcon, midIcon, rightIcon }) {
  return (
    <>
      <StyledHeader>
        <div>{leftIcon}</div>
        <div>{midIcon}</div>
        <div>{rightIcon}</div>
      </StyledHeader>
    </>
  );
}