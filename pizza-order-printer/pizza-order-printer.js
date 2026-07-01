/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

//import the pizza order data from a JSON file
import fs from "fs/promises";

//get the pizza order from command line arguments
 const command = process.argv[2];
const orderNumber = process.argv[3];

//function to get the pizza order data from the JSON file
async function getPizzaOrder() {
  try {
    const data = await fs.readFile("data.json", "utf-8");
    const pizzaOrders = JSON.parse(data);
    return pizzaOrders;
  } catch (error) {
    console.error("Error reading pizza order data:", error);
  }
}

//function to print the pizza order
async function printPizzaOrder(orderNumber) {
  const pizzaOrders = await getPizzaOrder();
  if (command === "getAllOrders") {
    pizzaOrders.forEach((order) => {
        console.log(order);
    });
  } else if (command === `getOneOrder`) {
    const index = Number(orderNumber);

    if (pizzaOrders[index]) {
        console.log(pizzaOrders[index]);
    } else {
        console.log("Order not found. Please enter a valid order number.");
    }
  } else {
    console.log("Invalid command. Please use 'getAllOrders' or 'getOneOrder <orderNumber>'.");
  }
}

//call the function to print the pizza order
printPizzaOrder(orderNumber)
