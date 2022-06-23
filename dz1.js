// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств.Данная функция не должна возвращать значение.

let userInfo = {
  name: "Serg",
  age: 39,
  education: "Frontend",
  status: "module7",
};
function showInfo() {
  const enteris = Object.entries(userInfo);

  enteris.forEach((callback) => {
    let key = callback[0];
    let value = callback[1];
    console.log(`${key}: ${value}`);
  });
}
showInfo();
