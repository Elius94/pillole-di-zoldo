import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Markdown from "../components/Markdown";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.1,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.5,
    transition: "1s",
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .descriptionContent": {
    transition: "1s",
    bottom: 0,
    opacity: 1,
  },
}));

const images = [
  {
    url: "./IMG_4029.JPG",
    title: "Passione",
    width: "50%",
  },
  {
    url: "./IMG_4030.JPG",
    title: "Creatività",
    width: "50%",
  },
  {
    url: "./IMG_4372.JPG",
    title: "Incontro",
    width: "50%",
  },
  {
    url: "./IMG_4034.JPG",
    title: "Ambiente",
    width: "50%",
  }
];

export default function ProductCategories() {
  const [markdowns, setMarkdowns] = React.useState<string[]>([]);

  // https://github.com/webpack/webpack/issues/6680
  React.useEffect(() => {
    let mds: string[] = [];
    images.forEach((img) => {
      import(`./texts/${img.title.toLowerCase()}.md`)
        .then((content) => fetch(content.default))
        .then((response) => response.text())
        .then((responseText) => {
          mds.push(responseText)
          if (mds.length === images.length) {
            setMarkdowns(mds);
          }
        });
    })
  }, []);

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
            <DescriptionBox
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
                overflow: "hidden",
              }}
            >
              <Box
                className="descriptionContent"
                sx={( theme ) => ({
                  [theme.breakpoints.down("md")]: {
                    height: "100% !important",
                  },
                  position: "absolute",
                  bottom: "-100%",
                  width: "100%",
                  height: "50%",
                  transition: "1s",
                  color: "common.white",
                  background: "black",
                  opacity: 0,
                })}
              >
                <Markdown>{markdowns[index]}</Markdown>
              </Box>
            </DescriptionBox>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
