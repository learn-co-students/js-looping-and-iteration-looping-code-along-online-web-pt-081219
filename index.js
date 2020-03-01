// Code your solutions in this file
function writeCards(arrayOfNames, eventName) {
    let array = [];
    for(let i=0; i < arrayOfNames.length; i++) {
        array.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return array;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }    
}