var listaDEpecas=["amortecedor", "volante","motor"]
let peso = 50;

if (peso < 100){
    console.log("A peça deve ter no mínimo 100g")
}else{
    console.log("A peça possui o peso adequado!")
}

//Verificação de intens na loista
var lista = ["Amortecedor", "Volante", "Motor"]
if(lista < 10) {
    console.log("È possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista!")
}
//Nome com caracteres
let nomePeca = "Motor"
if(nomePeca.length > 3){
    console.log("Nome de peça está adequado!")
} else {
    console.log("O nome deve ter mais de 3 caracteres.")
}