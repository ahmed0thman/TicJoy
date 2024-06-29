function containsNumber(str){
  return /\d/.test(str);
}

function contains(str, word){
  return str.toLowerCase().includes(word.toLowerCase());
}

function openPlayerConfig(e){
  playerToEdit = e.target.dataset.playerid;
  modalPlayConfig.classList.remove('hidden');
  formNameConfig.children[1].value = players[playerToEdit].name;
}

function closePlayerConfig(){
  modalPlayConfig.classList.add('hidden');
  formNameConfig.classList.remove('error');
  formNameConfig.children[1].value = ''
  nameErrorMsg.textContent = '';
}

function savePLayerConfig(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const playerName = formData.get('playername').trim();
  if(!playerName){
    formNameConfig.classList.add('error');
    nameErrorMsg.textContent = "Enter a valid Player Name!"
    return;
  }
  else if(containsNumber(playerName)){
    formNameConfig.classList.add('error');
    nameErrorMsg.textContent = "Player Name can't contain numbers"
    return;
  }
  if(playerToEdit === 'X' && playerName === players.O.name){
    formNameConfig.classList.add('error');
    nameErrorMsg.textContent = "This name was already set to PLayer 'O'!";
    return;
  }
  if(playerToEdit === 'O' && playerName === players.X.name){
    formNameConfig.classList.add('error');
    nameErrorMsg.textContent = "This name was already set to PLayer 'X'!";
    return;
  }

  const playerNameHeading = document.getElementById(`player-name-${playerToEdit}`);
  playerNameHeading.textContent = playerName;
  players[playerToEdit].name = playerName;
  closePlayerConfig();
}