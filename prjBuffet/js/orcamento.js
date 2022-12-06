function salvar(){
    document.getElementById('txtNomeCliente').value = document.getElementById('nome').value;

    document.getElementById('emailCliente').value = document.getElementById('email').value;

    document.getElementById('telCliente').value = document.getElementById('telefone').value;

    document.getElementById('txtEnd').value = document.getElementById('endereco').value;

    document.getElementById('txtCid').value = document.getElementById('cid').value;

    document.getElementById('txtCep').value = document.getElementById('cep').value;

    document.getElementById('dateEvento').value = document.getElementById('data').value;

    document.getElementById('txtQtde').value = document.getElementById('qtde').value;

    var indice = document.form.tipo.selectedIndex;
    var valueSelect = document.form.tipo[indice].value;
   
    var descricao = document.form.tipo[indice].text;

    var qtde = parseInt(document.getElementById('qtde').value);

    var preco;
    var valorTotal;

    if( ! document.getElementById('termos').checked){
      alert("Você deve aceitar os termos de uso do site.");
            }
            else{
                if(confirm("Deseja confirmar o cadastro?")){
                    alert("Cadastro realizado com sucesso.");
                }
                else{
                    alert("Cadastro cancelado.");
                }
                document.getElementById('nome').value = "";
                document.getElementById('nome').focus();
              }
                 

    switch(indice){
        case 0:
            preco = 70;
            break;
        case 1:
            preco = 65;
            break;
        case 2:
            preco = 50;
            break;
        case 3:
            preco = 30;
            break;
        case 4:
            preco = 45;
            break;
        case 5:
            preco = 100;
            break;
    }

    valorTotal = (parseInt(qtde)*preco);
    document.getElementById('txtValorTotal').value = valorTotal;   
    document.getElementById('txtCardapio').value = descricao;
}