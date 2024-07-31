window.alert('minha primeira mensagem') // abre um alerta
window.confirm('está gostando de js?') // janela com botão ok e cancel
window.prompt('qual é seu nome?') // Abre um prompt perguntado seu nome
// sinal de + serve para concatenação ou adição, mas adição só funciona com números, já a concatenação acontece com strings
/*
    Ex concatenação:
       var nome = window.prompt('qual é seu nome?') = calor
       alert('Muito prazer,' + nome) = Muito prazer, calor 
    
    Ex soma de números:
        var n1 = Number.parseInt(window.prompt('Digite um número') = 1)
        var n2 = Number.parseInt(window.prompt('Digite um número') = 2)
        var soma = n1 + n2 = 3
        alert(soma) = 3

        PODE TAMBÉM SE UTILIZAR SOMENTE Number(window.prompt('digite um número))
*/


Number.parseFloat() // Converte uma informação(string,bolean) em número(number) float
Number.parseInt() // Converte uma informação(string,bolean) em número(number) inteiro
/* 
    Ex:
    window.prompt(Digite um número) = Vai te dar uma string
    Number.parseInt(window.prompt(Digite um número) = Vai gerar um Número inteiro)
*/

String() // Converte uma informação(número, bolean) para String


//`${}` template string, funciona como o + só que é utilizado, mais recentemente
/*  
    var nome = window.prompt('qual é seu nome?') = calor
    alert(`Prazer ${nome}`) = Muito prazer, calor 
*/

document.write() // Escreve na pagina web, insere informações como se fosse uma tag <p> na pagina web
.toUpperCase() // É um atributo que deixa todas as letras em maiusculo(toLowercase deixa todas as letras em minusculo)
.length() // É um atributo conta quantas letras tem na string escrita
.toFixed(X) // É um atributo que monstra quantidade X de números apos a virgula que você quiser
.replace('.' , ',') // Utilizado para trocar um 
.toLocaleString() // É usado para converter um número ou uma data em uma string de acordo com as configurações regionais específicas. Esse método é útil para formatação de números, moedas e datas com base na localização do usuário.

/*
    ** é um operador de potencia(elevado)
        5**2 = 25 (5 x 5 = 25)
        seria 5 elevado a 2

    n+= faz com que some a variavel com ela mesma
        ex:
            var n = 1
            n+= 2 (n + 2 = 3)
    
    === faz com que se compare se os tipos de informação são igual
        ex: var x = 1
            var y = '1'
            alert(x = y) = true

            alert(x === y) =false
                pois ele confere que um é tipo string(y) e o outro number
*/

test ? true: false // Operador ternario 
/* 
    Operador de if()else embutido
        ex: var n=2
            var res = n + 2 == 4 ? se sim 5 : se não 10
            alert(res) = 10

*/

getElementByTagName() // seleciona o elemento pela tag dele
/*

    document.getElementsByTagName('p') seleciona as tags <p>
    document.getElementsByTagName('p')[0] seleciona a priemira tag <p> daquela pagina
*/

.innerText = `` // seleciona o texto e copia
.innerHtml = `` // seleciona o HTML(as tags e toda a formatação) e copia, pode ser ultilizado para reescrever um linha/tag
/*
<body>
  <p id="msg">Olá</p>
    <script>
      var d = document.querySelector(`p#msg`)
      d.innerHTML = `tchau`
    </script>
</body>
*/
/*
    ex:
<body>
  <p id="msg">Olá</p>
<script>
      var d = document.querySelector(`p#msg`)
      d.innerHTML = `tchau`
</script>
*/

.getElementById() // seleciona um objeto pelo id
.getElementByTagName() // seleciona pelo nome
.getElementByClassName() // seleciona pela class
.querrySelector() // seleciona um objeto puxando com o formato cc
/*
    <p id = "msg">Olá</p>
    var d = window.document.querrySelector(`p#msg`) # = seleciona por id // . = seleciona class
    d.document.InnerHtml(`Tchau`) = <p>Tchau</p>

*/ 

.value //serve para selecionar o valor colocado em um campo

new Date() // cria uma variavel contendo as informações de hora,data e dia atuais
/*
    var data = new Date()
    var hora = data.getHours() // .getHours() seleciona o horario do momento 
*/

switch(dasd){} // condição multiplas  
/*
switch(){
case valor1:
break // nescessario colocar um para que o processo de switch funcione
case valor2:
break
default:
break
}
*/