import { Book } from './book.js';

export class EBook extends Book {
	_fileFormat;

	constructor(name, author, year, fileFormat) {
		super(name, author, year);

		this.fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		if (typeof value !== 'string' || value.length === 0) {
			throw new Error('File format must be a non empty string');
		}

		this._fileFormat = value;
	}

	static createFromBook(book, fileFormat) {
		return new EBook(book.name, book.author, book.year, fileFormat);
	}

	printInfo() {
		console.log(
			`Name of the book: "${this.name}", Author: ${this.author}, Year: ${this.year}, File format: "${this._fileFormat}"`,
		);
	}
}
