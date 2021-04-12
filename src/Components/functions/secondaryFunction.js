export const totalPriceItems = (order) => order.price * order.count;

export const formatCurrency = (rub) => {
  return rub.toLocaleString("en-IN", {
    style: "currency",
    currency: "AED",
  });
}