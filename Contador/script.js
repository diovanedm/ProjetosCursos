let vet = []
let maior = vet[0]

function vetor(n){
	if(vet.indexOf(n) != -1){
		return false
	} else{
		vet.push(n)
		return true 
	}
}

function isNumber(n){
	if(n >= 1 && n <= 100){ 
		return true
	} else {
		return false
	}
}


function contador(){
	let numero = document.getElementById('num')
	let num = Number(numero.value)
	let box = document.getElementById('box') 
	

	if(isNumber(num)){
		if(vetor(num)){
			let opcao = document.createElement('option')
			opcao.text = (`Valor ${num} adicionado`)
			texto.innerHTML = ''

			box.appendChild(opcao)
		}else{
			alert('Este valor ja foi inserido')
		}
	} else{
		alert('Digite um numero entre 1 a 100')
	}
	numero.value = ''
	numero.focus()
	resultado() = ''
}

function finalizar(){
	let texto = document.querySelector('p#texto')
	let maior = vet[0]
	let menor = vet[0]
	let soma = 0

	quant = vet.length

	for(let pos = 0; pos < quant; pos++){
		soma += vet[pos] // soma = soma + vet[pos]
		if(vet[pos] > maior){
			maior = vet[pos]
		} else{}
	}

	for(let pos = 0; pos < quant; pos++){
		if(vet[pos] < menor){
			menor = vet[pos]
		}
	}
	
	
	
	texto.innerHTML  = (`Ao todo temos ${quant} cadastrados <br>`)
	texto.innerHTML += (`O maior valor cadastrado foi ${maior}  <br>`)
	texto.innerHTML += (`O menor valor cadastrado foi ${menor}  <br>`)
	texto.innerHTML += (`A soma de todos os valor dá ${soma}  <br>`)
	texto.innerHTML += (`A media dos valor é igual a  ${soma / vet.length}  <br>`)
}