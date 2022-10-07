const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P");
parrafo.innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

// .replaceChild - reemplaza un hijo por otro
contenedor.replaceChild(h2_nuevo, h2_antiguo);

// .removeChild - elimina un hijo
contenedor.removeChild(h2_nuevo);

// .hasChildNodes - verifica si tiene o no hijos y devuelve un valor
// booleano (True/False)
let respuesta = h2_nuevo.hasChildNodes();

if (respuesta) {
    document.write("El elemento tiene hijos");
} else {
    document.write("El elemento NO tiene hijos");
}

// codigo html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <title>Historia de Cofla</title>
// </head>
// <body>
//     <div class="contenedor">
//         <h2 class="h2">Un h2 común</h2>
//         <h4>Un h4 común</h4>
//         <p>Un simple párrafo</p>
//     </div>

// <script src="script.js"></script>
// </body>
// </html>
