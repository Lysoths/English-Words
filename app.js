const englishWords = ["burst", "creep", "flee", "forbid", "grow"];
const turkishWords = [
  "emeklemek",
  "büyümek",
  "firar etmek",
  "patlamak",
  "yasaklamak",
];
const turkishButton = document.querySelectorAll(".turkish-words");
const englishButton = document.querySelectorAll(".english-words");
const image = document.querySelector("img");

let clickAgain = false;
let clicked;
let score = 1;

englishButton.forEach((words, i) => {
  words.innerText = englishWords[i];
  words.addEventListener("click", () => {
    if (clicked == undefined) {
      clicked = words.innerText;
      words.classList.add("clicked");
    } else {
      alert("İlk Olarak Kelimenin türkçe karşılığını seçiniz. ");
    }
  });
});

turkishButton.forEach((wordsTwo, i) => {
  wordsTwo.innerText = turkishWords[i];
  wordsTwo.addEventListener("click", () => {
    console.log(score);
    if (score == 5) {
      image.classList.add("show");
      wordsTwo.classList.add("correct");
      englishButton[4].classList.add("correct");
      const audio = new Audio("music.mp3");
      audio.play();
    } else {
      if (clicked == undefined && clickAgain == false) {
        alert("Please select the english word first");
      } else if (clicked == "burst" && wordsTwo.innerHTML == "patlamak") {
        wordsTwo.classList.add("correct");
        englishButton[0].classList.add("correct");
        clickAgain: false;
        clicked = undefined;
        score++;
      } else if (clicked == "creep" && wordsTwo.innerHTML == "emeklemek") {
        wordsTwo.classList.add("correct");
        englishButton[1].classList.add("correct");
        clickAgain: false;
        clicked = undefined;
        score++;
      } else if (clicked == "flee" && wordsTwo.innerHTML == "firar etmek") {
        wordsTwo.classList.add("correct");
        englishButton[2].classList.add("correct");
        clickAgain: false;
        clicked = undefined;
        score++;
      } else if (clicked == "forbid" && wordsTwo.innerHTML == "yasaklamak") {
        wordsTwo.classList.add("correct");
        englishButton[3].classList.add("correct");
        clickAgain: false;
        clicked = undefined;
        score++;
      } else if (clicked == "grow" && wordsTwo.innerHTML == "büyümek") {
        wordsTwo.classList.add("correct");
        englishButton[4].classList.add("correct");
        clickAgain: false;
        clicked = undefined;
        score++;
      }
    }
  });
});
