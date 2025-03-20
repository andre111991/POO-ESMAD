//let nome_produto = prompt("Indique o nome do produto:");
//let cat_produto = prompt("Indique a categoria do produto:");

const compra = { 
    nome_produto: 'Banana', 
    cat_produto: 'Fruta',
}

compra.preco_base = "2.10"   // Adicionar uma propriedade fora do objeto
compra.tx_IVA = "0.23"

compra.preco_base = "2.50"  // Alterar o valor de uma propriedade

console.log(compra)

compra.preco_final=function(){
    return this.preco_final = this.preco_base * this.tx_IVA;
}

console.log(compra.preco_final())  // Mostrar o valor final do produto

 
compra.dados_encomenda = {              // Adicionar um objeto dentro de um objeto
    data_encomenda : "2023-03-27",
    prazo_entrega : '(7) dias',
    local_entrega : 'Avenida do Mar, 74, 4460-810 Matosinhos'
} 

