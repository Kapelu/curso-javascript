// document.querySelector("#createdBy").innerHTML += " CODE";

var lista = [];

function agregarLista() {
  // console.log("hola mundo")
  // alert('Funciona')
  var inputValue = document.getElementById("toDoInput");
  var div = document.createElement("div");
  div.setAttribute("class", "toDoShell");
  var span = document.createElement("span");
  span.innerHTML = inputValue.value;
  div.appendChild(span);
  lista.push(div);
  var contenedorLista = document.getElementById("toDoContainer");
  lista.forEach(function (element) {
    element.addEventListener("click", function () {
      var sp = element.children[0]; // Ejemplo 1 -*-*-
      sp.setAttribute("class", "completeText"); // esta f() agrega un click que al hacerlo
      // el elemento incorpora un atributo class="completeText" y mediande el recurso
      // del css ese elemento toma un color diferente y un tachado
    });
    contenedorLista.appendChild(element);
  });
  inputValue.value = "";
}
// Evento Click al botón AGREGAR que ejecuta la función agregarLista

var bttonAgregar = document.getElementById("addButton");
bttonAgregar.addEventListener("click", agregarLista);

/*
Ejemplo 1 -*-*-
var div = document.createElement("div");
div.setAttribute("class", "toDoShell");
var span = document.createElement("span");
span.innerHTML = "hola";
div.appendChild(span);
div   div.children   div.children[0]  div.children[0].innerHTML
*/

// Mejor manera de dividir las tareas en pequeños code para posible reutilización
/*
function creaElementoDivConSpanYpushea() {
  var inputValue = document.getElementById("toDoInput");
  var div = document.createElement("div");
  div.setAttribute("class", "toDoShell");
  var span = document.createElement("span");
  span.innerHTML = inputValue.value;
  div.appendChild(span);
  lista.push(div);
}
*/
