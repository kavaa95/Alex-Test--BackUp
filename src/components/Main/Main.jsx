import { Box } from "@mui/material";
import React from "react";
import MainCard from "../MainCard/MainCard";
import MainTitle from "../MainTitle/MainTitle";
import "./main.scss";

const Main = () => {
  return (
    <main className="">
      <MainTitle Title={"Discover"} SubTitle={"See all"} />
      <Box bgcolor={"primary.main"}>
        <div className="gallery-Card">
          <MainCard />
        </div>
        <div className="gallery-Card">
          <MainCard />
        </div>
        <div className="gallery-Card">
          <MainCard />
        </div>
        <div className="gallery-Card">
          <MainCard />
        </div>
        <div className="gallery-Card">
          <MainCard />
        </div>
        <div className="gallery-Card">
          <MainCard />
        </div>
      </Box>
    </main>
  );
};

export default Main;
