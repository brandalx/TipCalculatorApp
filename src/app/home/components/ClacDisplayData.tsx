// reusable component for displaying data of tips and total
interface CalcDisplayDataProps {
  result: number;
  type: "tip" | "total";
}
const ClacDisplayData = ({ result, type }: CalcDisplayDataProps) => {
  return (
    <div className="flex justify-between px-4">
      <div>
        <h4 className="text-white">
          {type === "tip" ? "Tip Amount" : "Total"}
        </h4>
        <p className="text-sm text-[#6DA0A4]">/ person</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#1FC2AA]">
          $ {result.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default ClacDisplayData;
