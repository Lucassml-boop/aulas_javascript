function contar(){
    var ini = document.getElementById("Numb")
    var fim = document.getElementById("NumEnd")
    var Passos = document.getElementById("Numbjump")
    var res = document.getElementById("contagem")
    if(Passos <= 0){
        alert("Passos deve ser maior que 0")
        return;
    }

    if(ini.value.length == 0 || fim.value.length == 0 || Passos == 0){
      res.innerHTML = "Impossivel contar!!"
    }else{
      res.innerHTML= "Contando: "
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(Passos.value)

      if(p <= 0){
        window.alert("Passo inválido! Considerando PASSO 1")
        p = 1
      }
      if(i < f){
        // contagem crescente
        for(let c = i; c <= f; c += p){
          res.innerHTML += `${c}, `
        }
      }else{
        // contagem regressiva
        for(let c = i; c >= f; c -= p){
          res.innerHTML += `${c}, `
        }
      }
      res.innerHTML += " Fim da contagem! "
    }

}