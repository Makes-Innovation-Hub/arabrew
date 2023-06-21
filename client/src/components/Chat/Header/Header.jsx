import profileImg from "../../../assets/prf.webp";
import arrowIcon from "../../../assets/arrow.svg";
import { HeaderWrapper } from "../../../styles/Chat/Header/HeaderWrapper";
import { ImageWrapper } from "../../../styles/Chat/Header/ImageWrapper";

export default function Header({ reciever }) {
  const { img, name } = reciever;
  return (
    <HeaderWrapper>
      <img src={arrowIcon} />
      <ImageWrapper>
        <img
          src={img}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="reciever img"
        />
      </ImageWrapper>
      <label style={{ color: "#FFFFFF", fontWeight: "1000" }}>{name}</label>
    </HeaderWrapper>
  );
}
