export let newArray = [];
import { add } from "./script.js";
export function cards(params) {
  let container = document.querySelector(".container");
  container.innerHTML = "";
  params.forEach((elem) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let btnAdd = document.createElement("button");
    btnAdd.addEventListener("click", () => {
      newArray.push(elem);
      add();
      sum();
    });

    btnAdd.innerHTML = "Add Basket";
    btnAdd.setAttribute("class", "addBasket");
    div.setAttribute("class", "card");
    img.setAttribute("class", "prodImg");
    img.src = elem.img;
    p.innerText = elem.name;
    span.innerText = elem.price;
    div.append(img, p, span, btnAdd);
    container.appendChild(div);
  });
}

function sum() {
  let sumWrite = document.querySelectorAll(".sum");
  let finalSum = [...sumWrite].reduce((prev, curr) => {
    prev += Number(curr.innerText.split(" ")[0]);
    return prev;
  }, 0);
  document.querySelector(".totalDiv").innerHTML = `Ընդհանուր ${finalSum}`;
}
