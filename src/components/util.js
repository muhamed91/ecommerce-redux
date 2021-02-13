export default function formatCurrency(num) {
  return "CHF.-" + " " + Number(num.toFixed(1)).toLocaleString();
}
