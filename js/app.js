let playerToEdit = '';
let players = {
  X:{symbol: 'X', name:''},
  O:{symbol: 'O', name:''}
}

let gameData = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

let roundNumber = 0;

let gameIsActive = false;
var activePLayer = players.O;
const modalPlayConfig = document.getElementById('config-modal');
const formPlayerConfig = document.querySelector('.modal form');
const formNameConfig = document.querySelector('form').firstElementChild;
const nameErrorMsg = document.getElementById('name-error');
const btnEditPLayerX = document.getElementById('btn-edit-player-X');
const btnEditPLayerO = document.getElementById('btn-edit-player-O');
const btnSavePlayerConfig = document.getElementById('btn-save-player-config');
const btnCloseModal = document.getElementById('btn-close-modal');
const gameBoard = document.getElementById('activate-game');
const btnStartGame = document.getElementById('btn-start-game');
const msgModal = document.getElementById('msg-modal');
const btnCloseMsgModal = document.getElementById('btn-close-msg-modal');
const gameBlocks = document.querySelectorAll('#game-board li');
const activePlayerElement = document.getElementById('active-player-name');
const msgModalText = msgModal.querySelector('h3');
const gameOverSection = gameBoard.firstElementChild;
const winnerName = document.getElementById('winner-name')


btnEditPLayerX.addEventListener('click', openPlayerConfig);
btnEditPLayerO.addEventListener('click', openPlayerConfig);
btnCloseModal.addEventListener('click', closePlayerConfig);

formPlayerConfig.addEventListener('submit', savePLayerConfig);


btnCloseMsgModal.addEventListener('click', closeMsgModal)
btnStartGame.addEventListener('click', startNewGame);

for(gameBlock of gameBlocks){
  gameBlock.addEventListener('click', clickedGameBlock)
}