import { cards } from "./card.js";
import { finalData } from "./data.js";
import { newArray } from "./card.js";
let siceBarContainer = document.querySelector(".siceBarContainer");

cards(finalData);

export function add() {
  siceBarContainer.innerHTML = "";
  siceBarContainer.style.display = "none";
  let divForSum = document.createElement("div");
  newArray.map((item) => {
    let divWrapper = document.createElement("div");
    divWrapper.setAttribute("class", "wrapper");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.innerHTML = "delete";
    divForSum.setAttribute("class", "totalDiv");
    let p = document.createElement("p");
    p.innerText = item.name;
    let span = document.createElement("span");
    span.innerText = item.price;

    span.classList.add("sum");
    deleteBtn.addEventListener("click", (e) => {
      e.path[1].remove();
      let deleteSums = Number(e.path[1].children[1].innerText.split(" ")[0]);

      let prevSum = Number(
        document.querySelector(".totalDiv").innerHTML.split(" ")[1]
      );

      document.querySelector(".totalDiv").innerHTML = `Ընդհանուր ${
        prevSum - deleteSums
      }`;
      if (siceBarContainer.children.length == 1) {
        document.getElementById("basket").innerText = 0;
        siceBarContainer.remove();
        setTimeout(function () {
          location.reload();
        }, 100);
      }

      let basketNum = document.querySelector("#basket");
      if (basketNum.innerText <= 0) {
        basketNum.innerText = 0;
      } else {
        basketNum.innerText = Number(basketNum.innerText) - 1;
      }
    });
    divWrapper.append(p, span, deleteBtn);
    siceBarContainer.append(divWrapper, divForSum);

    document.getElementById("basket").innerText = newArray.length;
  });
}
