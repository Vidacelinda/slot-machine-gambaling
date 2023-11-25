// 1.Despot some money 
// 2.dertermine number of lines to bet on
// 3.collect a bet amount
// 4.spin the slot machine
// 5.check if the user won
// 6.give the user their winnings
// 7.play again

// require package/module and when you call another '()' to give you acces to another function to give you user input
const prompt =require("prompt-sync")();



// functon
const deposit = ()=>{
    while(true){
        // uses package and enters function to prompt
        const depositAmount = prompt("enter a deposit amount: ");
        // by defualt it will return as a string.
        // so convet to a number using 'parseFloat'
        const numberDepositAmount=parseFloat(depositAmount);
        // check if valid number with 'isNAN' ehcih check if it's a number
        if (isNaN(numberDepositAmount)||numberDepositAmount<=0){
            console.log("Invalid deposit amount,try again");
        }else{
            // this return will breake the while loop
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines=()=>{
    while (true){
        const lines=prompt("enter number of lines:");
        const numberOfLines=parseFloat(lines);
        if(isNaN(numberOfLines)||numberOfLines<=1 || numberOfLines>3){
            console.log("Invalid number of lines, Try again");
        }else{
            return numberOfLines;
        }
    }
};

const getBet=(balance,numberOfLines)=>{
    while(true){
        const bet=prompt("enter the total bet:");
        const numberBet=parseFloat(bet);
        if(isNaN(numberBet) || numberBet<=0 || numberBet*numberOfLines>balance){
            console.log("Invalid bet, Try Again");
        }else{
            console.log("total for bet with ",numberOfLines,"lines is",numberBet*numberOfLines)
            return numberBet;
        }
    }
};

// test function

// let will help adjust the value
let balance=deposit();
console.log("balance : ",balance);

const numberOfLines=getNumberOfLines();
console.log("lines :", numberOfLines);

const bet=getBet(balance,numberOfLines);
console.log("bet :", bet);