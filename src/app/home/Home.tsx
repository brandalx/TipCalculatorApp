import React from "react";
import { TIPS_AMOUNT } from "@/lib/tips";
import CalcInput from "./components/CalcInput";
import CalcButton from "./components/CalcButton";
import CalcDisplay from "./components/CalcDisplay";
const Home = () => {
  return (
    <div className="flex justify-center items-center container max-w-[900px] h-[100vh]">
      <div className="bg-white p-10 rounded-3xl">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 gap-4 py-2">
            {/* left side */}
            <div>
              <CalcInput label="Bill" type="bill" />
            </div>
            <p className="text-[#6A7878]">Select Tip %</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {TIPS_AMOUNT.map((tip) => (
                <CalcButton type="percent" key={tip} data={tip} />
              ))}

              <CalcInput type="percent" />
            </div>
            <div>
              <CalcInput label="Number of People" type="people" />
            </div>
          </div>
          <div>
            {/* right side */}
            <div className="w-full h-full ">
              <CalcDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
