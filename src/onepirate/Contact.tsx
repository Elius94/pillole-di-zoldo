import * as React from "react";
import Typography from "./modules/components/Typography";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import AppForm from "./modules/views/AppForm";
import withRoot from "./modules/withRoot";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Call, EmailRounded } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function Contact() {
  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Desideri contattarci?
          </Typography>
          <Typography variant="body2" align="center">
            Per quasiasi informazione puoi contattarci a questi indirizzi.
          </Typography>
          <br />
        </React.Fragment>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}
        >
          <ListItem>
            <ListItemButton component="a" href="mailto:pilloledizoldo@gmail.com">
              <ListItemAvatar>
                <Avatar>
                  <EmailRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Scrivimi una Email" secondary="pilloledizoldo@gmail.com" />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemButton component="a" href="tel:+393488184745">
              <ListItemAvatar>
                <Avatar>
                  <Call />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Telefonami" secondary="+39 3488184745" />
            </ListItemButton>
          </ListItem>
        </List>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Contact);
