/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  for (let i = 0; i < 8; i++) {
    let randomPronoun = getRandomElement(pronoun);
    let randomAdj = getRandomElement(adj);
    let randomNoun = getRandomElement(noun);
    console.log(randomPronoun + randomAdj + randomNoun + ".com");
  }
};
