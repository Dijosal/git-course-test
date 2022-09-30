
class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    };

    verInfo(){
        document.write(this.info + "<br>");
    };
}


class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = raza;
    }

    ladrar() {
        alert("WooF")
    }
}


let perro = new Perro("perro", 5, "marrón", "Husky")
let gato = new Animal("gato", 2, "negro")
let pajaro = new Animal("pajaro", 1, "verde")


perro.verInfo();
gato.verInfo();
pajaro.verInfo();

perro.ladrar();
