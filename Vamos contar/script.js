function contador(){
    let inicio = document.getElementsByName('numero')[0]
    let i = Number(inicio.value)
    let fim = document.getElementById('num_f')
    let f = Number(fim.value)
    let passo = document.getElementById('num_p')
    let p = Number(passo.value)

    if(p == 0){
        p = 1
        alert('considere Passo com valor 1')
    }else{}
    
    if(i == 0 || f == 0){
        window.alert('É obrigatorio digitar todos os campos')
    } else if(i > f ){
        let cont = document.querySelector('div#cont')
        cont.innerHTML = 'Contando...<br>'
        for (let x = i; x >= f; x -= p) {
            cont.innerHTML +=`${x} \u{1f449}`
        }cont.innerHTML+= '\u{1F3F4}'
    } else{
        let cont = document.querySelector('div#cont')
        cont.innerHTML = 'Contando...<br>'
        for (let x = i; x <= f; x += p) {
            cont.innerHTML +=`${x} \u{1f449}`
        }cont.innerHTML+= '\u{1F3F4}'
    }
}



