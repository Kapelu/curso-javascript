/*
<div id="inHtml">inHtml div dentro del html</div>
<div id="divdos">este es el div 2</div>
<div id="divtres">este es el div 3</div>
*/

let divInHtmlPut = document.getElementById("inHtml")// <div id="inHtml">inHtml div dentro del html</div>
divInHtmlPut.innerHTML += " dededdee" 
// divInHtmlPut.innerHTML = divInHtmlPut.innerHTML + " dededdee" 



// 01 Crear el elemento
let new_div = document.createElement("div") // <div id="new_div"></div>
// 02 Agregar lo que contiene el elemento
new_div.innerHTML = "le vamos a agregar un texto" //  <div id="new_div">le vamos a agregar un texto</div>
// 03 Anexar al html (en este caso al body)
document.body.appendChild(new_div)

// 01 Crear el elemento
let new_div2 = document.createElement("div") // <div id="new_div"></div>
// 02 Agregar lo que contiene el elemento
new_div2.innerHTML = "otroooooooooooooooooooooooooooooooo" //  <div id="new_div">le vamos a agregar un texto</div>
// 03 Anexar al html (en este caso al body)

// selector por id único {}
let divdos = document.getElementById("divdos")
divdos.appendChild(new_div2)

// selector por class de [{}{}]
let div_ref_by_class = document.getElementsByClassName("identClass")

// selector por id único {}
let div_tres = document.querySelector("#divtres")
div_tres.innerHTML = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
// selector por class de {} la primer clase que encuentra
let div_tres = document.querySelector(".identClass") // {}

// selector por class de [{}{}]
let div_tres = document.querySelectorAll(".identClass") //  [{}{}]
