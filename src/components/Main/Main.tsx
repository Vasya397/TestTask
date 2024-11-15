import React from "react";
import "./Main.styles.ts";
import Products from "./Products";
import LessTitle from "./LessTitle";
import TextVideo from "./TextVideo";
import { StyledContainer } from "./Main.styles";

const Main = () => {
  return (
    <StyledContainer>
      <TextVideo />
      <Products />
      <LessTitle />
    </StyledContainer>
  );
};

export default Main;
