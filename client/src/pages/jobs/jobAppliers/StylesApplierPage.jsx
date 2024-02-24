import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* gap: 50px; */
  width: 100%;
  height: 48px;
`;
export const FirstRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const StyledName = styled.h2`
  color: #161616;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 18px */
`;

export const StyledApplierImg = styled.img`
  display: flex;
  width: 41px;
  height: 41px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyledIconDiv = styled.div`
  width: 14px;
  height: 18px;
  flex-shrink: 0;
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 32px;
  border: 1px solid var(--gray-300, #cbd5e0);
  stroke-width: 1.5px;
  stroke: var(--Primary, #292556);
  cursor: pointer;
`;

export const StyledIconImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 16.814px;
  background: url("https://s3-alpha-sig.figma.com/img/f9a0/eea2/7bbbc8e094e25903c33d7fe5215626af?Expires=17[…]jFTdD4gk3cK9VLJASC6HHdx68ZoWT8k376gSVZbjZde9N-awD8G0xPQ__"),
    lightgray 50% / cover no-repeat;
  cursor: pointer;
`;

export const SecondRow = styled.div`
  margin-left: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
