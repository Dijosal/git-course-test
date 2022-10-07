const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");

const h2_antiguo = document.querySelector(".h2");

// .parentElement - devuelve el elemento padre
console.log(h2_antiguo.parentElement)

// .parentNode - devuelve el nodo padre
console.log(h2_antiguo.parentNode)