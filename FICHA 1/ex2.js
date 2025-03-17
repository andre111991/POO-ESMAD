// Cria um programa que leia números inteiros do usuário até que o usuário digite 0.
max = -Infinity
min = +Infinity


do{
    number = +prompt("Indique um número:")
    if(number>max){
        max = number
    }
    if(number<min){
        min = number
    }
}while(number!=0)
    console.log(`O maior número é ${max} e o menor número é ${min}`)
    