import { Outlet } from "react-router-dom";
import { StyledHeader } from "../styles/StyledHeader";

export default function HeaderLayout() {
  return (
    <div>
      <StyledHeader />
      <Outlet />
    </div>
  );
}
