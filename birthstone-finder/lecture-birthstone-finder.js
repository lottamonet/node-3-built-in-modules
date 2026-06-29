/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- */
//import the birthstone data from a JSON file
import fs from "fs/promises";

//month input from command line arguments
const month = process.argv[2];

//function to get the birthstone for a given month  
async function getBirthstone(month) {
  try {
    //read the birthstone data from the JSON file
    const data = await fs.readFile("data.json", "utf-8");
    const birthstones = JSON.parse(data);

    //check if the month is valid
    if (birthstones[month]) {
      return `The birthstone for ${month} is ${birthstones[month]}.`;
    } else {
      return "Invalid month. Please enter a valid month.";
    }
  } catch (error) {
    console.error("Error reading birthstone data:", error);
  }
}

//call the function and log the result
getBirthstone(month).then(console.log);