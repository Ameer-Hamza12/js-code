// filter map and reduce methods


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newnumbers = numbers.filter((num) => num > 2);

//console.log(newnumbers);

// Books array for filtering practice
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, pages: 180, genre: "Fiction", available: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, pages: 281, genre: "Fiction", available: false },
    { id: 3, title: "1984", author: "George Orwell", year: 1949, pages: 328, genre: "Science Fiction", available: true },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, pages: 432, genre: "Romance", available: true },
    { id: 5, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, pages: 310, genre: "Fantasy", available: false },
    { id: 6, title: "Dune", author: "Frank Herbert", year: 1965, pages: 688, genre: "Science Fiction", available: true },
    { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, pages: 277, genre: "Fiction", available: true },
    { id: 8, title: "Sapiens", author: "Yuval Noah Harari", year: 2011, pages: 498, genre: "Non-Fiction", available: false },
    { id: 9, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, pages: 1178, genre: "Fantasy", available: true },
    { id: 10, title: "Atomic Habits", author: "James Clear", year: 2018, pages: 320, genre: "Non-Fiction", available: true }
];

// Example filters to practice with:
// Filter by genre
//const sciFiBooks = books.filter ((book) => book.genre === "Science Fiction");
//console.log("Science Fiction books:", sciFiBooks);


// Filter by available books
//const availableBooks = books.filter((book) => book.available);
//console.log("Available books:", availableBooks);


// Filter by pages (greater than 200 pages)
// const longBooks = books.filter ((book) => book.pages > 200);
// console.log("Books with more than 200 pages:", longBooks);


// Filter by published before 2000
const oldbooks  = books.filter( (book) => book.year > 1950);
console.log("Books published after 1950:", oldbooks);

// Filter by year (published after 1950)
// const modernBooks = books.filter((book) => book.year > 1950);
// console.log("Books published after 1950:", modernBooks);