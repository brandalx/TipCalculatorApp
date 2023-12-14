import React from "react";
import { TIPS_AMOUNT } from "@/lib/tips";
const Home = () => {
  return (
    <div className="flex justify-center items-center container h-[100vh]">
      <div className="flex">
        <div className="flex flex-col">
          {/* left side */}
          <div>input bill</div>

          <div> tip selection</div>
          <div> input ppl</div>
        </div>
        <div>
          {/* right side */}
          <div>display</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
