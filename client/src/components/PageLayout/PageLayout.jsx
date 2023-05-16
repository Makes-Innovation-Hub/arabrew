import {
  BackLayout,
  HeaderWrapper,
  TitleWrapper,
  PageTitle,
  Container,
} from "./PageLayoutStyles.jsx";
import arrowIcon from "../../assets/arrow.svg";

export default function PageLayout() {
  return (
    <BackLayout>
      <HeaderWrapper>
        <div style={{ width: "20%" }}>
          <img src={arrowIcon} />
        </div>
        <TitleWrapper>
          <PageTitle>Add Age</PageTitle>
        </TitleWrapper>
        <div style={{ width: "20%" }}></div>
      </HeaderWrapper>
      <Container></Container>
    </BackLayout>
  );
}
