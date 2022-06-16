import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import { SxProps, Theme } from "@mui/material/styles";
import theme from "../theme";
import Tooltip from "@mui/material/Tooltip";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  padding: theme.spacing(1, 5),
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

function ProductCTA() {
  const [position/*, setPosition*/] = React.useState<any>([46.360634, 12.117101]);

  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "warning.main",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="div"
              sx={{ maxWidth: 400 }}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                Come raggiungerci
              </Typography>
              <Box
                component="div" sx={item}>
                <Box component="div" sx={number}>1.</Box>
                <Typography variant="h5">
                  Passando per Longarone, tramite la SP251.
                </Typography>
              </Box>
              <Box component="div" sx={item}>
                <Box component="div" sx={number}>2.</Box>
                <Typography variant="h5">
                  Dall'agordino tramite il passo Duran (SP347).
                </Typography>
              </Box>
              <Box component="div" sx={item}>
                <Box component="div" sx={number}>3.</Box>
                <Typography variant="h5">
                  Dal Cadore tramite il passo Cibiana (SP347).
                </Typography>
              </Box>
              <Box component="div" sx={item}>
                <Box component="div" sx={number}>4.</Box>
                <Typography variant="h5">
                  Dalla val Fiorentina tramite il passo Staulanza (SP251).
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background: "url(/productCTAImageDots.png)",
            }}
          />
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: 1,
              height: 1,
              maxWidth: 600,
            }}
          >
            <MapContainer center={position} zoom={12} style={{height: "100%"}}>
              <TileLayer
                attribution='&amp;copy <a href="https://www.thunderforest.com/">Thunderforest</a>'
                url="https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=43d136d38a064b11925be75e32fc86fa"
              />
            </MapContainer>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductCTA;
