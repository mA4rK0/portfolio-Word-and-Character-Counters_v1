const text = document.querySelector(".form-control");
const word = document.querySelector(".word");
const chara = document.querySelector(".chara");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let valueTxt = text.value;
  word.innerText = 0;
  chara.innerText = 0;

  words(valueTxt);
  character(valueTxt);
});

function words(value) {
  let wordArr = value.match(/\w+/g);
  word.innerText = wordArr.length;
}

function character(value) {
  let combine = value.split(" ").join("");
  let letterArr = Array.from(combine);
  chara.innerText = letterArr.length;
}
