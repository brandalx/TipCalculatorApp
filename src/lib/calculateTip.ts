export function calculateTip(
  bill: number,
  numberOfPeople: number,
  tipPercent: number
): string | { tipAmount: number; total: number } {
  if (bill <= 0 || numberOfPeople < 1 || tipPercent < 0 || tipPercent > 100) {
    return "Error: Invalid values";
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const totalPerPerson = total / numberOfPeople;

  return {
    tipAmount: parseFloat(tipAmount.toFixed(2)),
    total: parseFloat(totalPerPerson.toFixed(2)),
  };
}
