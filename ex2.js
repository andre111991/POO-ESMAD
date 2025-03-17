function numCities(){
    console.log(`As cidades são ${cidades}`);
    console.log(`O número de cidades é ${cidades.length}`);
}

let decisao = "S";
let cidades=[];

while (decisao == "S") {
    let cidade= prompt("Indique a cidade:");
    cidades.push(cidade);
    decisao = prompt("Deseja continuar? (S/N):").toUpperCase();
}

console.log(numCities(cidades));

