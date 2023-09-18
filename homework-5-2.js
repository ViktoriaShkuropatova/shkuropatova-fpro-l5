let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//1.Знайти суму та кількість позитивних елементів.
let sumPositiveItems = 0;
let count = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i]> 0){
        sumPositiveItems += arr[i];
        count++;
    }
}

console.log(`Сума позитивних елементів = ${sumPositiveItems}`);
console.log(`Їх кількість = ${count}`);

let minItem = arr[0];
let maxItem = arr[0];
let indexMin = 0;
let indexMax = 0;

for (let i = 0; i < arr.length; i++){
    //2.Знайти мінімальний елемент масиву та його порядковий номер
    if (arr[i] < minItem){
        minItem = arr[i];
        indexMin = i;
    }
    //3.Знайти максимальний елемент масиву та його порядковий номер.
    if (arr[i] > maxItem){
        maxItem = arr[i];
        indexMax = i;
    }
}

console.log(`Мінімальний елемент масиву = ${minItem} та його порядковий номер = ${indexMin}`);
console.log(`Максимальний елемент масиву = ${maxItem} та його порядковий номер = ${indexMax}`);
//4.Визначити кількість негативних елементів.
let negativCount = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        negativCount++;
    }
}
console.log(`Кількість негативних елеметів в масиві = ${negativCount}`);
//5.Знайти кількість непарних позитивних елементів.
//6.Знайти суму непарних позитивних елементів.
let oddPositiveCount = 0;
let oddPositiveSum = 0;

for (let i=0; i < arr.length; i++){
    if (arr[i] > 0 && arr[i] % 2 !== 0){
        oddPositiveCount++;
        oddPositiveSum += arr[i];
    }
}

console.log(`Кількість непарних позитивних елементів - ${oddPositiveCount} та їх сума = ${oddPositiveSum}`);
//7.Знайти кількість парних позитивних елементів.
//8.Знайти суму парних позитивних елементів.
let pairedPositiveCount = 0;
let pairedPositiveSum = 0;

for (let i=0; i < arr.length; i++){
    if (arr[i] > 0 && arr[i] % 2 === 0){
        pairedPositiveCount++;
        pairedPositiveSum += arr[i];
    }
}

console.log(`Кількість парних позитивних елементів - ${pairedPositiveCount} та їх сума = ${pairedPositiveSum}`);
//9.Знайти добуток позитивних елементів.
let productItems = 1;
for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        productItems *= arr[i];
    }
}

console.log(`Добуток позитивних елементів = ${productItems}`);
//10.Знайти найбільший серед елементів масиву, інші обнулити. (найбільше вже знайдено)
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxItem) {
      arr[i] = 0;
    }
}

console.log(`Новий масив з обнуленими елементами залишивши максимальне число [${arr}]`);