function calcular() {
    var nome = document.getElementById('nome').value;
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var res = document.getElementById('res');

    if (nome == '' || altura == '' || peso == '') {
        window.alert('Dados Inválidos')
    }else {
        var imc = (peso / (altura * altura))
        var grauimc = ''

        if (imc < 18) {
            grauimc = 'abaixo do peso'
        }else if (imc > 18 && imc < 25) {
            grauimc = 'no peso normal'
        }else if (imc >= 25 && imc < 30) {
            grauimc = 'com sobrepeso'
        }else if (imc >= 30 && imc < 35) {
            grauimc = 'com obedidade grau 1'
        }else if (imc >= 35 && imc < 40) {
            grauimc = 'com obesidade grau 2'
        }else {
            grauimc = 'com obesidade grau 3'
        }
        
        res.innerHTML = `${nome}, seu IMC é de ${imc.toFixed(2)} e está ${grauimc}`
    }   
}