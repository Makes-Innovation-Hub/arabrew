import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import HamburgerSvg from "../assets/hamburger.jsx";
import SmallGlass from "../assets/SmallGlass.jsx";
export default function RootLayout() {
  return (
    <div style={{ height: "80vh" }}>
      <Header
        leftIcon={<HamburgerSvg />}
        midIcon={<SmallGlass />}
        rightIcon={""}
      />
      <Outlet />
    </div>
  );
}
