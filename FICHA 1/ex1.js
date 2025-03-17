let limInf = +prompt("Indique o Primeiro número:")
let limSup = +prompt("Indique o Segundo número:")

if (limInf>limSup){
    numb = limInf
    limInf= limSup
    limSup = numb
}

soma = 0

for(i = limInf;i<=limSup;i++){
    soma+=i
}

console.log(`A soma é ${soma}`)

