import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import HumburgerSvg from "../assets/humburger.jsx"
import LogoSvg from "../assets/logo";
export default function RootLayout() {
  return (
    <>
      <Header leftIcon={<HumburgerSvg/>} midIcon={<LogoSvg/>} rightIcon={""}/>
      <Outlet />
    </>
  );
}