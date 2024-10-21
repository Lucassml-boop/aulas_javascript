document.getElementById("submit").addEventListener("click",function(){
    const input = document.getElementById("Numbinput").value;
    let result = ""
    for(let i = 0; i < 21; i++){
    let calc = input * i
    result += input + " x " + i + " = " + calc + "<br>"
  }
    document.getElementById("out").innerHTML = result; })
  
  
  
  
  