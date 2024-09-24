document.getElementById('donate-btn').addEventListener('click', function show(id){
  const p=document.createElement('p');
  p.innerText= `Added: ${donateinput} Tk. Balance: ${newBalance}`;
  window.location.href='/history.html';

})