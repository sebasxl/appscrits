/**
 * Calculates the sale price of a value at a given descuento.
 * The sale price is formatted as US dollars.
 *
 * @param {number} input The value to descuento.
 * @param {number} descuento The descuento to apply, such as .5 or 50%.
 * @return The sale price formatted as USD.
 * @customfunction
 */
function salePrice(input, descuento) {
  let price = input - (input * descuento);
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
  return dollarUS.format(price);
}