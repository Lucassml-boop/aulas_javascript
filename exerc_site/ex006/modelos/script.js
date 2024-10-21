let list = []
let counter = 0
document.getElementById("subm").addEventListener("click",function add(){
    var inputNumb = document.getElementById("numb").value
    var selectss = document.getElementById("numbSect")
    if(inputNumb === "" || inputNumb > 100){
        alert("Adicione um número valido")
        return
    }else{
        if (list.includes(Number(inputNumb))){
            return(alert("Esse número já existe"))
        }else{
            list.push(Number(inputNumb))
        }}
    let addset = document.createElement("option")
    addset.value = counter
    addset.text = inputNumb
    selectss.add(addset)

    counter++
})

document.getElementById("finn").addEventListener("click", function final(){
    if(list.length === 0){
        alert("Informe um número antes de continuar")
    }else{
    const calcSoma = list.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const calcMedia = calcSoma / list.length
    const caracteres = list.length
    const calcMaior = list.sort((a, b) => b - a)
    const calcMenor= calcMaior[calcMaior.length - 1]
    document.getElementById("soma").innerHTML =`Soma dos números é ${calcSoma}`
    document.getElementById("media").innerHTML =`Média dos valores é ${calcMedia}`
    document.getElementById("maior").innerHTML =`Maior número é ${calcMaior[0]}`
    document.getElementById("menor").innerHTML =`Menor número é ${calcMenor}`
    document.getElementById("caract").innerHTML =`Foram adicionados ${caracteres} números`
    }
})