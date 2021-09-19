let socorr = document.getElementById("socorr");

$('document').ready(function(){
    $('#cep').focusout(function(){

    let pegaTheCep = $('#cep').val();
    pegaTheCep = pegaTheCep.replace('-', '')
    
    let urlCep = 'https://viacep.com.br/ws/' + pegaTheCep + '/json/'
    
    $.ajax({
        url: urlCep,
        type: 'get',
        dataType: 'json',
        success: function(data){
            console.log(data)
            $('#endereco').val(data.logradouro)
            $('#bairro').val(data.bairro)
            $('#cidade').val(data.localidade)
            $('#estado').val(data.uf)
        },
    
        error: function(erro){
            console.log(erro);
            socorr.innerHTML = "Invalid Zip code"
            setTimeout(()=>{
                socorr.innerHTML = ""
            }, 3000)
        }

        
    })
})
})