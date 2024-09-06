const prompt = require("prompt-sync")()

function count(Lyrics) {
  
    Lyrics = Lyrics.toLowerCase();
    
    
    const regex = /a/;
    
    const ocorrency = Lyrics.match(regex);
    const counting = ocorrency ? ocorrency.length : 0;
    
    const doExist = counting > 0;
    
    return { doExist, counting};
}


const entry = prompt("Write a string:");


const result = count(entry);

if (result.doExist) {
    console.log(`Letter 'a' appears ${result.counting} time(s) in the string.`);
} else {
    console.log(`Letter 'a' doesn´t appears in the string.`);
}
