function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        img.src = "imagens/fotomanha.jpg"
    }else if(hora >= 12 && hora < 18){
        img.src = "imagens/fototarde.jpg"
    }else{
        img.src = "imagens/fotonoite.jpg"
    }
}