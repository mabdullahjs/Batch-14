// const input = document.querySelector("#input");
// const ul = document.querySelector("#ul");

// const arr = [];

// function renderItems() {
//   ul.innerHTML = "";
//   for (let i = 0; i < arr.length; i++) {
//     ul.innerHTML += `<li>${arr[i]}
//         <button onclick="deleteTodo(${i})">delete</button>
//         <button onclick="editTodo(${i})">edit</button>
//         </li>`;
//   }
// }

// function addtodo() {
//   arr.push(input.value);
//   renderItems();

//   input.value = "";
// }

// function deleteTodo(index) {
//   //   console.log("delete todo", index);
//   arr.splice(index, 1);
//   renderItems();
// }
// function editTodo(index) {
//   console.log("edit todo", index);
//   const updatedVal = prompt("enter updated value");
//   //   arr[index] = updatedVal;
//   arr.splice(index, 1, updatedVal);
//   renderItems();
// }

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Uva (Grape in Spanish)",
  "Watermelon",
];

// for (let i = 0; i < fruits.length; i++) {
//   ul.innerHTML += `<li>${fruits[i]}</li>`;
// }

// for (let i = 0; i < 5; i++) {
//   console.log("outer loop", i);

//   for (let j = 0; j < 10; j++) {
//     console.log("inner loop", j);
//   }
// }

//  dowhile and while khud prhna ha

// callback function
// higher order function
// foreach
// map
// filter
// reduce

fruits.forEach(function (abdullah , index) {
  console.log(item);
});
