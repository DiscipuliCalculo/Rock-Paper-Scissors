const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnSicssors = document.createElement('button');
const scoreBoard = document.createElement('div')
var scores = [0, 0];

const gameContainer = document.querySelector("#game-container");

document.querySelector("#result").appendChild(scoreBoard)
gameContainer.appendChild(btnRock)
gameContainer.appendChild(btnPaper)
gameContainer.appendChild(btnSicssors)

scoreBoard.textContent = `Player: ${scores[0]}     Computer: ${scores[1]}`
btnRock.textContent = 'Rock'
btnPaper.textContent = 'Paper'
btnSicssors.textContent = 'Scissors'

btnRock.addEventListener('click', function (e) {
    result = playRound('ROCK', computerPlay());
    scoreKeeper(result, scores);
});
btnPaper.addEventListener('click', function (e) {
    result = playRound('PAPER', computerPlay());
    scoreKeeper(result, scores);
});
btnSicssors.addEventListener('click', function (e) {
    result = playRound('SCISSORS', computerPlay());
    scoreKeeper(result, scores);
});
