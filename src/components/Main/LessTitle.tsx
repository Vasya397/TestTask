import React from "react";
import {
  StyledContainer,
  MainTitle,
  ButtonContainer,
  StyledButton,
} from "./Products.styles";
import { Link } from "react-router-dom";

const LessTitle: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg" sx={{ backgroundColor: "#f5f5f5" }}>
      <MainTitle
        sx={{
          fontWeight: "bold",
          fontFamily: "Inter",
          fontSize: "48px",
        }}
      >
        Less important title
      </MainTitle>
      <ButtonContainer>
        <StyledButton variant="contained" as={Link} to="/contact">
          Contact Us
        </StyledButton>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default LessTitle;
