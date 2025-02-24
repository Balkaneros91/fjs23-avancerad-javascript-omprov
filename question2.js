// 2.1 (1p) Gör om följande funktion till en arrow-funktion
const getRandomColor1 = function () {
  const colors = ["red", "green", "blue", "yellow", "pink"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

// Din kod här:
const getRandomColor = () => {
  const colors = ["red", "green", "blue", "yellow", "pink"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

//2.2 (1p) Gör om följande funktion till en arrow-funktion:
function isGreaterThanTen(number) {
  return number > 10;
}

// Din kod här:

isGreaterThanTen = (num) => num > 10;

//2.3 (1p) Gör om följande funktion till en arrow-funktion:
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers1 = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Din kod här:

const evenNumbers = numbers.filter((number) => number % 2 === 0);

// 2.4 (2p) Skriv om följande funktion (och callback-funktionen) till arrow-funktioner:
function greetLater1() {
  setTimeout(function () {
    console.log("Hello there!");
  }, 3000);
}

// Din kod här:
function greetLater() {
  setTimeout(() => console.log("Hello there!"), 3000);
}

// Test
console.log(getRandomColor()); // Ska logga en slumpmässig färg
console.log(isGreaterThanTen(15)); // Ska logga true
console.log(evenNumbers); // Ska logga alla jämna tal i listan
greetLater(); // Ska logga "Hello there!" efter 3 sekunder
