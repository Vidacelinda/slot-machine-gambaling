// 1.Despot some money 
// 2.dertermine number of lines to bet on
// 3.collect a bet amount
// 4.spin the slot machine
// 5.check if the user won
// 6.give the user their winnings
// 7.play again

// require package/module and when you call another '()' to give you acces to another function to give you user input
const prompt =require("prompt-sync")();

const ROWS=3;
const COLS=3;

const SYMBOLS_COUNT ={
    "A":2,
    "B":4,
    "C":6,
    "D":8
}

const SYMBOLS_VALUES ={
    "A":5,
    "B":4,
    "C":3,
    "D":2
}



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

const spin =()=>{
    const symbols=[];
    // "for loop" loops through all symboles in "STMBOLS_COUNT" (global verable) 
    // key:value  == symbol:count
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        // adds to 'symbol' array
        for(let i=0;i<count;i++){
            symbols.push(symbol);
        }
    }
    const reel=[[],[],[]];
    for (let i=0;i<COLS;i++){
        // copy "symbols" array into another array "realSymbols"
        const reelSymbols=[...symbols];
        for (let j=0;j<ROWS;j++){
            //make random index
            const randomIndex =Math.floor(Math.random() * reelSymbols.length);
            //use random index i
            const selectedSymbol=reelSymbols[randomIndex];
            // push into reels
            reels[i].push(selectedSymbol);
            // remove
            reelSymbols.splice(randomIndex,1);
        }
    }
}

// test function
console.log(spin())
console.log(reels);
let balance=deposit();
console.log("balance : ",balance);

const numberOfLines=getNumberOfLines();
// console.log("lines :", numberOfLines);

const bet=getBet(balance,numberOfLines);
// console.log("bet :", bet);
