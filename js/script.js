
     function addItem() {
      // Pegando os valores dos campo email
      const email = $('input[email=email]').val();
      
      // Criando uma string com objeto a ser adicioando np localstore
      const dataObj = JSON.stringify({email});

      localStorage.setItem('item', dataObj);
     }
  
  