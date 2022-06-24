import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PausePresentationIcon from "@mui/icons-material/PausePresentation";
import Button from "@mui/material/Button";
import MyTheme from "../ColorPalette/MyTheme";

function PlayerSwitch() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Button color="third">
        <SkipPreviousIcon fontSize="large" color="third" />
      </Button>
      <Button color="third">
        <PausePresentationIcon fontSize="large" color="third" />
      </Button>
      <Button color="third">
        <SkipNextIcon fontSize="large" color="third" />
      </Button>
    </ThemeProvider>
  );
}

export default PlayerSwitch;
