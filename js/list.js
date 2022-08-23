const playerArray = [];

function updatingList(listName){
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = " ";

  for (let i = 0; i < listName.length; i++){
    const singlePlayerName = playerArray[i];
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${singlePlayerName}</td>
    `

    tableBody.appendChild(tr);
  }
}

const selectedPlayer = document.getElementById('player-list');
function addToTheList(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    playerArray.push(playerName);
    
    selectedPlayer.innerText = playerArray.length;
    updatingList(playerArray);
}