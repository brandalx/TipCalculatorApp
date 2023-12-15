import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface CalcButtonProps {
  type?: "reset" | "percent";
  data?: number;
  onClick?: () => void;
  setPercent?: Dispatch<SetStateAction<number>>;
  percent?: number;
  handleReset?: () => void;
  totalResult?: number;
}
const CalcButton = ({
  type,
  data,
  setPercent,
  percent,
  handleReset,
  totalResult,
}: CalcButtonProps) => {
  return (
    <Button
      disabled={totalResult === 0 ? true : false}
      onClick={() => {
        if (type === "percent") {
          if (data !== undefined && data > 0 && setPercent) {
            setPercent(data);
          }
        }
        if (type === "reset" && handleReset) {
          handleReset();
        }
      }}
      className={cn(
        "bg-[#00474B] hover:bg-[#F3F8FB] hover:border-[#5FABA1] hover:text-[#0A4543] border hover:border-solid border-[#00474B] transition-all font-bold text-lg",
        type === "reset" && "bg-[#26C2AD] hover:bg-[#9FE8DF] border-0 w-full",
        data === percent && "bg-[#9FE8DF] border-white text-[#0A4543]"
      )}
    >
      {type === "percent" && data + "%"}
      {type === "reset" && "RESET"}
    </Button>
  );
};

export default CalcButton;
