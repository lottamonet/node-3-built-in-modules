/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

//import the pizza order data from a JSON file
import fs from "fs/promises";

//get the pizza order from command line arguments
 const order = process.argv[2];

//get the pizza order data from the JSON file
async function getOneOrder() {
  try {
    const data = await fs.readFile("data.json", "utf-8");
    const order = JSON.parse(data);
    return order;
  } catch (error) {
    console.error("Error reading pizza order data:", error);
  }
}         

//function to print the pizza order
async function printPizzaOrder(order) {
  const pizzaOrder = await getPizzaOrder();
  if (pizzaOrder[order]) {
    console.log(`Your order: ${pizzaOrder[order]}`);
  } else {
    console.log("Invalid order. Please enter a valid order.");
  }
}

//call the function and log the result
order === `getOneOrder ${pizzaOrder[order]}` ? getOneOrder().then(console.log) : printPizzaOrder(order);     