/*import {User, Book, apiUrlB, apiUrlU} from './class.js'*/

const apiUrlU = "http://localhost:3000/users"
const apiUrlB = "http://localhost:3000/books"

fetch(apiUrlU)
.then(res => res.json())
.then(users => {
    
    let addUser = document.querySelector('#addUser')
    addUser.addEventListener('click', function(){
        location.href = 'createUser.html'
    })

})


fetch(apiUrlB)
.then(res => res.json())
.then(books => {
    
    let addBook = document.querySelector('#addBook')
    addBook.addEventListener('click', function(){
        location.href = 'createBook.html'
    })

})
