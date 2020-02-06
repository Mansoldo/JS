var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    //https://api-pacientes.herokuapp.com/pacientes

    //Objeto para requisitar
    var xhr = new XMLHttpRequest();

    //Abrindo conexão passando o tipo de conexão e a URL
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    var erroAjax = document.querySelector("#erro-ajax");

    //Evento para identificar a página carregando, e convertendo de JSON para um Array
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            //console.log(typeof resposta);
            var pacientes = JSON.parse(resposta);

            //Iterando e adicionando na tabela
            pacientes.forEach(function (paciente){
            adicionarPacientesNaTabela(paciente);
            });        
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);            
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();

})