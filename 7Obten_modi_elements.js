const titulo = document.querySelector(".titulo");


// textContent - devuelve el texto de cualquier nodo

let resultado = titulo.textContent;

alert(resultado);

// innerHTML - devuelve el contenido html de un elemento

resultado = titulo.innerHTML;

alert(resultado);

// outerHTML - devuelve el codigo HTML completo del elemento

resultado = titulo.outerHTML;

alert(resultado);

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
//     <p class="titulo">Elemento a <b>Modificar</b></p>

// <script src="script.js"></script>
// </body>
// </html>
