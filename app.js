// const searchBar = document.querySelector("#searchBar");
// const submitBtn = document.querySelector("#searchBtn");

const serverUrl =
  "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=";

const apiKey = "MGA2XVI896C34RWQ";

function constructUrl(stockName) {
  return serverUrl + stockName + "&" + "apikey=" + apiKey;
  // console.log(finalUrl);
}

// function clickHandler() {
//   let stockName = searchBar.value;
//   console.log(stockName);

//   fetch(constructUrl(stockName))
//     .then((response) => response.json())
//     .then((json) => console.log(json.bestMatches[1]["1. symbol"]));
// }

// searchBar.addEventListener("keyup", clickHandler);

const stocksList = document.querySelector("#stocksList");
const searchBar = document.querySelector("#searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (event) => {
  const searchString = event.target.value;
  // const filteredCharacters = arrayHpCharacters.filter((character) => {
  //   return (
  //     character.name.toLowerCase().includes(searchString) ||
  //     character.house.toLowerCase().includes(searchString)
  //   );
  // });
  // displayCharacters(filteredCharacters);
  loadCharacters(searchString);
});

const loadCharacters = async (searchString) => {
  try {
    // console.log(stockName);
    const response = await fetch(constructUrl(searchString));
    hpCharacters = await response.json();
    console.log(hpCharacters);
    let arrayHpCharacters = hpCharacters.bestMatches;
    displayCharacters(arrayHpCharacters);
    // console.log(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  console.log(characters);
  const htmlString = characters
    .map((character) => {
      return `
    <li class = "character">
      <h2>${character["1. symbol"]}</h2>
      <p>House: ${character["2. name"]}</p>
      <h3> Region: ${character["4. region"]}

    `;
    })
    .join("");

  stocksList.innerHTML = htmlString;
};

loadCharacters();
