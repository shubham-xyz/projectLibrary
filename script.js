function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

myLibrary = []

function addBookToLibrary(title, author, pages, isRead){
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
}

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);

console.log(myLibrary);  // Check the console to see the books array
