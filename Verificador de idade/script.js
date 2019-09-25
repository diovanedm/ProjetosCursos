function verificar(){
	var data = new Date()
	var ano = data.getFullYear() //Salva a data do ano atual
	var formAno = document.getElementById('ano')
	var res = document.getElementById('res')
	var foto = document.getElementById('foto')
	if(formAno.value.length == 0 || Number(formAno.value) > ano){
		window.alert('[ERRO] Verifique os dados e tente novamente')
	} else{
		var formSex = document.getElementsByName('sexo')
		var idade = ano - Number(formAno.value)
		var genero = ''
		var img = document.createElement('img')//Cria um elemento img
		img.setAttribute('id', 'foto')//Cria um id#foto
		if (formSex[0].checked) {
			genero = 'Homem'
			if (idade > 0 && idade < 12) {
				// Criança
				img.setAttribute('src', 'menino.png')//cria uma img src=""
			} else if(idade < 21) {
				// Jovem
				img.setAttribute('src', 'jovem-h.png')
			} else if(idade < 50) {
				// adulto
				img.setAttribute('src', 'homem.png')
			} else {
				// idoso
				img.setAttribute('src', 'idoso.png')
			}
		} else if (formSex[1].checked) {
			genero = 'Mulher'
			if (idade > 0 && idade < 10) {
				// Criança
				img.setAttribute('src', 'menina.png')
			} else if(idade < 21) {
				// Jovem
				img.setAttribute('src', 'jovem-m.png')
			} else if(idade < 50) {
				// adulta
				img.setAttribute('src', 'mulher.png')
			} else {
				// idoso
				img.setAttribute('src', 'idosa.png')
			}
		}
		res.style.textAlign = 'center'
		res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos </p>`
		res.appendChild(img)
	}
}