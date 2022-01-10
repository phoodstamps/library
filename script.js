let myLibrary = [];

$(document).ready(function(){
  $("#submitBook").click(function(){
    addBookToLibrary($("#inputTitle").val(),$("#inputAuthor").val(),$("#inputPages").val(),false);

    //TODO Empty all fields in modal
  });
});

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// It's best to define functions on the prototype of the Book object
Book.prototype.getIsRead = function () {
  return !this.isRead ? 'not read yet' : 'read book';
}

Book.prototype.info = function() {
  return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.getIsRead();
}

// Takes book object and adds to myLibary array
function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookIsRead) {
  myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookIsRead));
  //console.log(myLibrary);
}

function getBooks() {
  
}