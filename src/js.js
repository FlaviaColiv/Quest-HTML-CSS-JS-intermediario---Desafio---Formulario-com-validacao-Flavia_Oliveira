
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let valido = true;
    const campos = ["nome", "email", "telefone", "mensagem"];
    
    campos.forEach(function(campo) {
        const input = document.getElementById(campo);
        const mensagemErro = input.nextElementSibling; 
        
        
        if (input.value.trim() === "") {
            input.classList.add("erro");
            input.classList.remove("sucesso");
            mensagemErro.textContent = "Campo obrigatório";
            mensagemErro.classList.add("mensagem-erro");

        } else {
            input.classList.remove("erro");
            input.classList.add("sucesso");
            mensagemErro.textContent = "";
            mensagemErro.style.display = "none";
        }
    });

});
