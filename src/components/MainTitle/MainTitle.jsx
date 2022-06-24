import React from "react";
import { Box, Grid } from "@mui/material";
import "./mainTitle.scss";
function MainTitle({ Title, SubTitle }) {
  return (
    <>
      <div className="">
        {/* <Box> */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <div className="title">
              <h4>{Title}</h4>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="text"> {SubTitle}</div>
          </Grid>
        </Grid>
        {/* </Box> */}
      </div>
    </>
  );
}

export default MainTitle;
