let count = 0;
const btnSelect = document.getElementsByClassName("btn-select");

for (selector of btnSelect) {
  selector.addEventListener("click", function (event) {
    count++;
    const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
    const selected = event.target.setAttribute("disabled", "");

    if (count > 5) {
      const selected = event.target.removeAttribute("disabled");

      alert(" Can't add more then 5 player");
      return;
    }

    const selectedPlayer = document.getElementById("player-list");
    const totalSelectedPlayer = parseFloat(selectedPlayer.innerText);
    selectedPlayer.innerText = count;

    const mainContainer = document.getElementById("table-body");

    const bodyContainer = document.createElement("tr");
    bodyContainer.innerHTML = `
       <th scope="row">${count}</th>
       <td>${playerName}</td>
       `;
    mainContainer.appendChild(bodyContainer);
  });
}