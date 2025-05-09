function saudar() {
    const nome = document.getElementById("nome").value;
    
    if (nome.trim() !== "") {
        document.getElementById("mensagem").innerText = Bem - vindo, 
    }
    else {
      document.getElementById("mensagem").innerText = "Por favor, digite um nome.";
    }
  }