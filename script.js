// Задача 1

// Создайте массив nums со значениями 5, 2, 4 и

// пустой массив squares

// Добавьте в массив nums элемент с индексом 99,

// который содержит значение 3

// С помощью цикла получите массив squares из 4

// элементов, значениями которых будут квадраты

// значений массива nums, а именно [25, 4, 16, 9]

let nums = [5, 2, 4];
nums[99] = 3;
let squares = [];

for (let num in nums) {
        squares.push(nums[num]**2)
    }

console.log(squares);

// Задача 2
// В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.

// Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.

// Пример значений переменных:

list = [
     {product: "Apple", price: 31},
     {product: "Cherry", price: 45},
     {product: "Strawberry", price: 48},
     {product: "Orange", price: 48},
    ]
let nameProduct = "";
let maxPrice = 0;
for(let i=0; i<list.length; i++) {
    if (list[i].price > maxPrice) {
        maxPrice = list[i].price;
    } 
   
}

const product = list.find(function (item) {
    return item.price === maxPrice;
  });

console.log(product);

// Создайте массив products с названиями продуктов (5-10);
// Создайте пустой массив массив basket.
// Выберите случайное число от 10 до 20 и наполните массив basket случайными продуктами следующим образом:
// если продукта еще нет в корзине - сформируйте объект, который включает в себя название продукта, цену и количество (1)
// если продукт уже есть в корзине - увеличьте его количество на 1
// После наполнения корзины, с помощью метода reduce посчитайте сумму товаров корзины (цена *  количество)

// Пример корзины:

// product = [
//     {product: "tomato", price: 123, cnt: 2},
//     {product: "apple", price: 80, cnt: 5},
//     {product: "salad", price: 25, cnt: 4},
//     {product: "joe", price: 45, cnt: 3},
//     {product: "peach", price: 58, cnt: 7},
// ];

const products = [
    { name: "tomato", price: 123 },
    { name: "apple", price: 80 },
    { name: "salad", price: 25 },
    { name: "joe", price: 45 },
    { name: "peach", price: 58 },
    { name: "banana", price: 30 },
    { name: "grapes", price: 100 },
    { name: "orange", price: 75 },
];

let basket = [];

const randomCount = Math.floor(Math.random() * 11) + 10;

for (let i = 0; i < randomCount; i++) {
    const randomProductIndex = Math.floor(Math.random() * products.length);
    const product = products[randomProductIndex];
    const existingProduct = basket.find(item => item.product === product.name);
    if (existingProduct) {
        existingProduct.cnt += 1;
    } else {
        basket.push({ product: product.name, price: product.price, cnt: 1 });
    }
}

const totalSum = basket.reduce((sum, item) => sum + item.price * item.cnt, 0);

console.log("Корзина:", basket);
console.log("Общая сумма:", totalSum);
