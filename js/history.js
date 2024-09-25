document.getElementById('show-history-transaction').addEventListener('click',function (){
  console.log('history button clicked ');
  document.getElementById('transaction-section');
const color=document.getElementById('show-history-transaction');
color.style.backgroundColor='tomato';

  showSectionById('transaction-history');
  showSectionById()
  
});

document.getElementById('donatation-btn').addEventListener('click', function(){
  console.log('donation btn clicked')
  window.location.href='./index.html';
});



