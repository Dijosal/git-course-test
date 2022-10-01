const titulo = document.querySelector(".titulo");

// contentEditable - indica si el elemento puede ser modificable
// por el usuario (bool)
titulo.setAttribute("contentEditable", "false");

// dir - indica la direccionalidad del texto y sus valores son:
// ltr (left to right) y rtl (right to left)
titulo.setAttribute("dir", "ltr");

// hidden - indica si el elemento aún no es, o ya no es, relevante.
titulo.setAttribute("hidden", "");
titulo.removeAttribute("hidden");

// tabindex - indica si el elemento puede obtener un focus de input
titulo.setAttribute("tabindex", "1");

// title - contiene un text con información relacionada al elemento
// al que pertenece.
titulo.setAttribute("title", "hola")

// codigo para el html
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
//     <h1 class="titulo">Este es un TITULO</h1>

// <script src="script.js"></script>
// </body>
// </html>
