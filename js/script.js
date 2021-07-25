
     function addItem() {
      // Pegando os valores dos campo email
      const email = $('input[email=email]').val();
    
      // Criando uma string com objeto a ser adicioando n localstore
      const dataObj = JSON.stringify({email});

      localStorage.setItem('Email', dataObj);
      alert("email enviado com suceso") 
      
    
    }
  

     
    function addIcar() {
      // Pegando os valores dos campo produto
      const nome = $('input[nome=nome]').val();
      const email = $('input[email=email]').val();
      const placadevideo = $('input[placadevideo=placadevideo]').val();
      const headerphone = $('input[headerphone=headerphone]').val();
      const placamae = $('input[placamae=placamae]').val();
      const endereco = $('input[endereco=endereco]').val();
      
      
      // Criando uma string com objeto a ser adicioando no localstore
      const dataObj = JSON.stringify({nome, email, placadevideo, headerphone, placamae, endereco});
      
      localStorage.setItem('Informações', dataObj);
      alert("produto no localstore") 
    }

    function validar() {
      // funcao validar
      let email = document.getElementById("email");
    
      // verificar se o nome esta vazio
      if(email.value == "") {
        alert("Email não informado");

        // Deixa o input com o focus
        email.focus();
      }
    }
  
  