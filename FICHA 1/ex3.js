generos=["M","F"]

genero= prompt("Indique o seu género (M/F):").toUpperCase()

if (generos.includes(genero)){
    altura = +prompt("Indique a sua altura:")
    peso = +prompt("Indique o seu peso:")
    idade = +prompt("Indique a sua idade:")

    if (genero == "M"){
        tmb = (10 * peso + 6.25 * altura - 5 * idade + 5)
        }
    }
    else{
        tmb = 10 * peso + 6.25 * altura - 5* idade - 161
    }
    console.log(`O seu TMB é ${tmb}`)