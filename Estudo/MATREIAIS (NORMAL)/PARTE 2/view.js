// view.js

// Complete a interação com a UI aqui
botaoADD = document.getElementById("add-button");
botaoADD.addEventListener("click", function() {
    resultado = Library.addbook(
        document.getElementById("book-title").value,
        document.getElementById("book-year").value
    );

    if(resultado) {
        renderBooks();
    }else {
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

botaoReserve = document.getElementById("reserve-button");
botaoReserve.addEventListener("click", function() {
    
    const id=document.getElementById("book-id").value
    const livro = Library.getBookByID(id);
    if (!livro) {
        alert("Livro não encontrado com este ID.");
        return;
    }else{
        book.reserve();
        renderBooks();
    }
});


botaoDeliver = document.getElementById("deliver-button");
botaoDeliver.addEventListener("click", function() {
    const id=document.getElementById("book-id").value
    const livro = Library.getBookByID(id);
    if (!livro) {
        alert("Livro não encontrado com este ID.");
        return;
    }else{
        alert("Este Livro nao esta reservado");
        livro.deliver();
        renderBooks();
    }
});

