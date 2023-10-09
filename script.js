//CALCULAR IMC

const peso = 108;
const altura = 1.64;
const imc = peso / Math.pow(altura,2);

console.log("Seu IMC é " + imc);



function calcular() {
    if (imc < 18.5) {

        console.log("Você esta abaixo do peso");
    
    } else if (imc >= 18.51 && imc <= 25) {
        
        console.log("Você esta com seu peso normal");
        
    } else if (imc >= 25.01 && imc <= 30 ) {
    
        console.log("Você esta acima do peso");
        
    } else if (imc >= 30.01 && imc <= 40 ) {
    
        console.log("Você esta obeso");
        
    } else {
        console.log("Obesidade grave");
    };
}





































