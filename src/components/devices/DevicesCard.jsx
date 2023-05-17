import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { TbLamp } from "react-icons/tb";

const DevicesCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col items-start justify-between border-2 border-white hover:border-black transition">
      <div className="flex items-start justify-between w-full">
        <TbLamp className="text-black text-6xl" />
        <IoBedOutline className="text-gray-600 text-4xl" />
      </div>
      <div className="flex flex-col my-4">
        <h2 className="text-black text-xl font-medium">Chandelier</h2>
        <h2 className="text-gray-600 text-lg font-medium">4 Lamps</h2>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-black">On</h3>
      </div>
    </div>
  );
};

export default DevicesCard;
