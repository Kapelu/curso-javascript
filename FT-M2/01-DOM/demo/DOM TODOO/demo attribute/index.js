// linkHenry

// creamos referencia a nuestra var setA
let setA = document.querySelector("#linkHenry")
// setA = <a id="linkHenry">set attribute</a>
// en dicha ref le modificamos su valor (lo q se encuentra entre la etiqueta)
setA.textContent = "connect a set atributte"
// setA = <a id="linkHenry">connect a set atributte</a>
// innerText innerHtml textContent son iguales
console.log(setA.textContent)
setA.style.background = "red"
// <a id="linkHenry" style="..." >connect a set atributte</a>
setA.href = "https://lichess.org/"
// <a id="linkHenry" style=".." href="...">connect a set atributte</a>
