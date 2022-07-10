import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  font-family: "Roboto, san-serif";
  font-weight: 300;
  letter-spacing: 0.8px;
  margin-top: 1em;
  margin-bottom: 1em;
  color: #c2185b;
  text-align: center;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>;

export default H2Styled;
