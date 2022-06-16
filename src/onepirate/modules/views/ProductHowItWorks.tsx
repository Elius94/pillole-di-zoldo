import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Markdown from "../components/Markdown";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from 'react-device-detect';
import Image from 'mui-image'

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

function ProductHowItWorks() {
  const [markdown, setMarkdown] = useState("");
  const [handWidth, setHandWidth] = useState(window.innerWidth * 0.85);
  const [handPercentageOffset] = useState(0.9);

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import("./texts/biography.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdown(responseText));

    function handleResize() {
      setHandWidth(window.innerWidth * 0.85);
    }
    window.addEventListener('resize', handleResize)
  });

  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Chi siamo?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Box component="div" sx={number}>Pillole di Zoldo</Box>
              <Markdown>{markdown}</Markdown>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
