
export default function getHex(value){

    let firstResult = Math.floor(value/16)
    let secondResult = ((value/16) - (Math.floor(value/16))) * 16

    //Para converter um valor decimal para hexadecimal, dividimos o valor por 16 e separamos a parte inteira da decimal, multiplicando-a, em seguida, por 16.
    //É justamente o que foi feito acima.
    //Após isso, usamos o método toString(16) para converter um valor x para um valor correspondente na base 16.

    //Para converter de hexadecimal para decimal, é feito apenas o processo inverso.
    //Passamos os dois valores hexadecimais para inteiro na base decimal, dividimos o segundo valor por 16, e os somamos novamente.
    //Feito isso, devemos multiplicar o resultado por 16, e terminamos. 

    return `${firstResult.toString(16)+secondResult.toString(16)}`

}

console.log('#'+getHex(220)+getHex(20)+getHex(60))