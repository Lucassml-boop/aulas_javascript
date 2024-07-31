var data = new Date() 
var hora = data.getHours() // usado para pegar a hora do sistema
console.log(`No momento são ${hora} horas.`)
if(hora > 18){
    console.log("Boa Noite")
}else if(hora < 12){
    console.log("Bom dia")
}else{
    console.log("Boa tarde")
}