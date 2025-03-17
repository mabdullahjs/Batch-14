// console.log("hello world");

// function greetUser(username) {
//   return `hello ${username}`;
// }
// console.log(greetUser("abdullah"));

// console.log(this);
// const greetUser = (username) => {
//   return `hello ${username}`;
// };

// const greetUser = username => {
//   return `hello ${username}`;
// };

// difference between arrow function and normal function

// const greetUser = (username) => `hello ${username}`;
// console.log(greetUser("usman"));

// callback
// higher order function

// const fruits = ["apple", "banaana", "orange", "watermelon", "guava", "mango"];

const category = [
  "Electronics",
  "Footwear",
  "Home Appliances",
  "Stationery",
  "Furniture",
  "Fitness",
  "Kitchen Appliances",
];

const products = [
  // Electronics
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    brand: "Logitech",
  },
  {
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "LED Monitor",
    price: 129.99,
    category: "Electronics",
    brand: "Dell",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
    brand: "JBL",
  },
  {
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    brand: "Apple",
  },

  // Footwear
  {
    name: "Running Shoes",
    price: 59.99,
    category: "Footwear",
    brand: "Nike",
  },
  {
    name: "Sneakers",
    price: 75.99,
    category: "Footwear",
    brand: "Adidas",
  },
  {
    name: "Sandals",
    price: 25.99,
    category: "Footwear",
    brand: "Teva",
  },
  {
    name: "Formal Shoes",
    price: 120.0,
    category: "Footwear",
    brand: "Clarks",
  },
  {
    name: "Boots",
    price: 150.0,
    category: "Footwear",
    brand: "Timberland",
  },

  // Home Appliances
  {
    name: "Blender",
    price: 34.99,
    category: "Home Appliances",
    brand: "Oster",
  },
  {
    name: "Microwave Oven",
    price: 99.99,
    category: "Home Appliances",
    brand: "Panasonic",
  },
  {
    name: "Air Conditioner",
    price: 299.99,
    category: "Home Appliances",
    brand: "LG",
  },
  {
    name: "Vacuum Cleaner",
    price: 149.99,
    category: "Home Appliances",
    brand: "Dyson",
  },
  {
    name: "Toaster",
    price: 29.99,
    category: "Home Appliances",
    brand: "Breville",
  },

  // Stationery
  {
    name: "Notebook",
    price: 3.99,
    category: "Stationery",
    brand: "Moleskine",
  },
  {
    name: "Pen Set",
    price: 12.99,
    category: "Stationery",
    brand: "Parker",
  },
  {
    name: "Highlighters",
    price: 5.99,
    category: "Stationery",
    brand: "Sharpie",
  },
  {
    name: "Stapler",
    price: 7.99,
    category: "Stationery",
    brand: "Swingline",
  },
  {
    name: "Planner",
    price: 14.99,
    category: "Stationery",
    brand: "Erin Condren",
  },

  // Furniture
  {
    name: "Desk Chair",
    price: 89.99,
    category: "Furniture",
    brand: "Ikea",
  },
  {
    name: "Coffee Table",
    price: 129.99,
    category: "Furniture",
    brand: "West Elm",
  },
  {
    name: "Sofa",
    price: 499.99,
    category: "Furniture",
    brand: "Ashley Furniture",
  },
  {
    name: "Bookshelf",
    price: 79.99,
    category: "Furniture",
    brand: "Sauder",
  },
  {
    name: "Dining Table",
    price: 399.99,
    category: "Furniture",
    brand: "Pottery Barn",
  },

  // Fitness
  {
    name: "Yoga Mat",
    price: 19.99,
    category: "Fitness",
    brand: "Gaiam",
  },
  {
    name: "Dumbbells",
    price: 49.99,
    category: "Fitness",
    brand: "Bowflex",
  },
  {
    name: "Treadmill",
    price: 699.99,
    category: "Fitness",
    brand: "NordicTrack",
  },
  {
    name: "Resistance Bands",
    price: 14.99,
    category: "Fitness",
    brand: "Fit Simplify",
  },
  {
    name: "Exercise Bike",
    price: 299.99,
    category: "Fitness",
    brand: "Peloton",
  },

  // Kitchen Appliances
  {
    name: "Coffee Maker",
    price: 49.99,
    category: "Kitchen Appliances",
    brand: "Keurig",
  },
  {
    name: "Air Fryer",
    price: 89.99,
    category: "Kitchen Appliances",
    brand: "Ninja",
  },
  {
    name: "Stand Mixer",
    price: 199.99,
    category: "Kitchen Appliances",
    brand: "KitchenAid",
  },
  {
    name: "Refrigerator",
    price: 799.99,
    category: "Kitchen Appliances",
    brand: "Whirlpool",
  },
  {
    name: "Dishwasher",
    price: 399.99,
    category: "Kitchen Appliances",
    brand: "Bosch",
  },
];

// foreach
// map
// filter
// reduce

// products.forEach(function (item) {
//   console.log(item);
// });

// fruits.forEach(function (item) {
//   console.log(item);
// });

// const iteratedArr = fruits.forEach((item) => {
//   //   console.log(item);
//   return item;
// });

// const iteratedArr2 = fruits.map((item) => {
//   //   console.log(item);
//   return item + " modified";
// });

// console.log("foreach ", iteratedArr);
// console.log("map ", iteratedArr2);

// const num = [1, 2, 3, 4];

// const sum = num.reduce((acc, currentVal) => {
//   return acc + currentVal;
// }, 10);

// console.log(sum);

// const filteredNum = num.filter((item) => {
//   return item < 5;
// });

// console.log(filteredProduct);

// const filteredProduct = products.filter((item) => {
//   return item.category === "Fitness";
// });

// console.log(filteredProduct);

const btnContainer = document.querySelector("#btn-container");
const div = document.querySelector("#products");

category.map((item, index) => {
  btnContainer.innerHTML += `<button onclick="filteredProduct(${index})" class="btn btn-primary">${item}</button>`;
});

products.map((item) => {
  div.innerHTML += ` <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${item.category}</h6>
      <p class="card-text">Rs: ${item.price}</p>
    </div>
  </div>`;
});

function filteredProduct(index) {
  console.log(category[index]);
  const filPro = products.filter((item) => item.category === category[index]);
  console.log(filPro);
}

const totalPrice = products.reduce((acc, cVal) => {
  return acc + cVal.price;
}, 0);

console.log(totalPrice);
