const name = ["Annie", "Patrick", "Carmen"];
let newArray = []

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        newArray[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
    //console.log(newArray);
    return newArray;
   
}
//writeCards(name);


function countDown(integer) {
    while (integer >= 0) {
        console.log(integer)
        integer--
    }
}
//countDown(10)