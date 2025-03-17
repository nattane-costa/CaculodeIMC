function calcularIMC(){
    
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    altura /= 100;

    let imc = peso / (altura * altura);

    alert(imc);
    
    if(imc < 18.5)
        alert("abaixo do peso");
    else alert("peso normal ou acima do peso")

};