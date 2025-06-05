import pais from "./models/modelPaises";
// Importar a classe paises

let paises = []   // Arrays que vai conter objetos paises


export function init() {
    // CRIAR 3 instancias da classe pais e adicioná-las ao array paises

    const pais1 = new pais(1, "Portugal");
    const pais2 = new pais(1, "Colombia");
    const pais3 = new pais(1, "Vaticano");

    paises.push(pais1, pais2, pais3);

    return paises
}