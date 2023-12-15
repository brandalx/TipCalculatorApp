import { Button } from "@/components/ui/button";
import ClacDisplayData from "./ClacDisplayData";
import CalcButton from "./CalcButton";

interface CalcDisplayProps {
  tipData?: number;
  total?: number;
}
const CalcDisplay = ({ tipData, total }: CalcDisplayProps) => {
  return (
    <div className="bg-[#00474B] w-full h-full rounded-2xl flex items-center justify-center">
      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <div className="my-8">
            <ClacDisplayData />
          </div>
          <div className="my-8">
            <ClacDisplayData />
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
