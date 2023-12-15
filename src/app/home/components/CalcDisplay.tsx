import { Button } from "@/components/ui/button";
import ClacDisplayData from "./ClacDisplayData";
import CalcButton from "./CalcButton";

interface CalcDisplayProps {
  tipResult: number;
  totalResult: number;
}

const CalcDisplay = ({ tipResult, totalResult }: CalcDisplayProps) => {
  return (
    <div className="bg-[#00474B] w-full h-full rounded-2xl flex items-center justify-center">
      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <div className="my-8">
            <ClacDisplayData result={tipResult} type="tip" />
          </div>
          <div className="my-8">
            <ClacDisplayData type="total" result={totalResult} />
          </div>
        </div>

        <div className="flex justify-center p-5">
          <CalcButton data={0} type="reset" />
        </div>
      </div>
    </div>
  );
};

export default CalcDisplay;
