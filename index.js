// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, event) {
  let thanks = [];
  for (let i = 0; i < names.length; i++) {
    thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return thanks
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moved OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

function countDown(number) {
  for (; number >= 0; number--) {
    console.log(number)
  }
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");
wrapGifts(gifts);
countDown(10);