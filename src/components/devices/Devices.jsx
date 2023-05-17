import React from "react";
import { DevicesCard } from "../../routes";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Devices = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4 overflow-y-scroll max-h-screen">
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <DevicesCard />
      <div className="py-4 bg-white flex flex-col items-center justify-center cursor-pointer rounded-xl">
        <AiOutlinePlusCircle className="text-3xl mb-2" />
        <p className="text-lg font-semibold">Add device</p>
      </div>
    </div>
  );
};

export default Devices;
