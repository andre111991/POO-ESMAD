// Importa modulo data.js
import * as data from "./data.js";

let listUsers = [];
listUsers = data.init();

console.log(listUsers);

//1 - Listar todos os usuários do nivel pedido
let nivel = +prompt("Digite o nivel que deseja listar: ");

function listarNivel(nivel) {
  
    let lista_nivel = listUsers.filter(element => element.nivel == nivel);
    let texto = `Users no nível ${nivel}:`
    for(let element of lista_nivel) {
        texto += `
        ${jogador.nome}`;
    }
    alerta(texto);

}

//listarNivel(1);

//2

function somarPontos(nivel) {

    let lista_nivel = listUsers.filter(element => element.nivel == nivel);
    let total_pontos = lista_nivel.reduce((sum,element) => sum + element.pontos, 0); // reduce() é um método que reduz o array a um único valor. 0 é o valor inicial do acumulador
    alerta(`Total de pontos no nivel ${nivel}: ${total_pontos}`);
}
//somarPontos2(1);

//3

function verificarNivel(nivel){
    console.log(`Nivel ${nivel}:`, listUsers.some(element => element.nivel == nivel)); //some() verifica se algum elemento do array satisfaz a condição

}

//4
function pesquisarColecionaveis(colecionavel) {
    console.log(`Colecionavel ${objetoCol}:`,listUsers.some(element => element.colecionaveis.includes(objetoCol))); //includes() verifica se um array contém um determinado elemento
}

//5