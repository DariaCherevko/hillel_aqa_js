import { Book } from './book.js';
import { EBook } from './ebook.js';

const book1 = new Book('To kill a mockingbird', 'Happer Lee', 1960);
const book2 = new Book('Beloved', 'Toni Morrison', 1987);
const book3 = new Book('In cold blood', 'Truman Capote', 1965);
try {
	const book4 = new Book('Beloved', 1, '1987');
} catch (error) {
	console.log(error.message);
}

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log('--------');

const eBook1 = new EBook('The Great Gatsby', 'F.Scott Fitzgerald', 1925, '.pdf');
const eBook2 = new EBook('Madonna in a Fur Coat', 'Subahattin', 1943, '.doc');
const eBook3 = new EBook('One Hundred Years of Solitude', 'Gabriel Garcia', 1967, '.epub');
try {
	const eBook4 = new EBook('Beloved', 'Toni Morrison', 1987, 1);
} catch (error) {
	console.log(error.message);
}
try {
	const eBook5 = new EBook(1, 'Toni Morrison', 1987, '.epub');
} catch (error) {
	console.log(error.message);
}

eBook1.printInfo();
eBook2.printInfo();
eBook3.printInfo();

console.log('--------');

const oldestBook = Book.findOldest([book1, book2, book3, eBook1, eBook2, eBook3]);
oldestBook.printInfo();

console.log('--------');

const ebookFromBook = EBook.createFromBook(book1, '.pdf');
ebookFromBook.printInfo();
