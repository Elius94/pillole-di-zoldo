import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Link as RouterLink } from "react-router-dom";

const backgroundImage = "./DSC08781.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      bgImage={backgroundImage}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" component="h1" variant="h2" marked="center">
        Pillole di Zoldo
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        component="h2"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        <b>Esperienze in movimento</b> attorno a Zoldo.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={RouterLink}
        to="/contattaci/"
        sx={{ minWidth: 200 }}
      >
        Per saperne di più
      </Button>
    </ProductHeroLayout>
  );
}
