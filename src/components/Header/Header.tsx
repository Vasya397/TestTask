import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import {
  StyledAppBar,
  CompanyName,
  ButtonContainer,
  StyledButton,
} from "./Header.styles";

const Header: React.FC = () => {
  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <CompanyName variant="h6" as={Link} to="/">
            Some Company
          </CompanyName>
          <ButtonContainer>
            <StyledButton
              variant="contained"
              color="primary"
              as={Link}
              to="/contact"
            >
              Contact Us
            </StyledButton>
          </ButtonContainer>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
