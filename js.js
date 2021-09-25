//v js 3 
// && (и)

// let highIncome = true;
// let goodCreditHistory = true;

// if(highIncome --- true && goodCreditHistory) {
//     confirm.length("My gotovy vadat kredit");
// }else {
//     confirm.length("izvinite, my ne mojem poka vydat kredit!");
// }

// && (или)
// let highIncome = true;
// let goodCreditHistory = false;

// if(highIncome --- true && goodCreditHistory) {
//     confirm.length("My gotovy vadat kredit");
// }else {
//     confirm.length("izvinite, my ne mojem poka vydat kredit!");
// }

// && (или)
// let highIncome = false;
// let goodCreditHistory = false;

// if(highIncome || goodCreditHistory) {
//     confirm.length("My gotovy vadat kredit");
// }else {
//     confirm.length("izvinite, my ne mojem poka vydat kredit!");
// }


//!(не)





// console.log(false || true);
// console.log(false || "Hello");
// console.log(false || 1);
// console.log("mirlan" || "Hello");
// console.log("mirlan" || 1);
// console.log(0 || 1 || "Hello");

//Falsy
//undefined
//null
//0
// false
// ""
// NoN

// Truthy
// Все что не falsy



//1
//logichekya operator
//my nedalem internet magazin
//polsovetel nujen coloor

// let userColor = "red";
// let defaultColor = "blue";

// let productColor = userColor || defaultColor;
// console.log(productColor);


//2 operator prisvoenie (op umnoj,delen,itd all math operorts)

// let a = 2;
// let b = "hello";

// console.log ((a += 3)); //oper prisvoenie
// console.log((a += b));


// a=a+b;


// let a = 10;
// let b = 3;

// a -= b;

// console.log(a);

//Drugie tipy dannyh - kompleksnye
//Massivy
//Array = massiv ili kollekziya

// let myArray = ["Jhon", "Mar","Ivan", 1, true, 6767, false [10, 34]];

// console.log(user.[1]);


// let myArray = ["Jhon", "Mar","Ivan"];
// users[1] = "Vasy";
// console.log(users.length);


// let myArray = ["Jhon", "Mar","Ivan"];
// users[35] = "Vasy";
// console.log(users[35]);

//class work 1
// let user = prompt("Vedite bukvu");
// let defaultLetter = "a, e, i, o, u";
// // console.log(userEnter.includes());
// let userLetter = (c) || y ;


// switch(eng)

// let userColor = "red";
// let defaultColor = "blue";

// let productColor = userColor || defaultColor;
// console.log(productColor);

//24.09.21
// 1 - Конструкция switch…case
//Конструкция switch заменяет собой сразу несколько if.
//Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.

// let lang = "ru";

// switch (lang) {
//   case "ky":
//     console.log("Кыргызский");
//     break;
//   case "ru":
//     console.log("Русский");
//     break;
//   case "en":
//     console.log("Английский");
//     break;
//   case "de":
//     console.log("Немецкий");
//     break;
//   default:
//     console.log("Данный язык не поддерживается");
//     break;
// }


// 2- Логические операторы
// && (И)
//Логическое И возвращает истину (true) только тогда, когда оба операнда имеют значение true.
// Если один или оба операнда имеют значение false, то оператор вернет false.

// let highIncome = false;
// let goodCreditHistory = true;

// if (highIncome && goodCreditHistory) {
//   console.log("Мы готовы выдать кредит!");
// } else {
//   console.log("Извините, мы пока не выдаем кредиты.");
// }

// 3- || (ИЛИ)
// Как и оператор &&, || работает с двумя операндами. Если один или оба операнда возвращают true,
// то оператор возвратит true, а если оба операнда false, то оператор вернет false. Работа этого оператора 
//такова: вначале он проверяет левый операнд, в случае если он вернет true, то и оператор || вернет true 
//(второй операнд проверять не имеет смысла), если первый операнд вернет false, то оператор || вернет
// значение второго (правого) операнда.

// let highIncome = true;
// let goodCreditHistory = false;

// if (highIncome || goodCreditHistory) {
//   console.log("Мы готовы выдать кредит!");
// } else {
//   console.log("Извините, мы пока не выдаем кредиты.");
// }

// 4- ! (НЕ)
// В отличие от предыдущих двух операторов, оператор НЕ (!) помещается перед одиночным операндом 
//(слева от операнда). Он инвертирует логическое значение своего операнда. Если операнд давал истинное
// (true) значение, то после применения оператора !, операнд вернет ложь (false). Если операнд был false, 
//то после применения оператора !, операнд вернет истину (true).

// let eligibleForLoan = false;

// console.log(!eligibleForLoan);

//Особенности работы логических операторов при работе с не булевыми значениями.

console.log(false || true);
console.log(false || "Mirlan");
console.log(false || 1);

console.log(false || true);
console.log("Mirlan" || "Hello");
console.log("Hello" || 1);
console.log(0 || 1 || "Hello");

// Falsy Values
// undefined
// null
// 0
// false
// ""
// NaN

// example
// let userColor = "red";
// let defaultColor = "blue";

// let productColor = userColor || defaultColor;

// console.log(productColor);

//6-Операторы с присваиванием
// let a = 2;
// let b = "hello";

// console.log((a += 3));

// console.log((b += " world"));

//7 - Присваивание с вычитанием
// let a = 5;
// let b = "hello world";

// console.log((a -= 3));

// console.log((b -= "world"));

//8-
// let a = 5;

// console.log((a *= 3));

//9 -
// let a = 15;

// console.log((a /= 3));

//10- 
// const Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     area() {
//       return this.height * this.width;
//     }
//   };
  
//   console.log(new Rectangle(5, 8).area());
  // expected output: 40

  //11- prisvoenie po modulu
//   let a = 5;

// console.log((a %= 3));

//12-
//Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array
//Объявление
//Существует два варианта синтаксиса для создания пустого массива:
// let arr = new Array();
// let arr = [];

// let users = ["John", "Mary", "Иван"];
// let mixedArray = ["Hello", 10, true, "World"];
/////////
//  let fruits = ['Яблоко', 'Банан'];

// console.log(fruits.length);

// let first = fruits[0];
// Яблоко

//let last = fruits[fruits.length - 1];
