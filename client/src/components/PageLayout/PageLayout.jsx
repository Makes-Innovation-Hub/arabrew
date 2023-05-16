import { BackLayout, HeaderWrapper, Container } from "./PageLayoutStyles.jsx";
import arrowIcon from "../../assets/arrow.svg";

export default function PageLayout() {
  return (
    <BackLayout>
      <HeaderWrapper>
        <div>
          <img src={arrowIcon} />
        </div>
      </HeaderWrapper>
      <Container></Container>
    </BackLayout>
  );
}
