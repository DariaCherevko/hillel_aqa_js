export class Book {
    _name;
    _author;
    _year;

    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("Name must be a non empty string")
        }
        this._name = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value.length === 0) {
            throw new Error("Author must be a non empty string")
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error("Year must be a positive number")
        }
        this._year = value;
    }

    static findOldest(books) {
        if (books.length == 0) {
            throw new Error("The array is empty");
        }

        let oldest = books[0];
        for (const book of books) {
            if (book.year < oldest.year) {
                oldest = book;
            }
        }
        
        return oldest;
    }

    printInfo() {
        console.log(`Name of the book: "${this._name}", Author: ${this._author}, Year: ${this._year}`);
    }

}


