import { NavLink } from "react-router-dom";
import { HeaderStyle} from "../style";
export default function Header({leftIcon, midIcon, rightIcon}) {
    return (
      <>
      <HeaderStyle>
        <div>{leftIcon}</div>
        <div>{midIcon}</div>
        <div>{rightIcon}</div>
          </HeaderStyle>
          <li>
            {/* complete the right paths from App.jsx */}
            <NavLink to="/"></NavLink>
            <NavLink to="/Two"></NavLink>
          </li>
      </>
    );
  }