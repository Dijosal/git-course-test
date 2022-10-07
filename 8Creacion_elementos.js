const contenedor = document.querySelector(".contenedor");

// .createElement("nombredelaetiqueta en mayuscula") - crea el elemento
const item = document.createElement("LI");

// .createTextNode("text") - crea un texto
// pero usualmente se agrega texto de esta forma:
// item.innerHTML = "Este es un item de la lista"
const textDelItem = document.createTextNode("Este es un item de la lista");

// .appendChild() - agrega algo al padre
item.appendChild(textDelItem);

contenedor.appendChild(item);

// si queremos crear muchos elemento en la lista, la forma mas
// recomenda por menor consumo de recursos es esta
// .createDocumentFragment() - crea un fragmento en otro index
// sin borrar todo el dom y volverlo a escribir

const fragmento = document.createDocumentFragment();

for (i = 0; i < 19; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);