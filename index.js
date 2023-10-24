require("dotenv/config"); // filepath
//import "./node_modules/dotenv/config"; // husk type modules

console.log(process.env.API_KEY);
console.log(`This is the key: ${process.env.API_KEY}`);

console.log(Number(process.env.SECRET) === 88 ? true : false);
