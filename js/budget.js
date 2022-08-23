document.getElementById('btn-calculate').addEventListener('click', function(){
  const playerAmount = elementAmount('player-list');
  const playerCost = inputAmount('Player-salary');

  const playerExpenses = playerAmount * playerCost;

  setElementValue('player-expenses', playerExpenses);
})

document.getElementById('btn-total').addEventListener('click', function(){
  const managerSalary = inputAmount('manager-cost');
  const coachSalary = inputAmount('coach-cost');
  const subTotal = elementAmount('player-expenses');

  const totalCost = managerSalary + coachSalary + subTotal;

  setElementValue('total-cost', totalCost);
})