function carregar(){
    var tela = window.document.getElementById('tela1')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 18 //data.gethour(horário de computador)
    tela.innerHTML = (`Agora são ${hora} horas`)

    if(hora >= 0 && hora < 12){

        img.src = 'imagens/manha2.png'
        document.body.style.background = 'rgb(151, 132, 71)'

    }else if(hora >= 12 && hora < 18){

        img.src = 'imagens/tarde2.png'
        document.body.style.background = 'rgb(95, 185, 103)'

    }else{
        img.src = 'imagens/noite2.png'
        document.body.style.background = ' rgb(24, 12, 12)'
    } 

}
