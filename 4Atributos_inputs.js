const input = document.querySelector(".input-normal");

// className - devuelve el nombre de la clase o el value del atributo
// class
document.write('Nombre de la Class: ' + input.className + '<br>');

// value - no indica que esta adentro del input
// document.write('Valor del input: ' + input.value + '<br>');

// type - modifica directamente el tipo de input
input.type = "text";

// accept - es lo que va a aceptar el input
input.accept = "image/gif"

// form - atributo que nos permite ejecutar un input dentro de un form

// minLength - indica cual es la cantidad minima de caracteres
input.minLength = 4;

// placeholder
input.placeholder = "hola";

// required
input.placeholder = " ";




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
//     <form id="formulario">
//         <input type="text" class="input-normal">
//     </form>
//     <input type="submit" form="formulario"><br><br>

// <script src="script.js"></script>
// </body>
// </html>
