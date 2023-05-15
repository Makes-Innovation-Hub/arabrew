import { NavLink } from "react-router-dom";
import { HeaderStyle} from "../style";
export default function Header({leftIcon, midIcon, rightIcon}) {
    return (
      <>
      <HeaderStyle>
        <div>
        {leftIcon}
        </div>
      
    <div>{midIcon}</div>
    <div>{rightIcon}</div>
    
      </HeaderStyle>
        {/* <div className="presentCrud">
          <li>
            <NavLink to="/">Create</NavLink>
          </li>
          <li>
            <NavLink to="/Read">Read</NavLink>
          </li>
          <li>
            <NavLink to="/Update">Update</NavLink>
          </li>
          <li>
            <NavLink to="/Delete">Delete</NavLink>
          </li>
        </div> */}
      </>
    );
  }