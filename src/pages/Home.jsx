import React from "react";
import { Rooms, Consumption } from "../routes";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <Rooms />
        <Consumption />
      </div>
    </div>
  );
};

export default Home;
