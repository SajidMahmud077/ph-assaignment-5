
document.getElementById('donate-btn').addEventListener('click', function(){

const inputValue= document.getElementById('donate-input').value;

if(isNaN(inputValue)|| inputValue <= 0 ){

  document.getElementById('my_modal_2').close();


  return alert ('Attempt Failed! invalid  input');

}


  const colectedAmount = document.getElementById('fund-collected-amount').innerText;
  console.log(colectedAmount);
  const donateinput = document.getElementById('donate-input').value;
  console.log(donateinput);
  const donateinputNumber = parseFloat(donateinput);
  const colectedAmountNumber = parseFloat(colectedAmount);
  const accountBalance = document.getElementById('Available-Balance').innerText;
  const accountBalanceNumber = parseFloat(accountBalance);
  console.log(accountBalanceNumber);

    const newAmount = colectedAmountNumber + donateinputNumber;
    const newBalance = accountBalance - donateinputNumber;

    document.getElementById('fund-collected-amount').innerText = newAmount;
    document.getElementById('Available-Balance').innerText = newBalance;
  
    
});




document.getElementById('donate-btn-2').addEventListener('click', function(){

  const inputValue= document.getElementById('donate-feni-input').value;
  
  if(isNaN(inputValue)|| inputValue <= 0 ){
  
    document.getElementById('my_modal_2').close();
  
  
    return alert ('Attempt Failed! invalid  input');
  
  }
  
    const colectedAmount = document.getElementById('collected-amount-feni').innerText;
    console.log(colectedAmount);
    const donateinput = document.getElementById('donate-feni-input').value;
    console.log(donateinput);
    const donateinputNumber = parseFloat(donateinput);
    const colectedAmountNumber = parseFloat(colectedAmount);
    const accountBalance = document.getElementById('Available-Balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    console.log(accountBalanceNumber);
  
      const newAmount = colectedAmountNumber + donateinputNumber;
      const newBalance = accountBalance - donateinputNumber;
  
      document.getElementById('collected-amount-feni').innerText = newAmount;
      document.getElementById('Available-Balance').innerText = newBalance;
    
  });
  


  document.getElementById('donate-btn-3').addEventListener('click', function(){

    const inputValue= document.getElementById('donate-for-qmovement').value;
    
    if(isNaN(inputValue)|| inputValue <= 0 ){
    
      document.getElementById('my_modal_2').close();
    
    
      return alert ('Attempt Failed! invalid  input');
    
    }
    
      const colectedAmount = document.getElementById('collected-money-qmovement').innerText;
      console.log(colectedAmount);
      const donateinput = document.getElementById('donate-for-qmovement').value;
      console.log(donateinput);
      const donateinputNumber = parseFloat(donateinput);
      const colectedAmountNumber = parseFloat(colectedAmount);
      const accountBalance = document.getElementById('Available-Balance').innerText;
      const accountBalanceNumber = parseFloat(accountBalance);
      console.log(accountBalanceNumber);
    
        const newAmount = colectedAmountNumber + donateinputNumber;
        const newBalance = accountBalance - donateinputNumber;
    
        document.getElementById('collected-money-qmovement').innerText = newAmount;
        document.getElementById('Available-Balance').innerText = newBalance;
      
    });
    




