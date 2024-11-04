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
    displayBooks()
}

function displayBooks(){
    const libraryContainer = document.getElementById('library-container')
    libraryContainer.innerHTML = ''

    myLibrary.forEach((book, index)=>{
        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card')

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.isRead ? 'Read' : 'Not Read'}</p>
            <button class="remove-book-btn" data-index="${index}">Remove</button>
            <button class="toggle-read-btn" data-index="${index}">${book.isRead ? 'Mark as Unread' : 'Mark as Read'}</button>
        `;
    libraryContainer.appendChild(bookCard)

    })
    addEventListenersToButtons();
}

function addEventListenersToButtons(){
    const removeButton = document.querySelectorAll('.remove-book-btn')
    const toggleReadButton = document.querySelectorAll('.toggle-read-btn')

    removeButton.forEach(button => {
        button.addEventListener('click', ()=>{
            const index = button.getAttribute('data-index');

            myLibrary.splice(index, 1)
            displayBooks()
        })
    })
    toggleReadButton.forEach(button =>{
        button.addEventListener('click',()=>{
            // const index = button.getAttribute('data-index');
            const index = parseInt(button.getAttribute('data-index'), 10); // Convert index to integer
            if (myLibrary[index] !== undefined) { // Check if the book exists
            myLibrary[index].toggleReadStatus();
            displayBooks()
            }
        })
    })
}

Book.prototype.toggleReadStatus = function(){
    this.isRead = !this.isRead
}

const newBookBtn = document.getElementById('new-book-btn');
const newBookForm = document.getElementById('new-book-form');

newBookBtn.addEventListener('click', () => {
  newBookForm.style.display = newBookForm.style.display === 'none' ? 'block' : 'none';
});

newBookForm.addEventListener('submit',(event)=>{
    event.preventDefault()

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked

    addBookToLibrary(title, author, pages, isRead)

    newBookForm.reset()
    newBookForm.style.display = 'none'
})