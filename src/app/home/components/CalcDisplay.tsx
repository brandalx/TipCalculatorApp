import ClacDisplayData from "./ClacDisplayData";

interface CalcDisplayProps {
  tipData?: number;
  total?: number;
}
const CalcDisplay = ({ tipData, total }: CalcDisplayProps) => {
  return (
    <div className="bg-[#00474B] w-full h-full rounded-2xl flex items-center justify-center">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex">
          <ClacDisplayData />
          <ClacDisplayData />
        </div>

        <div className="">button</div>
      </div>
    </div>
  );
};

export default CalcDisplay;
