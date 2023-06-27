Задание 1
Задание: Нужно написать функцию, которая возвращает тип входного аргумента
На входе: один аргумент, любого значения
На выходе: строка, с типом входного аргумента

Ответ:
----------------------------------------------


function getArgumentType(argument) {
  return typeof argument;
}

console.log(getArgumentType(42));
console.log(getArgumentType("Hello"));
console.log(getArgumentType(true));
console.log(getArgumentType(null));
console.log(getArgumentType(undefined));



------------------------------------------------



Задание 2
Задание: Что выведется в консоль и почему?
const a = () => console.log("a");
const b = () => console.log("b");
const c = a || b ? a() : b();
console.log(c);


Ответ:
a
undefined

При выполнении строки const c = a || b ? a() : b();, происходит проверка условия a || b. Оба a и b являются функциями, поэтому условие будет истинным. Затем, так как условие истинно, вызывается функция a() и в консоль выводится строка "a".

Но, функция a не возвращает никакого значения, поэтому в переменную c присваивается значение undefined. Именно это значение  выводится в консоль при выполнении console.log(c).



Функции
Задание 1
Задание: Нужно реализовать функцию, возвращающая сумму всех аргументов,
если тип аргумента - число. Вызовов ВСЕГДА 5
Примеры:
count(3)(2)(1)(5)(7) // 18
count(3)(null)(1)('asad')() // 4


ответ:
------------------------------------------

function count(...args) {
  let sum = 0;

  function innerCount(...innerArgs) {
    if (innerArgs.length === 0) {
      return sum;
    }

    for (let i = 0; i < innerArgs.length; i++) {
      if (typeof innerArgs[i] === 'number') {
        sum += innerArgs[i];
      }
    }

    return innerCount;
  }

  return innerCount(...args);
}


console.log(count(3)(2)(1)(5)(7)());
console.log(count(3)(null)(1)('asad')());


------------------------------------------

Объекты и Массивы
Задание 1
Задание: Реализовать функцию convertArrToObj, которая на вход принимает
массив значений, а на выход отдает объект, где ключ - это индекс элемента в
массиве, а значение - сам элемент
const arr = [1, null, 'test', undefined]
const obj = convertArrToObj()
console.log(obj) // { 0: 1, 1: null, 2: 'test', 3: undefined }

ответ:
------------------------------------------

function convertArrToObj(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  return obj;
}

// Пример использования:
const arr = [1, null, 'test', undefined];
const obj = convertArrToObj(arr);
console.log(obj);

------------------------------------------

Задание 2
Задание: Требуется реализовать функцию countFromArr, которая позволяет
подсчитать значения массива. На вход поступает массив, на выход получаем
объект, где ключ - это элемент массива, а значение - его кол-во в массиве
const arr = [1, 1, 1, 'test', 'test']
const res = countFromArr(arr)
console.log(res) // { 1: 3, test: 2 }

ответ:
------------------------------------------

function countFromArr(arr) {
  const countObj = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (countObj[element]) {
      countObj[element] += 1;
    } else {
      countObj[element] = 1;
    }
  }

  return countObj;
}

const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res); 

------------------------------------------

Задание 3
Задание: Требуется реализовать функцию groupByField, которая позволяет
сгруппировать массив объектов по определенному полю этого объекта.
На вход поступает массив объектов и строка с названием нужного поля, на выход
объект - где ключом является значение поля объекта, а значением - массив
объектов где значение в поле равно этому ключу 🤪 (надеюсь в примере будет
понятней)
Пример:
const arr = [{test: 1},{test: 2},{test: 3},{test: 1},{test: 1}]
const res = groupByField(arr, 'test')
console.log(res) // { 1: [{test: 1}, {test: 1}, {test: 1}], 2: [{test: 2}], 3: [{test: 3}]}

ответ:
------------------------------------------

function groupByField(arr, field) {
  const groupedObj = {};

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const value = obj[field];

    if (groupedObj[value]) {
      groupedObj[value].push(obj);
    } else {
      groupedObj[value] = [obj];
    }
  }

  return groupedObj;
}

const arr = [{test: 1}, {test: 2}, {test: 3}, {test: 1}, {test: 1}];
const res = groupByField(arr, 'test');
console.log(res);

------------------------------------------

Прототипы, наследование
Задание 1
Задание: Реализовать функцию plus()
(1).plus(2); // 3



ответ:
------------------------------------------


function plus(num1) {
  const result = num1;

  function innerPlus(num2) {
    return plus(result + num2);
  }

  innerPlus.valueOf = function() {
    return result;
  };

  return innerPlus;
}

console.log(plus(1)(2)); 

------------------------------------------

Асинхронная работа в JS"
Задание 1
Задание: Что выведется в консоль?
Untitled 3
console.log("start");
setTimeout(() => console.log("timeout"), 0);
new Promise((resolve, reject) => {
console.log("promise constructor");
reject();
})
.then(() => console.log("p1"))
.catch(() => console.log("p2"))
.catch(() => console.log("p3"))
.then(() => console.log("p4"))
.then(() => console.log("p5"));
console.log("final");


ответ:
------------------------------------------
start
promise constructor
final
p2
p4
p5

------------------------------------------














