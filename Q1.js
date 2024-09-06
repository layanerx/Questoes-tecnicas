//QUESTÃO 1:

const prompt = require("prompt-sync")()

    let x = 0;
    let y = 1;

    function Fibonacci (num){
        if (num < 0)
            return false;


if (num === x || num === y) 
    return true;

while (y<=num){
    if(y === num)
        return true;
    [x, y] = [y, x + y];

}

return false;
}

const number = parseInt(prompt("Write a number:"));

if (Fibonacci(number)){
    console.log(`${number} Belong to a sequence`);

}else{
    console.log(`${number} Doens't belong to a sequence`);
}

