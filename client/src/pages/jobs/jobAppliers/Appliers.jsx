import React from "react";
import { FlagContainer, FlagImg, StyledMargin } from "../../../styles";
import { Header } from "../../../components";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, SmallGlass } from "../../../assets";
import {
  Center,
  StyledAppliersTitle,
  StyledImg,
  StyledMyJobPage,
} from "../myPostedJobspage/StyledMyJobPage";
import {
  Container,
  FirstRow,
  SecondRow,
  StyledApplierImg,
  StyledIconDiv,
  StyledIconImg,
  StyledName,
} from "./StylesApplierPage";
import { useGetJobByIdQuery } from "../../../features/jobStore/jobAPI";
import flags from "../../../assets/countriesAndFlags/by-code.json";

function Appliers() {
  const { id } = useParams();
  const { data: job, isLoading, isError, isSuccess } = useGetJobByIdQuery(id);
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error fetching job details</div>;
  }
  const handleBack = (jobId) => {
    navigate(`/MyPostedJob/${jobId}`);
  };
  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <div onClick={() => handleBack(job.job.id)}>
              <ArrowLeft />
            </div>
          }
          title={<SmallGlass />}
        />
      </StyledMargin>

      <StyledMyJobPage height="710px">
        <Center>
          <StyledAppliersTitle>Appliers</StyledAppliersTitle>
        </Center>
        <StyledMargin direction="vertical" margin="2rem" />
        {isSuccess && (
          <>
            {job?.job.applicants.map((applicant) => (
              <Container key={applicant._id}>
                <FirstRow>
                  <Link
                    to={`/profiled?type=work&userId=${applicant.user.subId}`}
                  >
                    <StyledApplierImg src={applicant.user.avatar} alt="pic" />
                  </Link>
                  <FlagContainer>
                    <FlagImg
                      src={flags[applicant.user.userDetails.nationality]?.image}
                    />
                  </FlagContainer>
                  <StyledName>{applicant.user.name.split(" ")[0]}</StyledName>
                </FirstRow>
                <SecondRow>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                  >
                    <path
                      d="M9.5 1V1.6C9.5 3.84984 9.5 4.97476 10.073 5.76336C10.258 6.01804 10.482 6.24201 10.7366 6.42705C11.5252 7 12.6502 7 14.9 7L15.5 7M15.5 10L15.5 8.23675C15.5 7.25724 15.5 6.76749 15.3532 6.31559C15.3046 6.16612 15.2444 6.0207 15.173 5.88067C14.9573 5.45731 14.611 5.111 13.9184 4.41838L12.0816 2.58162C11.389 1.88901 11.0427 1.5427 10.6193 1.32698C10.4793 1.25563 10.3339 1.1954 10.1844 1.14683C9.73251 1 9.24276 1 8.26325 1L6.9 1C4.65016 1 3.52524 1 2.73664 1.57295C2.48196 1.75799 2.25799 1.98196 2.07295 2.23664C1.5 3.02524 1.5 4.15016 1.5 6.4L1.5 13.6C1.5 15.8498 1.5 16.9748 2.07295 17.7634C2.25799 18.018 2.48196 18.242 2.73664 18.4271C3.52524 19 4.65016 19 6.9 19H10.5C12.3692 19 13.3038 19 14 18.5981C14.4561 18.3348 14.8348 17.9561 15.0981 17.5C15.5 16.8038 15.5 15.8692 15.5 14V14"
                      stroke="#292556"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SecondRow>
                <StyledIconDiv>
                  <StyledIconImg src="https://s3-alpha-sig.figma.com/img/f9a0/eea2/7bbbc8e094e25903c33d7fe5215626af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax--m958Zm4xBfkCzJzxg~grkLZEPo1-Km0lOkaJL9B~43-cXS5tzRHdYmX9-Spp4G9Wi-iU4KqQweUms1IV2z2Mb8tinLXfLZYH~M8Rd-RCwXUsGaJJ97DRlFZq5e2v1sdRaxoBgR5gdkkdhn80Vp6a2IIqsoMbsPhCzL2oMV7f7na3~2HHW0boKXiw09CaErkqKA29H2B1nqyzuQbcjRozLTOBcx2Ha~F0EBW9f29oYTBVJw1877JMnJ2kutkHhpa~f~YIjN8kgSIdI8l1FHj-18uHVU0jFTdD4gk3cK9VLJASC6HHdx68ZoWT8k376gSVZbjZde9N-awD8G0xPQ__" />
                </StyledIconDiv>
              </Container>
            ))}
          </>
        )}
      </StyledMyJobPage>
    </div>
  );
}

export default Appliers;
