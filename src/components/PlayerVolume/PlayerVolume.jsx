import React from "react";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { ThemeProvider } from "@mui/material/styles";
import MyTheme from "../ColorPalette/MyTheme";
function PlayerVolume() {
  return (
    <Box>
      <ThemeProvider theme={MyTheme}>
        <Stack spacing={1} direction="row" alignItems="center" m={2}>
          <VolumeUpIcon color="fifth" fontSize="8" />
          <Slider
            defaultValue={50}
            aria-label="Volume"
            color="fourth"
            valueLabelDisplay="auto"
            size="small"
          />
        </Stack>
      </ThemeProvider>
    </Box>
  );
}

export default PlayerVolume;
