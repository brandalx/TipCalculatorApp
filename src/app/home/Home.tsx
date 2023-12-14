import React from "react";
import { TIPS_AMOUNT } from "@/lib/tips";
import CalcInput from "./components/CalcInput";
import CalcButton from "./components/CalcButton";
import CalcDisplay from "./components/CalcDisplay";
const Home = () => {
  return (
    <div className="flex justify-center items-center container h-[100vh]">
      <div className="flex">
        <div className="flex flex-col">
          {/* left side */}
          <div>
            <CalcInput type="bill" />
          </div>

          <div>
            {TIPS_AMOUNT.map((tip) => (
              <CalcButton key={tip} data={tip} />
            ))}

            <CalcInput type="percent" />
          </div>
          <div>
            <CalcInput type="people" />
          </div>
        </div>
        <div>
          {/* right side */}
          <div>
            <CalcDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
