let cadena = "cadena de prueba ";
let cadena2 = "cadena";

// concat() - junta dos o mas cadenas y retorna una nueva
resultado = cadena.concat(cadena2);
document.write(resultado + "- esto es con concat()<br>");

// startswith() y endsWith() - retorna un valor booleano dependiendo
// si la cadena1 empieza o termina con la cadena2.
resultado = cadena.startsWith(cadena2);
document.write(resultado + "- porque cadena empieza con cadena2<br>");

resultado = cadena.endsWith(cadena2);
document.write(resultado + "- porque cadena no termina con cadena2<br>");

// includes() - revisa si en la cadena1 se encuentra la cadena2 sin 
// importa si se encuentra al principio o al final y devuelve un 
// resultado booleano, y si no encuentra nada, devuelve -1
cadena = "cadena de prueba prueba ";
cadena2 = "de";
resultado = cadena.includes(cadena2);
document.write(resultado + "- porque la cadena2 si/no se encuentra en la cadena1<br>")

// indexOf() - igual que la anterior pero en vez de devolvernos un
// resultado booleano, nos devuelve el numero del index por el que
// empieza el primer caracter de la cadena2 en la cadena1 y si no
// existe, devuelve -1
cadena2 = "prueba";
resultado = cadena.indexOf(cadena2);
document.write(resultado + "- porque el primer caracter de la cadena2 empieza en el index " + resultado + " de la cadena1<br>")

// lastIndexOf() - igual que indexOf() pero en vez de devolver la
// posicion del primer caracter de la primera coincidencia, 
// devuelve la posicion del primer carácter de la ultima coindidencia

cadena2 = "prueba"
resultado = cadena.lastIndexOf(cadena2);
document.write(resultado + "- porque el primer caracter de la ultima coincidencia de la cadena2 empieza en el index " + resultado + " de la cadena1<br>")
