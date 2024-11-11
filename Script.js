let produtinhos = ["Maçã", "Banana", "Leite", "Pão", "Café", "Biscoitos"]
let precos = [1.5, 0.5, 3.2, 2.5, 5.0, 4,3]

function liga(){
    console.log("Prices:")
    for(let a = 0; a<produtinhos.length; a++){
        console.log(produtinhos[a], ":", "$", precos[a])
    }
}
liga()