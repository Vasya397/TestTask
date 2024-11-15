import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  StyledContainer,
  MainTitle,
  ProductCard,
  CardTitle,
  CardSubtitle,
  ButtonContainer,
  StyledButton,
} from "./Products.styles";

const Products: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg">
      <MainTitle
        sx={{
          fontWeight: "bold",
          fontFamily: "Inter",
          fontSize: "48px",
        }}
      >
        Also very important title
      </MainTitle>
      <Grid container spacing={4} justifyContent="center">
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard sx={{ border: "none", boxShadow: "none" }}>
              <CardTitle
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                }}
              >
                Title
              </CardTitle>
              <CardSubtitle variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum.
              </CardSubtitle>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
      <ButtonContainer>
        <StyledButton variant="contained" as={Link} to="/contact">
          Contact Us
        </StyledButton>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default Products;
