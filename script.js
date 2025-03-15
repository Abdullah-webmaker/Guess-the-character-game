let correctAnswer = Math.floor(Math.random() * 2) + 1; // Randomly choose either image 1 or image 2 as the correct one.
let attempts = 0;

function checkGuess(selected) {
  let messageElement = document.getElementById('message');
  let attemptsElement = document.getElementById('attempts');
  
  attempts++;
  attemptsElement.textContent = `Attempts: ${attempts}`;
  
  if (selected === correctAnswer) {
    messageElement.textContent = "Correct! You guessed the right game character!";
    messageElement.style.color = "green";
    changeImages('correct');
  } else {
    messageElement.textContent = "Wrong! That's not the correct game character. Try again!";
    messageElement.style.color = "red";
    changeImages('wrong');
  }
  
  // Randomly reset the game after a short time
  setTimeout(() => resetGame(), 2000);
}

function changeImages(type) {
  let image1 = document.getElementById('image1');
  let image2 = document.getElementById('image2');
  
  if (type === 'correct') {
    // If correct, you can show a happy celebration image for the correct character
    image1.style.border = "5px solid green";
    image2.style.border = "none";
  } else if (type === 'wrong') {
    // If wrong, change borders or show some absurd "fail" images
    image1.style.border = "5px solid red";
    image2.style.border = "5px solid red";
  }
}

function resetGame() {
  // Randomly pick a new answer and reset the border
  correctAnswer = Math.floor(Math.random() * 2) + 1;
  document.getElementById('image1').style.border = "none";
  document.getElementById('image2').style.border = "none";
  document.getElementById('message').textContent = "";
}
