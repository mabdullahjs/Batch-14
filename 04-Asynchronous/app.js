// console.log("hello world");

// const user = {
//   username: "mabdullah",
//   email: "mabdullah2037@gmail.com",
//   isLoggedIn: true,
//   hobbies: ["sleeping", "eating", "marketing"],
//   greetUser: function () {
//     console.log(this);
//     console.log(`hello ${this.username}`);
//   },
// };

// user.newKey = "hello world";
// user.username = "Muhammad Abdullah";
// delete user.email;
// console.log(user);

// user.greetUser();

// hoisting

// console.log(username);
// var username = "abdullah";

// function greetUser(username, age) {
//   console.log(arguments);
// }
// greetUser("abdullah", 21);

// console.log("hello world 1");
// console.log("hello world 2");
// console.log("hello world 3");
// setTimeout(() => {
//   console.log("hello world 4");
// }, 0);
// console.log("hello world 5");

// syncronous
// asyncronous

// async

// settimeout
// setinterval
// fetch
// axios
// promises (then catch)
// async await

// const datamangwalo = datamangwao()
// setTimeout(() => {
//   // console.log(datamangwalia);
// }, 1000);

// scalable web application

// promises (datalaado)
// log(promise)

// states

// pending
// fulfilled
// rejected

// .then .catch

// const topi = false;
// const iftarscnz = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (topi) {
//       console.log("promise reject");
//       reject();
//     } else {
//       console.log("promise fulfilled");
//       resolve();
//     }
//   }, 1000);
// });

// console.log(iftarscnz);
// iftarscnz
//   .then(() => {
//     console.log("then chal rha ha");
//   })
//   .catch(() => {
//     console.log("catch chal rha ha");
//   });

// const pakistaniTeam = "learn";

// const championsTrophy = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (pakistaniTeam === "win") {
//       resolve("rizwan bhai said aj win tha");
//     } else {
//       reject("aaj learn hogaya");
//     }
//   }, 1000);
// });

// championsTrophy
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function shaadiScnz(bankBalance) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bankBalance > 1000000) {
//         resolve("shaadi Mubarak");
//       } else {
//         reject("istekhara ma naa aya haa.cast sa bhar nahi krta hum");
//       }
//     }, 0);
//   });
// }

// shaadiScnz(2500000)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function dataMangwalo(isLoggedIn) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isLoggedIn === "yes") {
//         resolve("data agaya");
//       } else {
//         reject("data nahi aya");
//       }
//     }, 1000);
//   });
// }

// promise chaining

// dataMangwalo("yes")
//   .then((res) => {
//     console.log("resolve(then) ===>", res);
//     return res + " update krdia ha";
//   })
//   .then((res) => {
//     console.log("second (then) ===>", res);
//   })
//   .catch((err) => {
//     console.log("reject(catch) ===>", err);
//   });

// async await

// async function asyncFunc() {
//   try {
//     const response = await dataMangwalo("yes");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// asyncFunc();

// API

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("error ==>", err);
//   });

const div = document.querySelector(".container");

async function getUsers() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await data.json();
    console.log(response);
    response.map((item) => {
      div.innerHTML += `<p>${item.name}</p>`;
    });
  } catch (error) {
    console.log("error ===> ", error);
  }
}

getUsers();
