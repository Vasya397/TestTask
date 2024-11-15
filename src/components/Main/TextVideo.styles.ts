import styled from "styled-components";
import { Container, Paper, Typography } from "@mui/material";

export const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 20px;
  border: none;
`;

export const MainSection = styled(Paper)`
  background-color: #f5f5f5 !important;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const TextContainer = styled.div`
  padding: 10px 100px 20px 10px;
`;

export const TextTitle = styled(Typography)`
  font-weight: bold;
  font-family: "Inter";
`;

export const TextSubtitle = styled(Typography)`
  padding: 20px 0px;
  font-family: "Inter";
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 315px;
    border: none;
  }
`;
