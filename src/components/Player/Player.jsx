import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayerSoundTrack from "../PlayerSoundTrack/PlayerSoundTrack";
import PlayerSwitch from "../PlayerSwitch/PlayerSwitch";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Grid, ThemeProvider } from "@mui/material";
import "./player.scss";
import MyTheme from "../ColorPalette/MyTheme";

const Player = () => {
  return (
    <>
      {/* m={2} pt={0.5} */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item md={2}>
            <div className="player-width">
              <PlayerCard />
            </div>
          </Grid>
          <Grid item md={2}>
            <PlayerSwitch />
          </Grid>
          <Grid item md={6}>
            <PlayerSoundTrack />
          </Grid>
          <Grid item md={1}>
            <PlayerVolume />
          </Grid>
          <Grid item md={1}>
            <ThemeProvider theme={MyTheme}>
              <SettingsIcon color="fifth" fontSize="small" />
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Player;
