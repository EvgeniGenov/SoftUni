function favouritBook(input) {
    let favouritBook = input[0];
    let index = 1;
    let books = input[index];

    while (books !== "No More Books") {
        if (books === favouritBook) {

            break;
        }
        index++;
        books = input[index];
    }
    if (books === 'No More Books') {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
favouritBook(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
])