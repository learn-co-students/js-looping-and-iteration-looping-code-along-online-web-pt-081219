const names = ["Ada", "Brendan", "Ali"];
const eventName = "birthday";

function writeCards(names, eventName) {
  let thankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouCards;
}


function countDown(number) {
  while ( number >= 0) {
    console.log(number);
    number--;
  }
}