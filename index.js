// Code your solutions in this file
function writeCards(names, event)  {
    var card = []
    for (let i=0; i<names.length; i++) {
        card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return card;
}

function countDown(integer) {
    while (0 <= integer) {
        console.log(integer--)
    }
}