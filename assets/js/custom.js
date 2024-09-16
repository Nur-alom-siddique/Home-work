// ******task one***********
let fruits = ['Mango', 'Banana', 'Watermalon', 'Apple', 'Orange']
console.log(fruits[2]);

fruits.splice(1, 1, 'jambura');
console.log(fruits);

// ******task two***********
let tour = ["Cox's Bazar", 'Bandarban', 'Saint Martin'];

tour.push('Ratargol');
tour.unshift('Sondor Ban', 'Sajek Valley');
tour.pop();

console.log(tour);


// ******task three***********
let bookList = ['The Fikh', 'Adolf Hitler', 'Oxford']
console.log(bookList.includes('The Fikh'));


// ******task four***********
let checks = [1, 3, 4, 65];
let notArry = 450;

console.log(Array.isArray(notArry));


// ******task five**********
let newArr = ['First', 'Secound', 'Third'];
const oldArr = ['Forth', 'fifth'];

console.log(newArr.concat(oldArr));
console.log(newArr, oldArr);





// let x = prompt('enter')

// console.log(typeof x);

// x = parseInt(x)
// console.log(typeof x);
