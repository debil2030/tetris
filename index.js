      let score = 0;
setInterval(() => {
  score += 1;
  document.getElementById("score").innerHTML = score;
  document.getElementById("square1").style.top = score *10 + "px";
  document.getElementById("square2").style.top = score *10 + "px";
  console.log(score)
}, 500)