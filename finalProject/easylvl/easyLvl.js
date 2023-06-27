import fileForEasyLvl from "../common.js";
import {
  dragStart,
  dragOver,
  dragEnter,
  dragLeave,
  dragDrop,
  dragEnd,
} from "../common.js";
fileForEasyLvl.rows = 3;
fileForEasyLvl.colums = 3;
let rows = fileForEasyLvl.rows;
let colums = fileForEasyLvl.colums;
window.onload = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colums; j++) {
      let elem = document.createElement("img");
      elem.src = "../img/easy/blank.jpg";
      elem.addEventListener("dragstart", dragStart);
      elem.addEventListener("dragover", dragOver);
      elem.addEventListener("dragenter", dragEnter);
      elem.addEventListener("dragleave", dragLeave);
      elem.addEventListener("drop", dragDrop);
      elem.addEventListener("dragend", dragEnd);
      document.getElementById("board").appendChild(elem);
    }
  }
  let pieces = [];
  for (let i = 1; i <= rows * colums; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();
  for (let i = 0; i < pieces.length; i++) {
    let randomIndex = Math.floor(Math.random() * pieces.length);
    let currentValue = pieces[i];
    pieces[i] = pieces[randomIndex];
    pieces[randomIndex] = currentValue;
  }
  for (let i = 0; i < pieces.length; i++) {
    let elem = document.createElement("img");
    elem.src = "../img/easy/" + pieces[i] + ".jpg";

    elem.addEventListener("dragstart", dragStart);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", dragDrop);
    elem.addEventListener("dragend", dragEnd);
    document.getElementById("pieces").append(elem);
  }
};
