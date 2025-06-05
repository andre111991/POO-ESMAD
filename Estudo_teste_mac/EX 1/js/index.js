import { paisesLista } from './init.js';
let contadorCliques=0;



// carregar array de países através do init.js
function initPaises() {
    const paisesLocalStorage = localStorage.getItem('paises')

    if (paisesLocalStorage){
        return JSON.parse(paisesLocalStorage);
    }else{
        localStorage.setItem('paises', JSON.stringify(paisesLista));
        return paisesLista;
    }
}

// Sortear o pais a adivinhar e converter para maiúsculas 
function sortearPais(){
    const paises = initPaises();
    const indice = Math.floor(Math.random() * paises.length);
    const paisSorteado = paises[indice].toUpperCase();
    return paisSorteado;
}

const paisSorteado = sortearPais();
// Código associado ao clique em cada célula

const celula = document.querySelectorAll('#table1 td')

celulas.forEach(celula => {
    celula.addEventListener('click', function () {
        contadorCliques++;
        const numero = parseInt(celula.textContent);

        if (numero) {
            const indice = numero - 1;

            // Verifica se o índice está dentro do limite do país sorteado
            if (indice >= 0 && indice < paisesLista.length) {
                celula.textContent = paisesLista[indice].toUpperCase();

                // Verifica se a célula já foi clicada
                if (celula.textContent === paisesLista[indice].toUpperCase()) {
                    alert("Já clicou nesta célula!");
                }
            }
        }
    });
});

bttAdivinhar = document.getElementById('btnAdivinhar');

bttAdivinhar.addEventListener('click', function() {
    palpite = prompt("Indique o seu palpite?");

    if(palpite.toUpperCase() === paisSorteado) {
        alert("Parabéns! Acertou no pais em "+ contadorCliques + " cliques!");
    }else{
        alert("Errou, não é esse o país")
    }
});



const valoresIniciais = Array.from(celulas).map(celula => celula.textContent);
const btnReiniciar = document.getElementById('btnInicio');
btnReiniciar.addEventListener('click', function () {
    contadorCliques = 0;

    // Sorteia um novo país
    paisSorteado = sortearPais();

    // Reinicia o estado da tabela
    const celulas = document.querySelectorAll('#table1 td');
    celulas.forEach(celula => {
        celula.textContent = valoresIniciais[index];
    });
});
