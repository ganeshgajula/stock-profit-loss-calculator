const costPrice = document.querySelector("#cost-price");
const closingPrice = document.querySelector("#closing-price");
const quantity = document.querySelector("#quantity");
const reset = document.querySelector(".reset");
let form = document.forms[0];
const result = document.querySelector("#resultText");

function clickHandler(e) {
  e.preventDefault();

  console.log(form);

  const costPriceValue = costPrice.value;
  const closingPriceValue = closingPrice.value;
  const quantityValue = quantity.value;

  const amountInvested = costPriceValue * quantityValue;
  const returnAmount = closingPriceValue * quantityValue;
  console.log(amountInvested);
  console.log(returnAmount);
  const finalAmount = returnAmount - amountInvested;
  console.log(finalAmount);
  const percent = (finalAmount * 100) / amountInvested;

  if (finalAmount > 0) {
    result.innerText = `Congratulations!! you made a profit of Rs. ${finalAmount} with a profit percent of ${percent} `;
    result.style.color = "green";
  } else if (finalAmount === 0) {
    result.innerText = `Seems like you bought and sold the stock at the same price. Hence, you suffered neither profit nor loss`;
  } else {
    result.innerText = `You suffered a loss of Rs. ${Math.abs(
      finalAmount
    )} with a loss percent of ${Math.abs(percent)}`;
    result.style.color = "red";
  }
}

function resetHandler() {
  costPrice.value = "";
  closingPrice.value = "";
  quantity.value = "";
  result.style.display = "none";
}

form.addEventListener("submit", clickHandler);
reset.addEventListener("click", resetHandler);
