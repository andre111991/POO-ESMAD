let contadorCliques = 0;

// Resolução alinea a)

function CriarTabela(){

    const celula = document.querySelectorAll("#table1 td");

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

   celula.forEach(celula => {

        celula.addEventListener("click", function() {
            this.textContent = randomInt(1, 9);
            contadorCliques++;
            verificarSoma();
        }
        );  
}    );
}


// Resolução alinea b)
function verificarSoma() {

    const celula = document.querySelectorAll("#table1 td");
    let soma = 0;

    celula.forEach(td => {
        soma += parseInt(td.textContent) || 0;
    });
    if ( soma == 35) {
        celula.forEach(td => {
            td.style.backgroundColor = "cyan"; // Mudar a cor de fundo para ciano
        });
        alert("Parabéns! Atingiu os 35 pontos. com " + contadorCliques + " cliques.");
    }
}

// Resolução alinea c)

function reiniciarJogo() {
    const celula = document.querySelectorAll("#table1 td");

    celula.forEach(td => {
        td.textContent = "0";
        td.style.backgroundColor = ""; // Limpar a cor de fundo
    });
    contadorCliques = 0; // Reiniciar o contador de cliques
}


window.onload = function() {
    CriarTabela();
    const btnInicio = document.getElementById("btnInicio");
    btnInicio.addEventListener("click", reiniciarJogo);
}