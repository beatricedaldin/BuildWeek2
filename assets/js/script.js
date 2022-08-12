import { User, Book, apiUrlB, apiUrlU, isUserAdmin } from './class.js'




fetch(apiUrlU)
    .then(res => res.json())
    .then(users => {
        let userSection = document.querySelector('.menu-items')

        for (let user of users) {
            user = new User(user.name, user.surname, user.email, user.password, user.dateOfBirth, user.region, user.rank, user.id)
            let userli = document.createElement('li')
            userli.classList.add('questoSi')
            let userName = document.createElement('a')
            userName.classList.add('userName')
            userName.innerHTML = user.name + '' + user.surname
            userName.href = 'profile.html?id=' + user.id
            userName.style.textDecoration = 'none'
            userName.style.color = 'black'
            let pointer = document.createElement('p')
            pointer.classList.add('round')

            userli.append(userName, pointer)
            userSection.append(userli)

            let dots = document.getElementsByClassName('round')

            for (let dot of dots) {
                const randomNum = Math.floor(Math.random() * 2) + 1
                console.log(randomNum)
                if (randomNum == 1) {
                    dot.style.backgroundColor = 'red'
                }
                if (randomNum == 2) {
                    dot.style.backgroundColor = 'green'
                }
            }

            // if (user.rank == 'Elementary') {
            //     userName.style.color = 'green'
            // } else if (user.rank == 'Intermediate') {
            //     userName.style.color = 'blue'
            // } else if (user.rank == 'Advanced') {
            //     userName.style.color = 'red'
            // }

        }

    })


fetch(apiUrlB)
    .then(res => res.json())
    .then(books => {
        let bookSection = document.querySelector('#books')


        for (let book of books) {
            book = new Book(book.title, book.author, book.year, book.review, book.sharedBy, book.availability, book.id)

            let bookTitle = document.createElement('a')
            bookTitle.classList.add('book-title')
            let bookPopUp = document.querySelector('#bookPopUp')
            bookTitle.innerHTML = book.title

            let upBtn = document.createElement('a')
            upBtn.classList.add('aBtn')
            upBtn.innerHTML = 'Update it'
            upBtn.addEventListener('click', function () {

                let adminCheck = isUserAdmin();
                if (adminCheck) {

                    upBtn.href = 'updateBook.html?id=' + book.id

                } else {


                    alert('Access Denied: admin only')

                }

            })
            
            let delBtn = document.createElement('button')
            delBtn.classList.add('delBtn')
            delBtn.innerHTML = 'Delete it'
           
            delBtn.addEventListener('click', function () {

                let adminCheck = isUserAdmin();

                if (adminCheck) {

                deleteBook(book.id, bookTitle, delBtn, upBtn)
                for (let p of pb) {
                    p.innerHTML = ''
                    
                }} else {

                    alert('Access Denied: admin only')

                }

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


                let show = document.querySelector("#bookPopUp")
                show.classList.add('show')
                for (let p of pb) {
                    if (book.availability == 'No') {

                        p.style.color = 'lightgrey'
                    } else {
                        p.style.color = 'black'
                    }
                }

                })
                bookTitle.addEventListener('dblclick', function (){
                    let show = document.querySelector("#bookPopUp")
                    show.classList.remove('show')
                })
            }
        })


    let logUser = document.querySelector('#logUser')
    logUser.addEventListener('click', function () {
        location.href = 'login.html'
    })

let addBook = document.querySelector('#addBook')
addBook.addEventListener('click', function () {
    location.href = 'createBook.html'

})


