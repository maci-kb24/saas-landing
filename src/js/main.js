// Update prices when checkbox is checked
const checkbox = document.querySelector("#flexSwitchCheckDefault56");

const defaultPrices = {
  price1: 5,
  price2: 12,
  price3: 24,
};

const newPrices = {
  price1: 10,
  price2: 24,
  price3: 32,
};

checkbox.addEventListener("change", function () {
  const checked = checkbox.checked;

  const prices = checked ? newPrices : defaultPrices;
  for (const id in prices) {
    const priceElement = document.querySelector("." + id);
    const newPrice = prices[id];
    priceElement.textContent = "$" + newPrice;
  }
});
