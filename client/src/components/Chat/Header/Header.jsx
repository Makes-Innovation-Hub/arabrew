import { MdArrowBackIosNew } from "react-icons/md";
import profileImg from "../../../assets/prf.webp";
import { HeaderWrapper } from "./HeaderStyles";
import { ImageWrapper } from "./HeaderStyles";

export default function Header() {
  return (
    <HeaderWrapper>
      <MdArrowBackIosNew size="1.5rem" color="#FFFFFF" />
      <ImageWrapper>
        <img
          src={profileImg}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageWrapper>
      <label style={{ color: "#FFFFFF", fontWeight: "800" }}>John Doe</label>
    </HeaderWrapper>
  );
}
