export function calculateTip(
  bill: number,
  numberOfPeople: number,
  tipPercent: number
): string | { tipAmount: number; total: number } {
  if (bill <= 0 || numberOfPeople < 1 || tipPercent < 0 || tipPercent > 100) {
    return "Error: Invalid values";
  }

  const tipAmount = (bill * (tipPercent / 100)) / numberOfPeople;
  const totalBillWithTip = bill + tipAmount * numberOfPeople;
  const totalPerPerson = totalBillWithTip / numberOfPeople;

  return {
    tipAmount: parseFloat(tipAmount.toFixed(2)),
    total: parseFloat(totalPerPerson.toFixed(2)),
  };
}
