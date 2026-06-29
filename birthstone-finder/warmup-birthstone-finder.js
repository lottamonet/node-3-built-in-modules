/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};

// get the month from command line arguments
month = process.argv[2];

// function to get the birthstone for a given month
function getBirthstone(month) {
  // check if the month is valid
  if (birthstones[month]) {
    return `The birthstone for ${month} is ${birthstones[month]}.`;
  } else {
    return "Invalid month. Please enter a valid month.";
  }
}

// call the function and log the result
console.log(getBirthstone(month));