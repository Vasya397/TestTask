import React from "react";
import { Grid } from "@mui/material";
import {
  StyledContainer,
  MainSection,
  TextContainer,
  TextTitle,
  TextSubtitle,
  VideoContainer,
} from "./TextVideo.styles";

const TextVideo: React.FC = () => {
  return (
    <StyledContainer>
      <MainSection elevation={0}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextContainer>
              <TextTitle variant="h3">Most important</TextTitle>
              <TextTitle variant="h3">title on the page</TextTitle>
              <TextSubtitle variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum ultricies, sem urna convallis metus,
                vel suscipit nibh lacus tincidunt ante.
              </TextSubtitle>
            </TextContainer>
          </Grid>
          {/* Правый видеоблок */}
          <Grid item xs={12} md={6}>
            <VideoContainer>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </VideoContainer>
          </Grid>
        </Grid>
      </MainSection>
    </StyledContainer>
  );
};

export default TextVideo;
