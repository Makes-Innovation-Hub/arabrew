import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import SmallGlass from "../assets/SmallGlass.jsx";
import Hamburger from "../assets/Hamburger.jsx";


export default function RootLayout() {
  return (
    <div style={{ height: "80vh" }}>
      <Header
        leftIcon={<Hamburger />}
        midIcon={<SmallGlass />}
        rightIcon={""}
      />
      <Outlet />
    </div>
  );
}