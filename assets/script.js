//CALCULAR IMC


const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value.replace(',','.');

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('info').classList.remove('hidden');

    if (imc < 18.5) {

        description = "Você esta abaixo do peso"
    
    } else if (imc >= 18.51 && imc <= 25) {
        
        description = "Você esta com seu peso normal";
        
    } else if (imc >= 25.01 && imc <= 30 ) {
    
        description = "Você esta acima do peso";
        
    } else if (imc >= 30.01 && imc <= 40 ) {
    
        description = "Você esta obeso";
        
    } else {
        description = "Obesidade grave";
    };

    value.textContent = imc.replace('.',',');
    document.getElementById('description').textContent = description;
});






































