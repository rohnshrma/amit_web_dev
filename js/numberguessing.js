var secret = Math.floor(Math.random() * 100) + 1;

var attempts_allowed = 10;
while (attempts_allowed > 0) {
  attempts_allowed -= 1;
  var guess = parseInt(prompt("Enter your guess : "));
  if (guess > secret) {
    alert("Too High! Try Low");
  } else if (guess < secret) {
    alert("Too Low! Try High");
  } else {
    alert(`Congratulations! You've guessed the correct number : ${secret}`);
    break;
  }
}

if (attempts_allowed == 0) {
  alert(`You've failed to guess the secret number :${secret}`);
}
