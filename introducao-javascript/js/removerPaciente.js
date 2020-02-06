//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    //console.log(event.target);

    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fadeOut");

        //função do JS
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);
    }

    
    /*
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; //parentNode capta o pai de acordo com event bublling
    */
    

});

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo clique");
        this.remove();
    });
});
*/

