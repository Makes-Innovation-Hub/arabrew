import styled from "styled-components";

export const StyledDropDown = styled.select`
  @media (min-width: 350px) and (max-width: 700px) {
    width: 18rem;
    appearance: none;
    -moz-appearance: "none";
    -webkit-appearance: "none";
    background: transparent;
    padding: 0.55rem;
    border: 0.063rem solid #ccc;
    border-radius: 0%.5rem;
    height: 5rem;
    font-size: 1.8rem;
    line-height: 1.5;
    text-align: center;
    margin: 5rem 0;
    color: #7c7c7c;
    overflow: scroll;

    :focus {
      outline: none;
      border-color: #1e75e5;
      box-shadow: 0 0 5px #1e75e5;
    }
  }
`;
