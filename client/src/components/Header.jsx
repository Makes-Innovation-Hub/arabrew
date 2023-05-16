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
            {/* complete the right paths */}
            <NavLink to="/">you are on page 1</NavLink>
            <NavLink to="/Two">click me to try pass to page 2</NavLink>
          </li>
      </>
    );
  }