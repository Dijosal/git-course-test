const contenedor = document.querySelector(".contenedor");

// firstElementChild
const primerHijo = contenedor.firstElementChild;

console.log(primerHijo);

// lastElementChild
const ultimoHijo = contenedor.lastElementChild;

console.log(ultimoHijo);

// childNodes - devuelve todos los nodos hijos, no es un array, es un
// node list
const hijos = contenedor.childNodes;

console.log(hijos);

// pero se puede recorrer con un forEach
hijos.forEach(hijo => console.log(hijo));

// children - devuelve los hijos, pero solo las etiquetas HTML
// pero no se puede recorrer con un forEach sino con un For of
const hijos2 = contenedor.children;


console.log("");
console.log(hijos2);
for (hijo2 of hijos2) {
    console.log(hijo2);
}