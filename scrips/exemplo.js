// console.log("batata") um aparece só no console
//alert("frita") //aviso para usuário
// prompt("123") // aviso com pergunta
// const
// let
// var não usar, pois não obedece escopo.

// const batat1 = 11 // const atribui um valo que não pode ser alterado

// let batata2 = 2

// getElementById = pega um id do arquivo html e salva na variável 
const footer = document.getElementById("rodape")
footer.style.backgroundColor = "red"


//
const h2criado = document.createElement("h2")
h2criado.textContent ="criando um h2 no footer"
footer.appendChild(h2criado) //Serve para colocar o h2 na tela

h2criado.addEventListener("click",()=>{
    alert("funcionou")
})

const forms = document.getElementById("formulario")
forms.addEventListener("submit", (event)=>{
    event.preventDefault()
    alert("Não enviou nada!")
})

footer.addEventListener("mouseover", () => {
    alert("oi 123456")
})