const myLibrary = [];

// Constructor Function.
function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}

// Add New Object to array.
function addBookToLibrary(Title, Author, Pages, Read) {
  const book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayOnPage()
}

//Function making div with class of card and display on web.
function displayOnPage() {
  const books = document.querySelector('.books');
  //Loop over array and making div card for each item inside
  myLibrary.forEach( myLibrary => {
    const card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);

    for (const key in myLibrary) {
      const para = document.createElement('p');
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
  myLibrary.pop('card')
}
// Event listener to fire submit button.
const submitBtn = document.querySelector('.submit-to-library');
submitBtn.addEventListener('click', () => {
  let Title = document.querySelector('.title').value;
  let Author = document.querySelector('.author').value;
  let Pages = document.querySelector('.pages').value;
  let Read = document.querySelector('.read').value;

  if ((Title === '') || (Author === '') || (Pages === '') || (Read === '')) {
     document.querySelector('.error').style.display = 'block';
     return;
   } else {
    document.querySelector('.error').style.display = 'none';
   }
  addBookToLibrary(Title, Author, Pages, Read);
  document.querySelector('.add-book').reset();
});
// Event listener to clear inputs.
const resetBtn = document.querySelector('.reset-form');
resetBtn.addEventListener('click', () => {
  document.querySelector('.add-book').reset();
})