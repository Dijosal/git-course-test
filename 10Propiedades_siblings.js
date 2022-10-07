const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");

const h2_antiguo = document.querySelector(".h2");

// .nextElementSibling - devuelve el elemento que le sigue al elemento
// que se le esta aplicando esta función.
console.log(h2_antiguo.nextElementSibling);

// .previousElementSibling - devuelve el elemento que esta antes del
// elemento al que se le esta aplicando esta función.
console.log(h2_antiguo.previousElementSibling);


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
