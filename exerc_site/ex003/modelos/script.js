function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length === 0 || Number(fano.value) > ano){
        window.alert('[ERRO]')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', "imagens/criançahomem.jpg")
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', "imagens/jovemhomem20.jpg")
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', "imagens/adultohomem.jpg")
            }else{
                //idoso
                img.setAttribute('src', "imagens/velhohomem.jpg")
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', "imagens/criançamulher.jpg")
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', "imagens/jovemmulher20.jpg")
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', "imagens/adultomulher.jpg")
            }else{
                //idoso
                img.setAttribute('src', "imagens/velhamulher.jpg")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}