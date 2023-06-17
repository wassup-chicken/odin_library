let myLibrary = [];

function Book (title, author, page) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;
}

Book.prototype.read = function () {
    this.read = true;
} 

function addBookToLibrary(title, author, pages) {
  // do stuff here
  const x = new Book(title, author, pages);

  myLibrary.push(x);

  return x;
}

const element = document.querySelector('.submit');

const inputs = document.querySelectorAll('input');


element.addEventListener('click', (e) => {

  const container = document.querySelector('.projects');

  const content = document.createElement('div');
  content.classList.add('card');
  container.appendChild(content);

  const close = document.createElement('span');
  close.classList.add('close');
  close.textContent = "\u00D7"
  
  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = book_title.value;
  const author = document.createElement('p');
  author.textContent = book_author.value;
  author.classList.add('author');
  const pages = document.createElement('p');
  pages.textContent = book_page.value;
  pages.classList.add('pages');
  const read = document.createElement('p');
  read.textContent = book_read.value;
  read.classList.add('read');

  content.appendChild(close);
  content.appendChild(title);
  content.appendChild(author);
  content.appendChild(pages);
  content.appendChild(read);


  let y = addBookToLibrary(book_title.value, book_author.value, book_page.value, book_read.value);

  myLibrary.push(y);

  e.preventDefault();
});


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

const submit = document.getElementsByClassName('submit')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

submit.onclick = () => {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
