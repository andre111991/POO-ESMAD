// Importa modulo dados.js
import * as data from "./init.js";


// declara array de paises, que vai conter todos os objetos da classe pais
let paises = []

// invocar função data (módulo init.js) para preencher array paises com os objetos criados no init.js

paises = data.init();


// Código asosciado ao Submit do formulário

botaoSubmit = document.getElementsByClassName("btn btn-outline-warning btn-block")
botaoSubmit.addeventListener("click", function () {

    const id = document.getElementById("txtID")
    const nome = document.getElementById("txtNomePais")

    const paisExistente = paises.find(pais => pais.nome.toLowerCase() === nome.toLowerCase());
    
    if (paisExistente) {
        alert("Erro: Este país já existe no array!");
        return;
    }

    const novoPais = new data.pais(id,nome)

    paises.push(novoPais);

    localStorage.setItem("paises", JSON.stringify(paises));
})



