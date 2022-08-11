import { User, Book, apiUrlB, apiUrlU } from './class.js'

window.onload=function(){


fetch(apiUrlU)
    .then(res => res.json())
    .then(users => {
        let userSection = document.querySelector('#users')

        for (let user of users) {
            user = new User(user.name, user.surname, user.dateOfBirth, user.region, user.rank, user.id)
            let userName = document.createElement('a')
            userName.innerHTML = user.name + '' + user.surname
            userSection.append(userName)
            userName.href = 'user.html?id=' + user.id

            if (user.rank == 'Elementary') {
                userName.style.color = 'green'
            } else if (user.rank == 'Intermediate') {
                userName.style.color = 'blue'
            } else if (user.rank == 'Advanced') {
                userName.style.color = 'red'
            }

        }

    })


    fetch(apiUrlB)
    .then(res => res.json())
    .then(books => {
        let bookSection = document.querySelector('#books')
        

        for (let book of books) {
            book = new Book(book.title, book.author, book.year, book.review, book.sharedBy, book.availability, book.id)
            
            let bookTitle = document.createElement('a')
            let bookPopUp = document.querySelector('#bookPopUp')
            bookTitle.innerHTML = book.title
            
            let upBtn = document.createElement('a')
            upBtn.classList.add('aBtn')
            upBtn.innerHTML = 'Update it'
            upBtn.href = 'updateBook.html?id=' + book.id
            let delBtn = document.createElement('button')
                delBtn.innerHTML = 'Delete it'
                delBtn.addEventListener('click', function(){
                    deleteBook(book.id, bookTitle, delBtn, upBtn)
                })
                bookSection.append(bookTitle, upBtn, delBtn)  
            bookTitle.addEventListener('click', function () {
                console.log(book.id)
                console.log(book)
                

                let titleB = document.querySelector('#titleB')
                titleB.innerHTML = book.title
                let authorB = document.querySelector('#authorB')
                authorB.innerHTML = book.author
                let yearB = document.querySelector('#yearB')
                yearB.innerHTML = book.year
                let avB = document.querySelector('#avB')
                avB.innerHTML = book.availability
                let revB = document.querySelector('#revB')
                revB.innerHTML = book.review
                
                let pb = document.querySelectorAll('.pb')
                for (let p of pb){
                if (book.availability == 'No') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Someone got it first!',
                    })
                    
                        p.style.color = 'lightgrey'
                } else {
                        p.style.color = 'black' 
                }
                }
            
            })
    
        }   
    })


let addUser = document.querySelector('#addUser')
addUser.addEventListener('click', function () {
    location.href = 'createUser.html'
})

let addBook = document.querySelector('#addBook')
addBook.addEventListener('click', function () {
    location.href = 'createBook.html'

})

}
