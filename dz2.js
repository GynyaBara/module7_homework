// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а
// затем проверяет есть ли у переданного объекта свойство с данным именем.Функция должна возвращать true или false.

function getObjOrString(value) {
  if (typeof value === "string" && value !== null) {
    return true;
  } else if (typeof value === "object" && value !== null) {
    return true;
  } else {
    return false;
  }
}
let sumthing = getObjOrString(35);
console.log(sumthing);
