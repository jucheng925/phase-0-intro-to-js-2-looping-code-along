const name = ["Annie", "Patrick", "Carmen"];
let newArray = []

function writeCards(name) {
    for (let i = 0; i < name.length; i++) {
        newArray[i] = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
    }
    //console.log(newArray);
    return newArray;
   
}
writeCards(name);

let integer = 10
function countDown(integer) {
    while (integer >= 0) {
        console.log(integer)
        integer--
    }
}
countDown(integer)