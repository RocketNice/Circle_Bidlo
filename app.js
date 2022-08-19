const text = document.querySelector(".text p");
console.log(text.innerHTML.length)
const resultSplit = text.innerHTML.split("")
console.log(resultSplit.length)

text.innerHTML = resultSplit.map((letter, i) =>
    `<span style="transform:rotate(${i * (360 / resultSplit.length)}deg)">${letter}</span>`
).join("");

var fontSize = 12;
var test = document.getElementById("Test");
test.style.fontSize = fontSize;
var width = (test.clientWidth + 1) + "px"

console.log(width);