
     function addItem() {
      // Pegando os valores dos campo email
      const email = $('input[email=email]').val();
    
      // Criando uma string com objeto a ser adicioando n localstore
      const dataObj = JSON.stringify({email});

      localStorage.setItem('item', dataObj);
      alert("email enviado com suceso") 
    }
  

     
    function addIcar() {
      // Pegando os valores dos campo produto
      const no = $('input[nome=nome]').val();
      const em = $('input[email=email]').val();
      //const prod = $('input[produto=produto]').val();
    
      // Criando uma string com objeto a ser adicioando no localstore
      const dataObj = JSON.stringify({no, em});

      localStorage.setItem('produtos', dataObj);
      alert("produto no localstore") 
    }
  
  