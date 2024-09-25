document.getElementById('donate-btn').addEventListener('click', function (){
  const p=document.createElement('p');
  p.innerText= `Added: ${donateinput} Tk. Balance: ${newBalance}`;
  window.location.href='/history.html';

})