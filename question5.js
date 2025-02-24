// 5. (2p) En lista med böcker och  priser
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter och returnerar det totala priset
// Använd reduce

const booksInCart = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", price: 15 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 12 },
  { title: "1984", author: "George Orwell", price: 10 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 18 },
  { title: "Moby Dick", author: "Herman Melville", price: 22 },
];

function calculateTotalBookPrice(cart) {
  // Din kod här
  return booksInCart.reduce(function (sum, price) {
    return sum + price.price;
  }, 0);
}

// Test
console.log(`$${calculateTotalBookPrice(booksInCart)}`); // Ska logga:  $77
