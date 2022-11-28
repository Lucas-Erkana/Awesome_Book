const booksArr = [
  {
    Title : "lorem ipsum",
    Author : "Testeroo Testyy" 
  },
  {
    Title : "Second Book",
    Author : "Testeroo Testyy" 
  }
]




booksArr.map((item) => document
  .getElementById('books').innerHTML += `
  <section class="books-wrapper">
  <table class="book-container"> 
  <tr>
    <td>
     ${item.Title}
       </td>
  </tr>

  <tr>
    <td>${item.Author}</td>    
  </tr>
</table>
<input type="button" value="Remove">
<hr>
  </section>`);


  function addBooks() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = document.querySelector('.title').value
    const author = document.querySelector('.author').value
    console.log(title,author)
  
    booksArr.push({title,author})
      console.log(booksArr)
    });
    
  }
  console.log(booksArr)

  
 