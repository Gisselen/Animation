
let Produtos = 0
let listaprodutos = []
document.getElementById("adicionaritem").addEventListener("click",()=>{
    if(Produtos <=4){
    document.getElementById("compras").innerHTML += "<div class ='produto'><h1>Produto</h1> <h3>Descricao produto</h3> </div>"
    }
    else{
        alert ("o carrinho esta cheio!!!")
    }
    Produtos+=1
})

document.getElementById("imprimirlista").addEventListener("click",()=>{
    document.getElementById("listafinal").innerHTML =""
    for(let Indice = 1 ;Indice <= listaprodutos.length;Indice++ ){
        document.getElementById("listafinal").innerHTML +="<div class = 'produto'> <h1> Produto </h1> <h3> Descricao</h3> </div>"
    }
})

document.getElementById("apagar").addEventListener("click",()=>{
    document.getElementById("listafinal").innerHTML = " "
    listaprodutos = []
    document.getElementById("compras").innerHTML =""
})
