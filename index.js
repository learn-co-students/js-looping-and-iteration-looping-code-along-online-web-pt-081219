// Code your solutions in this file
function writeCards(names, surprise) { 
    let newArray = [] 
    for (let i = 0; i < names.length; i++)  { 
  newArray.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`) ;
    }
    return newArray;
}

// cant use shovel in javascript
   
// counter is a number they'll pass in
function countDown(counter){

while (counter > 0) {
    console.log(counter--);
}
console.log(counter)
// will log it one last time when its zero
}