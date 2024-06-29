function startNewGame(){
  if (!players.X.name || !players.O.name) {
    openMsgModal('Please Set Player name for both Players!');
    return
  }

  if(gameIsActive){
    openMsgModal("Game is already running.");
    return;
  }
  initGameBorad();
}

function initGameBorad(){
  gameOverSection.classList.add('hidden');
  gameBoard.classList.remove('hidden');
  gameIsActive = true;
  gameData = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]
  setActivePLayer();
  roundNumber = 1;
  for(gameBlock of gameBlocks){
    gameBlock.classList.remove('disabled');
    gameBlock.textContent = '';
  }
}

function setActivePLayer(){
  if(activePLayer === players.X){
    activePLayer = players.O
  }
  else
  {
    activePLayer = players.X
  }
  activePlayerElement.textContent = activePLayer.name;
}

function openMsgModal(msg){
  msgModal.classList.remove('hidden');
  msgModalText.textContent = msg
}

function closeMsgModal(){
  msgModal.classList.add('hidden');
}

function clickedGameBlock(e){
  if(!gameIsActive){
    openMsgModal('Game Over. Click  "Start New Game" to play again!')
    return;
  }
  const target = e.target;
  const col = target.dataset.col - 1;
  const row = target.dataset.row - 1;
  if(gameData[row][col] !== null){
    openMsgModal('please select an empty game field!');
    return;
  }
  target.textContent = activePLayer.symbol
  target.classList.add('disabled');
  gameData[row][col] = activePLayer;
  const gameResult = checkGameOver();
  roundNumber++;
  console.log(gameResult);
  if(gameResult === 0){
    return
  }
  else if (gameResult === -1) {
    gameIsActive = false;
    openMsgModal('No Winner! Click  "Start New Game" to play again!')
    return;
  }
  else{
    gameIsActive = false;
    showWinner(gameResult);
    return;
  }
  setActivePLayer();
}

function checkGameOver(){
  for (let i = 0; i < 3; i++) {
    if( gameData[i][0] !== null &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
    )
    {
      return gameData[i][0];
    }

    if( gameData[0][i] !== null &&
        gameData[0][i] === gameData[1][i] &&
        gameData[1][i] === gameData[2][i]
    )
    {
      return gameData[0][i];
    }
  }

  if( gameData[0][0] !== null &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
  )
  {
    return gameData[0][0];
  }

  if( gameData[0][2] !== null &&
      gameData[0][2] === gameData[1][1] &&
      gameData[1][1] === gameData[2][0]
  )
  {
    return gameData[0][2];
  }

  if (roundNumber === 9) {
    return -1
  }

  return 0
}

function showWinner(winner){
  gameOverSection.classList.remove('hidden');
  winnerName.textContent = winner.name
}