import { apiUrlB, Book } from "./class";

let params = new URLSearchParams(location.search);
let bookId = params.get('id')

fetch(apiUrlB+'/'+bookId)
.then(res => res.json())
.then(book => {
    
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let year = document.querySelector('#year').value
    let review = document.querySelector('#review').value
    let sharedBy = document.querySelector('#sharedBy').value
    let availability = document.querySelector('#availability')
    let valueA = availability.options[availability.selectedIndex].text; 

   
    title = book.title
    author = book.author
    year = book.year
    review = book.review
    sharedBy = book.sharedBy
    valueA = book.availability
})

let upBtn = document.querySelector('#update');

upBtn.addEventListener('click',function(e){
    e.preventDefault();

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let year = document.querySelector('#year').value
    let review = document.querySelector('#review').value
    let sharedBy = document.querySelector('#sharedBy').value
    let availability = document.querySelector('#availability')
    var valueA = availability.options[availability.selectedIndex].text;

    let book = new Book(title, author, year, review, sharedBy, valueA)

    let options = {
        method: 'PUT',
        body: JSON.stringify(book),
        headers:{
            "content-type":"application/json"
        }
    }
    
    fetch(apiUrlB+'/'+bookId,options)
    .then(res => res.json())
    .then(book => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Book updated',
            text:`The book ${book.title} has just been updated`,
            showConfirmButton: false,
            timer: 3000
        })
    })
})



let goBackBtn = document.querySelector('#goBack')
goBackBtn.addEventListener('click', function(){
    location.href = 'index.html'
})