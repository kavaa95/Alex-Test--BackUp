import { Avatar } from "@mui/material";
import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import "./asideMainBottom.scss";

const AsideMainBottom = () => {
  return (
    <>
      <div className="content-size">
        <MainTitle Title={"Top Artists"} SubTitle={"See all"} />
      </div>
      <div className="Avatar-content">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="Avatar-space"
          sx={{ width: "4vw", height: "8vh" }}
        />{" "}
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="Avatar-space"
          sx={{ width: "4vw", height: "8vh" }}
        />{" "}
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="Avatar-space"
          sx={{ width: "4vw", height: "8vh" }}
        />{" "}
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="Avatar-space"
          sx={{ width: "4vw", height: "8vh" }}
        />{" "}
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="Avatar-space"
          sx={{ width: "4vw", height: "8vh" }}
        />
      </div>
    </>
  );
};

export default AsideMainBottom;
