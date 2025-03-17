
let number = +prompt("Indique um número:");

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

if (isPerfectNumber(number)) {
    console.log(`${number} é um número perfeito.`);
} else {
    console.log(`${number} não é um número perfeito.`);
}