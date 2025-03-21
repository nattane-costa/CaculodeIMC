function calcularIMC(event, tipo){
    event.preventDefault();

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    altura /= 100;

    let imc = peso / (altura * altura);

    imc = imc.toFixed(2);

    mensagem_final = "Seu IMC é de " + imc + ". "; 
    
    if(imc < 18.5)
        mensagem_final += "Você está abaixo do peso.";
    else if(imc < 25)
         mensagem_final += "Você está saudável.";
    else if(imc < 30)
         mensagem_final += "Você está com sobrepeso.";
    else if(imc < 35)
         mensagem_final += "Você está com Obesidade Grau I.";
    else if(imc < 40)
         mensagem_final += "Você está com Obesidade Grau II.";
    else  mensagem_final += "Você está com Obesidade Grau III.";

    if(tipo == 1) alert(mensagem_final);
    else if(tipo == 2) 
        document.getElementById("resultado").
    textContent = mensagem_final;
        else console.log(mensagem_final);

};