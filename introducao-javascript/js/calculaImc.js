//console.log("Fui carregado a partir de um arquivo externo");

var titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

//querySelector = Traz apenas uma
var pacientes = document.querySelectorAll(".paciente");

for(var i= 0; i < pacientes.length; i++){
    
        var paciente = pacientes[i];

            //Peso do paciente
            var tdpeso = paciente.querySelector(".info-peso");
            var peso = tdpeso.textContent;
            //Altura do paciente
            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;

            //Variáveis para validar peso/altura
            var pesoValido = validaPeso(peso);
            var alturaValida = validaAltura(altura);
            var tdImc = paciente.querySelector(".info-imc");

            //Condições para validar se será calculado o IMC
            if(!pesoValido){
                console.log("Peso inválido!");    
                tdpeso.textContent = "Peso inválido!";
                paciente.classList.add("paciente-invalido");
                pesoValido = false;
            }

            if(!alturaValida){
                console.log("Altura inválida!");    
                tdAltura.textContent = "Altura inválida!";
                paciente.classList.add("paciente-invalido");
                alturaValida = false;
            }

            if(pesoValido && altura){
                var imc = calculaImc(peso, altura);  
                tdImc.textContent = imc;
            }  else {
                tdImc.textContent = ("Altura e/out peso inválidos");
            }

}
    //função anônima  ou função nomeada
    titulo.addEventListener("click", function(){
        console.log("Olha só, posso chamar uma função anônima!");
    });

    //função para calcular o IMC
    function calculaImc(peso, altura){
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    function validaPeso(peso){

        if(peso >= 0 && peso < 1000){
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura){

        if(altura >= 0 && altura <= 3.00){
            return true;
        } else {
            return false;
        }
    }

/*
console.log(paciente);
//console.log(tdpeso);
console.log(peso);
console.log(altura);
*/