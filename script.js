const secretNumber = Math.round(Math.random() * 10);

let numberOfAttempts = 1;

let failedAttempts = [];

let result = document.getElementById("result");

document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    guess()
  }
})





function guess() {
  let userChoice = document.querySelector("input").value;
  userChoice = Number(userChoice);

  if (userChoice == "" || userChoice > 10) {
    alert("Você precisa escolher um número entre 0 e 10.");
    document.querySelector("input").value = "";
    document.querySelector("input").focus();
  } else if (userChoice == secretNumber) {
    document.getElementById("result").style.display = 'flex';
    document.querySelector("h2").innerHTML = `Acertou em ${numberOfAttempts} tentativas!`;
    document.addEventListener('keydown', function (e) {
      if (e.key == 'Enter') {
        playAgain()
      }
    })
  } else {
    numberOfAttempts++
    userChoice = " " + userChoice;
    failedAttempts.push(userChoice);
    document.querySelector("h3").style.opacity = '1';
    document.getElementById("attempts").innerHTML = failedAttempts;
    document.getElementById("attempts").style.opacity = '1';
    setTimeout(function () {
      document.querySelector("h3").style.opacity = '0';
      document.querySelector("input").value = "";
      document.querySelector("input").focus();
    }, 1500);
  }
}


function playAgain() {
  document.location.reload(true);
}



