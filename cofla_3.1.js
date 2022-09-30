class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }

    potenciar(num, exp) {
        return num**exp
    }

    raizCuadrada(num) {
        return Math.sqrt(num);
    }

    raizCubica(num) {
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion, 5: potenciacion, 6: raiz cuadrada o 7: raiz cubica");

if (operacion == 1) {
    let numero1 = prompt("primer número para sumar");
    let numero2 = prompt("segundo número para sumar");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 2) {
    let numero1 = prompt("primer número para restar");
    let numero2 = prompt("segundo número para restar");
    resultado = calculadora.restar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 3) {
    let numero1 = prompt("primer número para dividir");
    let numero2 = prompt("segundo número para dividir");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 4) {
    let numero1 = prompt("primer número para multiplicar");
    let numero2 = prompt("segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("numero");
    let numero2 = prompt("exponente del numero");
    resultado = calculadora.potenciar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("numero a sacar la raiz cuadrada");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("numero a sacar la raiz cubica");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
}