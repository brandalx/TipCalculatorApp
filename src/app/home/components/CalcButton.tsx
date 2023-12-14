interface CalcButtonProps {
  type?: "reset" | "percent";
  isActive?: boolean;
  data: number;
  onClick?: () => void;
}
const CalcButton = ({ type, isActive, data, onClick }: CalcButtonProps) => {
  return <div>{data}</div>;
};

export default CalcButton;
