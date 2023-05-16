import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import HamburgerSvg from "../assets/hamburger.jsx"
import LogoSvg from "../assets/logo";
export default function RootLayout() {
  return (
    <>
      <Header leftIcon={<HamburgerSvg/>} midIcon={<LogoSvg/>} rightIcon={""}/>
      <Outlet />
    </>
  );
}