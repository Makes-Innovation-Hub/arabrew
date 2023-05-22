import profileImg from "../../../assets/prf.webp";
import arrowIcon from "../../../assets/arrow.svg";
import { HeaderWrapper } from "../../../styles/Chat/Header/HeaderWrapper";
import { ImageWrapper } from "../../../styles/Chat/Header/ImageWrapper";

export default function Header() {
  return (
    <HeaderWrapper>
      <img src={arrowIcon} />
      <ImageWrapper>
        <img
          src={profileImg}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageWrapper>
      <label style={{ color: "#FFFFFF", fontWeight: "1000" }}>John Doe</label>
    </HeaderWrapper>
  );
}
