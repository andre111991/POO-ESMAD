// view.js

// Complete a interação com a UI aqui
const botaoADD = document.getElementById("add-button");
botaoADD.addEventListener("click", function() {
    const resultado = Library.addBook(
        document.getElementById("book-title").value,
        document.getElementById("book-year").value
    );

    if (resultado) {
        alert(resultado);
        renderBooks();
    } else {
        alert("Erro ao adicionar livro.");
    }
});

function renderBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Limpa a lista antes de renderizar

    Library.books.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.titulo} (${book.anoLancamento}) - ID: ${book.identificaçao}`;
        bookList.appendChild(listItem);
    });
}

const botaoReserve = document.getElementById("reserve-button");
botaoReserve.addEventListener("click", function() {
    const id = Number(document.getElementById("book-id").value);
    const livro = Library.getBookByID(id);
    if (!livro) {
        alert("Nenhum livro encontrado com este ID.");
        return;
    } else {
        livro.reserve();
        alert("Livro reservado com sucesso!");
        renderBooks();
    }
});

const botaoDeliver = document.getElementById("deliver-button");
botaoDeliver.addEventListener("click", function() {
    const id = Number(document.getElementById("book-id").value);
    const livro = Library.getBookByID(id);
    if (!livro) {
        alert("Nenhum livro encontrado com este ID.");
        return;
    } else {
        alert(livro.deliver());
        renderBooks();
    }
});