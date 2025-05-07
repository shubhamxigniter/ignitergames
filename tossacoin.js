const tossbutton = document.getElementById("tossButton");
const result = document.getElementById("result");

tossbutton.addEventListener("click", tossCoin);

function tossCoin() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    result.innerHTML = "Loading...";
    setTimeout(() => {
      result.innerHTML = "Heads";
    }, 1000);
  } else {
    result.innerHTML = "Loading...";
    setTimeout(() => {
      result.innerHTML = "Tails";
    }, 1000);
  }
}
