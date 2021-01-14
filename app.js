const searchBar = document.querySelector("#searchBar");
// const submitBtn = document.querySelector("#searchBtn");

const serverUrl =
  "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=";

const apiKey = "MGA2XVI896C34RWQ";

function constructUrl(stockName) {
  return serverUrl + stockName + "&" + "apikey=" + apiKey;
  // console.log(finalUrl);
}

function clickHandler() {
  let stockName = searchBar.value;
  console.log(stockName);

  fetch(constructUrl(stockName))
    .then((response) => response.json())
    .then((json) => console.log(json.bestMatches[0].symbol));
}

searchBar.addEventListener("keyup", clickHandler);
