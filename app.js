
// const clearBtn = document.getElementById("clearBtn")
// const screen = document.querySelector(".screen")
// const buttons = document.querySelectorAll('.numericButton')
// const deleteButton = document.getElementById('btn-delete')
// const operatorButtons = document.querySelectorAll('.operator-btn')
// const equalButton = document.getElementById('eql-btn')
// let firstOperand ='';
// let secondOperand ='';
// let operator = '';

// clearBtn.onclick = function(){
//   firstOperand = ''
//     screen.textContent = firstOperand
// }

// buttons.forEach(button=>{
//   button.addEventListener('click',evt=>{
//     firstOperand = firstOperand.concat(button.textContent.trim())
//     screen.textContent = firstOperand
//   })
// })

// deleteButton.addEventListener('click', evt=>{
//      firstOperand = firstOperand.split('').slice(0,-1).join('')
//      screen.textContent = firstOperand
// })

// operatorButtons.forEach(button =>{
//   button.addEventListener('click', evt=>{
//     secondOperand = firstOperand
//     firstOperand = ''
//     operator = button.textContent
//     screen.textContent = firstOperand
//   })
// })

// equalButton.addEventListener('click', evt=>{
//   switch(operator){
//     case '/':
//     //screen.textContent = calculator.divide(secondOperand / firstOperand)
//       screen.textContent = `${parseFloat(secondOperand) / parseFloat(firstOperand)}`
//       break;
  
//     case '*':
//       screen.textContent = `${parseFloat(secondOperand) * parseFloat(firstOperand)}`
//       break;
  
//     case '-':
//       screen.textContent = `${parseFloat(secondOperand) - parseFloat(firstOperand)}`
//       break;
  
//     case '+':
//       screen.textContent = `${parseFloat(secondOperand) + parseFloat(firstOperand)}`
//       break;
//   }
// })

// document.addEventListener('keydown', evt=>{
//   if(evt.key === "Enter"){
//     switch(operator){
//     case '/':
//       screen.textContent = `${parseFloat(secondOperand) / parseFloat(firstOperand)}`
//       break;
  
//     case '*':
//       screen.textContent = `${parseFloat(secondOperand) * parseFloat(firstOperand)}`
//       break;
  
//     case '-':
//       screen.textContent = `${parseFloat(secondOperand) - parseFloat(firstOperand)}`
//       break;
  
//     case '+':
//       screen.textContent = `${parseFloat(secondOperand) + parseFloat(firstOperand)}`
//       break;
//   }
//   }

// })