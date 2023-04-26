var value1 = document.getElementById("v1")
var value2 = document.getElementById("v2")
var resultado1 = document.getElementById("saida")

function resultado(){
    resultado1.innerHTML = parseInt(value1.value) + parseInt(value2.value)

    if(soma.checked){
        resultado1.innerHTML = parseInt(value1.value) + parseInt(value2.value)
    }
    else if(subtracao.checked){
        resultado1.innerHTML = parseInt(value1.value) - parseInt(value2.value)
    }
    else if(multiplicacao.checked){
        resultado1.innerHTML = parseInt(value1.value) * parseInt(value2.value)         
    }
    else if(divisao.checked){
        resultado1.innerHTML = parseInt(value1.value) / parseInt(value2.value)
    }
    else{
        resultado1.innerHTML = "Insira os valores nos campos acima!"
    }
}

function disflag(){
    var soma = document.getElementById("soma").checked
    var subtracao = document.getElementById("subtracao").checked
    var multiplicacao = document.getElementById("multiplicacao").checked
    var divisao = document.getElementById("divisao").checked

    if(soma == true){
        console.log("entrei krai")
        document.getElementById("subtracao").checked = false
        document.getElementById("multiplicacao").checked = false
        document.getElementById("divisao").checked = false

    }
    if(subtracao == true){
        console.log("entrei krai 2")
        document.getElementById("soma").checked = false
        document.getElementById("divisao").checked = false
        document.getElementById("multiplicacao").checked = false
    }
    if(multiplicacao == true){
        console.log("entrei krai 3")
        document.getElementById("subtracao").checked = false
        document.getElementById("divisao").checked = false
        document.getElementById("soma").checked = false
    }
    if(divisao == true){
        console.log("entrei krai 4")
        document.getElementById("multiplicacao").checked = false
        document.getElementById("subtracao").checked = false
        document.getElementById("soma").checked = false
    }
    
}



