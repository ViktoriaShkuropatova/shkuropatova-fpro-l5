let myLength = +prompt('Введіть довжину бажанного масива', '0');
let myArr = [];

for(let i = 0; i < myLength; i++) {
    let itemArr = +prompt('Введіть елементи масиву','0');
    myArr.push(itemArr);
}

console.log(myArr);

//Відсортувати масив за зростанням.
myArr.sort((item1, item2) => {
    return item1 - item2
})

console.log(myArr);

//Видалити елементи з масиву з 2 по 4 (включно!)
myArr.splice(1, 3);

console.log(myArr);