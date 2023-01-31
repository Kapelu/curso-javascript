let etiqueta1 = document.createElement("div");
let etiqueta2 = document.createElement("div");
let etiqueta3 = document.createElement("div");
let msj = document.createElement("h1");

msj.innerHTML = "Hola";
etiqueta1.appendChild(msj);

etiqueta2.innerHTML = "Mundo";

etiqueta3.innerHTML = "33b";

let b = document.getElementById("w");

function sas() {
  document.body.appendChild(etiqueta1);
  document.body.appendChild(etiqueta2);
  document.body.appendChild(etiqueta3);
}

b.addEventListener("click",sas)