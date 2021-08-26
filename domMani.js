const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnSicssors = document.createElement('button');
const scoreBoard = document.createElement('div')
var scores = [0, 0];

document.querySelector('body').appendChild(scoreBoard)
document.querySelector('body').appendChild(btnRock)
document.querySelector('body').appendChild(btnPaper)
document.querySelector('body').appendChild(btnSicssors)

scoreBoard.textContent = `Player: ${scores[0]}     Computer: ${scores[1]}`
btnRock.textContent = 'Rock'
btnPaper.textContent = 'Paper'
btnSicssors.textContent = 'Sicssors'

btnRock.addEventListener('click', function (e) {
    result = playRound('ROCK', computerPlay());
    scoreKeeper(result, scores);
});
btnPaper.addEventListener('click', function (e) {
    result = playRound('PAPER', computerPlay());
    scoreKeeper(result, scores);
});
btnSicssors.addEventListener('click', function (e) {
    result = playRound('SICSSORS', computerPlay());
    scoreKeeper(result, scores);
});
