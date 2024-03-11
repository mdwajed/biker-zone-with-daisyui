console.log("I am starting an event");
function makeBlack() {
  document.body.style.backgroundColor = "black";
}
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
const makePurple = document.getElementById("make-purple");
makePurple.onclick = function purpleButton() {
  document.body.style.backgroundColor = "purple";
};

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}
const redButton = document.getElementById("make-red");
redButton.addEventListener("click", function redButton() {
  document.body.style.backgroundColor = "red";
});
