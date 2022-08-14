      let score = 0;
setInterval(() => {
  score += 1;
  document.getElementById("score").innerHTML = score;
  document.getElementById("square").style.top = score *10 + "px";
  console.log(1)
}, 500)