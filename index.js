// Code your solutions in this file

// writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )
// => [ 'Thank you, Lisa, for the wonderful surprise gift!', 
// 'Thank you, Kaitlin, for the wonderful surprise gift!', 
// 'Thank you, Jan, for the wonderful surprise gift!' ]

function writeCards(inputArray, type) {

    let returnArray = []

    for (let i = 0; i < inputArray.length; i++) {
        let sentence = `Thank you, ${inputArray[i]}, for the wonderful ${type} gift!`
        returnArray.push(sentence)
    }

    return returnArray
}

function countDown(amount) {
    let number = amount;
    let returnArray = [];

    while (number >= 0){
        console.log(number)
        number--;
    }
}