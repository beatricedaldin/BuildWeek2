class Book{
    constructor(title, author, year, review, sharedBy,availability, id){
        this.title = title
        this.author = author
        this.year = year
        this.review = review
        this.sharedBy = sharedBy
        this.availability = availability
        this.id = id

    }
}

const apiUrlB = "http://localhost:3000/books"

let params = new URLSearchParams(location.search);
let bookId = params.get('id')

fetch(apiUrlB+'/'+bookId)
.then(res => res.json())
.then(book => {
    
    let title = document.querySelector('#title')
    let author = document.querySelector('#author')
    let year = document.querySelector('#year')
    let review = document.querySelector('#review')
    let sharedBy = document.querySelector('#sharedBy')
    let availability = document.querySelector('#availability')
    //let valueA = availability.options[availability.selectedIndex].text; 

   
    title.value = book.title
    author.value = book.author
    year.value = book.year
    review.value = book.review
    sharedBy.value = book.sharedBy
    availability.value = book.availability
    
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
    //var valueA = availability.options[availability.selectedIndex].text;

    let book = new Book(title, author, year, review, sharedBy, availability)

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