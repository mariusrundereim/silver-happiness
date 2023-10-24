require("dotenv/config"); // filepath
//import "./node_modules/dotenv/config"; // husk type modules

console.log(process.env.API_KEY);
console.log(`This is the key: ${process.env.API_KEY}`);

console.log(Number(process.env.SECRET) === 88 ? true : false);

const apiNumber = Number(process.env.SECRET);

const secretNum = document.querySelector("#secretNum");

secretNum.textContent = apiNumber;
console.log(secretNum);
