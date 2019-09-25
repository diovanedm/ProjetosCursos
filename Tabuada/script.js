function tabuada(){
    let valor = document.getElementById('txt-n')
    let v = Number(valor.value)
    let selecao = document.getElementById('resultado')
    if (valor.value.length== 0){
        alert('Digite o valor para gera a tabuada')   
    } else{
        selecao.innerHTML = ''
        for (c = 1; c <= 10; c++){
            let opcao = document.createElement('option')
            opcao.text = `${v} x ${c} = ${v*c}`
            selecao.appendChild(opcao)
            opcao.value = `selecao${c}` 
        }
    }
    
}