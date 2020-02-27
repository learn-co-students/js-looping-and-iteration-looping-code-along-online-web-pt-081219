// Code your solutions in this file

let thankYouCards = [] ;

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
       thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return thankYouCards
}


function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }

}
