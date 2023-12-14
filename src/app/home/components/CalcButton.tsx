import { Button } from "@/components/ui/button";

interface CalcButtonProps {
  type?: "reset" | "percent";
  isActive?: boolean;
  data: number;
  onClick?: () => void;
}
const CalcButton = ({ type, isActive, data, onClick }: CalcButtonProps) => {
  return (
    <Button className="bg-[#00474B] hover:bg-[#F3F8FB] hover:border-[#5FABA1] hover:text-[#0A4543] border hover:border-solid border-[#00474B] transition-all ">
      {data}%
    </Button>
  );
};

export default CalcButton;
