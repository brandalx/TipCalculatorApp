interface CalcInputProps {
  type: "bill" | "percent" | "people";

  data: number;
}

const CalcInput = ({ type, data }: CalcInputProps) => {
  return <div>CalcInput</div>;
};

export default CalcInput;
