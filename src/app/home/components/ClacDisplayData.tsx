import React from "react";

const ClacDisplayData = () => {
  return (
    <div className="flex justify-between px-4">
      <div>
        <h4 className="text-white">Tip amount</h4>
        <p className="text-sm text-[#6DA0A4]">/ person</p>
      </div>

      <div>
        <h2 className="text-xl text-[#1FC2AA]">$0.00</h2>
      </div>
    </div>
  );
};

export default ClacDisplayData;
