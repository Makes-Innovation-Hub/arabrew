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
        <div style={{ width: "20%" }}>
          {/*  here you can add code for additional elements in the header */}
        </div>
      </HeaderWrapper>
      <Container>
        {/* here you can add code for the container page */}
      </Container>
    </BackLayout>
  );
}
