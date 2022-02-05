class Book {
    constructor(title, pages, isbn) {
      this.title = title;
      this.pages = pages;
      this.isbn = isbn;
    }
     
    printIsbn() {
        console.log(this.isbn);
    }
}
   
class JsBook extends Book {
    constructor(title, pages, isbn) {
        super(title, pages, isbn);
        this._language = 'JavaScript';
    }

    get language() {
        return this._language;
    }

    set language(value) {
        this._language = value;
    }

    printLang() {
        console.log(this.language);
    }

}
   
const b = new Book('abc', 10, '12345');
b.printIsbn();

const c = new JsBook('xxx', 1000, '54321');
c.printIsbn();
c.printLang();
c.language = 'LLLLL';
c.printLang();

console.log(3 * 3);
console.log(3 ** 3);