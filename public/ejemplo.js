var HC = 0
function enviar() {
    let email = document.getElementById("t3")
    if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g.test(email.value)) {
        alert("email invalido")
         return false;
    }
    let nombre= document.getElementById("t1").value
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
        alert("completa nombre")
        return false;
    }
    let apellido= document.getElementById("t2").value
    if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
        alert("completa apellido")
        return false;  
    }
    let fecha= document.getElementById("t4").value
    if (!/^\d{4}-\d{2}-\d{2}$/g.test(fecha)) {
        alert("complete su fecha de nacimiento")
         return false;
    }
    let pais= document.getElementById("t5").value
    if(pais!=="11"){
        alert("solo usuarios argentinos")
        return false;
    }
    alert("formulario enviado")

    let form= document.getElementById("form").reset()
    }

// function oscuro() {
//     let input = document.getElementsByTagName("input")
//     let pais = document.getElementsByTagName("select").item(0)
//     let fondo = document.getElementsByTagName("body").item(0)
//     let boton1 = document.getElementById("boton-1")
//     let boton2 = document.getElementById("boton-2")
//     let title = document.getElementsByClassName("titulo").item(0)
//     let formulario = document.getElementsByClassName("formulario").item(0)
//     if (HC == 0) {
//         Array.from(input).forEach(c => {
//             c.classList.add("inputHC")
//         })
//         pais.classList.add("inputHC")
//         fondo.classList.add("bodyHC")
//         boton1.classList.add("botonHC")
//         boton2.classList.add("botonHC")
//         title.classList.add("tituloHC")
//         formulario.classList.add("formHC")

//         HC = 1
//     }
//     else {
//         console.log(input)
//         Array.from(input).forEach(c => {
//             c.classList.remove("inputHC")

//         })
//         pais.classList.remove("inputHC")
//         fondo.classList.remove("bodyHC")
//         boton1.classList.remove("botonHC")
//         boton2.classList.remove("botonHC")
//         title.classList.remove("tituloHC")
//         formulario.classList.remove("formHC")


//         HC = 0
//     }
// }

let elem = document.getElementById("boton-1")
elem.addEventListener("click", enviar);

//let elemt = document.getElementById("boton-2")
//elemt.addEventListener("click", oscuro);