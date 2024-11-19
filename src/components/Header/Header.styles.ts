import styled from "styled-components";
import { AppBar, Typography, Button } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  && {
    background-color: white;
    color: black;
    border-bottom: 1px solid #d9d9d9;
    box-shadow: none;
    padding: 15px;
  }
`;

export const CompanyName = styled(Typography)`
  flex-grow: 1;
  font-size: 24px;
  font-weight: bold !important;
  font-family: "Inter" !important;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: none;
    color: blue;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  padding: 8px 40px;
  border-radius: 12px;
  color: #fff;
  background-color: #000;
  font-family: "Inter";
  text-decoration: none;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
