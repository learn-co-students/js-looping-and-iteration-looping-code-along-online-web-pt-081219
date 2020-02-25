// function writeCards(names) {
//     let thankYouCards = []
//     for (let i = 0; i < names.length; i++){
//     thankYouCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!.`)
//     }    
//     return thankYouCards
// }

 
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  

// 'Thank you, Lisa, for the wonderful surprise gift!'

function countDown(number) {
    while (number > 0 ) {
        console.log(number);
        number-=1;
    }
    console.log(number);
}

