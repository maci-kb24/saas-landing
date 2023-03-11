// Update prices when checkbox is checked
const checkbox = document.querySelector("#toogleA");

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

  if (checked) {
    const dotChecked = (document.querySelector(".dot").style.transform =
      "translateX(100%)");
  } else {
    const dotUnchecked = (document.querySelector(".dot").style.transform =
      "translateX(0%)");
  }

  const prices = checked ? newPrices : defaultPrices;
  for (const id in prices) {
    const priceElement = document.querySelector("." + id);
    const newPrice = prices[id];
    priceElement.textContent = "$" + newPrice;
  }
});

//mobile nav

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
