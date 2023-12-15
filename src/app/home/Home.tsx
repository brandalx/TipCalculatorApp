import { useEffect, useState } from "react";
import { TIPS_AMOUNT } from "@/lib/tips";
import CalcInput from "./components/CalcInput";
import CalcButton from "./components/CalcButton";
import CalcDisplay from "./components/CalcDisplay";
import { calculateTip } from "@/lib/calculateTip";
const Home = () => {
  //defining global states for values
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(0);

  const [people, setPeople] = useState(1);

  const [tipResult, setTipResult] = useState<number>(0.0);

  const [totalResult, setTotalResult] = useState<number>(0);

  const handleCalculate = () => {
    const calculate = calculateTip(bill, people, percent);

    if (typeof calculate !== "string") {
      setTipResult(calculate.tipAmount);
      setTotalResult(calculate.total);
    }
  };

  // calculation on each change of the value
  useEffect(() => {
    handleCalculate();
  }, [bill, percent, people, totalResult, tipResult]);

  // function for resetting the values of global states
  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setPercent(0);
    setTipResult(0);
    setTotalResult(0);
  };
  return (
    <div className="flex flex-col justify-center items-center container max-w-[900px] h-[100vh] w-full relative">
      <div className="absolute top-[15%] text-2xl">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className="bg-white p-10 rounded-3xl w-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 gap-4 py-2">
            {/* left side */}
            <div>
              <CalcInput
                handleChange={handleCalculate}
                data={bill}
                setData={setBill}
                label="Bill"
                type="bill"
              />
            </div>
            <p className="text-[#6A7878] text-sm">Select Tip %</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {TIPS_AMOUNT.map((tip) => (
                <CalcButton
                  percent={percent}
                  setPercent={setPercent}
                  type="percent"
                  key={tip}
                  data={tip}
                />
              ))}

              <CalcInput
                handleChange={handleCalculate}
                type="percent"
                setData={setPercent}
                data={percent}
              />
            </div>
            <div>
              <CalcInput
                handleChange={handleCalculate}
                label="Number of People"
                type="people"
                setData={setPeople}
                data={people}
              />
            </div>
          </div>
          <div>
            {/* right side */}
            <div className="w-full h-full ">
              <CalcDisplay
                handleReset={handleReset}
                tipResult={tipResult}
                totalResult={totalResult}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
