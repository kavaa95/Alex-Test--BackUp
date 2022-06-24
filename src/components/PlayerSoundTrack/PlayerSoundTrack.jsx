import * as React from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { ThemeProvider } from "@mui/material/styles";
import MyTheme from "../ColorPalette/MyTheme";

export default function PlayerSoundTrack() {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <Box sx={{ width: 250 }}>
    <ThemeProvider theme={MyTheme}>
      <Grid container spacing={1} alignItems="center" color="#a4a4a6">
        <Grid item>
          <h4>{value}</h4>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color="fourth"
          />
        </Grid>
        <Grid item>
          <h4>{value - 100}</h4>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
