const books = [
  {
    id: 1,
    title: "Mystery of the Lost Island",
    genre: "mystery",
    price: 12.99,
    image: "./Assets/1.jpeg",
    author: "A. Christie",
    description: "An intriguing mystery set on a remote island.",
  },
  {
    id: 2,
    title: "Journey Through Fantasy",
    genre: "fantasy",
    price: 15.49,
    image: "./Assets/2.jpeg",
    author: "J.R. Tolkien",
    description: "An epic fantasy adventure through magical lands.",
  },
  {
    id: 3,
    title: "Modern Fiction",
    genre: "fiction",
    price: 10.99,
    image: "./Assets/3.jpeg",
    author: "J.D. Salinger",
    description: "A contemporary tale of life and discovery.",
  },
  {
    id: 4,
    title: "Deep Dive Non-Fiction",
    genre: "nonfiction",
    price: 13.99,
    image: "./Assets/4.jpeg",
    author: "M. Gladwell",
    description: "A deep dive into the world of facts and figures.",
  },
  {
    id: 5,
    title: "The Great Adventure",
    genre: "mystery",
    price: 9.99,
    image: "./Assets/6.jpeg",
    author: "S. Holmes",
    description: "Follow the clues in this thrilling mystery.",
  },
];

function showBooks(bookList = books) {
  document.getElementById("storeContainer").innerHTML = bookList
    .map(
      (book) => `
        <div class="sigle-book">
            <img src="${book.image}">
            <h2>${book.title}</h2>
            <h3>RS.${book.price}</h3>
            <div>
                <button class="cart-btn">Add to Card</button>
                <button class="buy-btn">Buy Now</button>
            </div>
        </div>
    `
    )
    // .join("");
}
showBooks();
