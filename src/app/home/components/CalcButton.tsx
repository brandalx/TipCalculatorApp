import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalcButtonProps {
  type?: "reset" | "percent";
  isActive?: boolean;
  data?: number;
  onClick?: () => void;
}
const CalcButton = ({ type, isActive, data, onClick }: CalcButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-[#00474B] hover:bg-[#F3F8FB] hover:border-[#5FABA1] hover:text-[#0A4543] border hover:border-solid border-[#00474B] transition-all font-bold",
        type === "reset" && "bg-[#26C2AD] hover:bg-[#9FE8DF] border-0 w-full"
      )}
    >
      {type === "percent" && data + "%"}
      {type === "reset" && "RESET"}
    </Button>
  );
};

export default CalcButton;
