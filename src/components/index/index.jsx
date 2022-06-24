import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import AsideMainTop from "../AsideMainTop/AsideMainTop";
import AsideMainBottom from "../Aside-main-bottom/AsideMainBottom";
import Player from "../Player/Player";
import PlayerCard from "../PlayerCard/PlayerCard";
import MainCard from "../MainCard/MainCard";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PausePresentationIcon from "@mui/icons-material/PausePresentation";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import PlayerSoundTrack from "../PlayerSoundTrack/PlayerSoundTrack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PlayerSwitch from "../PlayerSwitch/PlayerSwitch";

const theme = createTheme({
  palette: {
    third: {
      main: "#FFFFFF",
    },
  },
});

const index = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        bgcolor={"#191624"}
      >
        <Grid item xs={12}>
          <Box bgcolor={"primary.main"} height="10vh">
            <Navbar />
          </Box>
        </Grid>
        <Grid item lg={3} md={2}>
          <Box height="80vh">
            <Sidebar />
          </Box>
        </Grid>
        <Grid item lg={6} md={7}>
          <Box bgcolor={"#191624"} height="80vh" width={"80%"}>
            <Main />
          </Box>
        </Grid>
        <Grid item lg={2} md={2}>
          <Box bgcolor={"#191624"} height="60vh" width={"100%"}>
            <AsideMainTop />
          </Box>
          <Box bgcolor={"#191624"} height="20vh" width={"100%"}>
            <AsideMainBottom />
          </Box>
        </Grid>
        <Grid item lg={12} md={12} bgcolor={"#140f1d"}>
          <Box
            height="10vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Player />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default index;
