import { Outlet } from "react-router-dom";
import HeaderLayout from "./HeaderLayout.jsx";
import SmallGlass from "../assets/SmallGlass.jsx";
import Hamburger from "../assets/Hamburger.jsx";


export default function Header({ leftIcon, midIcon, rightIcon, title }) {
  return (
    <div>
      <HeaderLayout
        leftIcon={leftIcon}
        midIcon={midIcon}
        title={title}
        rightIcon={rightIcon}
      />
    </div>
  );
}