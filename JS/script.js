//1

//setTimeout

//function printNumbers(from, to) {
//let current = from;

// setTimeout(function go() {
//console.log(current);
//if (current < to) {
//setTimeout(go, 1000);
//}
//current++;
//}, 1000);
//}
//printNumbers(5, 10);

//setInterval

//function printNumbers(from, to) {
//let current = from;

//let timerId = setInterval(function() {
//console.log(current);
//if (current === to) {
//clearInterval(timerId);
//}
//current++;
//}, 1000);
//}

//printNumbers(5, 10);

//2
//function showMessage(time) {
//let timerId = setInterval(() => console.log('tick'), 3000);

//setTimeout(() => {
//clearInterval(timerId);
// console.log('stop');
//}, 10000);
//}
//showMessage("Hi")

//3 была ошибка, иначально думала 1,4,6,5,3
//1,6,4,5,3 

//4

let jordan = {
    name: "Michael",
    age: 59,
    showName: function() {
        console.log(this.name);
    },

};

let messi = {
    name: "Lionel",
    age: 34,
}

console.log(jordan.showName());
console.log(jordan.showName.call(messi));