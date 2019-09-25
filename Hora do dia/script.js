function carregar(){
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var body = window.document.getElementsByTagName('body')[0]
	var data = new Date()
	// var hora = data.getHours()
	var hora = window.prompt('Informe a hora')
	msg.innerHTML = `Agora são ${hora} horas`
	if (hora >= 0 && hora < 12) {
		// BOM DIA!	
		img.src = 'dia.png'
		body.style.background = '#4EA4D9'
		
	} else if( hora >= 12 && hora < 18){
		// BOA TARDE!
		img.src = 'tarde.png'
		body.style.background = '#F28A2E'
	} else {
		// BOA NOITE!
		img.src = 'noite.png'
		body.style.background = '#5B4A44'
	}
}
