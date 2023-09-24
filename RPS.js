function playerPlay(strPlayer) {
  if (strPlayer == 'ROCK') {
    num = 0;
  }
  else if (strPlayer == 'PAPER') {
    num = 1;
  }
  else if (strPlayer == 'SCISSORS') {
    num = 2;
  }
  return num;
}

function getRandomInt(num) {
  let int = Math.floor(Math.random() * num)
  return int;
}

function computerPlay() {
  let num = getRandomInt(3);
  return num;
}

function playRound(playerSelection, computerSelection) {
  let diff = playerPlay(playerSelection) - computerSelection
  let result = ''
  if (diff == 0) {
      window.alert('Draw');
      return 'D'
  } else if (diff == 1 || diff == -2) {
      window.alert('You Won');
      return 'W'
  } else {
      window.alert('You Lost');
      return 'L'
  }
}


function scoreKeeper(result, scores) {

  if (result == 'W') {
    scores[0]++;
  }
  else if (result == 'L') {
    scores[1]++;
  };

  if (scores[0] == 5) {
    window.alert('You Won the Game :)')
    scores = [0, 0]
  }
  else if (scores[1] == 5){
    window.alert('You Lost the Game! :(')
    scores = [0, 0]
  };
  scoreBoard.textContent = `Player: ${scores[0]}     Computer: ${scores[1]}`
};
