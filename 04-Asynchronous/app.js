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

function shaadiScnz(bankBalance) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bankBalance > 1000000) {
        resolve("shaadi Mubarak");
      } else {
        reject("istekhara ma naa aya haa.cast sa bhar nahi krta hum");
      }
    }, 1000);
  });
}

shaadiScnz(2500000)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
