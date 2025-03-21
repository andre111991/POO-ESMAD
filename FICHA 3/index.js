//1 

let nome_produto = prompt("Indique o nome do produto:");
let cat_produto = prompt("Indique a categoria do produto:");


const compra = { 
    nome_produto, 
    cat_produto,
}
// 3 e 4 
compra.preco_base = "2.10"   // Adicionar uma propriedade fora do objeto
compra.tx_IVA = "0.23"


//5
compra.preco_base = "2.50"  // Alterar o valor de uma propriedade

console.log(compra)


//6
compra.preco_final=function(){
    return this.preco_final = this.preco_base * this.tx_IVA;
}

console.log(compra.preco_final())  // Mostrar o valor final do produto

 //7
compra.dados_encomenda = {              // Adicionar um objeto dentro de um objeto
    data_encomenda : "2023-03-27",
    prazo_entrega : '(7) dias',
    local_entrega : 'Avenida do Mar, 74, 4460-810 Matosinhos'
} 

//8
function showLength(obj) {
    return Object.keys(obj).length // object.keys() retorna todas as propriedades do objeto dentro dos ()
}

console.log(`Número de propriedades do objeto compra é ${showLength(compra)}`)  // Mostrar o número de propriedades do objeto compra

//9
function showProperties(obj){
    return Object.keys(obj)
}

console.log(`As propriedades do objeto compra é ${showProperties(compra)}`)

//10
function removeProp(arg, prop){
    delete arg[prop]
}

removeProp(compra,`tx_IVA`)

console.log(compra)