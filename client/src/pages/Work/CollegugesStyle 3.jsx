import styled from "styled-components";

export const StyledUserList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledUserItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #fff;
  border-radius: 8px;
  padding: 0.5rem;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem; //see if this is working
`;

export const UserName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Occupation = styled.div`
  border-radius: 24px;
  padding: 4px, 12px, 4px, 12px;
  background: #edf2f7;
  width: 64px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const OccupationText = styled.h2`
  color: #3d4260;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 18px */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
