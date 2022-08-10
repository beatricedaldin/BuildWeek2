

class User{
    constructor(name, surname, email, password, dateOfBirth, region, rank, id){
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
        this.dateOfBirth = dateOfBirth
        this.region = region
        this.rank = rank
        this.id = id
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
export {User, Book, apiUrlB, apiUrlU, checkUserAccess}