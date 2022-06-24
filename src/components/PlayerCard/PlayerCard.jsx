import React from "react";
import { Avatar, Typography, Card, Box } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
function PlayerCard() {
  return (
    <>
      <Card
        sx={{
          maxWidth: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Avatar
          sx={{ height: 60, width: 60 }}
          style={{ marginRight: "14px" }}
          alt="Jack Sparrow"
          src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Box>
          <b>CAN'T SAY</b>
          <Typography sx={{ fontSize: 10, color: "#a4a4a6" }}>
            Travis Scott
          </Typography>
        </Box>
      </Card>
    </>
  );
}

export default PlayerCard;
