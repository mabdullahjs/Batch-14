// console.log("hello world");

// block
// scope

// function greetUser() {
//   console.log("hello world 1");
//   console.log("hello world 2");
//   console.log("hello world 3");
//   console.log("hello world 4");
// }

// greetUser();
// greetUser();

// parameter
// argument

// function greetUser(username, age, email) {
//   console.log(`hello ${username}`);
// }

// // greetUser("abdullah");
// // greetUser("usman");
// greetUser("abdullah", 21, "mabdullah@gmail.com");

// local variable
// global variable

// var username = "abdullah"; // global variable
// function hello() {
//   var age = 21; // local variable
//   console.log(username);
// }

// hello();

// var username = prompt("enter your username");
// console.log(username);

// function hello() {
//   //   console.log("hello abdullah");
//   return "meri mirzi";
// }

// // let greetUser = hello();
// // console.log(greetUser);
// console.log(hello());

// const h1 = document.querySelector("#head");
// h1.innerHTML = "change through javascript";
// console.log(h1.innerHTML);

const h1 = document.querySelector("#head");
let num = 0;

function hello() {
  //   num += 1;
  //   h1.innerHTML = "change through js " + num;

  if (h1.innerHTML === "hello functions") {
    h1.innerHTML = "changed through js";
  } else {
    h1.innerHTML = "hello functions";
  }
}



