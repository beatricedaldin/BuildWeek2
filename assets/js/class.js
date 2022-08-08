/*export {User, Book, apiUrlU, apiUrlB}*/

class User{
    constructor(name, surname, dateOfBirth, region, rank, id){
        this.name = name
        this.surname = surname
        this.dateOfBirth = dateOfBirth
        this.region = region
        this.rank = rank
        this.id = id
    }
}


class Book{
    constructor(title, author, year, review, sharedBy, id){
        this.title = title
        this.author = author
        this.year = year
        this.review = review
        this.sharedBy = sharedBy
        this.availability = true
        this.id = id

    }
}

const apiUrlU = "http://localhost:3000/users"
const apiUrlB = "http://localhost:3000/books"