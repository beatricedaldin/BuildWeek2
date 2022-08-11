import { Book, apiUrlB} from './class.js'

let goBackBtn = document.querySelector('#goBack')
goBackBtn.addEventListener('click', function(){
    location.href = 'index.html'
})


let submitBook = document.querySelector('#submit')
submitBook.addEventListener('click', function(e){
    e.preventDefault()

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let year = document.querySelector('#year').value
    let review = document.querySelector('#review').value
    let sharedBy = document.querySelector('#sharedBy').value
    let availability = document.querySelector('#availability').value
    //var valueA = availability.options[availability.selectedIndex].text;

    let book = new Book(title, author, year, review, sharedBy, availability)
    console.log(book)

    let options = {
        method: 'POST',
        body: JSON.stringify(book),
        headers:{
            "content-type":"application/json"
        }
    }
    
    fetch(apiUrlB, options)
    .then(res => res.json())
    .then(res => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'A new book just popped up!',
            text:`The book ${res.title} has just been placed on the shelf`,
            showConfirmButton: false,
            timer: 3000
        })
        document.querySelector('#myForm').reset();

    })

})

