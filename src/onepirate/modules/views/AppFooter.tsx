import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { Instagram, Facebook, YouTube } from "@mui/icons-material";
import Iubenda from 'react-iubenda-policy'

function Copyright() {
  return (
    <React.Fragment>
      {"© Lucio Radaelli, Giovanni Bez "}
      {new Date().getFullYear()}
      <br />
      {"Made with love by Elia Lazzari"}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

export default function AppFooter() {
  const myPolicy = 70817588

  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
            >
              <Grid item xs={12} sx={{ display: "flex" }}>
                <Box component="a" href="https://www.instagram.com/pilloledizoldo/" sx={iconStyle}>
                  <Instagram color="action" />
                </Box>
                <Box component="a" href="https://www.facebook.com/pilloledizoldo/" sx={iconStyle}>
                  <Facebook color="action" />
                </Box>
                <Box component="a" href="https://l.instagram.com/?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCZm2Eeq2rBgkmwwVccYl_Vw%2Ffeatured&e=ATNLywuEzybBvDoqlPbcO72x3oN2B1hDLJF_Ld67ZFxkit3CuDx-r7YHbFU9IhkaiZ84m_758VHs2KRbZN0RBw&s=1" sx={iconStyle}>
                  <YouTube color="action" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Iubenda id={myPolicy} type='privacy' styling='white'>
                  Privacy Policy
                </Iubenda>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Iubenda id={myPolicy} type='cookie' styling='black'>
                  Cookie Policy
                </Iubenda>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" className="iubenda-cs-preferences-link">Aggiorna le tue preferenze</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Typography variant="h6" marked="left" gutterBottom>
              Riferimenti
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Val di Zoldo - Dolomiti Bellunesi, Italia
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {"Tel. "} 
              <Link href="tel:+393488184745">
              +39 3488184745
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {"Email: "}
              <Link href="mailto:pilloledizoldo@gmail.com">
              pilloledizoldo@gmail.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
