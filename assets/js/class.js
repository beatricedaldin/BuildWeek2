

class User{
    constructor(name, surname, email, password, dateOfBirth, region, rank, id, role){
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
        this.dateOfBirth = dateOfBirth
        this.region = region
        this.rank = rank
        this.id = id
        this.role = 'user'
    }
}


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
const apiUrlU = "http://localhost:3000/users"

function checkUserAccess(){

    return localStorage.getItem('token') != null
    
}

// function getUserRole(){

//     let stringa = localStorage.getItem('user')

//     let user = JSON.parse(stringa)
    
//     return stringa ? user.rank : 'guest'
// }

// function isUserAdmin(){

//     let role = getUserRole()

//    return role == 'admin';

// }

// function checkUserRole(role){


//    return role == getUserRole();

// }

// checkUserRole('Advanced')

// if (isUserAdmin()) {



// } else {

//     let mostra = document.querySelector('#bookBtns')
//     mostra.remove()

// }

export {User, Book, apiUrlB, apiUrlU, checkUserAccess}