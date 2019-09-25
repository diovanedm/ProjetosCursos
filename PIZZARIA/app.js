//Incrementa
var botao_incrementa = document.querySelectorAll('.btn-incrementa')

for(let botao of botao_incrementa){
    botao.addEventListener('click', incrementa)

    function incrementa(){
        var item = botao.closest('.item')
        var input = item.querySelector('.quantidade')
        input.value++

        var PegaPreco = PegaPrecoItem(item)
        CalcularTotal(PegaPreco)

    }
}


//Decrementa
var botao_decrementa = document.querySelectorAll('.btn-decrementa')

for(let botao of botao_decrementa){
    botao.addEventListener('click', decrementa)
    
    function decrementa(){
        var item = botao.closest('.item')
        var input = item.querySelector('.quantidade')
        if(input.value > 0){

            input.value--

            var PegaPreco = PegaPrecoItem(item)
            CalcularTotal(-PegaPreco)

        }
    }
}

//Formulario
var form_pedido = document.forms.pedido
form_pedido.addEventListener('submit', function(evento){
    var inputs = document.querySelectorAll('input.quantidade')

    contador = 0
    for (let input of inputs){
        if(input.value > 0){
            contador++
        }

    }
    if(contador == 0){
        evento.preventDefault()
        alert('Deve ter pelo menos 1 pizza no pedido')
    }
})

//Funções Auxiliares
function PegaPrecoItem(PrecoItem){
    var precotext = PrecoItem.querySelector('.preco-item')
    var preco = Number(precotext.textContent)
    return preco
}

function CalcularTotal(PegaPreco){
    var total = document.getElementById('total')
    total.textContent = PegaPreco + Number(total.textContent)
}