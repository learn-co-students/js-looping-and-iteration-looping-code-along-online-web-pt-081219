// Code your solutions in this file
function writeCards(people) {
    let messages = [];
    for (let i = 0; i < people.length; i++) {

        messages.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`);
    }

    return messages;
} 

function countDown(number) {
    let i = 0;
    while (i <= number) {
        console.log(number - i);
        i++;
    }
}