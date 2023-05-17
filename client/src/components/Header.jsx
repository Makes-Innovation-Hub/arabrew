import { HeaderStyle } from "../styles";
export default function Header({ leftIcon, midIcon, rightIcon }) {
  return (
    <>
      <HeaderStyle>
        <div>{leftIcon}</div>
        <div>{midIcon}</div>
        <div>{rightIcon}</div>
      </HeaderStyle>
    </>
  );
}
