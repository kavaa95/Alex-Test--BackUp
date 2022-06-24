import React from "react";
import AsideMainCard from "../Aside-Main-Card/AsideMainCard";
import MainTitle from "../MainTitle/MainTitle";
import "./asideMainTop.scss";

const AsideMainTop = () => {
  return (
    <div className="content-size">
      <MainTitle Title={"Top Charts"} SubTitle={"See all"} />
      <AsideMainCard />
    </div>
  );
};

export default AsideMainTop;
