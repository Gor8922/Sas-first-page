import { finalData } from "./data.js";
import { cards } from "./card.js";

let inputSearch = document.getElementById("search");

inputSearch.addEventListener("input", () => {
  setTimeout(() => {
    let filtered = finalData.filter((el) => {
      return el.name.toLowerCase().includes(inputSearch.value.toLowerCase());
    });
    cards(filtered);
  }, 1000);
});
