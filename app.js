const costPrice = document.querySelector("#cost-price");
const closingPrice = document.querySelector("#closing-price");
const quantity = document.querySelector("#quantity");
const calculate = document.querySelector("#calculate");

function clickHandler(e) {
  e.preventDefault();

  const costPriceValue = costPrice.value;
  const closingPriceValue = closingPrice.value;
  const quantityValue = quantity.value;

  const amountInvested = costPriceValue * quantityValue;
  const returnAmount = closingPriceValue * quantityValue;
  console.log(amountInvested);
  console.log(returnAmount);
  const finalAmount = returnAmount - amountInvested;
  console.log(finalAmount);
  const profitPercent = (finalAmount * 100) / amountInvested;

  if (finalAmount > 0) {
    console.log("Congratulations!! you made a profit of Rs. ", finalAmount);
    console.log("Profit percent is ", profitPercent);
  } else {
    console.log("You suffered a loss of Rs. ", Math.abs(finalAmount));
    console.log("Loss percent is ", Math.abs(profitPercent));
  }
}

calculate.addEventListener("click", clickHandler);
