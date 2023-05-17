import React from "react";

const Consumption = () => {
  return (
    <div className="w-2/6 flex flex-col p-4">
      <h2 className="text-2xl font-semibold">Consumption</h2>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium mb-2">Electricity</h3>
          <p className="text-5xl font-medium">
            23 <span className="text-3xl">Kwh</span>
          </p>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium mb-2">Electricity</h3>
          <p className="text-5xl font-medium">
            23 <span className="text-3xl">Kwh</span>
          </p>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium mb-2">Electricity</h3>
          <p className="text-5xl font-medium">
            23 <span className="text-3xl">Kwh</span>
          </p>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium mb-2">Electricity</h3>
          <p className="text-5xl font-medium">
            23 <span className="text-3xl">Kwh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consumption;
