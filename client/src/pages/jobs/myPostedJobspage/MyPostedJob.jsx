import React from "react";
import { StyledPage, StyledTitle } from "../../../styles";
import { Header } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../../assets";
import {
  StyledMyJobPage,
  Title,
  StyledJobText,
  ContentWrapper,
  Center,
} from "./StyledMyJobPage";

function MyPostedJob() {
  return (
    <div>
      <Header
        leftIcon={
          <Link to="/">
            <ArrowLeft />
          </Link>
        }
        title={"My Posted Job Page"}
      />

      <StyledMyJobPage>
        <Center>
          <Title>Full Stack Developer</Title>
        </Center>

        <ContentWrapper>
          <StyledJobText>hello</StyledJobText>
        </ContentWrapper>
      </StyledMyJobPage>
    </div>
  );
}

export default MyPostedJob;
