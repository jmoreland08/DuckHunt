window.onload = function () {
  const body = document.body;

  const createDuck = () => {
    let newDiv = document.createElement("div");
    let randomPosition = () => {
      let left = Math.random() * window.innerWidth + "px";
      let top = Math.random() * window.innerHeight + "px";
    };
    randomPosition();
    newDiv.className += "duck";
    body.appendChild(newDiv);
    setInterval(() => {
      newDiv.classList.toggle("flap");
    }, 250);
    const moveNewDuck = () => {
      let left = Math.random() * window.innerWidth;
      let top = Math.random() * window.innerHeight;
      newDiv.style.top = top + "px";
      newDiv.style.left = left + "px";
    };
    moveNewDuck(newDiv);
    setInterval(moveNewDuck, 1000);
  };
  createDuck();

  for (let i = 0; i < 4; i++) {
    createDuck();
  }

  let ducks = body.querySelectorAll("div");
  let shot = (e) => {
    e.target.className += " shot";

    setTimeout(() => {
      e.target.remove();
      console.log(checkForWinner());
    }, 1000);
  };
  ducks.forEach((duck) => duck.addEventListener("click", shot));

  let checkForWinner = () => {
    let ducksLeft = body.querySelectorAll("div").length;
    console.log(ducksLeft);
    if (ducksLeft === 0) {
      window.alert("You Win");
    }
    return ducksLeft;
  };
};
