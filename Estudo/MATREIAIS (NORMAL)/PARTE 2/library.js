// library.js
// Complete a classe Library aqui

class book{

    constructor(identificaçao, titulo, anoLancamento, reservado) {
        this.identificaçao = identificaçao;
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
        this.reservado = reservado;
    }

    reserve(){
        this.reservado = true;
    }

    deliver(){
        if(this.reservado) {
            this.reservado = false;
            return "Livro entregue com sucesso!";
        }
        else {
            return "Livro esta reservado, não pode ser entregue."; 
        }  
        
    }
}

class Library {
    constructor() {
        this.books = [];
        this.nextID = 1;
    }

    addBook(titulo, anoLancamento) {
        const existe = this.books.some(
        livro => livro.titulo === titulo && livro.anoLancamento === anoLancamento
    );
    if (existe) {
        alert("Já existe esse livro na sua biblioteca.");
    }

        const newBook = new book(this.nextID++, titulo, anoLancamento, false);
        this.books.push(newBook);
        return `Livro adicionado com sucesso: ${newBook.titulo} (ID: ${newBook.identificaçao})`;
    }

    getBookByID(identificaçao) {
        const book = this.books.find(livro => livro.identificaçao === identificaçao);
        if (book) {
            return book;
        } else {
            return "Livro não encontrado.";
        }
    }
}
