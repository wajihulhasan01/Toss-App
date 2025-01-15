const btnHead = document.querySelector("#head");
const btnTail = document.querySelector("#tail");
const resultElement = document.querySelector("#result");
const imgElement = document.querySelector("#img");

const images = {
  head: "IvgCsVNkTsbtItWdonrGOVaIoU4.png",
  tail: "t-oHRyHjkwCYqr02mFH1-9pxZpc.png"
};

function toss(selectedCoin) {
  resultElement.innerHTML = "";
  imgElement.style.animation = "none";
  void imgElement.offsetWidth;
  imgElement.style.animation = "flip 1s";
  const randomCoin = Math.ceil(Math.random() * 2);
  setTimeout(() => {
    imgElement.src = randomCoin === 1 ? images.head : images.tail;
    resultElement.innerHTML = selectedCoin === randomCoin
      ? "You Win the Toss!"
      : "You Lose the Toss!";
  }, 1000);
}

btnHead.addEventListener("click", () => toss(1));
btnTail.addEventListener("click", () => toss(2));
